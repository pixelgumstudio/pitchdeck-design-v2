import { getMetadataFromPitch } from '@/lib/getPitchMetadata';
import PageFile from './pageFile';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: { pitch: string } },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent?: ResolvingMetadata
): Promise<Metadata> {
  return getMetadataFromPitch(params.pitch);
}

export default async function Page() {
  return <PageFile />;
}
