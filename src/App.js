import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import Resume from "./components/resume/resume.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Blog from "./components/blog/blog.jsx";
import Contact from "./components/contact/contact.jsx";
import ScrollToTop from "./components/footer/scrollToTop.jsx";
import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";

const TRACKING_ID = "UA-185955286-3";
ReactGA.initialize(TRACKING_ID);

function App() {
  const TRACKING_ID = "UA-185955286-3";
  ReactGA.initialize(TRACKING_ID);
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
