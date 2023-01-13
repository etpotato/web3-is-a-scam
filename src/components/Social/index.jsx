import "./Social.css";

export default function Social({ img, url, text }) {
  return (
    <a
      href={url}
      className="social"
      style={{ backgroundImage: `url(${img})` }}
      target="_blank"
      rel="noreferrer"
    >
      <span className="social-text">{text}</span>
    </a>
  );
}
