import { useScroll, animated } from '@react-spring/web';

export default function MyComponent() {
  const { scrollYProgress } = useScroll();

  return <animated.div style={{ opacity: scrollYProgress }}>Hello World</animated.div>;
}
