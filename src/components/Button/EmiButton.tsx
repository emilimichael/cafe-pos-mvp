"use client";

export type EmiButtonProps = {
  buttonText: string;
  onClick: () => void;
  secondary?: boolean;
};

export const EmiButton = ({ buttonText, onClick, secondary }: EmiButtonProps) => {
  return <button className={`text-md p-2.5 rounded-md ${secondary ? "bg-black text-white" : "bg-white"}`} onClick={onClick}>{buttonText}</button>;
};
