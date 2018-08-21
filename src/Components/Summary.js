import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import'../App.css';

export default class Summary extends Component{
    render(){
      return(
        <div id ="aboutMeSection">
          <Grid>
            <Row>
              <Col md={3}>
                <img src="img/Pic.jpg" align = "left" className= "rounded-circle thick-navy-border" width = "200px" height ="200px" alt="Professional Pic"/>
              </Col>
              <Col md={9} xs={12} style={{textAlign:'left'}}>
                <h1 className ="aboutMeText">{"{Ciao - I'm Stephon}"}</h1>
                <h2  className="aboutMeText">{"I'm a Developer"}</h2>
                <hr/>
              </Col>
            </Row>
            <Row style={{paddingTop: 15}}>
              <Col md={3}  xs={12} style={{paddingTop: 30, paddingBottom: 20}}>
                <p style={{fontSize: 20}}>Full-Stack Developer providing eloquent web-based solutions. These solutions currently include Java on the backend, MySQL as the server solution, and a variety of front in options.</p>
              </Col>
              <Col md={9} xs={12}>
                <div id = "textDiv">
                  <p id = "aboutTextBlurb">
                      I am a commited full-stack developer with a foundation provided by The Software Guild. Consider this my showcase and contact me for collaboration and work.
                    <hr/>
                    <h2 className="aboutMeText">Skills:</h2>
                    <ul>
                      <li><strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, SQL</li>
                      <li><strong>Programming Concepts:</strong>  OOP, Agile Development, N-Tier Design, MVC, MVVM, Test-Driven Development, JavaScript Debugging with Developer Tools, Database Architecture, Full-Stack Development, RESTful Web Services, Dependency Injection</li>
                      <li><strong>Frameworks/Libraries:</strong> Bootstrap, jQuery, Spring MVC, Framework 7, Ajax, JSTL</li>
                      <li><strong>Tools:</strong> Git, GitHub, Canvas, Slack, JUnit, BitBucket, Draw.io, MySQL, Apache Maven, Apache Tomcat, Spring JDBC</li>
                      <li><strong>Integrated Development Environments:</strong> NetBeans, Visual Studio Code, IntelliJ IDEA</li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    };
  }