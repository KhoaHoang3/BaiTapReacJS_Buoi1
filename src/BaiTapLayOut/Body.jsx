import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div className='container'>
          {/* Banner */}
          <div className='row'>
              <Banner/>
          </div>
          {/* items */}
          <div className='row'>
              <Item/>
          </div>
      </div>
    )
  }
}

