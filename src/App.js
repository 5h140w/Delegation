import "./App.css"
import Contact from "./components/Contact/Contact";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div style={{position:"relative", overflow:"hidden"}}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Feature></Feature>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
