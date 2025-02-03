import "../Contact/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">Contact</div>
      <ul className="contact__list">
        <li className="contact__list-email">guadalupesanchezp4@gmail.com</li>
        <li className="contact__list-linkedin">
          <a
            href="http://www.linkedin.com/in/guadalupe-sanchez-96262b326"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact__list-github">
          <a
            href="https://github.com/LupeSanchez24"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
