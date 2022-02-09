import './App.css';
import Profile from './Profile/Profile';


function App() {
    const handleName = (x) => alert(` ${x}`);
  return (
    <div className="App">
      <Profile FullName="Yassine Chatti" Bio="This is my bio" Profession="teacher" handleName={handleName}>
      <img src='image.jpg' alt='profile'/>
        </Profile>
    </div>
  );
}

export default App;
