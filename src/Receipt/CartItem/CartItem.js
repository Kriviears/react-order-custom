import React from 'react'
import './CartItem.css'

export default class CartItem extends React.Component{

    render(){
        const formattedCost = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.itemCost)

        return(
            <div className="summary__option">
                <div className='summary__option__label'>
                    {this.props.part}
                </div>
                <div className='summary__option__value'>
                    {this.props.itemName}
                </div>
                <div className='summary__option__cost'>
                    {formattedCost}
                </div>
            </div>
        )
    }
}