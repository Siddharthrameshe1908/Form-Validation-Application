import React from 'react'

const List = (props) => {

    console.log(props);
    
    let {item,price,id} = props.data
    
  return (
    <>
    { price > 500 ? (
                <div className="itemlist bg-slate-300">
                <h1>Item : {item}</h1>
                <h2>Price: {price}</h2>
                <h2>ID: {id}</h2>
            </div>
    ) : (
        <div className='itemlist bg-yellow-50'>
        <h1>Item : {item}</h1>
        <h2>Price: {price}</h2>
        <h2>ID: {id}</h2>
    </div>
    )
    }
    </>
  )
}

export default List