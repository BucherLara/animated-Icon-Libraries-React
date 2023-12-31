import FontAwesome from "./components/FontAwesome";
import ReactIcons from "./components/ReactIcons";
import UseAnimations from "./components/UseAnimations";
import LottieFiles from "./components/LottieFiles";
import { useState } from "react";
import Lordicon from "./components/Lordicon";

function App() {
  const [selectedLibrary, setselectedLibrary] = useState(true);

  return (
    <div className="wrap">
      <div>
        <h2>Best Feather-inspired animated icon libraries for React</h2>
        <ol>
          <li onClick={() => setselectedLibrary("FontAwesome")}>
            Font Awesome
          </li>

          <li onClick={() => setselectedLibrary("ReactIcons")}>
            React Icons Animated
          </li>
          <li onClick={() => setselectedLibrary("UseAnimations")}>
            React UseAnimations Icons
          </li>
          <li onClick={() => setselectedLibrary("LottieFiles")}>LottieFiles</li>
          <li onClick={() => setselectedLibrary("Lordicon")}>Lordicon</li>
        </ol>

        {selectedLibrary === "FontAwesome" && <FontAwesome />}
        {selectedLibrary === "Lordicon" && <Lordicon />}
        {selectedLibrary === "ReactIcons" && <ReactIcons />}
        {selectedLibrary === "UseAnimations" && <UseAnimations />}
        {selectedLibrary === "LottieFiles" && <LottieFiles />}
      </div>
    </div>
  );
}

export default App;
