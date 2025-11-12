
import React from 'react';

const WaterEffect = () => {
  const raindrops = Array.from({ length: 50 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {raindrops.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: `${0.2 + Math.random() * 0.3}`,
        };
        return (
          <div
            key={i}
            className="raindrop absolute top-0 w-0.5 h-20 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"
            style={style}
          ></div>
        );
      })}
    </div>
  );
};

export default WaterEffect;
