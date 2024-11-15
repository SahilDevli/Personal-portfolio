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
        a frontend web developer. I am a passionate and dedicated web developer with a strong foundation
        in <b> HTML, CSS, JavaScript and TypeScript. Also have good command in CSS and
        JavaScript base libraries and frameworks( i.e. Tailwind, Bootstrap, ReactJS,
        Redux and NodeJS )</b>.
        I am always eager to learn and improve my skills. My
        goal is to create engaging and user-friendly websites that help
        businesses achieve their goals.
      </p>
      <p>
        I am currently available for freelance work, so if you're interested in
        working together on a project or need assistance with your website,
        please don't hesitate to reach out.
      </p>
      <p>
        If you'd like to learn more about my <a href="/">skills</a> and{" "}
        <a href="/">experience</a>.
      </p>
    </div>



    <button type="button" onClick={givecv}>Download CV
      <img src={down} alt="..." id="download"/>
    </button>


    </>
  );
}
