import React from 'react';
import backend from './config/backend';

const hello = () => {
    return (
        <div>
            <button onClick={
                () => { return onDataHandler(); }}> backend test
            </button>
        </div>
    );
}

function onDataHandler(){
    backend.get('/test/select')
    .then(result => alert(JSON.stringify(result.data)));   
}

export default hello;