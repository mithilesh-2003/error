import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';


function Home() {
  const location=useLocation();
  const email=new URLSearchParams(location.search).get('email');
  console.log(email)
    return (
    <div>
      <div id='nav1'>
      <div className='nav1'>
        <p>Welcome Our Job Portal! <span style={{color:"blue"}}>Save Jobs</span></p>
      </div>
      <div className='nav1'>
        <img src='https://jobes-nextjs.vercel.app/assets/images/header1-logo.svg'/>
      </div>
      <div className='nav1'>
        
        <p id='font'><i class='bx bxl-facebook-circle'></i><i class='bx bxl-instagram-alt'></i><i class='bx bxl-linkedin-square'></i><i class='bx bxl-twitter'></i></p>
      </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#">Mithilesh Yadav</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="Signup">Signup</Nav.Link>
          <Nav.Link href="Login">Login</Nav.Link>
          <Nav.Link href="ContactUs">ContactUs</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="serch"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar> 
    <div>
    Email:{email}
    </div> 


    <div id="z">
    <div className='Q'>
    <h1 style={{color:"white",border:"1px ",marginLeft:"50px",paddingTop:"50px"}}>To Choose Your Level<br/> Best <span style={{color:"#00a7ac"}}> Dream Career.</span></h1>
    <p style={{color:"white",border:"1px ",marginLeft:"50px",paddingTop:"20px"}}>2400 Peoples are daily search in this portal, 100 user added job portal!</p>
    <div id='serch'>
    </div>
    <div className='in'>
      <input className='in' type='text'placeholder='serch job'></input>
      <input  className='type' type='option'placeholder='category'></input>
      <button  className='category' type='serch'>search</button>
      </div>
      <h4 style={{color:"white",marginLeft:"50px",marginTop:"30px",position:"relative "}}>Suggested tag :</h4>
      <u style={{color:"white",marginLeft:"230px",marginTop:"-30px",position:"absolute "}}> Engeneerind marketings UiUxDesgine Data Analyst programing </u>
    </div>
    <div className='R'>
      <div id='img'>
        <img src='https://th.bing.com/th/id/OIP.hiQQS3Dghh9q4xhWU2RrHwHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7s'/>
        <div style={{height:"100px",width:"150px",background:"#00a7ac",position:"relative",marginLeft:"350px",marginTop:"-100px",textAlign:"center",color:"white"}}>
         <h1>2400 +</h1> 
          <p>new job posted</p>
        </div>
        <div style={{marginTop:"20px"}}>
        <img src='https://th.bing.com/th/id/OIP.ct1KbOWrO0STyHUSMWnniAHaFJ?w=253&h=180&c=7&r=0&o=5&pid=1.7'></img>
        </div>
        <div style={{marginTop:"-180px",marginLeft:"280px"}}>
        <img src='https://th.bing.com/th/id/OIP.ct1KbOWrO0STyHUSMWnniAHaFJ?w=253&h=180&c=7&r=0&o=5&pid=1.7'></img>
        </div>
      </div>
    </div>
    </div>
    {/* start mid */}
      <div id='mid'>
        <div className='m1'>
          <p><i class='bx bxs-briefcase-alt-2'></i>live job</p>
        </div>
        <div className='m1'>
          <p><i class='bx bxs-business'></i>Companies</p>
        </div>
        <div className='m1'>
          <p><i class='bx bx-search-alt-2'></i>Candidates</p>
        </div>
        <div className='m1'>
          <p>new jobs</p>
        </div>
      </div>
      {/* end mid */}


      {/* start mid1 */}
      <div id='mid1'>
        <div id='mid2'>
        <h1 style={{textAlign:"center"}}>Trending Jobs <span style={{color:"blue"}}>Category</span></h1>
        <p style={{textAlign:"center",marginTop:"40px"}}>To choose your trending job dream & to make future bright.</p>
        </div>
        <div id='mid3'>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
        <div className='mid1'>
          <img style={{height:"50px",float:"left",marginTop:"30px"}} src='logo192.png'/>
          <h5 style={{marginTop:"25px"}}>Health & Care</h5>
          <p>Job Available:<br/>240</p>
        </div>
       
        
        </div>
      </div>
      {/* end mid1 */}

      <div id='ljob'>
        <div id='ljob1'>
          <h3 style={{fontSize:"40px"}}>JOBES <span style={{color:"blue"}}> Latest </span>Job</h3>
          <p>To choose your trending job dream & to make future bright.</p>
        </div>
        <div id='ljob2'>

        <div className='ljob1'>
          <div className='urgent'>
          </div>
            <p id="ur">urgent</p>
        </div>
        <div className='ljob1'></div>
        <div className='ljob1'></div>
        <div className='ljob1'></div>
        <div className='ljob1'></div>
        <div className='ljob1'></div>
        </div>

      </div>
    </div>
  )
}

export default Home
