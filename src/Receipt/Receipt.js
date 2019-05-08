import React from 'react'
import './Receipt.css'
import CartItem from './CartItem/CartItem'


export default class Reciept extends React.Component{
    render(){
        const formattedTotal = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.total)
        
        return(
            <section className='main__summary'>
                <h3>NEW GREENLEAF 2018</h3>
                {this.props.items.map((item, index) =>
                    <CartItem key={index} part={item} itemName={this.props.selected[item].name} itemCost={this.props.selected[item].cost}/>
                )}
                
                <div className='summary__total'>
                    <div className='summary__total__label'>Your Price: </div>
                    <div className='summary__total__value'>{formattedTotal}</div>
                </div>
            </section>
        )
    }
}