import React from 'react';
import "./forum.css"
const Forum = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
            <h1>
              {/* include a banner at the top */}
              [INSERT BANNER]
            </h1>
          </div>
          <div className="forum">
            <h1>
              FORUM
            </h1>
            {/* include cards + create post button */}
          </div>
      </div>
    </>
  );
};
  
export default Forum;