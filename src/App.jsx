import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import PropertyList from "./components/Properties";
import { useState } from "react";


function App() {
    const [properties, setProperties] = useState(null);
  
  return (
    <div>
      <Header />
      <HeroSection properties={properties} setProperties={setProperties}/>
      <Features />
      <PropertyList properties={properties} setProperties={setProperties}/>
    </div>
  );
}

export default App;
