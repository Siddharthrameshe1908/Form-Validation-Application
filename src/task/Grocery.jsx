import React from 'react'
import List from './List'

const Grocery = () => {
    let groceryItems = [
        {
          item : "Wheat" , 
          price : 500 , 
          id : 1
        } , 
        {
            item : "Sugar" , 
            price : 400 , 
            id : 2
          } ,
          {
            item : "Jowar" , 
            price : 300 , 
            id : 3
          } ,

          {
            item : "Rice" , 
            price : 700 , 
            id : 4
          } , 

          {
            item : "Milk" , 
            price : 600 , 
            id : 5
          } ,

          {
            item : "Butter" , 
            price : 800 , 
            id : 6
          } , 
          {
            item : "Corn" , 
            price : 200 , 
            id : 7
          } , 
          {
            item : "Dryfruits" , 
            price : 900 , 
            id : 8
          }
    ]
  return (
    <>
        {
            groceryItems.map((items) =>{
                return <List data={items} key={items.id}/>
            })
        }
    </>
  )
}

export default Grocery