import snakeImg from "../../assets/my_projects/snake.jpg";
import tetrisImg from "../../assets/my_projects/tetris.png";
import pacmanImg from "../../assets/my_projects/pacman.png";
import websiteImg from "../../assets/my_projects/this_website.png";
import froggersImg from "../../assets/my_projects/froggers.png";
import colliersImg from "../../assets/experience/colliers_logo_clean.png";


export interface ProjectData {
  projectTitle: string;
  projectImage: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectUrl: string;
  isExternal: boolean;
  buttonText: string;
}

// Projects information  ===============================================================================

// This website
const websiteTitle = "This website";

const websiteTechnologies = ["React", "TypeScript", "SCSS", "git", "CI/CD"];

const websiteDescription = `If you’re here, you’re already checking out one of my personal projects—my website, 
built for fun and to learn new skills. I designed and implemented every visual and interactive element while 
collaborating with a software developer I had worked with in the past, who built the skeleton of the web app 
and set up the DevOps pipeline for continuous deployment. I also came up with and built three small browser games, 
using AI tools to speed up development and enhance gameplay logic. This project sharpened my skills in React, TypeScript 
and SCSS, as well as in UX design and creative problem-solving, resulting in a polished, engaging site and 
interactive content.`;

const websiteUrl = "https://github.com/Ulszka/mywebsite";

const website: ProjectData = {
  projectTitle: websiteTitle,
  projectImage: websiteImg,
  projectDescription: websiteDescription,
  projectTechnologies: websiteTechnologies,
  projectUrl: websiteUrl,
  isExternal: true,
  buttonText: "Source code",
};

// Froggers
const froggersTitle = "Froggers";

const froggersTechnologies = ["Scrum", "Agile"];

const froggersDescription = `In my first role as an IT Project Manager, I was responsible for overseeing 
the development of game implemented in Unity utilizing .NET. My primary focus was on ensuring the developer adhered to a strict timeline, 
effectively balancing creative exploration with the necessity of prioritizing core tasks. 
At times, the developer wanted to focus on optimizing algorithms that, while interesting technically, had little impact on the user experience compared to smoother animations or more polished visuals.
This position 
allowed me to hone my skills in time management and task prioritization, ensuring project milestones 
were consistently met despite challenges with focus on nonessential tasks.`;

const froggersUrl =
  "https://sudokrystian.com/game";

const froggers: ProjectData = {
  projectTitle: froggersTitle,
  projectImage: froggersImg,
  projectDescription: froggersDescription,
  projectTechnologies: froggersTechnologies,
  projectUrl: froggersUrl,
  isExternal: true,
  buttonText: "Froggers",
};

// Snake
const snakeTitle = "Snake";

const snakeTechnologies = ["React", "TypeScript", "SCSS"];

const snakeDescription = `If you’re checking out my site, you’ll find the Snake game I built—purely for fun 
and to sharpen skills. Using TypeScript (TSX) and SCSS, I recreated the core mechanics of the 
classic: smooth movement, growing tail, and collision detection. I leaned on AI-assisted coding tools to 
accelerate development, but I made every architectural decision—identifying which gameplay elements were 
essential and which I could trim to hit my deadline. The result is a lean, responsive Snake clone that 
taught me a ton about state management, styling with SCSS, and balancing feature scope under time constraints.`;

const snakeUrl = "/snakegame";

const snakeButtonText = "Play Snake NOW!";

const snake: ProjectData = {
  projectTitle: snakeTitle,
  projectImage: snakeImg,
  projectDescription: snakeDescription,
  projectTechnologies: snakeTechnologies,
  projectUrl: snakeUrl,
  isExternal: false,
  buttonText: snakeButtonText,
};

// Tetris 
const tetrisTitle = "Tetris";

const tetrisTechnologies = ["React", "TypeScript", "SCSS"];

const tetrisDescription = `Building this Tetris game was both a technical and creative challenge. I used 
TypeScript and SCSS to replicate the core gameplay: falling tetrominoes, line clearing, scoring, and increasing 
difficulty. I focused on precise timing and grid-based logic, while keeping the codebase clean and modular. 
AI-assisted tools helped speed up routine coding, but the game design, logic, and visual polish were entirely 
my own. It was a deep dive into algorithmic thinking, collision detection, and UI responsiveness—all under 
a tight self-imposed deadline.`;

const tetrisUrl = "/tetrisgame";

const tetris: ProjectData = {
  projectTitle: tetrisTitle,
  projectImage: tetrisImg,
  projectDescription: tetrisDescription,
  projectTechnologies: tetrisTechnologies,
  projectUrl: tetrisUrl,
  isExternal: false,
  buttonText: "Play Tetris NOW!",
};

// PacMan
const pacmanTitle = "PacMan";

const pacmanTechnologies = ["React", "TypeScript", "SCSS"];

const pacmanDescription = `Still under construction, please wait a little more :)`;

const pacmanUrl = "/pacmangame";

const PacMan: ProjectData = {
  projectTitle: pacmanTitle,
  projectImage: pacmanImg,
  projectDescription: pacmanDescription,
  projectTechnologies: pacmanTechnologies,
  projectUrl: pacmanUrl,
  isExternal: false,
  buttonText: "Play PacMan NOW!",
};

// Colliers
const colliersTitle = "Colliers";

const colliersTechnologies = ["Scrum", "Agile", "Power-BI", "MS Project", "MS Excel"];

const colliersDescription = `My project management experience comes from leading large-scale construction 
and real estate projects, where I delivered complex fit-outs under tight deadlines. I was responsible for 
managing timelines, coordinating contractors, and keeping things moving—often while handling shifting requirements 
and on-the-spot challenges. Working with cross-functional teams, I learned how to keep projects on track, 
communicate clearly with stakeholders, and make quick decisions under pressure. I now apply those same skills 
in IT project management, where managing complexity, risk, and momentum is just as critical.`;

const colliersUrl =
  "https://define.colliers.pl/pl/portfolio/premier-farnell/";

const colliers: ProjectData = {
  projectTitle: colliersTitle,
  projectImage: colliersImg,
  projectDescription: colliersDescription,
  projectTechnologies: colliersTechnologies,
  projectUrl: colliersUrl,
  isExternal: true,
  buttonText: "Premier Farnell",
};

// =====================================================================================================

const projects = [
  website,
  froggers,
  colliers,
  snake,
  tetris,
  PacMan
];

export default projects;
