import PageFile from './pageFile';
import { fetchPagesBySlug } from '@/lib/fetchData';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { pitch: string };
  searchParams: { [key: string]: string };
};

export const dynamic = 'force-dynamic';

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[-_ ]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props, 
  _parent: ResolvingMetadata
): Promise<Metadata> {
    const { pitch } = await params;

  const store = await fetchPagesBySlug(pitch);

  if (!store) {
    return {
      title: 'Product not found',
      description: 'Sorry, the product you’re looking for does not exist.',
    };
  }

  const titleCasedSlug = toTitleCase(params.pitch);
  const category = store?.category || 'Startup';
  const tag = store?.tag || 'Tech';
  const image = store?.coverImageUrl;
  const url = `https://pitchdeck.design/pitch/${params.pitch}`;
  const fallbackDescription =
    'Browse free pitch deck examples, purchase pitch deck templates, and hire top pitch deck designers. Ideal for startups raising funds.';
  const description =
    (store?.about || fallbackDescription).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${titleCasedSlug} Pitch Deck – ${category} | PitchDeck.Design`;

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": store.title || titleCasedSlug,
    "image": image,
    "description": store.about || fallbackDescription,
    "brand": {
      "@type": "Organization",
      "name": "PitchDeck.Design"
    },
    "url": url,
    "category": category,
    "keywords": tag,
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "USD",
      "price": store?.amountRaised || "0.00",
      "availability": "https://schema.org/InStock"
    }
  };

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
    other: {
      // Inject JSON-LD into <head>
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function Page({ params, searchParams }: Props) {
  return <PageFile title={params.pitch} />;
}
