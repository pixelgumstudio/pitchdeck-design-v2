import { Metadata } from "next";
import { PageInterface } from "../../store/types"
import PageFile from './pageFile';
const data: PageInterface = {
  title:
    "Terms Generator | Pitchdeck design",
  description:
    "This is a directory of over 500+ carefully curated pitch decks, divided into different categories depending on the type of pitch deck you are looking to design or draw inspiration from.",
  url: "https://pitchdeck.design/generate-terms",
  image: "https://pitchdeck.design/seo-card.png",
};
export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  icons: {
    icon: data.image, // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "pitchdeck.design",
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: data.url,
    title: data.title,
    description: data.description,
    images: [
      {
        url: data.image,
      },
    ],
  },
};

export default function Page() {
  return <PageFile />;
}
