import * as React from "react";

const Size = {
  small: "w-10",
  medium: "w-32",
  large: "w-40",
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: keyof typeof Size;
};

export function Button({ children, onClick, size = "medium" }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-full cursor-pointer border border-solid border-blue-200 font-bold w- text-blue-200 p-2 h-10 ${
        size === "small"
          ? Size.small
          : size === "medium"
          ? Size.medium
          : Size.large
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
