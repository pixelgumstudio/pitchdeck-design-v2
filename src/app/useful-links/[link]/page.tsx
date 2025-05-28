export const dynamic = 'force-dynamic';

import PageFile from './pageFile';
import { websiteLinks } from "../../../lib/links";
import { createSlug } from "../../../component/slug";

type WebsiteLink = {
  title: string;
  image: string;
  url: string;
  description: string;
  about: string;
};
type Props = {
  params: { link: string };
};


function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[-_ ]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props) {
    const { link } = await params;

 const currentWebsite = websiteLinks.find(
    (website: WebsiteLink) => createSlug(website.title) === link
  );


  if (!currentWebsite) {
    return {
      title: 'Product not found',
      description: 'Sorry, the product you’re looking for does not exist.',
    };
  }

  const titleCasedSlug = toTitleCase(currentWebsite.title);
  const category = 'Startup';
  const tag = 'Tech';
  const image = currentWebsite?.image;
  const url = `${currentWebsite.url}`;
  const fallbackDescription =
    'Browse free pitch deck examples, purchase pitch deck templates, and hire top pitch deck designers. Ideal for startups raising funds.';
  const description =
    (currentWebsite?.description).slice(0, 150).trim().replace(/\s+\S*$/, '') + '...';

  const title = `${titleCasedSlug} Pitch Deck – ${category} | PitchDeck.Design`;

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title || titleCasedSlug,
    "image": image,
    "description": description || fallbackDescription,
    "brand": {
      "@type": "Organization",
      "name": "Pixelgum Studio,"
    },
    "url": url,
    "category": category,
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
      siteName: 'Tattoo Removal',
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
