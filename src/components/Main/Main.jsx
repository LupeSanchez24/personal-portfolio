import "./Main.css";
import About from "../About/About";
function Main() {
  return (
    <main className="main">
      <h2 className="main__title">
        Hi, I am <span className="main__title-name">Guadalupe Sanchez</span>{" "}
      </h2>
      <p className="main__description">
        a <span className="main__description-position">Frontend Developer</span>{" "}
        from Washington
      </p>
      <About />
    </main>
  );
}

export default Main;
