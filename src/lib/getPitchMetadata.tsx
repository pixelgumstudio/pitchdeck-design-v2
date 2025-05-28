// lib/getPitchMetadata.ts
import instance from '@/lib/axios';
import type { Metadata } from 'next';
import { Pitch } from '@/store/types';

export async function getMetadataFromPitch(slug: string): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(slug);
  const titleCased = decodedSlug
    .toLowerCase()
    .split(/[-_ ]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  let store: Pitch | null = null;
  try {
    const response = await instance.get(`/pitch/user/get/pitch/${decodedSlug}`);
    store = response?.data?.pitchDeck || null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('getMetadataFromPitch error:', err?.response?.data || err?.message || err);
  }

  const fallbackDescription =
    'Explore winning pitch decks, download templates, and hire designers. Trusted by founders who’ve raised $100M+.';
  const description =
    (store?.about || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';
  const image = store?.coverImageUrl || 'https://pitchdeck.design/default.jpg';
  const url = `https://pitchdeck.design/pitch/${slug}`;
  const title = `${titleCased} | Pitch Deck Examples & Designers - PitchDeck.Design`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'PitchDeck.Design',
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image }],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
