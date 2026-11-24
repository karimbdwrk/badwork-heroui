import { Metadata } from "next";

export const metadata = {
	robots: {
		index: false,
		follow: false,
	},
	title: "Mentions légales",
	description:
		"Mentions légales du site. Informations légales, éditeur, hébergement et responsabilité.",
};

export default function LegalPage() {
	return (
		<article className='legal-page max-w-3xl mx-auto px-5 sm:px-8 pt-28 pb-32 text-sm sm:text-base leading-relaxed [&_p]:max-w-[68ch] [&_p]:text-bw-fg/85 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-bw-line hover:[&_a]:decoration-bw-fg'>
			<p className='font-mono text-xs text-bw-muted'>Légal</p>
			<h1 className='mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter mb-10'>Mentions légales</h1>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Éditeur du site
				</h2>
				<p>
					Raison sociale : <strong>BADWORK</strong>
					<br />
					Statut :{" "}
					<strong>Société par Actions Simplifiée (SAS)</strong>
					<br />
					SIRET : <strong>878 860 543 00015</strong>
					<br />
					Localisation : <strong>Hauts-de-Seine (92), France</strong>
					<br />
					Email :{" "}
					<a href='mailto:contact@badwork.fr'>contact@badwork.fr</a>
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Responsable de la publication
				</h2>
				<p>
					Le responsable de la publication est le représentant légal
					de la société <strong>BADWORK</strong>.
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>Hébergement</h2>
				<p>
					Hébergeur : <strong>Vercel Inc.</strong>
					<br />
					Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA
					<br />
					Site web :{" "}
					<a
						href='https://vercel.com'
						target='_blank'
						rel='noopener'>
						https://vercel.com
					</a>
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Propriété intellectuelle
				</h2>
				<p>
					L’ensemble des contenus présents sur ce site (textes,
					visuels, logos, éléments graphiques, structure) est la
					propriété exclusive de la société BADWORK, sauf mention
					contraire. Toute reproduction ou représentation, totale ou
					partielle, sans autorisation préalable est interdite.
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Responsabilité
				</h2>
				<p>
					La société BADWORK ne saurait être tenue responsable des
					erreurs, omissions ou d’une indisponibilité temporaire du
					site.
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Données personnelles
				</h2>
				<p>
					Les données personnelles collectées via le formulaire de
					contact sont utilisées uniquement pour répondre aux demandes
					reçues. Aucune donnée n’est cédée à des tiers.
					<br />
					Conformément au RGPD, vous disposez d’un droit d’accès, de
					rectification et de suppression de vos données en contactant
					: <a href='mailto:contact@badwork.fr'>contact@badwork.fr</a>
					.
				</p>
			</section>
			<section>
				<h2 className='text-lg font-medium tracking-tight mt-10 mb-3'>
					Droit applicable
				</h2>
				<p>Le présent site est soumis au droit français.</p>
			</section>
			<p className='update mt-12 font-mono text-xs text-bw-muted'>
				Dernière mise à jour :{" "}
				<time dateTime='2026-11-02'>2 novembre 2026</time>
			</p>
		</article>
	);
}
