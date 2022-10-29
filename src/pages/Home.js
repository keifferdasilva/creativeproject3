import { Outlet, Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div>
     
      

    <div class='news-grid'>
        <Link class='first-news-item'><div class='news-item-title'>New Update!</div><div class='news-item-content'>Dive in now to play the latest update and fight the new dastardly enemies coming to the game!</div></Link>
        <Link class ='news-item' style={{backgroundImage: "url(./images/40903983733_250e5eea76_k.jpg)"}}><div class='news-item-title'>Giveaway!</div><div class='news-item-content'>Sign up for free merch!</div></Link>
        <Link class ='news-item' style={{backgroundImage: "url(./images/46954192605_b7c152a3c1_k.jpg)"}} to='/store'><div class='news-item-title'>Sale!</div><div class='news-item-content'>Get 50% off our premium currency!</div></Link>
    </div>
    <hr class='divider'></hr>
    <div class='footer'>
        <div class='others-container'>
            <a class='others'>Support</a>
            <div class='footer-divider'></div>
            <a class='others'>Terms of Use</a>
            <div class='footer-divider'></div>
            <a class='others'>Privacy Policy</a>
            <div class='footer-divider'></div>
            <a class='others'>EULA</a>
        </div>
        <div class='socials-container'>
            <a class='socials'>Facebook</a>
            <a class='socials'>Instagram</a>
            <a class='socials'>Youtube</a>
            <a class='socials'>Twitter</a>
            <a class='socials'>Reddit</a>
        </div>
    </div>
</div>
      );
};

export default Home;