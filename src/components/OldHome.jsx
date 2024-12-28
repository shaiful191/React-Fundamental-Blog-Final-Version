// This component is for learning click-event and useState().
// For create a React Project using vite : npm create vite@latest fundamental-blog

import { useState } from "react";

const OldHome = () => {
  // let name = 'mario';
  const [name, setName] = useState('Abdulla');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('ayan'); // After use setName() the state will be updated.And the component will be re-rendered.
    setAge(30);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Old Homepage for learning click-event and useState</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Shaiful', e)}>Click me again</button>
    </div>
  );
}
 
export default OldHome;