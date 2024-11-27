import React from 'react';

function Result({ result }) {
    return (
        <div className="results">
            <h2>Validation Results</h2>
            <p>{result.message}</p>
        </div>
    );
}

export default Result;
