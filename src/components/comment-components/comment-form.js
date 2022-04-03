import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export default class CommentForm extends React.Component {
    render(){
        function handleComment(){
            document.getElementById("comment-section").prefix(
                <div>
        <Card style={{ width: '18rem' }} id="comment">
        <Card.Body>
        <   Card.Title>{document.getElementById("commentUser").value}</Card.Title>
            <Card.Text>
            {document.getElementById("commentText").value}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
            )
        }
        return(
            <Form>
  <Form.Group className="mb-3">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" id="commentUser" />
    
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control type="Comment" placeholder="Write something here..." id="commentText"/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleComment}>
    Submit
  </Button>
</Form>
        )
    }
}