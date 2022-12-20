import './App.css';
import Button from './components/Button/Button';
import Checkboxes from './components/Checkbox/Checkboxes';
import Input from "./components/Input/Input"
import Slide from './components/Slider/Slide';
import Strength from './components/Strength/Strength';
import { useState, useEffect } from 'react';

function App() {
    const [finalPassword, setFinalPassword] = useState("");

    const [passLength, setPassLenght] = useState(10);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    
    const getLength = (data) => {setPassLenght(data)};
    const [strength, setStrength] = useState(0);

    const checkbox1 = (data) => {setCheck1(data)};
    const checkbox2 = (data) => {setCheck2(data)};
    const checkbox3 = (data) => {setCheck3(data)};
    const checkbox4 = (data) => {setCheck4(data)};

    function makeid(length) {
      let password = ''
      for (let i = 0; i < length; i++) {
        let choice = random(0, 3)
       
        if (check2 && choice === 0) {
          password += randomLower();
        } else if (check1 && choice === 1) {
          password += randomUpper();
        } else if (check4 && choice === 2) {
          password += randomSymbol()
        } else if (check3 && choice === 3) {
          password += random(0, 9)
        } else if(!check1 && !check2 && !check3 && !check4){
          setStrength(0);
          password = "";
        } else {
          i--
        }
      }
      setFinalPassword(password);
      return password;
  }

  const handleStrength = () => {
    
  }

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  const randomLower = () => {
    return String.fromCharCode(random(97, 122))
  }

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90))
  }

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
    return symbols[random(0, symbols.length - 1)]
  }

  return (
    <div className="App bg-myBlack h-screen flex flex-col justify-center ">
        <h1 className="text-mySilver text-center font-bold text-base pb-4">
          Password Generator
        </h1>

      <Input pass={finalPassword}/>
      <Slide setPassLenght={getLength}/>
      <Checkboxes checkbox1={checkbox1} checkbox2={checkbox2} checkbox3={checkbox3} checkbox4={checkbox4}/>
      <Strength sentStrength={strength} setStrength={() => setStrength(strength)}/>
      <Button generate={() => { makeid(passLength); handleStrength();}}/>
    </div>
  );
}

export default App;
