import { Metadata } from "next";
import { PageInterface } from "../../store/types"
import PageFile from './pageFile';
const data: PageInterface = {
  title:
    "Pitch Deck Template Used to Raise $100B+ | Pitchdeck design",
  description:
    "Download the pitch deck template that helped founders raise $100B+. Designed to impress investors and win funding. Editable, proven, and startup-ready.",
  url: "https://pitchdeck.design/template",
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
