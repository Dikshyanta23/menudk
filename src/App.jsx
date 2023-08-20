import { useState } from 'react'
import menu from './data'
import './index.css'
import Title from './Components/Title'
import Menu from './Components/Menu'
import Buttons from './Components/Buttons'

//get the buttons
const buttons = ['all', ...new Set(menu.map((single)=> single.category))]

function App() {
  const [menuItems, setMenuItems] = useState(menu)

//filter function
const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(menu)
    return;
  }
  const newMenu = menu.filter((menuItem)=> menuItem.category === category)
  setMenuItems(newMenu)
}

  return (
    <main>
      <Title />
      <Buttons buttons = {buttons} filterItems = {filterItems}/>
      <Menu items = {menuItems}/>
      </main>
  )
}

export default App
