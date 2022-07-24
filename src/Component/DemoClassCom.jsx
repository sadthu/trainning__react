import React, { Component } from 'react'

export default class DemoClassCom extends Component {
  render() {
    return (
      <div>
        <div className='card text-white bg-primary'>
            <img src="https://picsum.photos/208/200" className='card-img-top' alt="" />
            <div className='card-body'>
                <h4 className='card-title'>title</h4>
            </div>
        </div>
      </div>
    )
  }
}
