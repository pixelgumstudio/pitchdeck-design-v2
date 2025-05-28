import { getMetadataFromPitch } from '@/lib/getPitchMetadata';
import PageFile from './pageFile';

export async function generateMetadata({ params, _parent }) {
  return getMetadataFromPitch(params.pitch);
}

export default async function Page() {
  return <PageFile />;
}
