import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';


const FloatIn = ({ children, threshold, delay }) => {
  const childRef = useRef(null);
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    const node = childRef.current;

    if (inView) {
      node.style.opacity = 1;
      node.style.transform = 'translateY(0)';
      node.style.transition = `transform 1s ease-out ${delay}s, opacity 0.5s ease-out ${delay}s`;
    } else {
      node.style.opacity = 0;
      node.style.transform = 'translateY(20vh)';
    }
  }, [inView, delay]);

  return (
    <div ref={ref}>
      <div ref={childRef}>
        {children}
      </div>
    </div>
  );
};

FloatIn.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
  delay: PropTypes.number,
};

FloatIn.defaultProps = {
  threshold: 0.5,
  delay: 0,
};

export default FloatIn;