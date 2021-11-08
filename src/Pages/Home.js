import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main ClassName="center">
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
export default Home;
