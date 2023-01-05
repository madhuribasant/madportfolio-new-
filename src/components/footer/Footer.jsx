import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <p>
          Let's Talk <br /> About the Next <br /> big thing
        </p>
        <div id="mail">
          <a href="mailto:madhuri.basant007@gmail.com">
            <span>Write a message </span>
          </a>
          <a href="mailto:madhuri.basant007@gmail.com?
          &subject=Discuss a Project
          &body=I want to discuss ">
            <span>Discuss Project </span>
          </a>
        </div>

        <div id="social">
          <a href="">
            {" "}
            <span>Instagram</span> <span>@madhuri</span>{" "}
          </a>
          <a href="">
            <span>Twitter</span> <span>@madhuri</span>
          </a>
          <a href="">
            <span>LinkedIn</span> <span>@madhuri</span>{" "}
          </a>
          <a href=""><span>Dribble</span> <span>@madhuri</span></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
