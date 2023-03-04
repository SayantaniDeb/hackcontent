import React, { useState } from "react";
import axios from "axios";
import "../CustomCss/Hashtag.css";

const Hashtag = () => {
  const [inputText, setInputText] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const apiKey = "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"; // replace with your actual API key

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
    <div className="hashtagbody">
      <h1>Hashtag Generator</h1>
      <input
        type="text"
        className="inputboxhashtag"
        onChange={handleInputChange}
      />
      <button onClick={generateHashtags} className="btndesign">
        Generate Hashtags
      </button>
      <br />
      <ul className="ulstyles">
        {hashtags.map((hashtag, index) => (
          <li key={index}>#{hashtag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hashtag;
