import React from 'react'

export const metadata = {
    title: {
      default: "Next Product page", // default is the fallback title. It is used when a page dose not define its own title.
      template: "%s | Next Product page", // template allows you to create a title pattern. This will overrides metadata inside page.jsx
      //absolute:"", // absolute overrides the template, It ignores the layout template completely
    },
    description: "Next Product page description" 
}

const ProductLayout = ({children}) => {
  return (
    <div>ProductLayout

        {children}
    </div>
    
  )
}

export default ProductLayout