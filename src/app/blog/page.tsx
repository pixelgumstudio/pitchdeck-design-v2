import { Metadata } from "next";
import { PageInterface } from "../../store/types"
import PageFile from './pageFile';
const data: PageInterface = {
  title:
    "Pitch deck examples from founders that has raised $100b",
  description:
    "Browse top pitch deck examples that helped raise $100B+. Get inspired and purchase templates to create your own winning pitch deck.",
  url: "https://pitchdeck.design/pitchdecks",
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
