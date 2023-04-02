import './App.css';
import BirthdayMatrix from './components/BirthdayMatrix';
import BirthdayImage from './components/BirthdayImage'
import BirthdayText from './components/BirthdayText';

function App() {
  return (
    <div className="App">
      <div className="profile">
        <div className="birthday-profile">
          <BirthdayImage className="birthday-image"/>
          <BirthdayText className="birthday-text"/>
        </div>
      </div>
      <BirthdayMatrix className="birthday-background"/>
    </div>
  );
}

export default App;
