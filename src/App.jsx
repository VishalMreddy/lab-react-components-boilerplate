import React from "react";
import "./App.css";
import lake from "./image/lake.JPG";
import GalleryFooter from "./components/GallaryFooter";
import Header from "./components/GalleryHeader";
import Image from "./components/image";

function App() {
  return (
    <div>
      <Header />
      <div className="column">
        <Image img={lake} />
        <Image img={lake} />
        <Image img={lake} />
        <Image img={lake} />
      </div>
      {/* adding footer component */}
      <GalleryFooter />
    </div>
  );
}

export default App;
