import React from 'react'
import Item from './Item'

const Menu = ({items}) => {
  return (
    <div className='menu'>
      {items.map((item)=> {
        return <Item key = {item.id} {...item} />
      })}
    </div>
  )
}

export default Menu
