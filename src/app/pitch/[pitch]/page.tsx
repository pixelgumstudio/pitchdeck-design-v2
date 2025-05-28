import { getMetadataFromPitch } from '@/lib/getPitchMetadata';
import PageFile from './pageFile';


export async function generateMetadata({ params }: { params: { pitch: string } }) {
  return getMetadataFromPitch(params.pitch);
}

export default async function Page() {
  return <PageFile />;
}
