import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";
//import { GlobalProvider } from './context/GlobalState';
//import EditContent from './components/EditContent';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videodetail/:id" element={<VideoDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
