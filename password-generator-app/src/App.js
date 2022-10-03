import './App.css';
import Input from "./components/Input/Input"
import Slide from './components/Slider/Slide';

function App() {
  return (
    <div className="App bg-myBlack h-screen">
        <h1 className="text-mySilver text-center font-bold text-base">
          Password Generator
        </h1>

      <Input/>
      <Slide/>
    </div>
  );
}

export default App;
