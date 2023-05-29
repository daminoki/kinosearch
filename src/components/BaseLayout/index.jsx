import React from 'react';

import Header from '../Header';
import Nav from '../Nav';

function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main className="page">
        <Nav />
        <div className="page__column">
          {children}
        </div>
      </main>
    </>
  );
}

export default BaseLayout;