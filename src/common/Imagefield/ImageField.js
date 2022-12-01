import React from 'react'

export default function Imagefield(props) {
    let image=props.image
  return (
    <div style={image.container?.styles} className={image.container?.classes}>
        <img src={image.src} />
    </div>
  )
}
