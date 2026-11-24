import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactConfirmationEmail from '../../emails/ContactConfirmationEmail';
import ContactOwnerEmail from '../../emails/ContactOwnerEmail';
import { CONTACT_SUBJECTS } from '@/config/contact';

const FROM = 'BADWORK <contact@badwork.fr>';
// Destinataire des demandes : fixé côté serveur, jamais fourni par le navigateur
const OWNER_EMAIL = process.env.CONTACT_TO || 'karim@badwork.fr';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Mêmes règles que le formulaire, plus des longueurs max : une requête peut
// arriver ici sans passer par le site
function validate(body: unknown): ContactInput | null {
  if (!body || typeof body !== 'object') return null;
  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== 'string' || typeof email !== 'string') return null;
  if (typeof subject !== 'string' || typeof message !== 'string') return null;

  const clean = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  };

  if (clean.name.length < 2 || clean.name.length > 100) return null;
  if (clean.email.length > 254 || !EMAIL_RE.test(clean.email)) return null;
  if (!CONTACT_SUBJECTS.includes(clean.subject)) return null;
  if (clean.message.length < 30 || clean.message.length > 5000) return null;

  return clean;
}

export async function POST(req: Request) {
  // Créé à la requête et pas au chargement du module : sans clé, le build plantait
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY manquante');
    return NextResponse.json(
      { success: false, error: 'Email service not configured' },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  let input: ContactInput | null;
  try {
    input = validate(await req.json());
  } catch {
    input = null;
  }
  if (!input) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = input;

  try {
    // La demande doit arriver : si cet envoi échoue, on renvoie une erreur
    const owner = await resend.emails.send({
      from: FROM,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${name} — ${subject}`,
      react: ContactOwnerEmail({ name, email, subject, message }),
    });

    if (owner.error) {
      console.error('Envoi au propriétaire échoué :', owner.error);
      return NextResponse.json(
        { success: false, error: owner.error },
        { status: 502 }
      );
    }

    // La confirmation est secondaire : un échec ne fait pas échouer la demande
    const confirmation = await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Confirmation de réception — BADWORK',
      react: ContactConfirmationEmail({ name, email, subject, message }),
    });

    if (confirmation.error) {
      console.error('Confirmation échouée :', confirmation.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
