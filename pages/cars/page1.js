import Head from 'next/head'

import Image from 'next/image'

import styles from '../../styles/Home.module.css'

// carousel
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css'

// navbar
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// owl carousel
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel';



export default function Home() {
    return ( 

        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* main start */}
            <main className={styles.main}>

            <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" ><img src='/home-img.png' width={100} height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/firstpage">about</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Details</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel fade>
      <Carousel.Item>
        <img
      
          src="/downl.jpg"
          alt="First slide"
          height={400}
          width={1100}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/frari.jpg"
          alt="Second slide"
          height={400}
          width={1100}
        />

        <Carousel.Caption>
        src="/jegvar.jpg"
            alt="Third slide"
            height={400}
            width={1100}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
    
          src="/jegvar.jpg"
          alt="Third slide"
          height={400}
          width={1100}
        />

        <Carousel.Caption>
        src="/jegvar.jpg"
            alt="Third slide"
            height={400}
            width={1100}
        
        </Carousel.Caption>
      

      </Carousel.Item>
    </Carousel>
  
                <h1 className={styles.title}>
                  LATEST CARS IN INDIA   
                </h1>


                <div className={styles.grid}>

                <div className={styles.card}>
                <Image src="/1.jpg"  alt="Pic1" width="400%" height="300px" />
                    <h2>Scorpio</h2>
                    <p>Automatic</p>
                    <h4>??? 20.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="/cars/about">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/2.jpg" alt="Pic2" width="400%" height="300px" />
                    <h2>Fortuner</h2>
                    <p>Automatic</p>
                    <h4>??? 40.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details2">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/3.jpg" alt="Pic3" width="400%" height="300px" />
                    <h2>Thar</h2>
                    <p>Automatic</p>
                    <h4>??? 18.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="/cars/thar">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/4.jpg" alt="Pic4" width="400%" height="300px" />
                    <h2>Harrier</h2>
                    <p>Automatic</p>
                    <h4>??? 22.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details4">View Details</a>
                    </div>
                </div>
                <marquee width="100%" direction="down" height="100px" >
                <h1 className={styles.title}>

                                UPCOMING CARS IN INDIA 
                                
                   </h1> 
</marquee>
                      

                                    
                </div>

                <h1 size="20">Car list</h1> <br />
                                
                                <div className={styles.image}>
                                  <Image src="/old-2.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/old-3.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/old-4.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/old-5.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/r5.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/r6.png" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/spos.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/tata.jpg" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/thar.webp" alt="Pic4" width="300%" height="200px" />
                                  <Image src="/vehicle-5.png" alt="Pic4" width="300%" height="200px" />
                                </div>
            </main>

            
            

        </div>
    )
    }

    