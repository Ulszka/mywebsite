import "./experience.scss";
// Workplace logos
import colliers from "../../assets/experience/colliers_logo_clean.png";
import twojDev from "../../assets/experience/twoj_developer.png";
import freelancing from "../../assets/experience/freelancing_women.png";
import fedex from "../../assets/experience/fedex_logo.png";
// Technologies images
import python from "../../assets/experience/technologies/python.png";
import typescript from "../../assets/experience/technologies/typescript.png";
import javascript from "../../assets/experience/technologies/js.png";
import react from "../../assets/experience/technologies/react.png";
import scss from "../../assets/experience/technologies/scss.png";
import html from "../../assets/experience/technologies/html.png";
import scrum from "../../assets/experience/technologies/scrum.png";
import msproject from "../../assets/experience/technologies/msproject.png";
import office from "../../assets/experience/technologies/office.png";
import matlab from "../../assets/experience/technologies/matlab.png";
import powerbi from "../../assets/experience/technologies/powerbi.png";
import agile from "../../assets/experience/technologies/agile.png";
import waterfall from "../../assets/experience/technologies/waterfall.png";
import jira from "../../assets/experience/technologies/jira.jfif";
import confluence from "../../assets/experience/technologies/confluence.jfif";
import sharepoint from "../../assets/experience/technologies/sharepoint.png";
import copilot from "../../assets/experience/technologies/copilot.jpg";
import QDM from "../../assets/experience/technologies/QDM.png";



