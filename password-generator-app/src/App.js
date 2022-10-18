import './App.css';
import Button from './components/Button/Button';
import Checkboxes from './components/Checkbox/Checkboxes';
import Input from "./components/Input/Input"
import Slide from './components/Slider/Slide';
import Strength from './components/Strength/Strength';
import { useState } from 'react';

function App() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "~`!@#$%^&*()-_+={}[]|/:;'<>,.?";
    const [finalPassword, setFinalPassword] = useState("");

    const [passLength, setPassLenght] = useState(10);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    
    const getLength = (data) => {setPassLenght(data)};

    const checkbox1 = (data) => {setCheck1(data)};
    const checkbox2 = (data) => {setCheck2(data)};
    const checkbox3 = (data) => {setCheck3(data)};
    const checkbox4 = (data) => {setCheck4(data)};

    function makeid(length) {
      var result = '';
      var checkConditions = 0;
      for ( var i = 0; i < length; i++ ) {
        if (check1 === true) {
          result += uppercase.charAt(Math.floor(Math.random() * 
          uppercase.length));
          checkConditions += 1;
        } else if (check2 === true) {
          result += lowercase.charAt(Math.floor(Math.random() * 
          uppercase.length));
          checkConditions += 2;
        } else if (check3 === true) {
          result += numbers.charAt(Math.floor(Math.random() * 
          uppercase.length));
          checkConditions += 4;
        } else if (check4 === true) {
          result += symbols.charAt(Math.floor(Math.random() * 
          uppercase.length)); 
          checkConditions += 8;
        }

     }

     setFinalPassword(result);
     return result;
  }

  return (
    <div className="App bg-myBlack h-screen flex flex-col justify-center ">
        <h1 className="text-mySilver text-center font-bold text-base pb-4">
          Password Generator
        </h1>

      <Input sentInput={finalPassword}/>
      <Slide setPassLenght={getLength}/>
      <Checkboxes checkbox1={checkbox1} checkbox2={checkbox2} checkbox3={checkbox3} checkbox4={checkbox4}/>
      <Strength/>
      <Button />
    </div>
  );
}

export default App;
