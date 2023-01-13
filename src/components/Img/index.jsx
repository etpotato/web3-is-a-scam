import "./Img.css";

export default function Img({ src, alt }) {
  return (
    <div className="img-wrap">
      <img src={src} alt={alt} className="img-img" width="480" height="480" />
      <p className="img-text">MINT YOUR MANTSURI NOW</p>
    </div>
  );
}
