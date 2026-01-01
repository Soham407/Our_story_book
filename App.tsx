import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PreviewPage from './pages/PreviewPage';
import StoryDirector from './pages/StoryDirector';
import FlipbookEditor from './pages/FlipbookEditor';
import { AppRoutes } from './types';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoutes.HOME} element={<LandingPage />} />
          <Route path={AppRoutes.PREVIEW} element={<PreviewPage />} />
          <Route path={AppRoutes.DIRECTOR} element={<StoryDirector />} />
          <Route path={AppRoutes.EDITOR} element={<FlipbookEditor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;