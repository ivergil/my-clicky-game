import React, {Component} from "react";
import "./Grid.css";
import wondersWorld from "../../wonders.json";
import Card from "../Card";
import Header from "../Header/Header";


class Grid extends Component {
    state = {
        wonders: wondersWorld,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            wonders: wondersWorld
        })      
    }

    handleCorrect = newWonders => {
        this.setState({
            wonders: this.shuffleArray(newWonders), 
            score: this.state.score +1,
        });
        
        if (this.state.score === 11) {
            this.resetGame();
            console.log("You won!");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newWonders = this.state.wonders.map(wonder => {
           const newPic = {...wonder};
           if (newPic.name === name) {
               if(!newPic.clicked){
                   console.log("Already guessed------------");
                   newPic.clicked = true;
                   guessedCorrect = true;
               }
               
           }
           return newPic;
       })       
       console.log("GUESSED CORRECT: ", guessedCorrect)
       guessedCorrect ? this.handleCorrect(newWonders) : this.handleWrong(newWonders)
    };

    shuffleArray = wonders => {
        for (let i = wonders.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wonders[i], wonders[j]] = [wonders[j], wonders[i]];
        }
        return (wonders);
    };

    render() {
        return(
            <div>
                <Header score={this.state.score}/>
                <div className="gridWrapper">
                    <div className="grid">
                    {this.state.wonders.map(wonder => {
                            return (<Card 
                            name={wonder.name}
                            key={wonder.name} 
                            handleClick={this.handleClick}
                            src={wonder.image} 
                            alt={wonder.name}  
                        />)
                        })}
                    </div>
                </div>
            </div> 
        );
    }
};

export default Grid;
    