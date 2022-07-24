import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id:1,
        name:'pro 1',
        price:1000,
        img: 'http://picsum.photos/id/2/200/200'
    }
  rendercardproduct = () => {
    return (<div className='card'>
            <img src={this.product.img} alt=""/>
            <div className='card-body bg-dark text-white'>
                <p>{this.product.name}</p>
                <p>{this.product.price}</p>
            </div>
    </div>)
  }
  render() {
    const title = 'sfsdfsf';
    const person = {
        name:'fgfdgd',
        age:25
    }
    const ex = (tenLop) => {
        return `hello ${tenLop}`;
    }
    return (
       <div className='container'>
            <p>{title}</p>
            <div className='card w-25 mt-2'>
                <img src="http://i.pravatar.cc?u=1" alt="" />
                <div className='card-body'>
                    <p>Name: {person.name}</p>
                    <p>Age {person.age}</p>
                </div>
            </div>
            <br />
            {ex('bc28')}
            <hr />
            <div className='alert alert-primary'>
                product infor:
                <p>id: {this.product.id}</p>
                <p>name: {this.product.name}</p>
                <p>price: {this.product.price}</p>
                <img src={this.product.img} alt="" />
            </div>
            <hr />
            <div className='w-25'>
                {this.rendercardproduct()}
            </div>
        </div>
    )
  }
}
