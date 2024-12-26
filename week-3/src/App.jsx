import UseCard from "./coponenets/UseCard"
import Counter from "./coponenets/Counter"
import './styles.css'
function App() {
  return (
    <>
      <UseCard name="mesud" age={22} email='test@gmail.com' bgColor='#2E5077' />
      <Counter />
    </>

  )
}

export default App
