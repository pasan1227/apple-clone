import Hero from './components/Hero';
import Hightlights from './components/Hightlights';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Features from './components/Features';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
