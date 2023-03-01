import React from 'react'
import { useTrail, animated } from '@react-spring/web'

export default function AnimatedHtmlSection({
  children,
  isVisible,
  duration = 500,
  delay = 150
}) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    from: { opacity: 0, x: 40, y: 0, scale: 1 },
    to: {
      opacity: isVisible ? 1 : 0,
      x: isVisible ? 0 : 100,
      y: 0
    },
    delay: delay
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
