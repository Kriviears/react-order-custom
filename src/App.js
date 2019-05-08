import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu'
import Receipt from './Receipt/Receipt'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }


  render() {


    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <Menu
              selected={Object.keys(this.state.selected).map(part => this.state.selected[part].name)}
              parts={Object.keys(this.props.features)} 
              Features={this.props.features}
              updateFeature={(feature, newValue)=>this.updateFeature(feature, newValue)}/>

          <Receipt 
              items={Object.keys(this.state.selected)} 
              selected={this.state.selected} 
              total={total}/>
        </main>
      </div>
    );
  }
}

export default App;  
