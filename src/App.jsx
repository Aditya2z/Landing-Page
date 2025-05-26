import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import PropertyList from "./components/Properties";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <PropertyList />
    </div>
  );
}

export default App;
