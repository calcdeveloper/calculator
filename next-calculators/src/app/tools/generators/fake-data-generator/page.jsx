import FakeDataGeneratorClient from './FakeDataGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Fake Data Generator | Create JSON, CSV, SQL Mock Data',
  description: 'Instantly generate thousands of rows of realistic dummy data. Export structured profiles, names, addresses, and emails into JSON, CSV, or SQL formats.',
  path: '/tools/generators/fake-data-generator',
  keywords: ['fake data generator', 'mock data generator', 'dummy json', 'generate csv data', 'sql mock data'],
});

export default function FakeDataGeneratorPage() {
  return <FakeDataGeneratorClient />;
}
