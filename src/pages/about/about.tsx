import Banner from "../../components/Banner/Banner";
import SkillBox from "../../components/SkillBox/SkillBox";
import "./about.scss";
// Pictures
import agh from "../../assets/experience/agh_logo.png";
import colliers from "../../assets/experience/colliers_logo_clean.png";
import twojDev from "../../assets/experience/twoj_developer.png";
import freelancing from "../../assets/experience/freelancing_women.avif";
import vlo from "../../assets/experience/v_logo.png";

const About = () => {
  const experienceSectionId = "experience-div";
  const languagesSectionId = "languages-div";
  const skillsSectionId = "skills-div";
  const educationSectionId = "education-div";
  const hobbiesSectionId = "hobbies-div";

  const skills: string[] = [
    "MySQL",
    "Python",
    "Power-BI",
    "Scrum",
    "MS Project",
    "Microsoft Office",
    "MATLAB",
  ];
  const softSkills: string[] = [
    "Organizational skills",
    "Creativity",
    "Logical thinking",
    "Quick learner",
    "Tech-savvy",
    "Timeliness",
    "Responsibility",
  ];

  return (
    <div className="about-div">
      <div id="introduction-div">
        <h3 className="about-title">About me</h3>
        <hr />
        <p className="about-introduction">
          Hello there, I'm Ula—a proactive Project Coordinator with over two years of
          experience driving complex projects. With a strong foundation in civil engineering,
          I've honed my skills in resource management, workflow optimization, and technology
          integration using tools like advanced Excel, AutoCAD, MATLAB, and MS Project.
          I also leverage AI-driven solutions to enhance efficiency and enable data-driven
          decision-making. With a proven track record of delivering projects on time and
          within budget while fostering team collaboration, I'm open to IT opportunities
          that allow me to apply my tech-savvy leadership and project management expertise. Let's connect if you're interested in a dynamic coordinator who can drive project success in a fast-paced, innovative environment.
        </p>
      </div>
      <Banner />

      <br />
      <div id="skills-div">
        <h3>Skills</h3>
        <hr />
        <br />
        <div className="skillbox-div">
          <div className="skillstext-div">
            <div className="skillboxes-div">
              <h3>Hard skills</h3>
            </div>
            <div className="skillboxes-div">
              {skills.map((skill) => (
                <SkillBox boxText={skill} key={skill} />
              ))}
            </div>
          </div>
          <div className="skillstext-div">
            <div className="skillboxes-div">
              <h3>Soft skills</h3>
            </div>
            <div className="skillboxes-div">
              {softSkills.map((skill) => (
                <SkillBox boxText={skill} key={skill} />
              ))}
            </div>
          </div>
        </div>

      </div>
      <div id="experience-div">
        <h3>Experience</h3>
        <hr />
        <br />
        <div className="experience-jobs">
          <div className="experience-job">
            <img src={colliers} alt="Colliers Define" className="company-img" />
            <br />
            <h5>Colliers Define 07/2022 - now</h5>
            <h6>Project Coordinator</h6>
            <ul>
              <li>Supervision, verification and coordination of the works carried out</li>
              <li>Defining project requirements based on customer input</li>
              <li>Overseeing and validating ongoing tasks and deliverables</li>
            </ul>
          </div>
          <div className="experience-job">
            <img src={twojDev} alt="Twój developer" className="company-img" />
            <h5>Twój developer 07/2020 - 08/2021</h5>
            <h6>Project Manager Assistant</h6>
            <ul>
              <li>Early planning and implementation of several investments</li>
              <li>Leadership and management of collaborative teams</li>
              <li>Coordination of project workflows (f.e.
                <a
                  href="https://www.facebook.com/NaWzgorzuJaworzno/"
                  id="nawzgorzu-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Na Wzgórzu){" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="experience-job">
            <img src={freelancing} alt="Freelancing" className="company-img" />
            <h5>Freelancing 04/2022 - now</h5>
            <h6>Project Manager</h6>
            <ul>
              <li>Planning and overseeing IT project execution</li>
              <li>Coordinating teams and resolving technical challenges</li>
              <li>Monitoring performance and minimizing project risks</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="languages-div">
        <h3>Languages</h3>
        <hr />
        <br />
        <div className="languagesbox-div">
          <div className="languagesmax-div">
            <div className="languagePolish-div">
              <p>Polish</p>
            </div>
          </div>
          <div className="languagesmax-div">
            <div className="languageEnglish-div">
              <p>English</p>
            </div>
          </div><div className="languagesmax-div">
            <div className="languageGerman-div">
              <p>German</p>
            </div>
          </div><div className="languagesmax-div">
            <div className="languageItalian-div">
              <p>Italian</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div id="education-div">
        <h3>Education</h3>
        <hr />
        <div className="education-containers">
          <div className="education-container">
            <img
              src={agh}
              alt="VIA Univesity Collage"
              className="education-image"
            />
            <div className="education-header">
              <h6>2018 - 2023</h6>
              <p>Engineering and Management of Construction Projects,</p>
              <p>AGH University of Science and Technology</p>
            </div>
            <ul>
              <li>Managing projects and process optimization</li>
              <li>Analysis using a variety of software</li>
              <li></li>
            </ul>
          </div>
          <div className="education-container">
            <img
              src={vlo}
              alt="Maskinmesterskole"
              className="education-image"
            />
            <div className="education-header">
              <h6>2015-2018</h6>
              <p>Mathematical, Physics and IT,</p>
              <p>5th High School</p>
            </div>
            <ul>
              <li>Programming: C++, VBA</li>
              <li>Physics and Mathematics</li>
              <li>Management</li>
            </ul>
          </div>
          <div className="education-header"></div>
        </div>
      </div>
      <div id="hobbies-div">
        <h3>Hobbies</h3>
        <hr />
        <p>
          I am the kind of person who can't really sit still for a long time,
          therefore I have many hobbies that keep me going. Here is a list of
          some of my favorite ones.
        </p>
        <ul>
          <li>Learning new languages</li>
          <li>
            Powerlifting (the best way to grow is by overcoming your weaknesses
            and embracing new opportunities)
          </li>
          <li>Psychology</li>
          <li>Fantasy books</li>
          <li>
            Travelling (the main aim for my travels are beautiful hikes in
            nature and good food)
          </li>
          <li>Board games</li>
          <li>
            Computer games (strategy and RPG are the best way to run away from
            brutal reality from time to time)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
