import React from 'react'
import { Container, Content } from './styles'
import { HiMenu } from "react-icons/hi";

import { 
  FaTimes, 
  FaUserAlt, 
} from 'react-icons/fa'

import SidebarItem from '../Sidebaritem'
interface ISideBarMenuProps{
  onActive:()=>void
  active:boolean
}
const Sidebar = ({ active,onActive }:ISideBarMenuProps) => {

  const closeSidebar = () => {
    onActive()
  }

  return (
    <Container sidebar={active}>
      {
      
      active?(<FaTimes  onClick={closeSidebar} />  ):(<HiMenu onClick={onActive}  />
        )
      }
      {
        active &&( <Content>
       
          <SidebarItem Icon={FaUserAlt} text="Pacientes " />
          
        </Content>)
      }
     
    </Container>
  )
}

export default Sidebar