import "./Main.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import background from "../../assets/main-background.jpg";
function Main() {
  return (
    <main className="main">
      <img
        className="main__image"
        alt="computer background image"
        src={background}
      />
      <h2 className="main__title">Hi, I am Guadalupe Sanchez</h2>
      <p className="main__description">
        a <span className="main__description-position">Frontend Developer</span>{" "}
        from Washington
      </p>
      <About />
      <Contact />
    </main>
  );
}

export default Main;
