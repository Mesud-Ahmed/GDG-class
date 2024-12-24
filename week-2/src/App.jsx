import DisplayNames from "./DisplayNames"
function App() {
  const names = ['a', 'b', 'c', 'd', 'h']
  return (
    <div>
      {
        names.map((name,index) => (
          <DisplayNames key={index} name={name} />
        ))
      }
    </div>

  )
}

export default App
