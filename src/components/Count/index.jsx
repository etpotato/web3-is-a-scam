import "./Count.css";

export default function Count({ current = 0, max = 0 }) {
  return (
    <p className="count">
      <span>TOTAL MINTED</span>
      <span>
        {current}/{max}
      </span>
    </p>
  );
}
