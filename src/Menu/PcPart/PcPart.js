import React from 'react'
import './PcPart.css'
import Item from './Item/Item'

export default class PcPart extends React.Component{
    render(){
        return(
            <div key={this.props.partName} className='feature'>
                <div className='feature__name'>{this.props.partName}</div>
                <ul className='feature__list'>
                    {this.props.options.map((item, index)=>
                        <Item 
                        itemName={item.name} 
                        key={index} 
                        itemCost={item.cost} 
                        feature={this.props.partName} 
                        updateFeature={this.props.updateFeature}
                        selected={this.props.selected}
                        />
                    )}            
                </ul>
            </div>
        )
    }
}