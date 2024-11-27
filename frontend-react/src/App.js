import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Result from './components/Result';

function App() {
    const [result, setResult] = useState(null);

    return (
        <div className="container">
            <h1>UPI Screenshot Validator</h1>
            <FileUpload setResult={setResult} />
            {result && <Result result={result} />}
        </div>
    );
}

export default App;
