import React from 'react';
import { useInView } from 'react-intersection-observer';

const SlidingRows = ({ children, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return inView ? 'translateX(0)' : 'translateX(-100px)';
      case 'right':
        return inView ? 'translateX(0)' : 'translateX(100px)';
      case 'up':
        return inView ? 'translateY(0)' : 'translateY(100px)';
      default:
        return '';
    }
  };

  return (
    <div ref={ref}>
      {React.Children.map(children, (child, index) => {
        const animationDelay = inView ? index * 0.2 + 0.5 + 's' : '0s';
        const transform = getTransform();
        const transition = inView ? 'all 0.5s ease-out' : 'none';

        return (
          <div
            className="sliding-row"
            style={{
              animationDelay,
              transform,
              transition,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default SlidingRows;