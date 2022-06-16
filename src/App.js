import "./App.css"
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div style={{position:"relative", overflow:"hidden"}}>
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
};

export default App;
