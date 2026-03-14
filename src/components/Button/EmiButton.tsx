"use client";

export type EmiButtonProps = {
  buttonText: string;
  onClick: () => void;
  secondary?: boolean;
  round?: boolean;
};

export const EmiButton = ({ buttonText, onClick, secondary, round }: EmiButtonProps) => {
  return <button className={`text-md ${round ? "rounded-full w-8 h-8 flex items-center justify-center" : "p-2.5 rounded-md"} ${secondary ? "bg-black text-white" : "bg-white border border-black"}`} onClick={onClick}>{buttonText}</button>;
};
