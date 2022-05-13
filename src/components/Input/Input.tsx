import React from "react";
import { useFocus } from "@/hook/useFocus";
import { StyledInput } from "@/styles/todo";

type InputProps = {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  name?: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({
  handleInputChange,
  type,
  value,
  name,
  placeholder,
}) => {
  const [ref] = useFocus();
  return (
    <StyledInput
      ref={ref}
      name={name}
      onChange={handleInputChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};
