// async function bootstrap(){
//   console.log("App started")
// }
// bootstrap();

// Hello command
export const hello = (name: string) => console.log(`Hello ${name}`);

import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
console.log("🚀 ~ file: index.tsx:20 ~ Button:", Button);
