import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <main className="center">
        <h2>About Me</h2>

        <p>
          I am a Full Stack Web Developer With Experience in MERN Stack, as well
          as various other Web Technologies.
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
