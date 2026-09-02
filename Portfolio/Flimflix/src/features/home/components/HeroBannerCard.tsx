import React from 'react'
import { BannerCardProp } from '../types/home'

const HeroBannerCard = (item: BannerCardProp) => {
  return (
    <div>
      {item.title}
    </div>
  )
}

export default HeroBannerCard
