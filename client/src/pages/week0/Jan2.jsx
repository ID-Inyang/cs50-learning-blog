import React from 'react'
import assets from "../../assets/assets.js"

const Jan2 = () => {
  return (
    <div>
      <div className="">
        <h2>Day 2: Signing Up on Scratch and exploring the sprites</h2>
        <h6>January 2nd 2026</h6>
        <p>I didn't do much on the second day. I just signedup to the scratch program once again because I couldn't access my previous account</p>
        <p>I created my account and started looking through the sprites to see which ones would inspire a project idea.</p>
        <p>I ended picking two; Amina and D-Money. The are both sprite dance characters.</p>
        <p>I planned to create a dance off project using both sprites.</p>
      </div>
      <div className="">
        <figure>
          <img src={assets.scratchSignUp} className='w-2xl' alt="Scratch Signup Screenshot" />
          <figcaption>My Scratch Signup Confirmation</figcaption>
        </figure>
        <figure>
          <img src={assets.scratchInterface} className='w-2xl' alt="Scratch Interface Screenshot" />
          <figcaption>Exploring the Scratch Interface</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Jan2
