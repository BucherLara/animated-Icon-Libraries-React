import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

export default function Lordicon() {
  return (
    <div className="wrap">
      <a href="https://lordicon.com/docs/web" target="_blank">
        <code>Lordicon</code>
      </a>
      <div className="container">
        <lord-icon
          src="https://cdn.lordicon.com/tyvtvbcy.json"
          trigger="hover"
          colors="primary:#9ce5f4"
          style={{
            width: "50px",
            height: "50px",
          }}
        ></lord-icon>

        <lord-icon
          src="https://cdn.lordicon.com/rzsdhkun.json"
          trigger="hover"
          colors="primary:#f49cc8"
          state="hover"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>

        <lord-icon
          src="https://cdn.lordicon.com/bmnlikjh.json"
          trigger="loop"
          delay="500"
          state="hover-1"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </div>
    </div>
  );
}
