import './App.css';
import BirthdayMatrix from './components/BirthdayMatrix';
import BirthdayImage from './components/BirthdayImage'

function App() {
  return (
    <div className="App">
      <div>
        <BirthdayMatrix className="birthday-area"/>
        <BirthdayImage className="birthday-image"/>
      </div>
    </div>
  );
}

export default App;
