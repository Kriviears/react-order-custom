import React from 'react'
import './Menu.css'
import PcPart from './PcPart/PcPart'

export default class Menu extends React.Component{
    render(){
        return(
            <section className='main__form'>
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {this.props.parts.map((part)=>
                    <PcPart
                        key={part} 
                        partName={part} 
                        options={this.props.Features[part]} 
                        updateFeature={this.props.updateFeature}
                        selected={this.props.selected}
                        />)}
            </section>
        )
    }
}