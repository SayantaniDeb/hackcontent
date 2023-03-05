import React, { useState } from "react";
import axios from "axios";
import "../CustomCss/Hashtag.css";
import NavComponent from "./Navbar";
import { Button } from "@material-tailwind/react";
import logo from '../../images/22.gif'

const Hashtag = () => {
  const [inputText, setInputText] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const apiKey = ""; // replace with your actual API key

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateHashtags = async () => {
    const prompt = inputText;
    const model = "text-davinci-002";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    const data = {
      model: model,
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 3,
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        data,
        { headers: headers }
      );
      const newHashtags = response.data.choices.map((choice) => {
        return choice.text.trim();
      });
      setHashtags(newHashtags);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <NavComponent/>
    <div className="flex justify-center items-center">
    <img src={logo} alt="img2"></img>
    </div>
   <div className="hashtagbody">

      <input
        type="text"
        className="inputboxhashtag"
        onChange={handleInputChange}
      />
      <Button onClick={generateHashtags} className="btndesign">
        Generate Hashtags
      </Button>
      <br />
      <ul className="ulstyles">
        {hashtags.map((hashtag, index) => (
          <li key={index}>#{hashtag}</li>
        ))}
      </ul>
    </div>

        </>
  );
};

export default Hashtag;
