import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import Error from "./pages/error/error";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import TetrisGame from "./components/TetrisGame/TetrisGame";
import PacManGame from "./components/PacManGame/PacManGame";

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/experience">
        <Experience />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/project">
        <Project />
      </Route>
      <Route exact path="/snakegame">
        <SnakeGame />
      </Route>
      <Route exact path="/tetrisgame">
        <TetrisGame />
      </Route>
      <Route exact path="/pacmangame">
        <PacManGame />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
