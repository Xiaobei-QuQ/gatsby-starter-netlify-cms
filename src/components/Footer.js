import React from "react";
import { Link } from "gatsby";

import footerImg from "../img/footer.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={footerImg}
            alt="North Blog"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div class="footer-inner">
            <p>
              博客已萌萌哒运行<span id="since">2284天9小时20分55秒</span>
              <span class="my-face">(●'◡'●)ﾉ♥</span>
            </p>
            <p>custom text</p>

            <p>
              
            </p>
            <p>
              Made with
              <span class="author" itemprop="copyrightHolder">
                小北
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
