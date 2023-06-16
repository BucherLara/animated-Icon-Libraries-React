import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
export default function FontAwesome() {
  return (
    <div className="wrap">
      <a
        href="https://fontawesome.com/docs/web/use-with/react/add-icons"
        target="_blank"
      >
        <code>FontAwesomeIcon</code>
      </a>
      <div className="container">
        <FontAwesomeIcon icon={faHandshake} shake size="3x" />
        <FontAwesomeIcon icon={faEnvelope} size="3x" spin />
        <FontAwesomeIcon
          icon={faHeart}
          size="3x"
          beat
          fade
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
}
