import { Drawer } from 'antd';
import { useState } from 'react';



const Contents = () => {

    const [open, setOpen] = useState(false);
const [placement, setPlacement] = useState('right');

const showDrawer = () => {
  setOpen(true);
  };

  const onClose = () => {
  setOpen(false);
  };


    return(
        <>
       <div className="frame">
			<div className="frame__title">
				<h1 className="frame__title-main">곽다은의 포트폴리오 사이트 입니다.</h1>
			</div>
		</div>
		<a target="_blank" href="https://github.com/Gwak-daeun/My-Projects.git"><img className="gitIcon" src="./origin/github.png"/></a>	
		<a target="_blank" href="https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971">	<img className="notionIcon" src="./origin/notion.png"/></a>

		<section className="intro">
			<p>포트폴리오 웹사이트에서는 저에 대한 정보와 진행하였던 프로젝트들을 간략히 소개합니다.제 기술 스택과 경험에 대한 상세한 내용을 보고싶으시다면, 저의 <a target="_blank" href="https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971">Notion</a>을 방문해주세요. </p>
		</section>

        <section className="content">

			{/* <Modal footer={null} onCancel={handleCancel} open={isModalOpen}>
				<Card>
					<div>ddddddd</div>
				</Card>
			</Modal> */}

			<Drawer
				title="First Project"
				placement={placement}
				closable={true}
				onClose={onClose}
				open={open}
				key={placement}
			>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
			</Drawer>

			<div className="cover"></div>

			<div onClick={showDrawer} className="container ">
				<div className="">
					<h2 className=" "><span className="">First Project</span></h2>
				</div>
				<div className="box">
						<div >
							<img src='../public/origin/unicorn1.png' />
						</div>
					{/* <div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/unicorn2.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/unicorn3.png)"></div>
					</div> */}
				</div>
			</div>
			<div className="container">
				<div className="">
					<h2 className=""><span className="">Second Project</span></h2>
				</div>
				<div className="">
					{/* <div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/wood1.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/wood2.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/wood3.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/wood4.png)"></div>
					</div> */}
				</div>
			</div>
            <div className="container">
				<div className="">
					<h2 className=""><span className="">Third Project</span></h2>
				</div>
				<div className="">
					{/* <div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fit2.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fit4.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fit5.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fit6.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fit7.png)"></div>
					</div> */}
				</div>
			</div>
			<div className="row">
				<div className="cell cell--text">
					<h2 className="cell__title oh"><span className="oh__inner">Fourth Project(Deploying)</span></h2>
				</div>
				<div className="cell cell--images">
					{/* <div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary3.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary4.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary8.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary10.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary11.png)"></div>
					</div>
					<div className="cell__img">
						<div className="cell__img-inner" style="background-image:url(origin/fashionary12.png)"></div>
					</div> */}
				</div>
			</div>
        </section>
        </>
    );
};

export default Contents;