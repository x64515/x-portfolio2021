import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <main className="center">
        <h2>About Me</h2>

        <p>
          My Name is Xavier I am a Full-Stack Web Developer with Experience in
          Mern Stack, As long as I can remember i have always had a passion for
          tech. and have been the default Tech Guy for my Family & Friends.
          Since My preteens i have Experience in repairing Computers, phones and
          tablets. As well as Trouble Shooting, sideloading, root, Linux, Home
          Network, Home Servers, Smart Home Devices, Port Forwarding, Even some
          Commercial Networking filling in at work when things needed repair.
          Mostly self taught since graduating Highschool I went into the Night
          Club Industry and then Sales Mostly for the Money. With the Outbreak
          of the Covide Pandemic. I Saw an Oportunity to pursue my passion in
          Tech, I attended the University of Texas Austin Web Development
          BootCamp and continue to find Material online to improve my skills
          both in programming in web Development. I Have Experience in Git,
          Github, HTML5, CSS, JavaScript, NodeJs, Sqlite, MySQL, MongoDB,
          Expressjs, React, Next, Apollo-Client and GraphQL and am currently
          working towards Learning Typescript and Rust.
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
