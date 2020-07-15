import React, { useState, useEffect } from 'react';

export default props => {
  //variable/state, the function used to change the value, then useState() sets the initial value of the variable
  let [username, setUsername] = useState('Matt'),
    [count, setCount] = useState(0);

  useEffect(() => {
    setUsername('Splat')
  }, [])
  //for componentDidMount the dependency array is empty. When it is empty it means it will only fire it one time.

  //useEffect can take in prevState and prevProps
  useEffect(() => {
    // setCount(count + 1) this causes an infinite loop. Be careful with useEffect
    console.log('count changed')
  }, [count])
  //By putting a value in the dependency array if the value in the array changes useEffect will fire.

  return (
    <div>
      <h1>Hello, {username}</h1>
      <h1>Your count is {count}</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={() => setCount(count - 1)}>Count Down</button>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
    </div>
  )
}