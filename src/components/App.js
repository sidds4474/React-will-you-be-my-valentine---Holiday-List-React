
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' }
    ]
    this.showCity = this.showCity.bind(this)
  }
  
  showCity() {
    let new_city = this.cityList.filter(location => {
      if(location.country === 'India') return location
    })
    let result = new_city.map((city, index) => (
      <li key={`location${index+1}`}>{city.name}</li>
    ))
    return result
  }

  render() {
    return (
      <div id="main">
        <ol>
          {this.showCity()}
        </ol>
      </div>
    )
  }
}


export default App;
