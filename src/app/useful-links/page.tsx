
import { Metadata } from "next";
import PageFile from "./pageFile";

export const metadata: Metadata = {
  
  title: 'Pitchdeck Design Useful Links',
  description: 'Browse free pitch deck examples, purchase pitch deck templates, and hire top pitch deck designers. Ideal for startups raising funds.',
  icons: {
    icon: '/links/pitchdeck.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Pitchdeck Design",
    title: 'Pitchdeck Design Useful Links',
    description: 'Browse free pitch deck examples, purchase pitch deck templates, and hire top pitch deck designers. Ideal for startups raising funds.',
    url: 'https://pitchdeck.design/useful-links',
    images: [{
      url: '/links/pitchdeck.png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: 'https://pitchdeck.design/useful-links',
    title: 'Pitchdeck Design Useful Links',
    description: 'Browse free pitch deck examples, purchase pitch deck templates, and hire top pitch deck designers. Ideal for startups raising funds.',
    images: [{
      url: '/links/pitchdeck.png',
    }],
  },
};


const Page = () => {

return <PageFile />
};

export default Page;