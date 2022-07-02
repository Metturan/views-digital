import {useRef} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Lander from './Lander'
import Lander2 from './Lander2';
import Earnings from './Earnings'
import Privacy from './Privacy'
import Terms from './Terms'
import Contact from './Contact'
import Article from './article/Article'
import PricingConfig from './PricingConfig';
import ArticleWebhook from './article/ArticleWebhook'
import Klinkhoff from './Klinkhoff'
import ShopifyDeveloperPage from './ShopifyDeveloperPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Lander2 />} path="/" exact />
          <Route element={<PricingConfig />} path="/pricing-config" />
          <Route element={<Earnings /> } path="/earnings" />
          <Route element={<Privacy />} path="/privacy-policy" />
          <Route element={<Terms />} path="/terms" />
          <Route element={<Klinkhoff />} path="/klinkhoff" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<ShopifyDeveloperPage />} path="/shopify" />
          <Route element={<Article />} path="/blog/shopify-20" />
          <Route element={<ArticleWebhook />} path="/blog/shopify-webhook" />
        </Routes>

    </div>
  );
}

export default App;
