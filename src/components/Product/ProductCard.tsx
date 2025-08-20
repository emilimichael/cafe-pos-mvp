'use client'
import React from "react";

export type ProductProps = {
    id: number;
    title: string;
    description?: string;
    price: string;
    onClick: () => void
}

export const ProductCard = ({ title, description, price, onClick}: ProductProps) => {
    return (
      <div className="flex flex-col items-center  bg-sky-200 w-60 p-3 rounded-md" onClick={onClick}>
        <span className="text-xl pb-3 w-full truncate text-center">{title}</span>
        <span className="text-sm">{description}</span>
        <span>{price}</span>
      </div>
    );
    
}