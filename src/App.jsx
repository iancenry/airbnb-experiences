import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data'

function App() {
  const cardsArray = data.map(item => {
    return <Card 
            key={item.id}
            item ={item} 
    />
  })
  
  return (
    <div className="main-content">
      <Navbar />
      <Hero /> 
      <section className="cards-list example">
         {cardsArray}
      </section>
      
    </div>
  );
}

export default App;