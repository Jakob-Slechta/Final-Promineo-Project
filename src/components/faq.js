import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ".//faq.css";

export default class FAQ extends React.Component {
    render() {
        return (
            <Container>
                <h3>FAQ</h3>
                <div id="question">
                    Q: <i>What even is a fighting game?</i>
                </div>
                <div id="answer">
                    A: A fighting game is a game where you and your opponent select a character, each of you controlling said character with the goal of defeating each other. Every character is unique in their own way, having strengths and weaknesses.
                </div>
                <br></br>
                <div id="question">
                    Q: <i>Why should I play fighting games? What's the appeal?</i>
                </div>
                <div id="answer">
                    A: The appeal of fighting games more comes in the fact that there's a lot you can learn in some of them to make yourself better, almost like it's a fast paced chess match at times. There's a lot to practice, so it really only appeals to those who want to make the time investment. Even I'm pretty lazy when it comes to practicing though and I still have fun.
                </div>
                <br></br>
                <div id="question">
                    Q: <i>How much time have you spent playing fighting games? For how long?</i>
                </div>
                <div id="answer">
                    A: I've been fairly passionate about fighting games for a few years now, I'm not super hard working or anything, but I do love them all the same. I have probably close to a thousand hours spent on all of them collectively.
                </div>
                <br></br>
                <div id="question">
                    Q: <i>Where should I start?</i>
                </div>
                <div id="answer">
                    A: Where you should start is honestly the most tricky thing to answer, because really if there's any fighting game you see that you think looks cool and makes you excited to play it, it's not a bad idea to start there. You just need to be careful with your selection though, some Fighting games are easier to learn than others.
                </div>
                <img src="https://i.redd.it/jyzzc8ip74z11.jpg"></img>
            </Container>
        )
    }
};





