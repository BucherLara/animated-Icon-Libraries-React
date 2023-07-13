import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import navigation from "../navigation-icon.json";
import trash from "../trash-icon.json";
import loading from "../loading-icon.json";

export default function LottieFiles() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="wrap">
      <a href="https://github.com/LottieFiles/lottie-react" target="_blank">
        <code>LottieFiles</code>
      </a>
      <div className="container">
        <Player
          lottieRef={(isClicked) => setIsClicked({ lottie: !isClicked })}
          loop={true}
          autoplay={true}
          controls={true}
          src={navigation}
          style={{ height: "50px", width: "50px" }}
        ></Player>
        <Player
          autoplay={false}
          hover={true}
          src={trash}
          style={{ height: "50px", width: "50px" }}
        ></Player>
        <Player
          loop={true}
          autoplay={true}
          controls={true}
          src={loading}
          style={{ height: "50px", width: "50px" }}
        ></Player>
      </div>
    </div>
  );
}
