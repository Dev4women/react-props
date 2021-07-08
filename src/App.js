
import './App.css';
import Profile from './profile/Profile_component'
import Child from './component/Child'
import squirrel from "./profile/squirrel.jpg"




function App() {
  const handleName = (name) =>{
    alert(`Name of profile user is ${name}`)
  }
 
  return (
    <div className="App">
      <Child
      name="Fayza"
      handleName={handleName}>      
      </Child>

      <Profile
      fullName="Fayza Yaiche-Temam"
      profession="Developper"
      bio="Student in GoMyCode"
      handleName={handleName}>
        <img src={squirrel} alt="img"/>
      </Profile>
    </div>
  )
  
}

export default App;
