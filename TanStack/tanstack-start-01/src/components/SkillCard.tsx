import { Heart } from "lucide-react"
import { useState } from "react"

type skillCardProps ={
    name: string
}

const SkillCard = ({name}: skillCardProps) => {

    const [liked, setLiked] = useState(false);
    const likes = liked ? 1 : 0;
  return (
    <div className="feature-card p-4 mb-4">
      Skill: {name}<br />
      {likes} <button onClick={()=> setLiked((like)=> !like)}>
        { liked ? <Heart fill="currentColor" /> : <Heart/> }
      </button>
    </div>
  )
}

export default SkillCard
