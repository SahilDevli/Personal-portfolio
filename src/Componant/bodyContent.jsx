import React from "react";
import './css/styleCont.css';
import './css/mainMob.css';
import profile from './utils/profile.png';
import down from './utils/down.png';

const givecv = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/Resume.pdf";
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



export default function bodyContent() {
  return (
    <>

    <div className="mob"></div>

    <div className="back">
      <img src={profile} alt="" />
    </div>

    <div className="maincont">
      <p><b>I'm</b></p>
      <h2>SAHIL DEVLI</h2>
      <p>
        a Software Developer. I am a passionate and dedicated software and front-end web developer with a strong foundation
        in <b>JAVA,C++ for Software And HTML, CSS(Tailwind, Bootstrap), JavaScript(ReactJS)</b>.
        I am always eager to learn and improve my skills and logic building approch. My
        goal is to create engaging and user-friendly websites and Softwares that help
        businesses achieve their goals.
      </p>
      <p>
        I am currently available for interships, so if you're looking for a
        efficient Engineer,
        please don't hesitate to reach out.
      </p>
      <p>
        If you'd like to learn more about my <a href="/">skills</a> and{" "}
        <a href="/">projects</a>.
      </p>
    </div>



    <button type="button" onClick={givecv}>Download CV
      <img src={down} alt="..." id="download"/>
    </button>


    </>
  );
}
