import React from "react"
import memesData from "./memesData.js"

export default function Mpage() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url )
        // memesArray[randomNumber].url  <-- this line is incomplete!
        

        
    }

    return (
        <div className="secondp">
            <div className="form" action="">
                <div className="form1">
                <input type="text" placeholder="Top text"/>
                <input type="text" name="" id=""  placeholder="Buttom text"/>
                </div>
                
                
                <button onClick={getMemeImage} className="sub">Get a new image 🖼️</button>
            </div>
            <div className="meme1">
            <img src={memeImage} alt="" className="meme-img" />
            </div>
        </div>
    )
}