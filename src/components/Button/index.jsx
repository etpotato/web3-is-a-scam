import "./Button.css";

export const BUTTON_STATE = {
  live: "live",
  sold: "sold",
  claim: "claim",
  closed: "closed",
};

export default function Button({ state, onClick, disabled, className }) {
  const handleClick = (evt) => {
    evt.target.blur();
    onClick?.(evt);
  };

  switch (state) {
    case BUTTON_STATE.live:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.live} ${className}`}
          type="button"
          disabled={disabled ?? false}
        >
          Mint is live
        </button>
      );
    case BUTTON_STATE.sold:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.sold} ${className}`}
          type="button"
          disabled={disabled ?? true}
        >
          Out of stock
        </button>
      );
    case BUTTON_STATE.claim:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.claim} ${className}`}
          type="button"
          disabled={disabled ?? false}
        >
          Claim girl
        </button>
      );

    default:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.closed} ${className}`}
          type="button"
          disabled={disabled ?? true}
        >
          Mint is closed
        </button>
      );
  }
}
