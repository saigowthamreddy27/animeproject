import { Anime_Detailes } from "./animeDetailes";
import Header from "./components/Header.jsx";
import AnimeLIst from "./components/AnimeList.jsx";
import Click from "./components/button.jsx";
import { useState } from "react";
import { INFO } from "./animeDetailes";

function App() {
  let [anime, setAnime] = useState();
  function clickMe(Select1Button) {
    setAnime(Select1Button);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Top 3 Jonurs</h2>
        <section id="anime-list">
          <ul>
            <AnimeLIst
              title={Anime_Detailes[0].title}
              description={Anime_Detailes[0].description}
              image={Anime_Detailes[0].image}
            />
          </ul>
        </section>
        <section id="anime-list">
          <ul>
            <AnimeLIst {...Anime_Detailes[1]} />
          </ul>
        </section>
        <section id="anime-list">
          <ul>
            {" "}
            <AnimeLIst {...Anime_Detailes[2]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Share HiAnime to your friends</h2>
          <menu>
            <Click className={anime==="TopAiring"?'active':""} onClick={() => clickMe("TopAiring")}>Top Airing</Click>
            <Click className={anime==="MostPopular"?'active':""} onClick={() => clickMe("MostPopular")}>Most Popular</Click>
            <Click className={anime==="MostFavorite"?'active':""} onClick={() => clickMe("MostFavorite")}>Most Favorite</Click>
            <Click className={anime==="LatestCompleted"?'active':""} onClick={() => clickMe("LatestCompleted")}>
              Latest Completed
            </Click>
          </menu>
          {!anime ? <p>select one button</p> : null}
          {anime ? (
            <p>
              <div id="tab-content">
                <h3>{INFO[anime].title} </h3>
                <p>{INFO[anime].description}</p>
              </div>
            </p>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
