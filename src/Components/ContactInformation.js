import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Grid, Row, Col} from 'react-bootstrap';
import'../App.css';

export default class ContactInformation extends Component{
    render(){
      return(
        <div id="contactMeDiv" className="container-fluid">
          <Grid>
            <Row>
              <Col md={12}>
                <hr/>
                <h2>Contact Me</h2>
                <br/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <a href="mailto: stebrown2018@gmail.com"><i className="fas fa-envelope" style={{fontSize:30}}/></a>&nbsp; &nbsp;
                <a href="https://www.linkedin.com/in/stephon-brown-87779572/" target="#"><i className="fab fa-linkedin" style={{fontSize:30}}/></a> &nbsp; &nbsp;
                <a href="https://github.com/StephonBrown" target="#"><i className="fab fa-github" style={{fontSize:30}}/></a> &nbsp; &nbsp;
                <a href="https://codepen.io/Tatermate09/" target="#"><i className="fab fa-codepen" style={{fontSize:30}}/></a> &nbsp; &nbsp;
                <a href="https://www.freecodecamp.org/stephonbrown" target="#"><i className="fab fa-free-code-camp" style={{fontSize:30}}/></a>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} style={{paddingTop: 25,paddingBottom:10, textAlign:'center'}}>
                Return to Top
                <br/>
                <AnchorLink href='#navBar'><i id="returnArrow" className="fas fa-arrow-circle-up blink" style={{textAlign: 'center', fontSize:30}} ></i></AnchorLink>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    };
  }