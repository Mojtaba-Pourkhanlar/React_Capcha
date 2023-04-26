export const divLayout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 90px)",
};
export const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "50%",
  width: "400px",
  borderRadius: "16px",
  backgroundColor: "rgba(224, 224, 224, 0.01)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(2px) saturate(112%)",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  padding: "1rem 2rem",
  color: "white",
};

// Captcha Style
export const root = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  marginTop: 15,
  position: "relative",
};
export const rnc = {
  width: "100%",
  height: 50,
  display: "flex",
  flexDirection: "row",
  // backgroundColor: "#fff",
  borderRadius: 5,
  boxSizing: "border-box",
  direction: "initial",
  alignItems: "center",
  marginBottom: 15,
  border: "1px solid #4C5366",
};
export const rncRow = {
  display: "flex",
  alignItems: "center",
};
export const rncColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "0 0 0 10px",
};
export const rncCanvas = {
  width: 130,
  height: 38,
  boxSizing: "border-box",
  backgroundColor: "transparent",
  borderRadius: 10,
  background: "#616161",
};
export const rncButton = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  border: "none",
  padding: 0,
  width: 20,
  height: 19,
  boxSizing: "border-box",
  borderRadius: 4,
  fill: "#ccc",
  marginRight: 3,
  "& SVG": {
    width: 20,
    height: 19,
    fill: "#ccc",
  },
};
export const errorStyle = {
  color: "#d32f2f",
  fontSize: 10,
  position: "absolute",
  width: "98%",
  marginRight: 30,
  marginTop: 67,
  textAlign: "end",
};
export const rncInput = {
  width: "inherit",
  height: 44,
  border: "none",
  paddingLeft: 10,
  borderRadius: 4,
  fontSize: 18,
  color: "#fff",
  outline: "none",
  textAlign: "end",
  background: "transparent",
};
export const label = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 12,
  color: "#ccc",
  margin: 0,
  marginLeft: 5,
};
