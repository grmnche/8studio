import React, { useState, useEffect } from 'react';

const FollowCursor = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const followCursor = (e) => {
      const target = e.target;
      if (!target) return;

      if (target.closest('a')) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      setPosition({ left: e.pageX + 4, top: e.pageY + 4 });
    };

    window.addEventListener('mousemove', followCursor);

    return () => {
      window.removeEventListener('mousemove', followCursor);
    };
  }, []);

  return (
    <div>
      <div
        className={`follow-cursor ${isActive ? 'follow-cursor_active' : ''}`}
        style={{
          left: `${position.left}px`,
          top: `${position.top}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
};

export default FollowCursor;
