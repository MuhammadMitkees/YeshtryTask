import React from "react";
import "./footer.scss";
function Footer() {
  const FooterLinks = (props) => {
    return (
      <li>
        <a href="#">{props.title}</a>
      </li>
    );
  };
  const FooterSmLinks = (props) => {
    return (
      <a href="#">
        <img src={props.src} />
        /YESHTERY
      </a>
    );
  };
  const VisaIcon = (props) => {
    return <img src={props.src} />;
  };
  return (
    <footer>
      <div className="footerContainer">
        <div className="mainFooterDiv">
          <div className="yeshtryFooterDiv">
            <img src="/images/yeshtryFooterLogo.svg" alt="yeshtry Logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <br />
              <br />
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
              <br />
              <br />m nonummy nibh euismod tincidunt ut laoreet dolore m nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit
            </p>
          </div>
          <div className="subscribeFooterDiv">
            <h4>Subscribe to our newsletter</h4>
            <div className="subscribeInputDiv">
              <input type="text" placeholder="Enter Your Mail" />
              <button>
                Subscribe
                <img src="/images/subscribeIcon.svg" alt="subscribe Icon" />
              </button>
            </div>
            <div className="linksFooterDiv">
              <ul className="AboutUsList">
                <FooterLinks title="About Us" />
                <FooterLinks title="Contact Us" />
                <FooterLinks title="Track Order" />
                <FooterLinks title="Terms & Conditions" />
                <FooterLinks title="Privacy Policy" />
                <FooterLinks title="Sell With Us" />
                <FooterLinks title="Shipping And Returns" />
              </ul>
              <ul className="smList">
                <FooterSmLinks src="/images/SmLinks/fbIcon.svg" />
                <FooterSmLinks src="/images/SmLinks/linkedinIcon.svg" />
                <FooterSmLinks src="/images/SmLinks/igIcon.svg" />
                <FooterSmLinks src="/images/SmLinks/twitterIcon.svg" />
              </ul>
            </div>
          </div>
        </div>
        <div className="footerOfFooter">
          <p className="rightsTxt">© 2021 yeshtery, all rights reserved.</p>
          <div>
            <VisaIcon src="/images/footerVisaIcons/visa1.png" />
            <VisaIcon src="/images/footerVisaIcons/visa2.png" />
            <VisaIcon src="/images/footerVisaIcons/visa3.png" />
          </div>
          <p className="nasnavTxt">
            Powered By
            <img
              src="/images/footerVisaIcons/nasnavIcon.svg"
              alt="nasnav Icon"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
