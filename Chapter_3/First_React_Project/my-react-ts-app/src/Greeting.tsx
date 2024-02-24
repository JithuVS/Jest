import React from "react";

interface GreetingProps {
  name: string; // Define a prop to receive the name to greet
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
