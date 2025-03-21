import "./AboutMeBox.scss";

const AboutMeBox = (props: {
  skillsSectionId: string | URL | undefined;
  languagesSectionId: string | URL | undefined;
  experienceSectionId: string | URL | undefined;
  educationSectionId: string | URL | undefined;
  hobbiesSectionId: string | URL | undefined;
}) => {
  return (
    <div className="about-me-boxes">
      <div className="row">
      <div
          className="about-me-box"
          id="skills-box"
          onClick={() => window.open("#" + props.skillsSectionId, "_self")}
        >
          Skills
        </div>
        <div
          className="about-me-box"
          id="experience-box"
          onClick={() => window.open("#" + props.experienceSectionId, "_self")}
        >
          Experience
        </div> 
        <div
          className="about-me-box"
          id="languages-box"
          onClick={() => window.open("#" + props.languagesSectionId, "_self")}
        >
          Languages
        </div>   
      </div>


      <div className="row">
        <div
          className="about-me-box"
          id="education-box"
          onClick={() => window.open("#" + props.educationSectionId, "_self")}
        >
          Education
        </div>
        <div
          className="about-me-box"
          id="hobbies-box"
          onClick={() => window.open("#" + props.hobbiesSectionId, "_self")}
        >
          Hobbies
        </div>
      </div>
    </div>
  );
};

export default AboutMeBox;
