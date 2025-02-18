import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Loader from "./components/SpinnerLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show the loader while loading is true
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
