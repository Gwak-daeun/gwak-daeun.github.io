
import { Row } from 'antd';
import './App.css';
import Astronaut from './components/astronaut';
import Contents from './components/contents';
import MyCard from './components/myCard';
import './style.css';

function App() {


    return(
        <div id='whole'>

		{/* <div className="wrapper">
			<div className="typing-demo">
			안녕하세요. 프론트엔드 개발자 곽다은 입니다.
			</div>
	</div> */}
		<MyCard />
		<Astronaut />
		<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
       {/* <Contents /> */}


   </div>
  );
}

export default App;
