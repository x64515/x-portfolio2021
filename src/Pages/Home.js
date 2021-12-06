import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main ClassName="center">
        <h1>Welcome to Sites by X</h1>
        <p>Freelance Web Developer for Hire</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
export default Home;
