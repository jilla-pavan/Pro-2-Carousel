import "./App.css";
import { imgArray } from "./utils/constants";
import img1 from "./images/1.png";
import { useState } from "react";
function App() {
  const [activeImage, setActiveImage] = useState(0);
  const clickHandlerNext = () => {
    setActiveImage((activeImage + 1) % imgArray.length);
  };
  const clickHandlerPre = () => {
    activeImage === 0
      ? setActiveImage(imgArray.length - 1)
      : setActiveImage(activeImage - 1);
  };

  return (
    <div className="flex items-center justify-center mt-24">
      <button
        className="mx-2 border border-black py-2 rounded-full font-bold hover:bg-green-300 w-32"
        onClick={() => {
          clickHandlerPre();
        }}
      >
        previous
      </button>
      <img
        className="w-[700px] rounded-xl border border-black "
        src={imgArray[activeImage]}
      />
      <button
        className="mx-2 border border-black py-2 rounded-full font-bold hover:bg-green-300 w-32"
        onClick={() => {
          clickHandlerNext();
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
