import React from "react";
import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ".//characters.css";

export default function FCharacters() {
    return(
        <div>
            <Container>
              <br></br>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Laura Matsuda</Accordion.Header>
    <Accordion.Body>
      <img src="https://external-preview.redd.it/ZYeEdphPWzgKvBDlZ4M6-CBEUyXr26Ywz4AP-C9MRlU.jpg?auto=webp&s=01f2a676762d6711241f5d9714893bf20977b48a" id="character-picture"></img>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Character Name</th>
      <th>Game Series</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laura Matsuda</td>
      <td>Street Fighter</td>
      <td>5'9 FT</td>
    </tr>
    </tbody>
    </Table>
    <p>Laura hails from Brazil, like many other Street Fighter characters she's been made to represent a country and fighting style. So as a result, she has a bombastic, confident and fun loving personality to represent brazil. I find Laura to be a cool character because of her being a strong female character, she seems like her own person and has her own wants and she's not defined entirely by a male character. Sadly, Laura has only appeared in one Street Fighter game so far, but I really hope to see her in one of the next installments, she's my favorite.</p>
    </Accordion.Body>
  </Accordion.Item>
  <br></br>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Baiken</Accordion.Header>
    <Accordion.Body>
      <img src="https://cdn.realsport101.com/images/ncavvykf/gfinityesports/bd876942d6713f3e56e88743ce835f3b6bfa70d8-1277x671.png" id="character-picture"></img>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Character Name</th>
      <th>Game Series</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Baiken</td>
      <td>Guilty Gear</td>
      <td>5'4 FT</td>
    </tr>
    </tbody>
    </Table>
    <p>Baiken is a bit more of a tragic character, she's someone who at a young age lost an arm, an eye and both of her parents by an attack from man-made monsters. For a long time her story in the Guilty Gear universe centered around her quest for revenge against the man who created the creatures that destroyed her town and life. Slowly, she came to accept that tirelessly searching that out hasn't made her any happier, so she instead dedicates herself to protecting what's left of her town. She has a full arc and she's also just a really cool samurai woman character.</p>
    </Accordion.Body>
  </Accordion.Item>
  <br></br>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Bullet</Accordion.Header>
    <Accordion.Body>
      <img src="https://i.ytimg.com/vi/U74uU7DDyGo/maxresdefault.jpg" id="character-picture"></img>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Character Name</th>
      <th>Game Series</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bullet</td>
      <td>Blazblue</td>
      <td>5'9 FT</td>
    </tr>
    </tbody>
    </Table>
    <p>Bullet is a character who I really love to play in Blazblue, she's very serious and determined, so she has a very cool energy about her. She's an orphan raised by mercenaries, but with a bit of bad luck she lost every last one of the rest of what was basically her adoptive family. She seeks revenge on someone else listed on this website, Azrael, being as he's the one who basically murdered her only family. Sadly Bullet is more of a side character in Blazblue, but that didn't stop me from loving seeing her in the game and seeing her story progress.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
        </div>
    )
}