import React from "react";
import {
  root,
  rnc,
  rncRow,
  rncColumn,
  rncCanvas,
  rncButton,
  error,
  rncInput,
  label,
} from "../../styles";

export const Captcha = () => {
  return (
    <div style={root}>
      {/* <p style={label}>{"placeholder"}</p> */}
      <div style={rnc}>
        <div style={rncRow}>
          <div style={rncColumn}>
            <button
              type="button"
              aria-label="get new captcha"
              // onClick={refresh}
              style={rncButton}
              data-testid="captcha-refresh"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="refresh">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" />
                  </g>
                </g>
              </svg>
            </button>
            <button
              type="button"
              aria-label="play audio"
              // onClick={playAudio}
              style={rncButton}
              data-testid="captcha-audio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="volume-up">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z" />
                    <path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z" />
                    <path d="M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <canvas
            //   ref={canvas}
            width={120}
            height={40}
            style={rncCanvas}
            data-testid="captcha-canvas"
          />
        </div>
        <input
          // value={input}
          // onChange={handleChange}
          style={rncInput}
          data-testid="captcha-input"
          maxLength={5}
          autoComplete="new-password"
        />
      </div>
      {/* {error && <p style={error}>{helper}</p>} */}
    </div>
  );
};
