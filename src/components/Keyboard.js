import React from 'react';
import {Button, Box} from 'grommet';

const Keyboard = (props) => {
  const {letters} = props
  return (
    <Box direction="row">
      {props.letters.map((key) => {
        return <Button label={key.letter} onClick={() => props.action(key)} key={key.letter} disabled={key.disabled}/>
      })}
    </Box>
  )
}

export default Keyboard;