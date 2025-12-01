export default function AnimeLIst({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="props.image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}