import { Fragment } from "react";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Hobby from "./Hobby";
import Volunteering from "./Volunteering";

function Contents() {
  return (
    <Fragment>
      <Summary />
      <Experience />
      <Education />
      <Achievements />
      <Skills />
      <Hobby />
      <Volunteering />
    </Fragment>
  );
}

export default Contents;
