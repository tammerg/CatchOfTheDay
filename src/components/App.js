import React from "react";
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes}
    // 2. Add our new fishes to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({fishes});
    console.log(fishes);
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }
  addToOrder = (key) => {
    //1. Take a copy of state
    const order = {...this.state.order}
    //2. Either add to order, or update the quantity in cart
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state object
    this.setState({order});
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="Tams Seafood Market"/>
        <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => 
          <Fish 
          addToOrder={this.addToOrder}
          key={key} 
          index={key}
          details={this.state.fishes[key]}
         />)}
        </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory 
        addFish={this.addFish} 
        loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
