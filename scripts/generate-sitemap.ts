import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { Pitch, Tag, Template } from '../src/store/types';
import instance from '../src/lib/axios';

const BASE_URL = 'https://www.pitchdeck.design';

const staticRoutes = [
  '/',
  '/pitchdecks',
  '/make-deck',
  '/blog',
  '/template',
  '/generate-terms',
  '/generate-policy'
];

async function loadPitches(): Promise<string[]> {
  const res = await instance.get('/pitch/filter?tag=All');
  return res.data.map((pitch: Pitch) => `/pitch/${pitch.title}`);
}

async function loadTemplates(): Promise<string[]> {
  const res = await instance.get('/templates/getTemplates');
  return res.data.map((template: Template) => `/template/${template.name}`);
}

async function loadTags(): Promise<string[]> {
  const res = await instance.get('/pitch/tags');
  return res.data.map((tag: Tag) => `/tag/${tag.tag}`);
}

async function loadCategories(): Promise<string[]> {
  const categories = [
    'seed-round-pitch-deck',
    'series-a-deck',
    'pre-seed-pitch-deck'
  ]; // Add dynamically from backend if available
  return categories.map((cat) => `/category/${cat}`);
}

async function generateSitemap() {
  const [pitches, templates, tags, categories] = await Promise.all([
    loadPitches(),
    loadTemplates(),
    loadTags(),
    loadCategories()
  ]);

  const allRoutes = [
    ...staticRoutes,
    ...pitches,
    ...templates,
    ...tags,
    ...categories
  ];

  const links = allRoutes.map((url) => ({
    url,
    changefreq: 'weekly',
    priority: url === '/' ? 1.0 : 0.8
  }));

  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(Readable.from(links).pipe(sitemapStream)).then((data) => data.toString());

  const writeStream = createWriteStream('public/sitemap.xml');
  writeStream.write(xml);
  writeStream.end();

  console.log('✅ Sitemap generated: public/sitemap.xml');
}

generateSitemap().catch(console.error);
