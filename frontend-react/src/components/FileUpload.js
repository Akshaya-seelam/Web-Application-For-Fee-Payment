import React, { useState } from 'react';

function FileUpload({ setResult }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please upload a file.");
            return;
        }

        setLoading(true);

        // Prepare the form data
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Error validating the screenshot:", error);
            setResult({ message: "An error occurred while validating." });
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="upload-section">
            <label htmlFor="file">Upload UPI Screenshot:</label>
            <input type="file" id="file" onChange={handleFileChange} accept="image/*" required />
            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Validating..." : "Validate Screenshot"}
            </button>
        </form>
    );
}

export default FileUpload;
