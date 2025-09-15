import './App.css'
import Counter from './Counter'
import Batsman from './batsman'
import Bowler from './Bowler'
function App() {
  function handleClick(){
    alert('i am clicked')
  }
  const handleClick3 = () =>{
    alert('clicked 3')
  }
  const handleAdd5 = (num) =>{
    const newNumber = num + 5;
    alert(newNumber);
  }


  const sub  = (num1,num2)=>{
    const subbed = num1 - num2;
    alert(subbed);
  }
  return (
    <>
      <h3>Vite + React</h3>

      <Bowler></Bowler>

      <Batsman></Batsman>

      <Counter> </Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('click 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={()=>{
        alert('click 4')
      }}>click me 4</button>

      <button onClick={()=>handleAdd5(10)}>click add 5</button>

      <button onClick={()=>sub(7,2)}>Btn 6</button>
    </>
  )
}

export default App
