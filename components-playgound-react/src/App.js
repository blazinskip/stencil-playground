import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({ value: '' });
  let smallButtonRef = useRef(null);


  const handleChange = (event) => setState({ value: event.target.value });

  useEffect(() => {
    smallButtonRef.current.addEventListener('clicked', event => console.log(event));
  }, []);

  return (
    <div id="app" className="app">
      <test-vowel-input value={state.value} onInput={handleChange}></test-vowel-input>
      <p>Message is: {state.value}</p>

      {/*Cannot bind to web component custom event (it is required to create ref and add listener)*/}
      <test-button size="small" ref={smallButtonRef}>Button</test-button>
      <test-button >Button</test-button>
      <test-button size="large" >Button</test-button>
    </div>
  );
}

export default App;
