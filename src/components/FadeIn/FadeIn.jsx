import React, { useEffect, useRef } from 'react';
import './FadeIn.scss';

function FadeIn({ children, className, ...props }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const text = typeof children === 'string' ? children : '';

  let index = 0;

  return (
    <div ref={elementRef} className={`FadeIn ${className || ""}`}>
      {text.split(' ').map((word, wordIndex, words) => (
        <React.Fragment key={wordIndex}>

          <span className="word">
            {word.split('').map((letter) => {
              const currentIndex = index++;

              return (
                <span
    
                  key={currentIndex}
                  style={{
                    transitionDelay: `${currentIndex * 0.03}s`
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>

          {wordIndex < words.length - 1 && (
            <span
              className="space"
              style={{
                transitionDelay: `${index++ * 0.03}s`
              }}
            >
              &nbsp;
            </span>
          )}

        </React.Fragment>
      ))}
    </div>
  );
}

export default FadeIn;