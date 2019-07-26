import React, { Component } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Container from "./Container";
import images from "../images"

class Game extends Component {
    state = {
        // Initial score
        score: 0,
        highScore: 0,

        // Initial navbar message
        navMessage: "Click a Rick to begin",

        // Store array of img urls
        allCharacters: this.shuffleArray(),

        // Store each clicked item
        wasClicked: [],

        // Shake container on incorrect
        shake: false
    };

    clickEvent = this.checkClicked.bind(this);

    shuffleArray() {

        // Create copy of current array to modify by value
        const newArr = images.slice();

        // Create new array to store shuffled data
        const shuffledArr = [];

        // Loop thru newArr and get random index based on current length then splice val from newArr and push to shuffledArr
        while (newArr.length > 0) {
            shuffledArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }

        return shuffledArr;
    }

    checkClicked(guess) {

        // Create copy of wasClicked array to modify by value
        const prevState = this.state.wasClicked.slice();

        // Shuffle images
        const shuffle = this.shuffleArray();

        // Track score
        let score = this.state.score;
        let highScore = this.state.highScore;

        // If user guess is not found in wasClicked
        if (!this.state.wasClicked.includes(guess)) {

            // Store clicked items
            prevState.push(guess);

            // Handle score
            if(score === highScore) {
                score ++;
                highScore++;
            } else {
                score++;
            }

            // Hanlde correct state
            return this.setState({
                score: score,
                highScore: highScore,
                navMessage: "Correct",
                allCharacters: shuffle,
                wasClicked: prevState,
                shake: false
            });
        }
        
        
        // If user guess is found in wasClicked
        if (this.state.wasClicked.includes(guess)) {

            // Hanlde score
            let score = 0;

            // Handle incorrect state
            return this.setState({
                score: score,
                highScore: highScore,
                navMessage: "Incorrect",
                allCharacters: shuffle,
                wasClicked: [],
                shake: true
            });
        }
        // return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
    }

    render() {
        const state = this.state
        return (
            <>
                <Nav 
                    score={ state.score}
                    highScore={ state.highScore }
                    navMessage={ state.navMessage }
                />
                <Banner />
                <Container
                    shake={ state.shake }
                    characters={ state.allCharacters }
                    clickEvent={ this.clickEvent }
                />
            </>
        );
    }
}

export default Game;