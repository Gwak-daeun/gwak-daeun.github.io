import React, { useEffect, useState } from 'react';
import '../astronaut2.css'
const Astronaut2 = () => {

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset < 2700) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return(
        <>
            <div className={!isHidden ? `astronaut2` : `astronaut2 hide`} >
                
                <div className="head2"></div>
                <div className="arm2 arm2-left"></div>
                <div className="arm2 arm2-right"></div>
                <div className="body2">
                    <div className="panel2"></div>
                </div>
                <div className="leg2 leg2-left"></div>
                <div className="leg2 leg2-right"></div>
                <div className="schoolbag2"></div>
            </div>
       
        </>
    );
};

export default Astronaut2;