import instance from '@/lib/axios';
import PageFile from './pageFile';

export const dynamic = 'force-dynamic';

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/[-_ ]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Correct param typing for App Router dynamic routes
export async function generateMetadata( params ){
  const decodedSlug = decodeURIComponent(params.pitch);
  const titleCasedSlug = toTitleCase(decodedSlug);

  let store = null;
  try {
    const response = await instance.get(`/pitch/user/get/pitch/${decodedSlug}`);
    store = response.data.pitchDeck;
  } catch (error) {
    console.error('Error fetching pitch deck metadata:', error);
  }

  const fallbackDescription =
    'Browse a list of free pitch deck examples from founders, Purchase a Pitch deck template for your next raise, and Hire a pitch deck designer to make a deck for you. Close funding deals with Angel investors, Filter pitch deck by industry, Raise Amount and Stage';

  const description =
    (store?.about || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${titleCasedSlug} | Pitch Deck - ${titleCasedSlug} | Pitch Deck Designers for Hire`;
  const url = `https://pitchdeck.design/pitch/${params.pitch}`;
  const image = store?.coverImageUrl;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'PitchDeck.Design',
      title,
      description,
      url,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page() {
  return <PageFile />;
}
