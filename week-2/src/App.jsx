import DisplayNames from "./components/DisplayNames"
import './App.css';

function App() {
  const names = ['John', 'Emma', 'Michael', 'Sophia', 'David'];
  return (
    <div className="app-container">
       <h1>Welcome to the Name Display App</h1>
      {
        names.map((name,index) => (
          <DisplayNames key={index} name={name} />
        ))
      }
    </div>

  )
}

export default App
