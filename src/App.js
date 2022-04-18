import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <div>
        <Header />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/videodetail/:slug" element={<VideoDetail />} />
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
