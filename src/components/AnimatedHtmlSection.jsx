import React from 'react'
import { useTrail, animated } from '@react-spring/web'

export default function AnimatedHtmlSection({ children, isVisible }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    from: { opacity: 0, x: 50, y: 0, scale: 0 },
    to: {
      opacity: isVisible ? 1 : 0,
      x: isVisible ? 0 : 90,
      y: 0,
      scale: isVisible ? 1 : 0
    },
    delay: 150,
    config: { duration: 200, easing: t => 1 - Math.pow(1 - t, 4) }
  })

  return (
    <div>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  )
}
