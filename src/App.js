import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Lander from './Lander'
import Lander2 from './Lander2';
import Earnings from './Earnings'
import Privacy from './Privacy'
import Terms from './Terms'
import FAQ from './FAQ'
import Contact from './Contact'
import Freelance from './Freelance'
import Article from './article/Article'
import ArticleHeadlessRightChoice from './article/ArticleHeadlessRightChoice'
import ArticleWebhook from './article/ArticleWebhook'
import Klinkhoff from './Klinkhoff'
import CaseNovaBloom from './CaseNovaBloom';
import About from './About'
import Services from './Services';
import ShopifyDeveloperPage from './ShopifyDeveloperPage';
import Thanks from './Thanks'
import PageNotFound from './404';
import EmailMarketing from './EmailMarketing';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Freelance />} path="/" exact />
          <Route element={<Earnings /> } path="/earnings" />
          <Route element={<Thanks /> } path="/thanks" />
          <Route element={<Privacy />} path="/privacy-policy" />
          <Route element={<FAQ />} path="/faq" />
          <Route element={<Terms />} path="/terms" />
          <Route element={<CaseNovaBloom/>} path="/novabloom" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<EmailMarketing />} path="/shopify/email-marketing"  />
          <Route element={<Article />} path="/blog/shopify-20" />
          <Route element={<ArticleWebhook />} path="/blog/shopify-webhook" />
          <Route element={<ArticleHeadlessRightChoice />} path="/blog/headless-right-choice"/>
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
