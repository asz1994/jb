import './App.css';
import BirthdayMatrix from './components/BirthdayMatrix';
import BirthdayImage from './components/BirthdayImage'

function App() {
  return (
    <div className="App">
      <div>
        <div className="birthday-profile">
          <BirthdayImage className="birthday-image"/>
          <div>
          </div>
        </div>
        <BirthdayMatrix className="birthday-background"/>
      </div>
    </div>
  );
}

export default App;
