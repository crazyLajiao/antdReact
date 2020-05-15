import React from 'react';
import './App.css';

function App(props) {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default App;