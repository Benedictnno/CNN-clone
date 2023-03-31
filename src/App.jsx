import './App.css'
import Nav from './Componets/NavBar/Nav'
import Tranding from './Componets/Trending/Tranding'
import News from './Componets/News/News';
// import { useScroll, motion, useMotionValueEvent } from "framer-motion";
function App() {
  

  return (
    <>
      <Nav />
      <div className="body_container">
        <Tranding />
        <News />
      </div>
    </>
  );
}

export default App
