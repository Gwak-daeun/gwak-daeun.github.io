import { Col, Row } from 'antd';
import '../myCard.css';
import { useEffect, useState } from 'react';
import logo from '../origin/notion_logo_icon.png';
import myPhoto from '../origin/myPhoto.jpg';
import share from '../origin/share_icon.png';
import git from '../origin/git_icon.png';
import Ground from './ground';
import Moon from './moon';

const MyCard = () => {

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        console.log(window.scrollY);
        const img1 = document.querySelector("#img1");
        const img2 = document.querySelector("#img2");
        const projectScroll = () => {
            console.log('window.scrollY', window.scrollY);
            if (window.outerWidth <= 400) {
                if (window.scrollY > 200) {
                    img1.classList.add("apply-animation");
                    img2.classList.add("apply-animation");

                    img1.classList.remove("del-animation");
                    img2.classList.remove("del-animation");
                }
                else if (window.scrollY < 200) {
                    img1.classList.add("del-animation");
                    img2.classList.add("del-animation");

                    img1.classList.remove("apply-animation");
                    img2.classList.remove("apply-animation");
                }
            }
            else if (window.innerWidth > 400) {
                if (window.scrollY > 1500) {
                    img1.classList.add("apply-animation");
                    img2.classList.add("apply-animation");

                    img1.classList.remove("del-animation");
                    img2.classList.remove("del-animation");
                }
                else if (window.scrollY < 1500) {
                    img1.classList.add("del-animation");
                    img2.classList.add("del-animation");

                    img1.classList.remove("apply-animation");
                    img2.classList.remove("apply-animation");
                }
            }

        };

        window.addEventListener("scroll", projectScroll);

        return () => {
            window.removeEventListener("scroll", projectScroll);
        };

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Moon style={{ zIndex: 1 }} />
            <div className={`all ${isHidden ? "hidden" : ""}`}>
                <div style={{ zIndex: 10 }} class="contain">
                    <h1 class="text">Gwak-Daeun</h1>
                </div>
                {/* <Row>
                <div className='balloon typing-demo'>프론트엔드 개발자 곽다은 입니다.</div>
                <div className='triangle'></div>
            </Row> */}

            </div>

            <div style={{ zIndex: 10 }} className="card">
                <div className='card2'>
                    <Row>
                        <img className='myPhoto' src={myPhoto} />
                        <a href='https://gwak-da-eun.notion.site/3dbeb300ba74486689474100d5c98971?pvs=4' target='_blank'>
                            <img className='myNotion' src={logo} />
                        </a>
                        <Col>
                            <h1>Name</h1>
                            <h2 className='word'>곽다은(Gwak-Daeun)</h2>
                            <h1>Skills</h1>
                            <h2 className='word'>SpringBoot / Java / Vue / React / Node.js / <br />  Javascript / Html / Css / AWS / Mysql / Redis</h2>

                        </Col>
                    </Row>
                    <div className='card3'>
                        <Col>
                            <h2 className='self'>
                                <p>탐구하고 발전해나가는 개발자 곽다은 입니다.</p>
                                <p>자기 탐구와 커뮤니케이션을 통한 타인의 피드백을 적극 수용하고 성장하는 과정을 즐깁니다.</p>
                            </h2>

                            <h3>
                                <p>Email: bbibibbibi22@gmail.com</p>
                                <p>PhoneNumber: 010 - 3384 - 2874</p>
                            </h3>
                        </Col>

                    </div>
                </div>
            </div>


            <div style={{ zIndex: 10 }} className='aboutSkills'>
                <div className='aboutSkillsTag'>
                    About Skills
                </div>

                <Row>
                    <div className='box3'>
                        <h2 className='tag'>SpringBoot</h2>
                        SpringBoot 3.1.5 버전으로 웹프로젝트(경매 사이트)를 진행하였습니다.
                        <br />
                        SpringSecurity를 사용하여 프로젝트의 계정 관리를 개발하였습니다.
                    </div>

                    <div className='box3'>
                        <h2 className='tag'>Java</h2>
                        객체 지향 프로그래밍 (OOP)의 원리를 이해하며 Java로 OOP 개념을 구현할 수 있습니다.
                        IntelliJ와 같은 통합 개발 환경을 통해 Java 언어로 개발한 경력이 있습니다.
                    </div>
                </Row>

                <Row>
                    <div className='box3'>
                        <h2 className='tag'>React</h2>
                        Redux, Redux-saga와 next.js로 SSR을 사용해 토이 웹 프로젝트를 진행하였습니다.
                    </div>
                    <div className='box3'>
                        <h2 className='tag'>Vue</h2>
                        Vue3, composition api를 활용하여 웹프로젝트를 진행하였습니다.
                    </div>
                </Row>

                <Row>

                    <div className='box3'>
                        <h2 className='tag'>Javascript</h2>
                        ES6 문법을 사용합니다.
                        <br />
                        React와 Node.js 프로젝트를 제작하는데에 사용하였습니다.
                    </div>

                    <div className='box3'>
                        <h2 className='tag'>Html / Css</h2>
                        원하는 형태의 레이아웃을 만들 수 있습니다.
                    </div>

                </Row>

                <Row>
                    <div className='box3'>
                        <h2 className='tag'>AWS</h2>
                        AWS(Ec2, Elastic IP, S3, Lambda, Route S5)를 활용하여 웹 프로젝트의 배포를 완료한 경험이 있습니다.
                    </div>
                    <div className='box3'>
                        <h2 className='tag'>Node.js</h2>
                        Sequelize, Express를 사용하여 서버를 구축하였습니다. 웹 사이트의 기본적인 틀(로그인/회원가입, 게시글, 댓글의 CRUD) 이외에도 리소스를 원하는 방향으로 생산되도록 설계할 수 있습니다.
                    </div>

                </Row>

                <Row>

                    <div className='box3'>
                        <h2 className='tag'>Mysql</h2>
                        Mysql로 웹 프로젝트의 데이터베이스를 관리하였습니다. row query의 문법에 익숙합니다.
                    </div>

                </Row>

            </div>
            <div style={{ zIndex: 10 }} className='all2'>

                <div className='projects'>
                    <div>Projects</div>
                    <div class="parent-div">
                        <div class="img-container">
                            <div id="img1">
                                <Col>


                                <a href='https://gwak-da-eun.notion.site/FarmParm-Team-fe22ac0f99334a6397e7d81b62bef9e4?pvs=4' target='_blank'>
                                        <img className='notion4' src={logo} />
                                    </a>
                                    <a href='https://github.com/KiWiKiWi-Bird/FarmPam_Backend' target='_blank'>
                                        <img className='firstGit' src={git} />
                                    </a>
                                    <div className='project0'>
                                        <h2>FarmParm</h2>
                                        <div>
                                            <Row>
                                                <div className='skillBox'>SpringBoot</div>
                                                <div className='skillBox'>SpringSecurity</div>
                                                <div className='skillBox'>Vue</div>
                                                <div className='skillBox'>AWS</div>
                                                <div className='skillBox'>Redis</div>
                                                <div className='skillBox'>MySql</div>
                                            </Row>

                                            <p>실시간 농산물 경매 웹서비스</p>
                                            <p>웹 서비스의 계정 보안 구축 및 서비스 모니터링 기능을 목표</p>
                                        </div>
                                    </div>

                                    {/* <a href='https://gwak-da-eun.notion.site/Portpolio2-1867586561a14eb4adb15727c0fefd87?pvs=4' target='_blank'>
                                        <img className='notion4' src={logo} />
                                    </a>
                                    <div className='project0'>
                                        <h2>Portpolio2</h2>
                                        <div>
                                            <Row>
                                                <div className='skillBox'>React</div>
                                                <div className='skillBox'>Javascript</div>
                                                <div className='skillBox'>HTML</div>
                                                <div className='skillBox'>CSS</div>
                                                <div className='skillBox'>ANTD</div>
                                            </Row>

                                            <p>처음 만들었던 포트폴리오 사이트에 대해 현업자들에게 피드백을 받아 반영하여 다시 만든 포트폴리오</p>
                                            <p>기존 포트폴리오에서의 심플함에서 좀 더 본인이 좋아하는 요소와 애니메이션 적용</p>
                                        </div>
                                    </div> */}

                                    <a href='https://gwak-da-eun.notion.site/Fourth-Project-Fashionary-593f73eb1cbf459c9d577966667ed391?pvs=4' target='_blank'>
                                        <img className='notion' src={logo} />
                                    </a>
                                    {/* <a href='https://fashionary.site' target='_blank'>
                                        <img className='share' src={share} />
                                    </a> */}
                                    <a href='https://github.com/Gwak-daeun/My-Projects/tree/main/fourthProject' target='_blank'>
                                        <img className='git' src={git} />
                                    </a>
                                    <div className='project'>

                                        <h2>Fashionary</h2>

                                        <div>
                                            <Row>
                                                <div className='skillBox'>React</div>
                                                <div className='skillBox'>Redux</div>
                                                <div className='skillBox'>Next.js</div>
                                                <div className='skillBox'>Node.js</div>
                                                <div className='skillBox'>Sequelize</div>
                                                <div className='skillBox'>Mysql</div>
                                                <div className='skillBox'>AWS</div>
                                            </Row>
                                            <p>이전 프로젝트에서 발견된 단점들을 보완.</p>
                                            <p>사용하는 언어와 백의 구조를 새롭게 디자인, 프로젝트의 효율, 성능 향상을 목표</p>
                                        </div>
                                    </div>

                                    {/* <a href='https://gwak-da-eun.notion.site/Second-Project-Beanwood-31e77fc996bc466f8f8dde0d2844ae19?pvs=4' target='_blank'>
                                        <img className='notion1' src={logo} />
                                    </a>
                                    <a href='https://github.com/Gwak-daeun/My-Projects/tree/main/secondProject' target='_blank'>
                                        <img className='git1' src={git} />
                                    </a> */}
                                    {/* <div className='project2'>
                                        <h2>Second Project(Beanwood)</h2>
                                        <Row>
                                            <div className='skillBox'>React</div>
                                            <div className='skillBox'>Javascript</div>
                                            <div className='skillBox'>Spring</div>
                                            <div className='skillBox'>Java</div>
                                            <div className='skillBox'>Mysql</div>
                                            <div className='skillBox'>HTML</div>
                                            <div className='skillBox'>CSS</div>
                                        </Row>
                                        <div>
                                            <p>개발자 양성과정 수료 중 두번째로 진행한 프로젝트.</p>
                                            <p>첫번째 프로젝트에서 구현한 E-Commerce 사이트의 데이터 및 기능을 Spring으로 프론트와 연결</p>
                                        </div>
                                    </div> */}

                                </Col>
                            </div>
                        </div>
                        <div class="line-break-container">
                            <div id="line-break"></div>
                        </div>
                        <div class="img-container">
                            <div id="img2">
                                <Col>
                                    {/* <img  src={cat} /> */}
                                    {/* <a href='https://gwak-da-eun.notion.site/Portpolio1-9e7ee262d8aa42279709ba11253a1bd4?pvs=4' target='_blank'>
                                        <img className='notion5' src={logo} />
                                    </a>
                                    <a href='https://gwak-daeun.github.io/before-Portpoliosite/dist/index.html' target='_blank'>
                                        <img className='share2' src={share} />
                                    </a>
                                    <div className='portpolio2'>
                                        <h2>Portpolio1</h2>

                                        <div>
                                            <Row>
                                                <div className='skillBox'>React</div>
                                                <div className='skillBox'>Javascript</div>
                                                <div className='skillBox'>HTML</div>
                                                <div className='skillBox'>CSS</div>
                                                <div className='skillBox'>ANTD</div>
                                            </Row>
                                            <p>진행하였던 프로젝트와 본인의 정보를 간단히 소개하기 위한 포트폴리오 사이트 제작</p>
                                        </div>
                                    </div> */}


                                    {/* <a href='https://gwak-da-eun.notion.site/Fourth-Project-Fashionary-593f73eb1cbf459c9d577966667ed391?pvs=4' target='_blank'>
                                        <img className='notion' src={logo} />
                                    </a>
                                    <a href='https://fashionary.site' target='_blank'>
                                        <img className='share' src={share} />
                                    </a>
                                    <a href='https://github.com/Gwak-daeun/My-Projects/tree/main/fourthProject' target='_blank'>
                                        <img className='git' src={git} />
                                    </a>
                                    <div className='project'>

                                        <h2>LeafPage</h2>

                                        <div>
                                            <Row>
                                                <div className='skillBox'>React</div>
                                                <div className='skillBox'>Redux</div>
                                                <div className='skillBox'>Next.js</div>
                                                <div className='skillBox'>Node.js</div>
                                                <div className='skillBox'>Sequelize</div>
                                                <div className='skillBox'>Mysql</div>
                                                <div className='skillBox'>AWS</div>

                                                <div className='skillBox'>Javascript</div>
                                                <div className='skillBox'>HTML</div>
                                                <div className='skillBox'>CSS</div>
                                                <div className='skillBox'>ANTD</div>
                                            </Row>
                                            <p>세번째 프로젝트에서 발견된 단점들을 보완.</p>
                                            <p>사용하는 언어와 백의 구조를 새롭게 디자인, 프로젝트의 효율, 성능 향상을 목표</p>
                                        </div>
                                    </div> */}


                                    <a href='https://gwak-da-eun.notion.site/LeafPage-Team-923968fa3dee44c1a14055101085e875' target='_blank'>
                                        <img className='notion2' src={logo} />
                                    </a>
                                    <a href='http://cloud.swdev.kr:4006' target='_blank'>
                                        <img className='share' src={share} />
                                    </a>
                                    <a href='https://github.com/Beanstalk-mzc/Leafpage' target='_blank'>
                                        <img className='git2' src={git} />
                                    </a>
                                    <div className='project3'>

                                        <h2>LeafPage</h2>
                                        <Row>
                                            <div className='skillBox'>Servlet</div>
                                            <div className='skillBox'>Java</div>
                                            <div className='skillBox'>Javascript</div>
                                            <div className='skillBox'>Mysql</div>
                                        </Row>
                                        <div>
                                            <p>전자책을 대여, 반납을 통해 독서활동을 할 수 있는 서비스</p>
                                            <p>사용자가 E-Book 서비스를 편리하게 이용하는 것을 목표</p>
                                        </div>
                                    </div>

                                    {/* <a href='https://gwak-da-eun.notion.site/First-Project-Unicorn-27a65c8bf4ea49559c3bbfb3542de1b2?pvs=4' target='_blank'>
                                        <img className='notion3' src={logo} />
                                    </a>
                                    <a href='https://github.com/Gwak-daeun/My-Projects/tree/main/firstProject/front' target='_blank'>
                                        <img className='git3' src={git} />
                                    </a> */}
                                    {/* <div className='project1'>
                                        <h2>First Project(Unicorn)</h2>
                                        <Row>
                                            <div className='skillBox'>React</div>
                                            <div className='skillBox'>Javascript</div>
                                        </Row>
                                        <div>

                                            <p>개발자 양성과정 수료 중 첫번째로 진행한 프로젝트.</p>
                                            <p>JSX의 기초를 배운 상태에서 Json-Server를 통해 axios 요청으로 데이터를 주고 받아 HTML 템플릿 E-Commerce 홈페이지의 기능 구현</p>


                                        </div>
                                    </div> */}

                                </Col>

                            </div>
                        </div>
                    </div>
                </div>

                <Ground />
            </div>

            {/* <div class="grassland">
        <div class="pond"></div>
        </div> */}
        </>
    );

};

export default MyCard;