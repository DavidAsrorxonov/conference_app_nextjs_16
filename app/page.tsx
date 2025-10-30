import Hello from "@/components/hello";
import React from "react";

const Home = () => {
  console.log("What type of component am i");

  return (
    <div className="text-5xl underline">
      Home
      <Hello />
    </div>
  );
};

export default Home;
