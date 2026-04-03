import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    const { theme, toggleTheme, isDark } = this.props;
    return (
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
        <Greeting theme={theme} />
        <Skills theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
