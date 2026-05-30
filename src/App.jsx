import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Second from './Components/Second'
import Third from './Components/Third'
import Four from './Components/Four'
import Five from './Components/Five'
import Six from './Components/Six'
import Seven from './Components/Seven'
import Nine from './Components/Nine'
import Ten from './Components/Ten'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='flex flex-col'>
      <Nav/>
      <Hero/>
      <h1 className='uppercase ml-20 text-4xl'>Fresh from Our Community</h1>
      <Second/>
      <h1 className='uppercase mt-10 ml-20 text-4xl'>What We're Craving</h1>
      <Third/>
      <h1 className='uppercase mt-10 ml-20 text-4xl'>Explore More</h1>
      <Four/>
      <h1 className='uppercase mt-10 ml-20 text-4xl'>Trending Now</h1>
      <Five/>
      <h1 className='uppercase mt-10 ml-20 text-4xl'>don't miss</h1>
      <Six/>
      <Seven/>
      <Nine/>
      <Ten/>
      <Footer/>
    </div>

  )
}

export default App