import React from "react";
import { Link } from "react-router-dom";

function FunzoneCarousel() {
  return (
    <section className="games-section">
      <div className="game-container">
        <div className="game-card">
          <div className="game-box vamp-game">
            <div className="game-content">
              <Link to="/TVDQuiz" className="game-a">
                Play Now
              </Link>
            </div>
          </div>
        </div>

        <div className="game-card">
          <div className="game-box originals-game">
            <div className="game-content">
              <Link to="/OriginalsQuiz" className="game-a">
                Play Now
              </Link>
            </div>
          </div>
        </div>

        <div className="game-card">
          <div className="game-box legacies-game">
            <div className="game-content">
              <Link to="/legaciesQuiz" className="game-a">
                Play Now
              </Link>
            </div>
          </div>
        </div>
        <div className="game-card">
          <div className="game-box teenwolf-game">
            <div className="game-content">
              <Link to="/teenwolfQuiz" className="game-a">
                Play Now
              </Link>
            </div>
          </div>
        </div>
        <div className="game-card">
          <div className="game-box twilight-game">
            <div className="game-content">
              <Link to="/twilightQuiz" className="game-a">
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunzoneCarousel;
