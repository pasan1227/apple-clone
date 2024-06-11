import Hero from './components/Hero';
import Hightlights from './components/Hightlights';
import Navbar from './components/Navbar';
import Model from './components/Model';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
