// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { ComingSoonView } from 'src/sections/status/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Coming Soon | INFANT SLEEP</title>
      </Head>

        <ComingSoonView />
    </>
  );
}
