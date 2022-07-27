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
import ArticleHeadlessRightChoice from './article/ArticleHeadlessRightChoice'
import ArticleWebhook from './article/ArticleWebhook'
import Klinkhoff from './Klinkhoff'
import CaseNovaBloom from './CaseNovaBloom';
import About from './About'
import Services from './Services';
import ShopifyDeveloperPage from './ShopifyDeveloperPage';
import EmailMarketing from './EmailMarketing';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Lander2 />} path="/" exact />
          <Route element={<Earnings /> } path="/earnings" />
          <Route element={<Privacy />} path="/privacy-policy" />
          <Route element={<Terms />} path="/terms" />
          <Route element={<Klinkhoff />} path="/klinkhoff" />
          <Route element={<CaseNovaBloom/>} path="/novabloom" />
          <Route element={<Contact />} path="/shopify/contact" />
          <Route element={<ShopifyDeveloperPage />} path="/shopify" />
          <Route element={<EmailMarketing />} path="/shopify/email-marketing"  />
          <Route element={<Article />} path="/blog/shopify-20" />
          <Route element={<ArticleWebhook />} path="/blog/shopify-webhook" />
          <Route element={<ArticleHeadlessRightChoice />} path="/blog/headless-right-choice"/>
          <Route element={<About />} path="/shopify/about" />
          <Route element={<Services />} path="/shopify/services" />
        </Routes>
    </div>
  );
}

export default App;
