import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


function NosCuisines (){
return(
    <>
 <Container>
    <Row className="justify-content-center">
        <Col  lg="4">
            <h1 className="NosCuisines-title" >NOS CUISINES</h1>
        </Col>
    </Row>
    <Row>
        <Col>
          <Image src={require("../images/slide2.jpeg")} rounded />
        </Col>
        {/* <Row><Col ><a href="../images/slide2.jpeg" >gamme 1</a></Col> </Row>  */}
        <Col >
          <Image src={require("../images/slide2.jpeg")} rounded />
        </Col> 
        <Col  >
          <Image src={require("../images/slide2.jpeg")} rounded />
        </Col>
        <Col >
          <Image href="../images/slide2.jpeg" src={require("../images/slide2.jpeg")} rounded />
        </Col>
    </Row>
 </Container>
</>
)

}


export default NosCuisines;