import React from 'react'
import './Item.css'


export default class Item extends React.Component{
    render(){
        const selectedClass = this.props.selected.includes(this.props.itemName) ? 'feature__item feature__selected' : 'feature__item'
        const formatedCost =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.itemCost) 

        const newValue = {cost: this.props.itemCost, name: this.props.itemName}
        return(
            <li 
            className={selectedClass} 
            onClick={e => this.props.updateFeature(this.props.feature, newValue)}>
                <div className='feature__option' >
                    {this.props.itemName} {formatedCost}
                </div>
            </li>
        )
    }
}