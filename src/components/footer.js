import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ".//footer.css";


export default function Footer(){
    return(
        <div id="footer">
        <Container>
            <Row>
                <Col>
                <h3>Male characters:</h3>
                <Link to="/m-characters"> <img src={require("../img/male-icon.png")} alt="Male Icon" id="character-icon"></img></Link>
                <Link to="/m-characters/lowain"> <img src={require("../img/lowain-icon.png")} alt="Lowain Pic" id="character-icon"></img> </Link>
                <Link to="/m-characters/sin"> <img src={require("../img/sin-icon.png")} alt="Sin pic" id="character-icon"></img> </Link>
                <Link to="/m-characters/azrael"> <img src={require("../img/azrael-icon.png")} alt="Azrael Pic" id="character-icon"></img> </Link>
                </Col>
                <Col>
                <h3>Female characters:</h3>
                <Link to="/f-characters"> <img src={require("../img/female-icon.png")} id="character-icon"></img> </Link>
                <Link to="/f-characters/laura"> <img src={require("../img/laura-icon.png")} id="character-icon"></img> </Link>
                <Link to="/f-characters/baiken"> <img src={require("../img/baiken-icon.png")} id="character-icon"></img> </Link>
                <Link to="/f-characters/bullet"> <img src={require("../img/bullet-icon.png")} id="character-icon"></img> </Link>
                </Col>
            </Row>
        </Container>
        </div>
    )
}