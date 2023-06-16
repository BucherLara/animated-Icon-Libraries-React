import { BurgerRotate, BurgerSwipe } from "react-icons-animated";

import { useState } from "react";
export default function ReactIcons() {
  const [isClosed, setIsClosed] = useState(false);
  const [isClosed2, setIsClosed2] = useState(false);
  return (
    <div className="wrap">
      <a
        href="https://www.npmjs.com/package/react-icons-animated?activeTab=readme"
        target="_blank"
      >
        <code>react-icons-animated</code>
      </a>
      <div className="container wrap_black">
        <button
          onClick={() => setIsClosed(!isClosed)}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "black",
            borderStyle: "none",
          }}
        >
          <BurgerRotate isClosed={isClosed} />
        </button>

        <button
          onClick={() => setIsClosed2(!isClosed2)}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "black",
            borderStyle: "none",
          }}
        >
          <BurgerSwipe isClosed={isClosed2} />
        </button>
      </div>
    </div>
  );
}
