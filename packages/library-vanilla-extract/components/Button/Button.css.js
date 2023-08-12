import { style } from "@vanilla-extract/css";

const styles = style({
  backgroundColor: "#007DB8",
  padding: "8px 12px",
  borderWidth: 0,
  borderRadius: "4px",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#005B94",
  },
});

export default styles;
