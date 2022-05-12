import React, {useState} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from './Order';


const showOrders = (props) => { 
  return (<div>
    {props.orders.map(el => (
    <Order key={el.id} item={el} />
  ))}
</div> )
}


const showNothing = () => { 
  return(
    <div className='emty'>
      <h2>Добавьте хотя бы один товар</h2>
    </div>
  )
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
    <header>
        <div>
            <span className='logo'>KKT Rostov-on-Don</span>
            <ul className='nav'>
                <li>Кабинет</li>
                <li>Про нас</li>
                <li>Контакты</li>
            </ul>
            <AiOutlineShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen &&  'active'}  `}/>

            {cartOpen && (
              <div className ='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className= 'presentation'></div>
    </header>
  )
}
