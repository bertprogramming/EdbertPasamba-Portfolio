import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    const { theme, toggleTheme, isDark } = this.props;
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={theme} />
              ) : (
                <Home
                  {...props}
                  theme={theme}
                  toggleTheme={toggleTheme}
                  isDark={isDark}
                />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={theme} />}
            />
          )}
          <Route
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
                theme={theme}
                toggleTheme={toggleTheme}
                isDark={isDark}
              />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
