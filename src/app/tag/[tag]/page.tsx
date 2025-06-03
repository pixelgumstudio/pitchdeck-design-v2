export const dynamic = 'force-dynamic';

import { tags } from '@/lib/category';
import PageFile from './pageFile';

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const tag = params.tag;

   const found = tags.find(cat => cat.tag.toLowerCase() === tag.replace(/-/g, ' '));

  const titleCasedSlug = found?.title;

  const title = titleCasedSlug || 'Tech';
  const image = `https://pitchdeck.design/card.jpg`;
  const url = `https://pitchdeck.design/tag/${tag}`;
 
  const description = found?.desc.slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';


  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "image": image,
    "description": description,
    "brand": {
      "@type": "Organization",
      "name": "PitchDeck.Design"
    },
    "url": url,
    "category": found?.tag,
    "keywords": tag,
    "offers": {
      "@type": "Offer",
      "url": url,
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
export default function Page() {
  return <PageFile />;
}
