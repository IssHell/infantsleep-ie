// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
          <title>INFANT SLEEP | Gentle Support for Families and Growing Minds</title>
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
          </style>
      </Head>

      <HomeView />
    </>
  );
}
