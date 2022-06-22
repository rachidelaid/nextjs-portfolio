import React from 'react'

const ReactRotatingText = require('react-rotating-text')

const TextRotate = () => {
  return (
    <div>
      <p>&lt; <span>code</span> &gt;</p>
      <p>I build <ReactRotatingText items={['web apps', 'mobile apps', 'desktop apps']} /></p>
      <p>&lt; <span>code</span> &gt;</p>
    </div>
  )
}

export default TextRotate