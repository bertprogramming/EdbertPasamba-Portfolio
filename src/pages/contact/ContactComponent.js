import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header
          theme={theme}
          toggleTheme={this.props.toggleTheme}
          isDark={this.props.isDark}
        />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <p
                  className="contact-email"
                  style={{ color: theme.secondaryText }}
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=bertopasamba@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.imageHighlight }}
                  >
                    bertopasamba@gmail.com
                  </a>
                </p>
                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <div className="contact-skills-section">
          <div className="contact-skills-header">
            <h2 style={{ color: theme.text }}>Skills</h2>
            <p style={{ color: theme.secondaryText }}>Coming soon</p>
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
