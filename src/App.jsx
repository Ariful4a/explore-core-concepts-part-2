import './App.css'
import Counter from './counter';
import Team from './teem';
import Users from './users';
import Friends from './friends';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
    <h3>React core concepts 2</h3>
    <Counter></Counter>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <button onClick={handleClick} className='button'>Click me</button>
    <button onClick={handleClick2} className='button'>Click 2</button>
    <button onClick={() => {alert('third clicked')}}>third</button>
    <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
