import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header />
         <Routes>
           <Route path="/" element={<HomePage />} />
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
