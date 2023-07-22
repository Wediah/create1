import React from 'react'


function Joke(props) {
  return (
    <div>
        <h3>{props.Setup}</h3>
        <p>{props.Punchline}</p>
        <hr />
    </div>
  )
}

export default Joke