import React from "react"
import assets from "../../assets/assets.js"

function Jan3() {
    return (
        <main className="p-8 min-h-screen">
            <div>
                <h1>Day 3: Creating My Scratch Project</h1>
                <h6>January 3rd 2026</h6>
                <p>On the third day, I finally got around to creating my Scratch project. I decided to create a dance-off animation featuring two sprites: Amina and D-Money.</p>
                <p>I started by selecting the sprites and setting up the stage for the dance-off. I then used various code blocks to program the movements and interactions between the two characters.</p>
                <p>It was exciting to see how I could bring my ideas to life using Scratch's visual programming interface. I experimented with different dance moves and added sound effects to enhance the overall experience.</p>
                <video width='320' height='240' controls>
                    <source src={assets.theDanceoff} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    )
}

export default Jan3