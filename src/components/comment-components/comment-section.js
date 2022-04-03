import React from "react";
import Comment from "./comment";
import CommentList from "./comment-list";
import { Container, Card } from "react-bootstrap";

export default class CommentSection extends React.Component{
    render(){
        let commentOne = {
            username: "Panda85",
            message: "This is a good website, but it doesn't have Rock Howard, so I hate you."
        }
        let commentTwo = {
            username: "Doodalizer",
            message: "Complete lack of Katalina from Granblue, otherwise good site!"
        }
        let commentThree = {
            username: "SickFightingGamer",
            message: "I'm sick right now, but this website cured my bad cough."
        }

        return( 
            <Container id="comment-section">
            <h4>Comments Section:</h4>
    <div>
        <Card style={{ width: '18rem' }} id="comment">
        <Card.Body>
        <   Card.Title>{commentOne.username}</Card.Title>
            <Card.Text>
            {commentOne.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
    <div>
        <Card style={{ width: '18rem' }} id="comment">
        <Card.Body>
        <   Card.Title>{commentTwo.username}</Card.Title>
            <Card.Text>
            {commentTwo.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
    <div>
        <Card style={{ width: '18rem' }} id="comment">
        <Card.Body>
        <   Card.Title>{commentThree.username}</Card.Title>
            <Card.Text>
            {commentThree.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
</Container>
        )
    }
}