import Banner from "../../components/Banner/Banner";
import SkillBox from "../../components/SkillBox/SkillBox";
import HobbyList from "../../components/Hobby/HobbyList";
import CertificatesList from "../../components/Certificates/CertificatesList";
import "./about.scss";
// Pictures
import vlo from "../../assets/experience/v_logo.png";
import agh from "../../assets/experience/agh_logo.png";
import colliers from "../../assets/experience/colliers_logo_clean.png";
import freelancing from "../../assets/experience/freelancing_women.png";
import fedex from "../../assets/experience/fedex_logo.png";
import mf2f from "../../assets/experience/mf2f.png";

const About = () => {
  const experienceSectionId = "experience-div";
  const languagesSectionId = "languages-div";
  const skillsSectionId = "skills-div";
  const educationSectionId = "education-div";
  const hobbiesSectionId = "hobbies-div";
  const certificatesSectionId = "certificates-div";
  const volunteeringSectionId = "volunteering-div";

  const hardSkills: string[] = [
    "MySQL",
    "Python",
    "AI tools",
    "Power-BI",
    "Scrum",
    "MS Project",
    "Microsoft 365",
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
          Hello there, I'm Ula - a passionate and data-driven Project Manager who brings both structure
          and heart to every team I lead. Focused on delivering complex IT and digital projects,
          I bridge the gap between people and technology to ensure workflows run smoothly.
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
              {hardSkills.map((skill) => (
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
        <div className="timeline-jobs">

          <div className="timeline-job">
            <img src={fedex} alt="FedEx" className="company-img" />
            <h5>02/2026 - Present</h5>
            <h6>Project Lead / Solution Design and Implementation Specialist - FedEx</h6>
            <ul>
              <li>Design efficient, cost-effective solutions tailored to customer needs</li>
              <li>Use project management tools to plan, track, and control project phases</li>
              <li>Collaborate with cross-functional teams to align on project scope</li>
            </ul>
          </div>

          <div className="timeline-job">
            <img src={freelancing} alt="Freelancing" className="company-img" />
            <h5>04/2022 - 02/2026</h5>
            <h6>IT Project Manager - Freelancing</h6>
            <ul>
              <li>Planning and overseeing IT project execution (f.e.
                <a
                  href="https://sudokrystian.com/game"
                  id="project-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Froggers){" "}
                </a>

              </li>
              <li>Coordinating teams and resolving technical challenges</li>
              <li>Monitoring performance and minimizing project risks</li>
            </ul>
          </div>
          <div className="timeline-job">
            <img src={colliers} alt="Colliers Define" className="company-img" />
            <br />
            <h5>07/2022 - 01/2026</h5>
            <h6>Project Coordinator - Colliers Define</h6>
            <ul>
              <li>Supervision, verification and coordination of the works carried out (f.e.
                <a
                  href="https://www.instagram.com/p/C_SkIpto9Fx/?img_index=5"
                  id="project-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Farnell office){" "}
                </a>
              </li>
              <li>Defining project requirements based on customer input</li>
              <li>Overseeing and validating ongoing tasks and deliverables</li>
            </ul>
          </div>
        </div>
      </div>

            <div id="volunteering-div">
              <h3>Volunteering</h3>
              <hr />
              <div className="timeline-jobs">
                <div className="timeline-job">
                  <img
                    src={mf2f}
                    alt="MentoringF2F Foundation"
                    className="timeline-image"
                  />
                  <h5>08/2026 – Present</h5>
                  <h6>B2B Team Volunteer - MentoringF2F Foundation</h6>
                  <ul>
                    <li>Assisting the B2B team with ongoing activities and operational tasks</li>
                    <li>Collaborating with fellow volunteers on the foundation's initiatives</li>
                  </ul>
                </div>

                <div className="timeline-job">
                  <img
                    src={mf2f}
                    alt="MentoringF2F Foundation"
                    className="timeline-image"
                  />
                  <h5>09/2025 – 07/2026</h5>
                  <h6>Ambassador Team Lead - MentoringF2F Foundation</h6>
                  <ul>
                    <li>Led a team of student ambassadors who had previously participated in the mentoring program</li>
                    <li>Coordinated task allocation, team activities, and collaboration with other foundation teams</li>
                    <li>Provided ongoing support to mentees and contributed to the smooth delivery of the mentoring program</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="education-div">
              <h3>Education</h3>
              <hr />
              <div className="timeline-jobs">
                <div className="timeline-job">
                  <img
                    src={agh}
                    alt="AGH University of Science and Technology"
                    className="timeline-image"
                  />
                  <h5>2021 - 2023</h5>
                  <h6>Project Management - AGH University of Science and Technology</h6>
                  <ul>
                    <li>Managing projects and process optimization</li>
                    <li>Analysis using a variety of software</li>
                    <li>Solving complex tasks with a range of programs</li>
                  </ul>
                </div>
                <div className="timeline-job">
                  <img
                    src={agh}
                    alt="AGH University of Science and Technology"
                    className="timeline-image"
                  />
                  <h5>2018 - 2021</h5>
                  <h6>Civil Engineering - AGH University of Science and Technology</h6>
                  <ul>
                    <li>Structural design</li>
                    <li>Construction site organisation</li>
                    <li>Work schedule</li>
                  </ul>
                </div>
                <div className="timeline-job">
                  <img
                    src={vlo}
                    alt="V LO"
                    className="timeline-image"
                  />
                  <h5>2015 - 2018</h5>
                  <h6>Mathematical, Physics and IT - 5th High School</h6>
                  <ul>
                    <li>Programming: C++, VBA</li>
                    <li>Physics and Mathematics</li>
                    <li>Management</li>
                  </ul>
                </div>
              </div>
            </div>

      <div id="certificates-div">
        <h3>Certificates</h3>
        <hr />

        <CertificatesList />

      </div>

      <div id="languages-div">
        <h3>Languages</h3>
        <hr />
        <br />
        <div className="languagesbox-div">
          <div className="languagesmax-div">
            <div className="languagePolish-div">
              <p>Polish</p>
              <p>native</p>
            </div>
          </div>

          <div className="languagesmax-div">
            <div className="languageEnglish-div">
              <p>English</p>
            </div>
            <div className="languageClass-div">
              <p>C1</p>
            </div>
          </div>

          <div className="languagesmax-div">
            <div className="languageGerman-div">
              <p>German</p>
            </div>
            <div className="languageClass-div">
              <p>A1</p>
            </div>
          </div>
          <div className="languagesmax-div">
            <div className="languageItalian-div">
              <p>Italian</p>
            </div>
            <div className="languageClass-div">
              <p>A1</p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div id="hobbies-div">
        <h3>Hobbies</h3>
        <hr />
        <p>
          I am the kind of person who can't really sit still for a long time,
          therefore I have many hobbies that keep me going. Here is a list of
          some of my favorite ones.
        </p>
        <HobbyList />
      </div>
    </div >
  );
};

export default About;
