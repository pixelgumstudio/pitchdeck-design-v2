export const dynamic = 'force-dynamic';

import PageFile from './pageFile';

export async function generateMetadata({ params, searchParams }) {
  const city = decodeURIComponent(params.city);
  const state = typeof searchParams?.state === 'string'
    ? decodeURIComponent(searchParams.state.trim())
    : 'N/A';

  const data = {
    title: `Tattooremovalplace - Tattoo Removal near ${city} ${state}, US`,
    description: `Discover top-rated tattoo removal services near ${city} ${state}, US. Compare clinics, explore reviews, and book safe, affordable laser removal treatments with TattooRemovalPlace.`,
    url: `https://tattooremoval.com/clinic-by-city/${encodeURIComponent(city)}?state=${encodeURIComponent(state)}`,
    image: 'https://tattooremoval.com/seo-card.png',
  };



  return {
    title: data.title,
    description: data.description,
    icons: {
      icon: 'https://tattooremoval.com/icon.png',
    },
    openGraph: {
      type: 'website',
      siteName: 'Tattoo removal place',
      title: data.title,
      description: data.description,
      url: data.url,
      images: [{ url: data.image }],
    },
    twitter: {
      card: 'summary_large_image',
      site: data.url,
      title: data.title,
      description: data.description,
      images: [{ url: data.image }],
    },
    alternates: {
      canonical: data.url,
    },
  };
}

export default function Page() {
  return <PageFile />;
}
