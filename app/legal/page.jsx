import { Metadata } from "next";

export const metadata = {
	robots: {
		index: false,
		follow: false,
	},
	title: "Legal Notice // badwork | digital",
	description:
		"Mentions légales du site. Informations légales, éditeur, hébergement et responsabilité.",
};

export default function LegalPage() {
	return (
		<main className='legal-page max-w-3xl mx-auto p-6 pt-24 pb-24'>
			<h1 className='text-3xl font-bold mb-6'>Mentions légales</h1>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>
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
					<a href='mailto:contact@badwork.io'>contact@badwork.io</a>
				</p>
			</section>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>
					Responsable de la publication
				</h2>
				<p>
					Le responsable de la publication est le représentant légal
					de la société <strong>BADWORK</strong>.
				</p>
			</section>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>Hébergement</h2>
				<p>
					Hébergeur : <strong>Heroku, Inc.</strong>
					<br />
					Adresse : 650 7th Street, San Francisco, CA 94103, USA
					<br />
					Site web :{" "}
					<a
						href='https://www.heroku.com'
						target='_blank'
						rel='noopener'>
						https://www.heroku.com
					</a>
				</p>
			</section>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>
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
				<h2 className='text-xl font-semibold mt-6 mb-4'>
					Responsabilité
				</h2>
				<p>
					La société BADWORK ne saurait être tenue responsable des
					erreurs, omissions ou d’une indisponibilité temporaire du
					site.
				</p>
			</section>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>
					Données personnelles
				</h2>
				<p>
					Les données personnelles collectées via le formulaire de
					contact sont utilisées uniquement pour répondre aux demandes
					reçues. Aucune donnée n’est cédée à des tiers.
					<br />
					Conformément au RGPD, vous disposez d’un droit d’accès, de
					rectification et de suppression de vos données en contactant
					: <a href='mailto:contact@badwork.io'>contact@badwork.io</a>
					.
				</p>
			</section>
			<section>
				<h2 className='text-xl font-semibold mt-6 mb-4'>
					Droit applicable
				</h2>
				<p>Le présent site est soumis au droit français.</p>
			</section>
			<p className='update'>
				Dernière mise à jour :{" "}
				<time dateTime='2026-01-02'>2 janvier 2026</time>
			</p>
		</main>
	);
}
