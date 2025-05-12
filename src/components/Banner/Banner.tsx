import { useState } from "react";
import ukulele from "../../assets/my_pictures/chosen/ukulele_3.jpg";
import happy from "../../assets/my_pictures/chosen/happy_1.jpg";
import mountain from "../../assets/my_pictures/chosen/mountain_1.jpg";
import angry from "../../assets/my_pictures/chosen/angry_1.jpg";
import lighthouse from "../../assets/my_pictures/chosen/lighthouse_edit_1.jpg";
import motorcycle from "../../assets/my_pictures/chosen/motorcycle_1.jpg";
import "./Banner.scss";

const Banner = () => {
  const pictures: string[] = [ukulele, happy, mountain, angry, lighthouse, motorcycle];
  const traits: string[] = [
    "project hasn't started yet",
    "new project starts",
    "difficulties show up",
    "work doesn't get done",
    "project turns out to be bigger than expected",
    "the project ends and the ride begins.",
  ];

  const [index, setIndex] = useState<number>(0);

  function getNextPicture() {
    if (index !== pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function getPreviousPicture() {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  }

  return (
    <div className="banner-div">
      <div className="banner-box">
        <div className="pictures-box">
          <div className="banner-placeholder" onClick={getPreviousPicture}>
            <i className="fas fa-angle-left"></i>
          </div>
          <img
            key={pictures[index]}
            src={pictures[index]}
            className="banner-pic"
            id={`banner-${index}`}
            alt="Peace pic"
          />
          <div className="banner-placeholder" onClick={getNextPicture}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <p className="banner-text">
          Me when {" "}
          <b>{traits[index]}</b>
        </p>
      </div>
    </div>
  );
};
export default Banner;
