
import './App.css';
import Astronaut from './components/astronaut';
import Astronaut2 from './components/astronaut2';
import MyCard from './components/myCard';
import './style.css';
import { useEffect, useState } from 'react';

function App() {

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		console.log(window.scrollY);
		// console.log(scrolled);
		if (window.scrollY > 2200) {
		  setScrolled(true);
		} else {
		  setScrolled(false);
		}
	  };
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

    return(
		<>
		<div className={ `app ${scrolled ? 'scrolled' : ''}`}>

<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>

<MyCard />
<Astronaut />

{/* <Contents /> */}
</div>
<Astronaut2 />
		</>
		
  );
}

export default App;
