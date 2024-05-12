import { useState } from "react";
import "../../src/App.css";
import Navbar from "./Navbar";
import { TbWorldSearch } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineSolution } from "react-icons/ai";

const AboutMe = () => {
  const [extendedText, setExtendedText] = useState("none");
  const [btnValue, setBtnValue] = useState("↓  Show More  ↓");

  function clickHandler() {
    if (extendedText != "none") {
      setExtendedText("none");
      setBtnValue("↓  ShowMore  ↓");
      return;
    }
    setExtendedText("block");
    setBtnValue("↑   Hide Text  ↑ ");
  }
  return (
    <div className="aboutSection">
      <Navbar />
      <div className="aboutDiv">
        <div className="intro">
          <h1>
            Hey! 👋 I'm Avinash Manigam, a frontend developer based in
            Hyderabad, Telangana, India. I specialize in crafting captivating
            websites and applications with a keen eye for design. Graphic design
            isn't just a hobby for me; it's the secret sauce that elevates every
            project I tackle. As a fresher aspiring to land a job in this field,
            I'm eager to bring my passion and skills to new opportunities.
            <br />
            <div style={{ display: extendedText }}>
              <h1>
                Growing up bilingual has enriched my perspective on
                communication, instilling in me a deep appreciation for the
                subtle nuances of language. Fluent in three languages - English,
                Hindi, and Telugu - I bring this linguistic versatility to my
                work as a designer, allowing me to connect with clients from
                diverse backgrounds and understand their unique visions. My
                approach is characterized by a commitment to infusing each
                project with the client's identity and message, resulting in
                visually captivating and user-friendly designs. By integrating
                personal touches and attention to detail, I aim to create
                experiences that resonate deeply with users, reflecting not only
                their needs but also the essence of the brand.
              </h1>
              <h1>
                In my free time, I indulge in my love for devouring books across
                various genres and immersing myself in the captivating worlds of
                cinema. Alongside, I find solace in keeping up with the latest
                developments in web development, diving into articles on
                emerging technologies, and delving into the wonders of space
                exploration. Additionally, I enjoy delving into the realms of
                astrology, fascinated by the mysteries of the cosmos.
              </h1>
              <h1>
                If you have an innovative idea for a project that needs to be
                developed, I would love to hear from you. Your vision can be
                turned into a real product. Don't hesitate to reach out and
                let's start a conversation about your concept. I'm excited to
                collaborate and help bring your ideas to life.
              </h1>
            </div>
            <div className="showmoreBtn">
              <button onClick={() => clickHandler()}>{btnValue}</button>
            </div>
          </h1>
        </div>
        <h1 className="primaryFocus">Primary Focus</h1>
        <div className="primaryFocusDiv">
          <div>
            <div className="focusicon">
              <TbWorldSearch />
            </div>
            <div className="primaryFocusDetails">
              <h1>Web Design & Development</h1>
              <p>
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </div>

          <div>
            <div className="focusicon">
              <CiMobile3 />
            </div>
            <div className="primaryFocusDetails">
              <h1>Mobile Apps & Games</h1>
              <p>
                Creating and developing engaging mobile apps and games for iOS
                and Android devices.
              </p>
            </div>
          </div>

          <div>
            <div className="focusicon">
              <AiOutlineSolution />
            </div>
            <div className="primaryFocusDetails">
              <h1>Development Solutions</h1>
              <p>
                Utilizing JavaScript frameworks like React, Node, Next, Vue and
                more to build interactive web applications.
              </p>
            </div>
          </div>
        </div>
        <h1 className="primaryFocus">Languages</h1>
        <div className="languagesDiv">
          <div className="codingLangs">
            <h1>Coding Languages</h1>
            <ul>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>React</li>
              <li>Java</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="speakingLangs">
            <h1>Human Languages</h1>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Telugu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
