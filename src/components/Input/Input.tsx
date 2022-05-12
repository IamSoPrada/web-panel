import React from "react";
import { StyledInput } from "@/styles";
import { useFocus } from "@/hook/useFocus";

type InputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  name: string;
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
