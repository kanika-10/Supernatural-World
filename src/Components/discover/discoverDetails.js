import React from "react";
import RibbonBanner from "./ribbonBanner";
import { Link } from "react-scroll";

function DiscoverDetails({ discoverData }) {
  const refs = discoverData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <main>
      <div>
        <section className="discover" id="top">
          <h1 className="discoverTitle">
            <span className="titlespan">Know about</span> the{" "}
            <span className="titlespan">World</span> you have always{" "}
            <span className="titlespan">Dreamt</span> of ..!!
          </h1>
          <div className="discover-container">
            <div className="discover-carousel">
              {discoverData.map((data) => {
                const { id, title } = data;
                return (
                  <div className="discover-carousel__face" key={id}>
                    <span className="discover-span">
                      <button
                        className="discover-button"
                        onClick={function () {
                          handleClick(id);
                        }}
                      >
                        {title}
                      </button>
                    </span>
                  </div>
                );
              })}
              );
            </div>
          </div>
        </section>
      </div>
      <RibbonBanner title={"Let Us Begin"} />
      <div className="discover-data-div">
        {discoverData.map((data) => {
          const { id, title, intro, char, howToConvert } = data;
          return (
            <article key={id} ref={refs[id]} className="discover-data-article">
              <h1 className="discover-data-title">{title}</h1>
              <p>{intro}</p>
              <h3 className="discover-data-subtitle">Characterstics</h3>
              <p>{char}</p>
              <h3 className="discover-data-subtitle">How to Become One?</h3>
              <p>{howToConvert}</p>
              <Link to="top" smooth={true} duration={100}>
                <button href="/discover" className="discover-data-a">
                  Back to Top
                </button>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default DiscoverDetails;
