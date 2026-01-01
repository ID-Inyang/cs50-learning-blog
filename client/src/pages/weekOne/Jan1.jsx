import React from 'react'
import assets from "../../assets/assets.js"

function Jan1() {
    return (
        <main className="p-8 min-h-screen">
            <div>
                <h1>Day 1: Introduction to Computer Science</h1>
                <h6>January 1st 2026</h6>
                <p>I started out the day by watching CS50x 2026 - Lecture 0 - Scratch on YouTube</p>
                <img src={assets.img1} alt="" className='w-2xl'/>
                <p>David Malan gave a complete introduction to the concept of prgramming and explained how computers are able to understand the instructions we give to them.</p>
                <p>From the opening where he addressed the elephant in the room (AI) and talking about how it was inevitable. He also mentioned that we should use it as a tool or a peer to code along side with rather than having it generate the code completely</p>
                <figure>
                    <img src={assets.img2} className='w-2xl' alt="" />
                    <figcaption>AI is here to stay</figcaption>
                </figure>
                <p>He explained how computers are able to process bits different depending on context. So the way the computer processes the bits in an image will be different from how it processes an audio</p>
                <figure>
                    <img src={assets.img3} className='w-2xl' alt="" />
                    <figcaption>This is Hello, World in machine language</figcaption>
                </figure>
                <p>He went ahead to explain the concept of compilers which are programs that translate high level programming languages into machine language that the computer can understand</p>
                <figure>
                    <img src={assets.img4} className='w-2xl' alt="" />
                    <figcaption>Compilers translate high level languages to machine language</figcaption>
                </figure>
                <p>During the lecture he explained that programming is about taking input and producing meaning output using an algorithm.</p>
                <p>An algorithm is a step by step instructions we give to the computer to perform a certain task. He used an example algorithm to find a name in a phonebook</p>
                <img src={assets.img5} className='w-2xl' alt="" />
                <p>We were introduced to Scratch, a visual programming language that allows users to create programs by snapping together code blocks. It was fascinating to see how we could create interactive stories, games, and animations using Scratch.</p>
                <p>A whole lot was discussed most of which I can't remember accurately</p>
                <p>It was fun watching the exercises people participated in.</p>
                <p>Overall, it was a great introduction to computer science and programming. I'm excited to learn more in the coming days!</p>
            </div>
            <div className="">
                <h3>My key takeaways from the lectures</h3>
                <p>I got a better understand of the concept of compilers and algorithms</p>
                <p>Also I got to understand how visual programming works</p>
                <p>Lastly, I got to understand the importance of breaking down problems into smaller manageable tasks</p>
            </div>
        </main>
    )
}

export default Jan1