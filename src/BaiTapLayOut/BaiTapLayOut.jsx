import React, { Component } from 'react'
import BtConten from './BtConten'
import BtHeader from './BtHeader'
import BtNav from './BtNav'

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <div>
        <BtHeader/>
        <div className='d-flex'>
          <div className='w-25'>
            <BtNav/>
          </div>
          <div className='w-75'>
            <BtConten/>
          </div>
          
        </div>
      </div>
    )
  }
}
