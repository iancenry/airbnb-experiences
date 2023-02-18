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


//alternative  --applies in components without many props
/*
<Card 
            key={item.id}
            img ={require(`./images/${item.coverImg}`)}   
            rating = {item.stats.rating}   
            reviewCount = {item.stats.reviewCount} 
            location = {item.location}
            title = {item.title}
            price = {item.price}
            openSpots = {item.openSpots}
    
    />*/

// the syntax above is exactly similar as the one below but using the spread operator
/*<Card 
            key={item.id}
            {...item}
    
    />*/
