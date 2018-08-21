import React, { Component } from 'react';
import {Thumbnail, Grid, Row, Col} from 'react-bootstrap';
import'../App.css';

export default class Portfolio extends Component{
    render(){
      return(
        <div id="portfolioDiv">
          <hr/>
          <Grid>
            <Row>
             <Col  md={4} xs={12}>
              <a href="https://codepen.io/Tatermate09/pen/NydeeN" target="#" style = {{textDecoration: "none"}}><Thumbnail style= {{height:450}} className = "card">
                <h2 style={{textAlign: "center"}}>Quote Machine</h2>
                <hr/>
                <img src="img/QuoteMachine.png" alt="Quote Machine" className={"center responsive"} style={{width:265, height:150}}/>
                <hr/>
                <p style={{textAlign: "center"}}>
                  This project required the use of a Quote API and Twitter API to share a random quote of your choosing  social media.
                </p>
              </Thumbnail></a>
             </Col>
             <Col  md={4} xs={12}>
              <a href="https://codepen.io/Tatermate09/pen/OZvJxx" target="#" style = {{textDecoration: "none"}}><Thumbnail style={{height:450}} className="card">
                <h2 style={{textAlign: "center"}}>Weather API Client</h2>
                  <hr/>
                  <img src="img/WeatherAPI.png" alt="Weather API" className={"center responsive"} style={{width:265, height:150}}/>
                  <hr/>
                  <p style={{textAlign: "center"}}>
                    This project uses the OpenWeather API and browser capablities of utilizing user location information to provide current weather
                  </p>
              </Thumbnail></a>
             </Col>
             <Col md={4} xs={12}>
              <Thumbnail style={{height:450, cursor:'pointer'}} className="card">
                <h2 style={{textAlign: "center"}}>Vending Machine</h2>
                  <hr/>
                  <img src="img/VendingMachineSpringMVC.png" alt="Vending Machine SpringMVC" className={"center responsive"} style={{width:265, height:150}}/>
                  <hr/>
                  <p style={{textAlign: "center"}}>
                    This project explored the use of HTTP calls requiring the customer to click a button to add money and select an item to purchase. On the backend, a Spring container used controller servlets to produce responses.
                  </p>
              </Thumbnail>
             </Col>
            </Row>
          </Grid>
        </div>
      );
    };
  }