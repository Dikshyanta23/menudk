import React from 'react'

const Buttons = ({buttons, filterItems}) => {
  return (
    <div className='btns'>
      {buttons.map((singlebutton) => {
        return (<button className='btn' key= {singlebutton} onClick = {()=> filterItems(singlebutton)}>{singlebutton}</button>)
      })}
    </div>
  )
}

export default Buttons