const Experience = () => {
  return (
    <div className="experience-div">
      <h3 className="experience-title">My experience</h3>
      <hr />

      <img src={fedex} alt="FedEx" className="company-img" />
      <h5>Project Lead / Solution Design and Implementation Specialist in FedEx 02/2026 - now</h5>
      <p>
        As a Project Lead, I specialize in guiding complex, multi-component projects from initial assessment to successful 
        delivery. I collaborate closely with cross-functional teams—including Operations, Customer Experience, Pricing, 
        Customs, IT, and Sales—to clarify project scope, align objectives, and ensure seamless execution. By analyzing 
        customer needs and identifying gaps, I help design efficient, cost-effective solutions that meet business goals.
      </p>
      <div className="jobskills">
        <ul>
          <li>Bubble</li>
          <li>Quality Driven Management</li>
          <li>Copilot</li>
          <li>SharePoint</li>
          <li>Power-BI</li> 
          <li>Organizational skills</li>
          <li>Logical thinking</li>
          <li>Responsibility</li>
          <li>Timeliness</li>
          <li>Quick learner</li>
          <li>Creativity</li>
        </ul>
        <div className="job-skills-images">
          <img src={QDM} alt="QDM" />
          <img src={copilot} alt="Copilot" />
          <img src={sharepoint} alt="SharePoint" />
          <img src={powerbi} alt="Power BI" />
        </div>
      </div>
      <p>
        Throughout each project, I act as a trusted consultant to Sales and internal stakeholders, providing insights,
         framing solutions, and applying project management tools to track and control all stages. I also lead project 
         close-out reviews to capture lessons learned and drive continuous improvement.

        {/* In my career, I’ve led diverse, cross-functional projects where I identified challenges, developed 
        innovative solutions, and ensured timely execution. I combine strong analytical skills, business acumen, 
        and adaptability to navigate changing priorities while delivering high-quality results that align with customer 
        and organizational objectives. */}
      </p>
      <hr className="experience-spacer" />
      <br />

      <img src={freelancing} alt="Freelancing" className="company-img" />
      <h5>IT Project Manager 04/2022 - 02/2026</h5>
      <p>
        As a Freelance IT Project Manager, I specialized in overseeing the early planning and execution of various 
        technology projects, ensuring seamless progress from initiation to completion. I took an active role in 
        coordinating cross-functional teams, fostering effective collaboration, and maintaining clear communication 
        to align with project objectives. Additionally, I managed project workflows and optimized resource allocation 
        while keeping timelines and deliverables on track to ensure successful outcomes in dynamic IT environments. 
        I’ve also used AI agents to support web development tasks — leveraging them for coding assistance and 
        accelerating technical implementation where needed.
      </p>
      <div className="jobskills">
        <ul>
          <li>Scrum</li>
          <li>Agile</li>
          <li>Agent AI</li>
          <li>Copilot</li>
          <li>Jira</li>
          <li>Confluence</li>
          <li>Organizational skills</li>
          <li>Logical thinking</li>
          <li>Responsibility</li>
          <li>Timeliness</li>
          <li>Quick learner</li>
          <li>Creativity</li>
          <li>React</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML, SCSS, CSS</li>
        </ul>
        <div className="job-skills-images">
          <img src={scrum} alt="SCRUM" />
          <img src={agile} alt="Agile" />
          <img src={copilot} alt="Copilot" />
          <img src={jira} alt="Jira" />
          <img src={confluence} alt="Confluence" />
          <img src={react} alt="react" />
          <img src={python} alt="Python" />
          <img src={typescript} alt="TypeScript" />
          <img src={javascript} alt="JavaScript" />
          <img src={html} alt="HTML" />
          <img src={scss} alt="scss" /> 
        </div>
      </div>
      <p>
        Throughout my career as an IT Project Manager, I've driven innovation and efficiency across diverse projects.
        Initially, I oversaw a small game development project, ensuring the developer met strict deadlines by prioritizing
        essential tasks over distractions. Later, I managed an AI-driven book project where I coordinated the creation
        of flawless, machine learning-enhanced visuals and guided strategic translation decisions to maintain cultural
        relevance. In a subsequent role, I tackled a complex NDA project by developing an algorithm that automated
        the translation of software into multiple languages, drastically reducing recurring costs from translation
        agencies and achieving near-completion within three weeks.
        {/* In my first role as an IT Project Manager, I was responsible for overseeing the development of a small game. My primary 
        focus was on ensuring the developer adhered to a strict timeline, effectively balancing creative exploration with 
        the necessity of prioritizing core tasks. This position allowed me to hone my skills in time management and task 
        prioritization, ensuring project milestones were consistently met despite challenges with focus on nonessential tasks.

        In my second role, I managed an innovative project centered on creating a unique book that integrated AI-generated 
        imagery and advanced machine learning techniques to produce flawless visuals. I coordinated the entire process—from 
        efining the picture quality to managing the book’s translation. A key challenge was making strategic decisions, 
        such as whether to translate specific names, ensuring cultural and contextual relevance. Operating under strict deadlines, 
        I diligently monitored team performance to ensure that each member delivered efficiently without exceeding 
        the necessary scope, thereby maintaining focus and driving the project to success.

        In my third role, I managed a complex NDA project that addressed the high costs of translating English software 
        into multiple languages. Traditionally, we had to rely on translation agencies—incurring recurring expenses each 
        time a translation was completed. To tackle this challenge, we invested in developing an innovative algorithm that 
        automated the translation process, meaning we only paid our developers once rather than facing continuous agency fees. 
        This strategic move not only reduced ongoing costs substantially but also enabled rapid scalability for global 
        software localization. Working under a tight deadline, we reached near-completion within three weeks, demonstrating 
        our ability to deliver cost-effective and efficient solutions. */}
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={colliers} alt="Colliers Define" className="company-img" />
      <br />
      <br />
      <h5>Project Coordinator in Colliers Define 07/2022 - 01/2026 </h5>
      <p>
        As a Project Coordinator, I was responsible for overseeing and coordinating project
        teams to ensure smooth execution. My role involved tracking budgets, managing scope
        changes, and supervising ongoing tasks and deliverables. I also handled contract
        adherence, invoicing, and payment processes while maintaining comprehensive project
        documentation. Additionally, I worked closely with clients to define project
        requirements and actively participated in contract negotiations.
      </p>
      <div className="jobskills">
        <ul>
          <li>Scrum</li>
          <li>Python</li>
          <li>Copilot</li>
          <li>SharePoint</li>
          <li>Organizational skills</li>
          <li>Logical thinking</li>
          <li>Responsibility</li>
          <li>Timeliness</li>
          <li>Creativity</li>
          <li>Power-BI</li>     
          <li>MS Project</li>
          <li>HTML</li>
        </ul>
        <div className="job-skills-images">
          <img src={scrum} alt="SCRUM" />
          <img src={python} alt="Python" />
          <img src={copilot} alt="Copilot" />
          <img src={sharepoint} alt="SharePoint" />
          <img src={powerbi} alt="Power BI" />
          <img src={msproject} alt="MS Project" />
          <img src={html} alt="HTML" />
        </div>
      </div>

      <p>
        Colliers Define was an exciting place to work, offering a dynamic environment
        that blends strategic project management with real-world execution. Managing
        projects here required adaptability, as each initiative came with unique
        challenges in budgeting, scheduling, and workflow optimization. The role
        demanded a deep understanding of risk management and contract administration
        to ensure smooth project delivery. With multiple teams and vendors involved,
        strong communication and problem-solving skills were essential to keep projects
        on track. The fast-paced nature of the work constantly pushed project coordinators
        to refine their skills and stay ahead in the field of project management.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={twojDev} alt="Twój developer" className="company-img" />
      <h5>Project Manager Assistant in Twój developer 07/2020 - 08/2021</h5>
      <p>
        As a Project Manager Assistant at Twój Developer, I was responsible for early planning
        and implementation of several investments, ensuring smooth project execution from
        the initial stages. I played a key role in leading and managing collaborative teams,
        fostering effective communication, and ensuring alignment with project goals. Additionally,
        I coordinated project workflows, overseeing timelines, deliverables, and resource allocation
        to support successful project completion.
      </p>
      <br />
      <div className="jobskills">
        <ul>
          <li>Waterfall</li>
          <li>Quick learner</li>
          <li>Timeliness</li>
          <li>MS Project</li>
          <li>Microsoft Office</li>
          <li>MATLAB</li>
        </ul>
        <div className="job-skills-images">
          <img src={waterfall} alt="Waterfall" />
          <img src={msproject} alt="MS Project" />
          <img src={office} alt="MS Office" />
          <img src={matlab} alt="MATLAB" />
        </div>
      </div>

      <p>
        Twój Developer is a great place to start a career in project management, offering the
        opportunity to gain hands-on experience in various aspects of real estate development.
        Despite not being a large company, it provides a dynamic environment where you can learn
        a wide range of skills, from early project planning to execution and team coordination.
      </p>
      <br />
      <p>
        Working in this fast-paced setting pushed me to sharpen my time management and adaptability,
        enabling me to quickly master new tools and methodologies. I embraced agile techniques—especially
        Scrum—to boost team collaboration and enhance project outcomes. I relied on MS Project for precise
        scheduling and resource management, while using Microsoft Office for thorough documentation
        and reporting. Moreover, I expanded my analytical capabilities through MATLAB, which I used to
        refine processes and drive data-based decision-making.
      </p>
    </div>
  );
};

export default Experience;
