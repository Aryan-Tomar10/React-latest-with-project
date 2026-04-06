import React from "react";
import "./App.css";
import Card from "./Components/card";

function App() {
  let myobj={username:'Aryan', age:21}

  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-gray-700 text-yellow-100 mb-4">Welcome to TailwindCSS</h1>
      <Card userName='chai' btnText="click me"/>
      <Card userName='Aryan' btnText="Click Here"/>
    </>
  );
}

export default App;
