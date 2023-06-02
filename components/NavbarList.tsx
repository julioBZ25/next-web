'use client'
import Link from 'next/link'
import { useState } from 'react';
import { BiBrain, BiFile, BiUser, BiCommentAdd } from "react-icons/bi";


type Props = {
  messages: {
    About: string,
    Skills: string,
    Projects: string,
    Contact: string
  }
  isNav: boolean
}

const NavbarList = ({messages, isNav}: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    {
      isNav ? ()
      :()
    }
  )
}

export default NavbarList