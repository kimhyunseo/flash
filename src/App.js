import "./App.scss";
import { useState } from "react";
import mockData from "./Data/mockData";
import Category from "./Components/Category";
import FlashCard from "./Components/FlashCard";
import CardLearn from "./Components/CardLearn";
import Result from "./Components/Result";

const App = () => {
  const [category,setCategory] = useState(null);
  const [learningMode, setLearningMode] = useState(false);
  const [exitMode, setExitMode] = useState(false);
  const handleCategory = (obj)=>{
    setCategory(obj)
  }
  const handleLearn = (data)=>{
    setLearningMode(data)
  }
  const handleExit = (data)=>{
    setExitMode(data)
  }
  return (
    <div className="app">
      {!category && !learningMode && <Category 
      cardData = {mockData.categories} 
      onSelected = {handleCategory}/>}

      {category && !learningMode && <FlashCard 
      cardData = {category} 
      onSelected = {handleCategory}
      onLearn = {handleLearn}/>}

      {learningMode && !exitMode && <CardLearn 
      cardData = {category.flashcards}
      onExit = {handleExit}/>}

      {exitMode && <Result
      onExit = {()=>{
        setCategory(null);
        setLearningMode(false);
        setExitMode(false);
      }}/>}
    </div>
  );
};

export default App;