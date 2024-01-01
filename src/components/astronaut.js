import React, { useEffect, useState } from 'react';
import '../astronaut.css'
import '../astronaut2.css'
const Astronaut = () => {

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 50) {
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
            <div className={!isHidden ? `astronaut` : `astronaut hide`} >
                
                <div className="head"></div>
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
                <div className="body">
                    <div className="panel"></div>
                </div>
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>
                <div className="schoolbag"></div>
            </div>
        </>
    );
};

export default Astronaut;