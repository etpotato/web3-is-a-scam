import "./Button.css";

export const BUTTON_STATE = {
  live: "live",
  sold: "sold",
  closed: "closed",
};

export default function Button({ state, onClick, disabled }) {
  const handleClick = (evt) => {
    evt.target.blur();
    onClick?.(evt);
  };

  switch (state) {
    case BUTTON_STATE.live:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.live}`}
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
          className={`btn ${BUTTON_STATE.sold}`}
          type="button"
          disabled={disabled ?? true}
        >
          Out of stock
        </button>
      );
    default:
      return (
        <button
          onClick={handleClick}
          className={`btn ${BUTTON_STATE.closed}`}
          type="button"
          disabled={disabled ?? true}
        >
          Mint is closed
        </button>
      );
  }
}
