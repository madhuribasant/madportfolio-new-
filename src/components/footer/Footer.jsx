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
          <a href="https://instagram.com/almondd_agency?igshid=YmMyMTA2M2Y=">
            {" "}
            <span>Instagram</span> {" "}
          </a>
          <a href="https://www.facebook.com/almonddagency">
            <span>Facebook</span> 
          </a>
          <a href="https://www.linkedin.com/company/almondd/">
            <span>LinkedIn</span> 
          </a>

        </div>
      </footer>
    </>
  );
};

export default Footer;
