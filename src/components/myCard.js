import { Col, Row } from 'antd';
import '../myCard.css';

const MyCard = () => {

    window.addEventListener('scroll', function() {
        var wrapper = document.querySelector('.wrapper');
        var scrollPosition = window.scrollY;
      
        // 스크롤 위치가 일정 값 이상이면 hidden 클래스 추가, 그 외에는 hidden 클래스 제거
        if (scrollPosition >= 100) {
          wrapper.classList.add('hidden');
        } else {
          wrapper.classList.remove('hidden');
        }
      });

    return(
        <>
        <div className="wrapper">
            <Row>
                <div className='balloon typing-demo'>안녕하세요. 프론트엔드 개발자 곽다은 입니다.</div>
                <div className='triangle'></div>
            </Row>
		</div>

        <div className="card">
            <div className='card2'> 
            <Row>
            <img className='myPhoto' src='../origin/myPhoto.jpg'/>
                <Col>
                <h1>Name</h1>
                <h2 className='word'>곽다은(Gwak-Daeun)</h2>
                    <h1>Skills</h1>
                    <h2 className='word'>React / Html / Css / Javascript / AWS / Mysql</h2>
                </Col>
            </Row>
            </div>
        </div>
        <div className='aboutSkillsTag'>
            About Skills
        </div>
        
        
        <div className='aboutSkills'>
            
            <Row>
            <div className='box3'>
            <h2 className='tag'>React</h2>
                Redux, Redux-saga와 next.js로 SSR을 사용해 웹 프로젝트를 진행한 경험이 있습니다.
            </div>
           
            <div className='box3'>
            <h2 className='tag'>Html / Css</h2>
                styled-component와 antd, bootstrap을 활용하여 웹 프로젝트를 진행한 경험이 있습니다.
                <br />
                원하는 형태의 레이아웃을 만들 수 있습니다.
            </div>
            </Row>
            
            <Row>
            <div className='box3'>
                <h2 className='tag'>Javascript</h2>   
                ES6 문법을 사용합니다.
                <br />
                Node.js와 Sequelize를 사용해 서버를 구축하여 웹 프로젝트를 진행한 경험이 있습니다.
            </div>
            
            <div className='box3'>
                <h2 className='tag'>AWS</h2>    
                AWS(Ec2, Elastic IP, S3, Lambda, Route S5)를 활용하여 웹 프로젝트의 배포를 완료한 경험이 있습니다.
            </div>
            </Row>
            
            <Row>
            <div className='box3'>
                <h2 className='tag'>Mysql</h2>
                Mysql로 웹 프로젝트의 데이터베이스를 관리하였습니다. row query의 문법에 익숙합니다.
            </div>
            </Row>
           
            
            
            
        </div>

        {/* <div class="grassland">
  <div class="pond"></div>
</div> */}
        </>
    );

};

export default MyCard;