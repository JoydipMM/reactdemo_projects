import React from 'react'

const LavelTag = ({type="normal", lavel, position="right", title}) => {

const getLevel = (lavel) =>{
    let cardLevelClass;
    let cardBorder;
    if(lavel ==="Beginner"){
        cardLevelClass = "bg-amber-600 text-white";
        cardBorder = "border-amber-600";
    }else if(lavel ==="Intermediate"){
        cardLevelClass = "bg-indigo-400 text-white";
        cardBorder = "border-indigo-400";
    }else if(lavel ==="Pro"){
        cardLevelClass = "bg-fuchsia-600 text-white";
        cardBorder = "border-fuchsia-600";
    }else{
        cardLevelClass = "text-gray-600 bg-gray-200";
        cardBorder = "border-gray-400";
    }
    return cardLevelClass;
}

const getPosition = (position) => {
    let newposition;
    if(position === "left"){
        newposition = "top-0 left-0 rounded-tr-none rounded-bl-none"
    }else{
        newposition = "top-0 right-0 rounded-tl-none rounded-br-none"
    }
    return newposition;
}

  return (
    <>
    {type === "normal" 
    ? <h4 className={`text-xs font-medium absolute px-5 py-1 rounded-2xl ${getPosition(position)} ${getLevel(lavel)}`}>{title}: {lavel}</h4>
    : <h4 className={`text-xs font-medium absolute px-5 py-1 rounded-2xl ${getPosition(position)} ${getLevel(lavel)}`}>{title}: {lavel}</h4>
    }
    </>
  )
}

export default LavelTag
