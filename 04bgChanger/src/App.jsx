import { useState } from "react";
import Button from "./Components/button";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-10 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <Button name='Blue' onClicks={() => setColor("blue")} styles={{ backgroundColor: "blue" }}/>
          <Button name='Red' onClicks={() => setColor("red")} styles={{ backgroundColor: "red" }}/>
          <Button name='Green' onClicks={() => setColor("green")} styles={{ backgroundColor: "green" }}/>
          <Button name='Grey' onClicks={() => setColor("grey")} styles={{ backgroundColor: "grey" }}/>
          <Button name='olive' onClicks={() => setColor("olive")} styles={{ backgroundColor: "olive" }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
