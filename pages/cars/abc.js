import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Abc.module.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// form
import Form from 'react-bootstrap/Form';


export default function Chat() {

   
    return (
        

        <div className={styles.chat_container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Container>
                <Row>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.chat}>
                            <div className={styles.chat_box}>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className={styles.chat_img}>
                                            <img src="/aa.png" />                                                                                                                                                                                                                                                                                                                                                                                                                      
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className={styles.chat_name}>
                                            <h3>Preeti 1316</h3>
                                            <p>Get access to exclusive information and interect with fellow auto lovers.</p>
                                            <h4><img src="/medal.jpg" /> <span> Newbie</span></h4>
                                            <div className={styles.edit}>
                                                <p>Joined in Jul 2022</p>
                                                <p><a href="#">Edit</a></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.chat_box2}>
                                <div className={styles.add}>
                                    <p><span>My Garage</span></p>
                                    <p><a href="#">Add/Edit</a></p>
                                </div>
                                <p className={styles.maruti}><span>&#9679;</span> Maruti Suzuki Swift 2014-2021</p>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className={styles.chat_img2}>
                                            <img src="/messg.jpg" />                                                                                                                         
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className={styles.chat_name}>
                                            <p>Help fellow auto lovers by review and answering questions & become a Zigwheels Legend</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} sm={12} lg={9}>
                        <div className={styles.chat2}>
                            <h1>My Activity</h1>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className={styles.tab_nav}>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="first">25+<br/><span>Questions For You</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="second">3<br/><span>Answers</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="third">0<br/><span>Questions Asked</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="four"> 1<br/><span>Questions Followed</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="five">0<br/><span>Your Reviews</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="six">0<br/><span>Shortlist</span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className={styles.tab_content}>
                                    <Tab.Pane className={styles.tab_pane} eventKey="first">
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn} >&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="second"> 
                                    <div className={styles.form}>
                                                    <p>prabhat<span> asked about Royal Enfield Classic 350(2012-2021)</span></p>
                                                    <h1> Q.What's is the minimum hight of a person required to drive a Classic 350?</h1>
                                                    <div>
                                                        <p> follow Question<span> Add Answer</span></p>
                                                    </div>
                                                    <div>
                                                        <Row>
                                                            <Col md={2} sm={2} lg={2}>
                                                            <div className={styles.logo}>
                                                                <h1>P</h1>
                                                            </div>
                                                            </Col>
                                                            <Col md={8} sm={8} lg={8}>
                                                            <div className={styles.prog}>
                                                                <p> Preeti | 1 month ago</p>
                                                                <div className={styles.object}>
                                                                    <div className={styles.line}>
                                                                        
                                                                <div className={styles.line2}>    <p>@ jatsav | Are you mad bro if you were riding bullet with 1 or 2 guys..
                                                                         being leg not touches the ground you are gonna suffer too much...
                                                                          if there will be some holes like dig on the road... You are gone ...5.8 
                                                                          is enough... read more</p></div>
                                                                          <h5>Hi</h5>
                                                                          </div>
                                                                    </div>
                                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg> 0  <span> Reply </span></p>
                                                            
                                                            </div>
                                                               
                                                             </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className={styles.form}>
                                                    <p>Kavitha<span> asked about Maruti Baleno</span></p>
                                                    <h1> Q.How is the suspension?</h1>
                                                    <div>
                                                        <p> follow Question<span> Add Answer</span></p>
                                                    </div>
                                                    <div>
                                                        <Row>
                                                            <Col md={2} sm={2} lg={2}>
                                                            <div className={styles.logo}>
                                                                <h1>P</h1>
                                                            </div>
                                                            </Col>
                                                            <Col md={8} sm={8} lg={8}>
                                                            <div className={styles.prog}>
                                                                <p> Preeti  | 1 month ago</p>
                                                                <div className={styles.object}>
                                                                    <div className={styles.line4}>
                                                                        <div className={styles.line3}>
                                                                    <p>@ Zigwheels | The suspension too now works silently which add to the
                                                                         refined nature of this premium hatchback.high-speed stability too has
                                                                          improved as it feels more hunkered down as compared to the old car
                                                                          .What... Read More</p>
                                                                          </div>
                                                                          <h5>No</h5>
                                                                          </div>
                                                                    </div>
                                                                
                                                            
                                                            </div>
                                                               
                                                             </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="third">
                                        <h1>Ram3</h1>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="four">
                                    <div className={styles.form}>
                                                    <p>plabon<span> asked about Hyundai Venue 2019-2022</span></p>
                                                    <h1> Q. Should I go for Hyundai Veneue s 1.2L variant 
                                                        or ford freestyle Titanium as both comes in nera about similar
                                                        price range? Will I miss out too much in the Venue S variant?</h1>

                                                    <div>
                                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg> Unfollow Question<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>Add Answer</span></p>
                                                    </div>
                                                    </div> 
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="five">
                                        <h1>Ram5</h1>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="six">
                                        <h1>Ram6</h1>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
        

    )

}