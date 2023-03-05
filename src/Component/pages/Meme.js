import { Button } from "@material-tailwind/react"
import React from "react"
import '../CustomCss/Meme.css'
import NavComponent from "./Navbar"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <>
        <NavComponent/>
        <main>
        <div className="container mx-auto px-4 py-8 md:py-16">
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                </form>
                </div>
                <div className="flex justify-center md:col-span-2">
                <Button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </Button>
                </div>
            
            <div className="meme" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={meme.randomImage} className="meme--image" alt="img1" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        </>
    )
}
