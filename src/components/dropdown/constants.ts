import { CSSProperties } from "react";
import { ValueContainer } from "react-select/animated";

const controlStyles: CSSProperties = {};
const containerStyles: CSSProperties = {
  border: "1px solid black",
  position: "relative",
  maxWidth: "50%",
};
const menuStyles: CSSProperties = {
  border: "1px solid black",
};
const valueContainerStyles: CSSProperties = {
  position: "relative",
  display: "flex",
  whiteSpace: "nowrap",
};

export const customDropDownStyles = {
  control: (base: any) => ({ ...base, ...controlStyles }),
  container: (base: any) => ({ ...base, ...containerStyles }),
  menu: (base: any) => ({ ...base, ...menuStyles }),
  valueContainer: (base: any) => ({ ...base, ...valueContainerStyles }),
};
