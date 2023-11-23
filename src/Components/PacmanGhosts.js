import React, { useEffect } from 'react';
import './PacmanGhosts.css'; // Import the corresponding CSS file

const PacmanGhosts = () => {
//   useEffect(() => {
    // Add the provided JavaScript here to move the ghosts randomly
//  }, []);  The empty dependency array ensures that the effect runs once when the component mounts
useEffect(() => {
    const moveGhost = (ghostElement) => {
      // Add the logic to move the ghost randomly
      const maxX = window.innerWidth - ghostElement.clientWidth;
      const maxY = window.innerHeight - ghostElement.clientHeight;
  
      let x = Math.random() * maxX;
      let y = Math.random() * maxY;
  
      ghostElement.style.left = x + 'px';
      ghostElement.style.top = y + 'px';
    };
  
    const ghosts = document.querySelectorAll('.ghost');
  
    ghosts.forEach((ghost) => {
      moveGhost(ghost);
      setInterval(() => moveGhost(ghost), 3000); // Move every 3 seconds
    });
  }, []);
  

  return (
    <div>
      {/* Add the provided HTML structure for Pac-Man ghosts here */}
      <div className="ghost blinky">
        {/* ... */}
      </div>
      <div className="ghost clyde">
        {/* ... */}
      </div>
      <div className="ghost inky">
        {/* ... */}
      </div>
      <div className="ghost pinky">
        {/* ... */}
      </div>
    </div>
  );
};

export default PacmanGhosts;
