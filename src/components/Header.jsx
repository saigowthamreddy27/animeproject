import animeImage from "../assets/dragonball.png";

const render = ["H!ANIME", "h!anime"];

function renderHiAnime(add) {
  return Math.floor(Math.random() * (add + 1));
}
export default function Header() {
  const hiAnime = render[renderHiAnime(1)];

  return (
    <header>
      <img src={animeImage} alt="Stylized atom" />
      <h1>{hiAnime}</h1>
      <p>
        we’ve got tons of anime in HD, it’s all easy to watch, and it works on
        all your devices, smooth like butter . And it’s all totally free!
      </p>
    </header>
  );
}
