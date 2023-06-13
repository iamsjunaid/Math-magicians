import './styles/home.css';

const Home = () => (
  <div className="home">
    <section className="content">
      <h2>Welcome to our page!</h2>
      <p>
        Math magicians is a website for all fans of mathematics. It is a Single
        Page App (SPA) that allows users to:
      </p>
      <ul>
        <li>☑️Read a random math-related quote.</li>
        <li>☑️Make simple calculations.</li>
      </ul>
    </section>
    <section className="img-container">
      <img src="https://i.gifer.com/G0yR.gif" alt="math" />
    </section>
  </div>
);
export default Home;
