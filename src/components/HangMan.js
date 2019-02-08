import React from 'react';
import { Box, Text, Heading, Button } from 'grommet';
import Keyboard from './Keyboard';

class HangMan extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      letters: [{letter: 'a', disabled: false},{letter: 'b', disabled: false},{letter: 'c', disabled: false},{letter: 'd', disabled: false},{letter: 'e', disabled: false},{letter: 'f', disabled: false},{letter: 'g', disabled: false},{letter: 'h', disabled: false},{letter: 'i', disabled: false},{letter: 'j', disabled: false},{letter: 'k', disabled: false},{letter: 'l', disabled: false},{letter: 'm', disabled: false},{letter: 'n', disabled: false},{letter: 'o', disabled: false},{letter: 'p', disabled: false},{letter: 'q', disabled: false},{letter: 'r', disabled: false},{letter: 's', disabled: false},{letter: 't', disabled: false},{letter: 't', disabled: false},{letter: 'u', disabled: false},{letter: 'v', disabled: false},{letter: 'w', disabled: false},{letter: 'x', disabled: false},{letter: 'y', disabled: false},{letter: 'z', disabled: false}],
      words: ['react', 'angular', 'node'],
      word: "",
      mask: "",
      maxTry: 10,
      currentTry: 1,
      status: ""
    }
  }

  componentWillMount = () => {
    this.prepareGame()
  }

  render = () => {
    return (
      <Box margin="large"> 
        <Keyboard letters={this.state.letters} action={this.uncoverLetter}/>
        {this.state.status && <Heading>{this.state.status}</Heading>}
        <Heading>{this.state.currentTry}/{this.state.maxTry}</Heading>
        <Box direction="row" gap="small">
          {this.state.mask.map((letter, index) => {
              return <Heading>{letter}</Heading>
          })}
        </Box>
        <Button onClick={() => {this.prepareGame()}} label="Reset Game"/>
      </Box>
    )
  } 

  uncoverLetter = (letter) => {
    let mask = this.state.mask;
    let newMask = [...mask];
    let currTry = this.state.currentTry;
    let letters = this.state.letters;
    let indice = letters.findIndex((element) => {
      return element.letter === letter.letter
    })
    letters[indice].disabled = true;
    [...this.state.word].forEach((wordLetter, index) => {
      if (letter.letter === wordLetter) newMask[index] = wordLetter;
    })
    if (newMask.toString() === mask.toString()) currTry+=1
    this.setState({mask: newMask, currentTry: currTry, letters: letters}, () => {
      if (this.state.mask.toString() === this.state.word.toString()) {
        this.lockEntry()
        this.setState({status: "Win !!!"})
      }
      if (this.state.currentTry >= 10) {
        this.lockEntry()
        this.setState({status: "Loose :("})
      }
      console.log(this.state)
    })
  }

  prepareGame = () => {
    let word = [...this.state.words[Math.floor(Math.random()*this.state.words.length)]]
    let mask = Array(word.length).fill("_")
    let letters = this.state.letters.map((letter) => {
      return {letter: letter.letter, disabled: false}
    })
    this.setState({word: word, mask: mask, currentTry: 1, letters: letters, status: ""})
  }

  lockEntry = () => {
    let letters = this.state.letters.map((letter) => {
      return {letter: letter.letter, disabled: true}
    })
    this.setState({letters: letters})
  }

}

export default HangMan;