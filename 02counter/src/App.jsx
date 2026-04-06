import { useState } from 'react'

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);
  const addValue=()=>{
    // console.log("Value Added",counter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
  }

  const subValue=()=>{
    console.log("Value Subtracted",counter-1)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase {counter}</button>
      <br />
      <button onClick={subValue}>Decrease {counter}</button>
    </>
  )
}

export default App
