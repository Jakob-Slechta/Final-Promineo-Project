import { render } from "@testing-library/react";
import React from "react";
import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import reactRouterDom from "react-router-dom";
import ".//characters.css";



export default class MCharacters extends React.Component {
  render() {
    return(
        <div>
            <Container defaultActiveKey="" id="maleContainer">
              <br></br>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Lowain</Accordion.Header>
    <Accordion.Body>
      <img src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/thumbnail/s3/2019/03/09/383ee67e/granblueversuslowain2.jpg" id="character-picture"></img>
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
      <td>Lowain</td>
      <td>Granblue Fantasy Versus</td>
      <td>5'11 FT</td>
    </tr>
    </tbody>
    </Table>
    <p>Lowain is a character I heavily identify with, he's a man who lives life very free and relaxed while only wanting to hang out with his two best friends. In the fighting game he comes from he's considered a joke, if you manage to win a match playing as him the game even makes it out as if Lowain was just dreaming up a cool story of him fighting someone. He also talks a lot like a valley-boy, which doesn't make much sense considering the fantasy setting but it's very endearing to listen to. In actual battle he's also nothing impressive, he's just kind of flailing his arms and getting a lot of support from his "bros" midfight so he can claw his way to a win.</p>
    </Accordion.Body>
  </Accordion.Item>
  <br></br>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Sin Kiske</Accordion.Header>
    <Accordion.Body>
      <img src="https://www.fightersgeneration.com/nf5/char/guiltygear/sin-ggxrd-rev2-portrait.png" id="character-picture"></img>
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
      <td>Sin Kiske</td>
      <td>Guilty Gear</td>
      <td>5'11 FT</td>
    </tr>
    </tbody>
    </Table>
    <p>Sin was born to a king out of wedlock, also that king's wife was secretly a monster so that didn't really help. As a result, Sin was half human and half monster, he had to be raised in secret by a friend to said king. This friend of the family was a very lazy bounty hunter however, so Sin...Was raised to be kind of stupid. He's as kind as anyone could hope for and strong as an ox, but he's still not very educated. He's very likable as a result. Supposedly the reason he fights with a flag is because he wanted something "flashy" as a weapon. The bounty hunter who raised him jokingly: "You want something flashy go wave a flag", Sin being an idiot took this at face value.</p>
    </Accordion.Body>
  </Accordion.Item>
  <br></br>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Azrael</Accordion.Header>
    <Accordion.Body>
      <img src="https://blazblue.wiki/images/thumb/c/cf/BlazBlue_Central_Fiction_Azrael_Arcade_04.png/1200px-BlazBlue_Central_Fiction_Azrael_Arcade_04.png" id="character-picture"></img>
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
      <td>Azrael</td>
      <td>Blazblue</td>
      <td>6'8 ft</td>
    </tr>
    </tbody>
    </Table>
    <p>Azrael stands in contrast to the last two characters, he is instead a very violent and very blood hungry man. He even stands as a contrast to the rest of the universe he comes from: Where everyone else is powerful due to magic, Azrael is powerful due to pure muscle power. The only magic he uses is the tattoos on his body which he placed on himself, they make him weaker. Azrael is a villain within the blazblue series, a crazed general who's gone berserk and only searches for a good fight. He has his redeeming qualities and he doesn't necessarily attack everyone in sight, he believes in things like honor and having a fair fight. But he is ultimately a villain who's end goal results in people getting hurt.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
        </div>
    )
}
};