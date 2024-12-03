import './index.css';
import ItemList from "./component/product"
import ProductHeader from './component/header';
import HomePage from './component/homePage';
import AboutPage from './component/about';
import Ikea from './component/ikea';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { CounterProvider } from './utils/Context';
function App() {
  return (
    <CounterProvider>
      <Router>
        <ProductHeader />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={< ItemList />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ikea" element={<Ikea />} />
          </Routes>
        </main>
      </Router>
    </CounterProvider>
  );
}

export default App;
