import { MouseEventHandler } from "react";
export type ButtonProps = {
  title: string;
  btnType?: "button" | "submit";
  designs?: string;
  handleClick?: MouseEventHandler;
  disabled?: boolean;
  rightIcon?: string;
};
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
export type OptionType = {
  label: string;
  value: string;
};
export type filterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};
