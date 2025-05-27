import { Metadata } from "next";
import { PageInterface } from "../../store/types"
import PageFile from './pageFile';
const data: PageInterface = {
  title:
    "Pitch Deck Design Agency for Startups & Founders | Pitchdeck.design",
  description:
    "At Pitchdeck.design, we create stunning, investor-ready pitch decks that help startups stand out and secure funding. Whether you're pre-seed or Series A, our expert design team builds decks that tell your story, impress VCs, and drive results.",
  url: "https://pitchdeck.design/make-deck",
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
