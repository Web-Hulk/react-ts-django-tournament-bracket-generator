import { Link } from "react-router-dom";
import { FAQ } from "../../components/FAQ/FAQ";

export const Home = () => {
  return (
    <>
      <header>
        <h1>Welcome to the FC 24 Tournament Bracket Generator!</h1>
        <p>
          Create, manage, and participate in your FC 24 tournaments with ease.
        </p>
      </header>

      <main>
        <section>
          <h2>Features</h2>
          <ul>
            <li>
              Generate tournament brackets for FC 24 PlayStation 5 version
            </li>
            <li>Manage players and teams</li>
            <li>Track match results and progress</li>
            <li>Participate in tournaments with different stages and rules</li>
            <li>Follow fair play guidelines and enjoy the game</li>
          </ul>
        </section>

        <section>
          <h2>Get Started</h2>
          <p>
            Ready to kick off your FC 24 tournament experience? Click the button
            below to start.
          </p>
          <Link to={"/login"}>Start Now</Link>
        </section>

        <FAQ />
      </main>

      <footer>© 2024 FC 24 Tournament Bracket Generator</footer>
    </>
  );
};
