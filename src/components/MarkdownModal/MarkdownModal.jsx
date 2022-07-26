import React from 'react'

import "./MarkdownModal.css"

function MarkdownModal({open, onClose}) {
    if (!open) {
        return null
    }
    
    return (
        <>

        <div className='overlay' onClick={onClose}></div>

        <div className='modal'>

            <button onClick={onClose}>Close</button>

            {/* Modal display text */}
            <div className='modal-content'>
                <h1>Markdown cheat-sheet</h1>
                <br />
                <h3>Text enhancements</h3>
                <p>
                    {`<b>`}  &nbsp; &nbsp;(some text here) {`</b>`} &nbsp;&nbsp;&nbsp;- Bolden <br />
                    {`<em>`} (some text here) {`</em>`} - Italicize <br />
                    {`<u>`}  &nbsp;&nbsp;&nbsp;(some text here) {`</u>`} &nbsp;&nbsp;&nbsp;- Underline <br />
                </p>
                <br />
                <h3>Titles</h3>
                <p>
                    {`<h1>`} (some text) {`</h1>`} - Main header <br />
                    {`<h2>`} (sometext) {`</h2>`} - Sub header
                </p>
                <br />
                <h3>Misc.</h3>
                <p>
                    {`<img src=’img url’ alt=’alternativetext’ >`} - Add an image <br />
                    (some text here) {`<br />`} - newline <br />
                </p>
            </div>


        </div>
        </>
    )
}

export default MarkdownModal