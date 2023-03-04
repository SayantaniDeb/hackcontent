import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/11.gif'
import NavComponent from './Navbar'

function Section() {
  return (
    <>
      <NavComponent/>
      <div className="flex flex-col items-center md:flex-row justify-center md:justify-between">
        <img src={logo} alt="Logo" className="w-full md:mt-16 md:w-1/2 mx-4" />
        <div className="text-xl text-center mt-16 md:mt-4 md:text-left md:ml-4 md:text-left md:pr-16 md:text-left md:text-left lg:text-left">
         <h1 className='text-4xl'>
          Start creating with ease
        </h1>
        <h4>
        Let us guide your content creation journey and make it easy for you.
        </h4>
        <Button className='mx-2 mt-4'>Idea</Button>
        <Button className='mx-2 mt-4'>Voice-over</Button>
        <Button className='mx-2 mt-4'>Context</Button>
        <Link to="/hashtag"><Button className='mx-2 mt-4'>Hashtag</Button></Link>
        <Link to="/chatapp"><Button className='mx-2 mt-4'> Collaborate with Others!</Button></Link>
        </div>
      </div>
      

    </>
  )
}

export default Section
