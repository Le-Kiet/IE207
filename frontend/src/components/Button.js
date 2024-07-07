import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaStickyNote,
  FaBook,
  FaLink,
  FaCheck,
  FaVolumeUp,
  FaStar,
  FaLightbulb,
  FaPlay,
  FaRandom,
  FaArrowRight,
  FaArrowLeft,
  FaCog,
  FaExpand,
  FaShare,
  FaCopy,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Button.css";
function Button({ content, iconType, buttonType, onClick }) {
  let icon = null;

  if (iconType === "google") {
    icon = <FaGoogle></FaGoogle>;
  } else if (iconType === "apple") {
    icon = <FaApple></FaApple>;
  } else if (iconType === "facebook") {
    icon = <FaFacebook></FaFacebook>;
  } else if (iconType === "instagram") {
    icon = <FaInstagram></FaInstagram>;
  } else if (iconType === "youtube") {
    icon = <FaYoutube></FaYoutube>;
  } else if (iconType === "twitter") {
    icon = <FaTwitter></FaTwitter>;
  } else if (iconType === "tiktok") {
    icon = <FaTiktok></FaTiktok>;
  } else if (iconType === "stickynote") {
    icon = <FaStickyNote></FaStickyNote>;
  } else if (iconType === "book") {
    icon = <FaBook></FaBook>;
  } else if (iconType === "check") {
    icon = <FaCheck></FaCheck>;
  } else if (iconType === "link") {
    icon = <FaLink></FaLink>;
  } else if (iconType === "volumeup") {
    icon = <FaVolumeUp></FaVolumeUp>;
  } else if (iconType === "star") {
    icon = <FaStar></FaStar>;
  } else if (iconType === "play") {
    icon = <FaPlay></FaPlay>;
  } else if (iconType === "random") {
    icon = <FaRandom></FaRandom>;
  } else if (iconType === "arrowright") {
    icon = <FaArrowRight></FaArrowRight>;
  } else if (iconType === "arrowleft") {
    icon = <FaArrowLeft></FaArrowLeft>;
  } else if (iconType === "cog") {
    icon = <FaCog></FaCog>;
  } else if (iconType === "lightbulb") {
    icon = <FaLightbulb></FaLightbulb>;
  } else if (iconType === "expand") {
    icon = <FaExpand></FaExpand>;
  } else if (iconType === "share") {
    icon = <FaShare></FaShare>;
  } else if (iconType === "copy") {
    icon = <FaCopy></FaCopy>;
  } else if (iconType === "ellipsisv") {
    icon = <FaEllipsisV></FaEllipsisV>;
  } else if (iconType === "starborder") {
    icon = <StarBorderIcon className="larger-icon" />;
  } else if (iconType === "trash") {
    icon = <FaTrash />;
  } else icon = null;
  let buttonClassName = null;
  if (buttonType === "signup-button") {
    buttonClassName = "signup-button";
  } else if (buttonType === "had-account") {
    buttonClassName = "had-account";
  }
  return (
    <div
      // href="null"
      className={`login-signup-button ${buttonClassName}`}
      onClick={onClick}
    >
      <div className="button">
        <div className="button-icon">{icon}</div>
        <div className="button-content">{content}</div>
      </div>
    </div>
  );
}

export default Button;
