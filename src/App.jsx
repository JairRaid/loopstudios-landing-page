import Header from "./components/Header";
import Article from "./components/Articles";
import { CREATIONS, CREATIONSDESKTOP } from "./articlesData";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [creationsData, setCreationsData] = useState(CREATIONS);
  // let creationsData = CREATIONS;
  const timoutRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        clearTimeout(timoutRef.current);
        timoutRef.current = setTimeout(() => {
          setCreationsData(CREATIONSDESKTOP);
        }, 100);
      }
      if (window.innerWidth <= 768) {
        clearTimeout(timoutRef.current);
        timoutRef.current = setTimeout(() => {
          setCreationsData(CREATIONS);
        }, 100);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timoutRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="about">
          <img
            src="images/mobile/image-interactive.jpg"
            alt="person experiencing VR"
          />
          <div>
            <h2>The Leader in Interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section id="creations">
          <h2>Our Creations</h2>
          <div className="articles-list">
            {/* <Article
              src="images/mobile/image-deep-earth.jpg"
              alt="deep earth"
              h3Text="DEEP EARTH"
              hWidth="80px"
            />
            <Article
              src="images/mobile/image-night-arcade.jpg"
              alt="night arcade"
              h3Text="NIGHT ARCADE"
              hWidth="80px"
            />
            <Article
              src="images/mobile/image-soccer-team.jpg"
              alt="soccer team"
              h3Text="SOCCER TEAM VR"
              hWidth="150px"
            />
            <Article
              src="images/mobile/image-grid.jpg"
              alt="the grid"
              h3Text="THE GRID"
              hWidth="80px"
            />
            <Article
              src="images/mobile/image-from-above.jpg"
              alt="from up above vr"
              h3Text="FROM UP ABOVE VR"
              hWidth="150px"
            />
            <Article
              src="images/mobile/image-pocket-borealis.jpg"
              alt="pocket borealis"
              h3Text="POCKET BOREALIS"
              hWidth="150px"
            />
            <Article
              src="images/mobile/image-curiosity.jpg"
              alt="curiosity"
              h3Text="THE CURIOSITY"
              hWidth="150px"
            />
            <Article
              src="images/mobile/image-fisheye.jpg"
              alt="fisheye"
              h3Text="MAKE IT FISHEYE"
              hWidth="150px"
            /> */}
            {creationsData.map((data, index) => {
              return <Article key={index} {...data} />;
            })}
          </div>
          <button id="see-all">See All</button>
        </section>
      </main>
      <footer>
        <div className="wrapper">
          <div className="navigation">
            <h2>
              <img src="images/logo.svg" alt="loopstudio logo" />
            </h2>
            <nav>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="#facebook">
                  <img src="images/icon-facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <img src="images/icon-twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <img src="images/icon-instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#pinterest">
                  <img src="images/icon-pinterest.svg" alt="Pinterest" />
                </a>
              </li>
            </ul>
            <p>&copy; 2025 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
