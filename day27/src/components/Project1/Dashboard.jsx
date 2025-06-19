import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header'));
const Sidebar = lazy(() => import('./Sidebar'));
const Content = lazy(() => import('./Content'));

const Dashboard = () => (
  <div>
    <h2>Project 1: Lazy Loaded Dashboard</h2>

    <Suspense fallback={<p>Loading Header...</p>}>
      <Header />
    </Suspense>

    <div style={{ display: 'flex' }}>
      <Suspense fallback={<p>Loading Sidebar...</p>}>
        <Sidebar />
      </Suspense>

      <Suspense fallback={<p>Loading Content...</p>}>
        <Content />
      </Suspense>
    </div>
  </div>
);

export default Dashboard;
