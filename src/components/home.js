import React from "react";
import { Container } from "react-bootstrap";
import ".//home.css";
import CommentSection from "./comment-components/comment-section";
import CommentForm from "./comment-components/comment-form";


export default function Home() {
    return(
        <Container>
        <h1>The Cool Fighting Game Characters Website!</h1>
        <h3>Home</h3>
        <img src="https://i.ytimg.com/vi/sb7E2LcJJCY/maxresdefault.jpg" id="home-image"></img>
        <p id="homepage-para"> Welcome to the wonderful website where you can dip your toes into the magic that is fighting game characters, their design and why you should love them. This site needs little explanation outside of that, but if you have any questions go the FAQ page. Or if you have a Fighting Game character you love, then you should suggest them on the Home page's comments section.</p>
        <CommentForm />
       <CommentSection />
        </Container>
    )
}