import React, { Component } from "react";
import background from "./home-images/homeAbout/background.jpg";
import card1front from "./home-images/homeDetails/card1front.jpg";
import card1inside from "./home-images/homeDetails/card1inside.png";
import card2front from "./home-images/homeDetails/card2front.png";
import card2inside from "./home-images/homeDetails/card2inside.jpg";
import card3front from "./home-images/homeDetails/card3front.jpg";
import card3inside from "./home-images/homeDetails/card3inside.png";

class HomeDetails extends Component {
  render() {
    return (
      <div
        className="main"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <section className="card-area">
          {/* Card: Discover   */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp ">
                      <img
                        className="imgFront"
                        src={card1front}
                        alt="card1front"
                      />
                    </div>
                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--discover">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <img
                      className="imgInside"
                      src={card1inside}
                      alt="card1inside"
                    />
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--discover">
                    For Curious People
                  </h3>
                  <p className="inside-page__text">
                    The human mind delights in grand conceptions of supernatural
                    beings.
                  </p>
                  <a href="/discover" className="inside-page__btn">
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FUNZONE  */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp ">
                      <img
                        className="imgFront"
                        src={card2front}
                        alt="card2front"
                      />
                    </div>
                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--funzone">
                        View me
                      </p>
                    </div>
                  </div>

                  <div className="card-back">
                    <img
                      className="imgInside"
                      src={card2inside}
                      alt="card2inside"
                    />
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--funzone">
                    Wanna have Fun?
                  </h3>
                  <p className="inside-page__text">
                    Lets see how well you know about supernatural series...
                  </p>
                  <a href="/funzone" className="inside-page__btn ">
                    Play Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Card: Shopping  */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp ">
                      <img
                        className="imgFront"
                        src={card3front}
                        alt="card3front"
                      />
                    </div>
                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--shopping">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <img
                      className="imgInside"
                      src={card3inside}
                      alt="card3inside"
                    />
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--shopping">
                    Love Celebrities outfit?
                  </h3>
                  <p className="inside-page__text">
                    Get your favourite celebs outfit and asccesories here...
                  </p>
                  <a href="/shopping" className="inside-page__btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default HomeDetails;
