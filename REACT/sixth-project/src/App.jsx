import './App.css';
import Header from "./components/Header";
import Hero from "./components/hero";
import Counter from "./components/Counter";
function App(){
  return(
    <div className="app">
      <Header c="Logo"/>
      <Hero/>
      <Counter/>
    </div>
  )
}
export default App;