import React  from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Items from "./Components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [], 
      items: [
        {
          id: 1,
          title: 'Смарт-терминал Эвотор 5',
          price: '15900',
          img: 'evotor-5.png',
          category: 'Evotor'
        },
        {
          id: 2,
          title: 'Смарт-терминал Эвотор 7.2',
          price: '19300',
          img: 'evotor-7.2.png',
          category: 'Evotor'
        },
        {
          id: 3,
          title: "Смарт-терминал Эвотор 7.3",
          price: '19300',
          img: 'evotor-7.3.jpeg',
          category: 'Evotor'
        },
        {
          id: 4,
          title: "Смарт-терминал Эвотор 10",
          price: '19300',
          img: 'evotor-10.jpeg',
          category: 'Evotor'
        },
        {
          id: 5,
          title: 'Смарт-терминал Эвотор 5',
          price: '15900',
          img: 'evotor-5.png',
          category: 'Evotor'
        },
        {
          id: 6,
          title: 'Смарт-терминал Эвотор 5',
          price: '15900',
          img: 'evotor-5.png',
          category: 'Evotor'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
      
    );
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item] })
    
  }
  
}

export default App;
