import React from "react";
import youtube from "./img/youtube.svg";
import twitter from "./img/twitter.svg";

function Footer(){
    return(
      <div className='footer'>
        <div class="footer-wrapper">
          <footer class="page-footer container">
            <p class="hashtag">#visitinnsbruck</p>
            <ul class="footer-social">
              <li>          
                <a class="social-button" href="#">
                  <img src={twitter} alt="твиттер"/>
                </a>
              </li>
              <li>
                <a class="social-button" href="#">
                  <img src="img/fb.svg" alt="фейсбук"/>
                </a>
              </li>
              <li>
                <a class="social-button" href="#">
                  <img src={youtube} alt="ютуб"/>
                </a>
              </li>
            </ul>
            <p class="copyright">
              © 2020 FoxArt
            </p>
          </footer>
        </div>  
      </div>
    );
  }
export default Footer