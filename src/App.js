import Header from "./Components/header";
import Home from "./Components/homepage";
import Discover from "./Components/discover";
import Shopping from "./Components/shopping";
import Cart from "./Components/shopping/cart";
import Funzone from "./Components/funzone";
import TVDQuiz from "./Components/funzone/tvdQuiz";
import OriginalsQuiz from "./Components/funzone/originalsQuiz";
import LegaciesQuiz from "./Components/funzone/legaciesQuiz";
import TeenwolfQuiz from "./Components/funzone/teenwolfQuiz";
import TwilightQuiz from "./Components/funzone/twilightQuiz";
import ContactUs from "./Components/contactus";
import Footer from "./Components/footer";
import { CartProvider } from "react-use-cart";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/funzone" element={<Funzone />} />
          <Route exact path="/OriginalsQuiz" element={<OriginalsQuiz />} />
          <Route exact path="/TVDQuiz" element={<TVDQuiz />} />
          <Route exact path="/legaciesQuiz" element={<LegaciesQuiz />} />
          <Route exact path="/teenwolfQuiz" element={<TeenwolfQuiz />} />
          <Route exact path="/twilightQuiz" element={<TwilightQuiz />} />
          <Route exact path="/shopping" element={<Shopping />} />
          <Route exact path="/shopping-cart" element={<Cart />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route path="/" element={<Navigate replace to="home" />} />
        </Routes>
        <Footer />
      </CartProvider>
    </main>
  );
}

export default App;
