import { CSSProperties } from "react";
import { ValueContainer } from "react-select/animated";

const controlStyles: CSSProperties = {
  border: "1px dotted black",
};
const containerStyles: CSSProperties = {
  width: "20%",
  border: "1px solid yellow",
  position: "relative",
};
const menuStyles: CSSProperties = {
  border: "1px solid red",
};
const valueContainerStyles: CSSProperties = {
  position: "relative",
};

export const customDropDownStyles = {
  control: (base: any) => ({ ...base, ...controlStyles }),
  container: (base: any) => ({ ...base, ...containerStyles }),
  menu: (base: any) => ({ ...base, ...menuStyles }),
  ValueContainer: (base: any) => ({ ...base, ...valueContainerStyles }),
};
