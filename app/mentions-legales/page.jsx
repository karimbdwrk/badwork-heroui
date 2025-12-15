import { Metadata } from "next";

export const metadata = {
	title: "Legal Notice // badwork | digital",
	description:
		"Mentions légales du site. Informations légales, éditeur, hébergement et responsabilité.",
};

export default function LegalPage() {
	return (
		<main>
			<h1>Mentions légales</h1>

			<section>
				<h2>Éditeur du site</h2>
				<p>
					Nom : <strong>Nom Prénom</strong>
					<br />
					Statut : <strong>Auto-entrepreneur</strong>
					<br />
					Adresse : <strong>Ville, Pays</strong>
					<br />
					Email :{" "}
					<a href='mailto:contact@email.com'>contact@email.com</a>
					<br />
					Téléphone : <strong>+33 X XX XX XX XX</strong>
				</p>
			</section>

			<section>
				<h2>Responsable de la publication</h2>
				<p>Nom Prénom</p>
			</section>

			<section>
				<h2>Hébergement</h2>
				<p>
					Hébergeur : <strong>Vercel Inc.</strong>
					<br />
					Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA
					<br />
					Site web :{" "}
					<a href='https://vercel.com' target='_blank' rel='noopener'>
						https://vercel.com
					</a>
				</p>
			</section>

			<section>
				<h2>Propriété intellectuelle</h2>
				<p>
					L’ensemble des contenus présents sur ce site (textes,
					images, graphismes, logo, icônes, etc.) sont la propriété
					exclusive de l’éditeur, sauf mention contraire. Toute
					reproduction, représentation ou diffusion, totale ou
					partielle, sans autorisation préalable est interdite.
				</p>
			</section>

			<section>
				<h2>Responsabilité</h2>
				<p>
					L’éditeur du site ne saurait être tenu responsable des
					erreurs ou omissions dans les informations diffusées ni de
					l’utilisation qui pourrait en être faite.
				</p>
			</section>

			<section>
				<h2>Données personnelles</h2>
				<p>
					Les données personnelles collectées via le formulaire de
					contact sont utilisées uniquement pour répondre aux
					demandes. Conformément au Règlement Général sur la
					Protection des Données (RGPD), vous disposez d’un droit
					d’accès, de rectification et de suppression de vos données
					en contactant :
					<a href='mailto:contact@email.com'>contact@email.com</a>.
				</p>
			</section>

			<section>
				<h2>Droit applicable</h2>
				<p>
					Le présent site est soumis au droit français. En cas de
					litige, les tribunaux compétents seront ceux du ressort du
					siège de l’éditeur.
				</p>
			</section>

			<p class='update'>
				Dernière mise à jour :{" "}
				<time datetime='2025-01-01'>1 janvier 2025</time>
			</p>
		</main>
	);
}
