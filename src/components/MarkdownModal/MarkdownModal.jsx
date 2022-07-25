import React from 'react'

import "./MarkdownModal.css"

function MarkdownModal({open, onClose}) {
    if (!open) {
        return null
    }
    
    return (
        <>

        <div className='overlay'></div>

        <div className='modal'>
            <button onClick={onClose}>Close</button>
            <h1>Markdown cheat-sheet</h1>

            <h3>Text enhancements</h3>
            <p>
                {`<b>`} (some text here) {`</b>`} - Bolden <br />
                {`<em>`} (some text here) {`</em>`} - Italicize <br />
                {`<u>`}(some text here {`</u>`} - Underline <br />
                (some text here) {`</br>`} - newline <br />
            </p>
            <h3>Titles</h3>
            <p>
                {`<h1>`} (some text) {`</h1>`} - Main header <br />
                {`<h2>`} (sometext) {`</h2>`} - Sub header
            </p>


        </div>
        </>
    )
}

export default MarkdownModal