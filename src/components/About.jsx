import React from 'react'
import User from './User'
import UserClass from './UserClass'
import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Interval is added in functional component")
    }, 1000)

    return ()=>{
      clearInterval(timer)
    }
  }, [])
  return (
    <>
    <div>About</div>
    <User name="Piyush"/>
    {/* <UserClass name="Component 1"/> */}
    {/* <UserClass name="Component 2"/> */}
    </>

  )
}

export default About