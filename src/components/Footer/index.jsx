import Social from "../Social";
import "./Footer.css";

const SOCIALS = [
  {
    text: "Twitter",
    img: "twitter.png",
    url: "https://twitter.com/matsuri_alpha?s=21&t=xC8uZ3TQIxfzpO4eC1qPsg",
  },
  {
    text: "Discord",
    img: "discord.png",
    url: "https://discord.gg/matsuri",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        {SOCIALS.map((item) => (
          <li key={item.text}>
            <Social {...item} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
