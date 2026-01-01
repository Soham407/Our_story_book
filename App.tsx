import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PreviewPage from './pages/PreviewPage';
import StoryDirector from './pages/StoryDirector';
import FlipbookEditor from './pages/FlipbookEditor';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Bookshelf from './pages/Dashboard/Bookshelf';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrderSuccess from './pages/Checkout/OrderSuccess';
import Settings from './pages/Profile/Settings';
import NotFound from './pages/NotFound';
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
          <Route path={AppRoutes.LOGIN} element={<Login />} />
          <Route path={AppRoutes.SIGNUP} element={<Signup />} />
          <Route path={AppRoutes.DASHBOARD} element={<Bookshelf />} />
          <Route path={AppRoutes.CHECKOUT} element={<CheckoutPage />} />
          <Route path={AppRoutes.ORDER_SUCCESS} element={<OrderSuccess />} />
          <Route path={AppRoutes.PROFILE} element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;