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

            <button className='close-modal-button' onClick={onClose}>x</button>

            {/* Modal display text */}
            <div className='modal-content'>
                <h1>Markdown cheat-sheet</h1>
                <br />
                <h3>Text enhancements</h3>
                <p>
                    *(text)* - Italics <br />    
                    **(text)** - Bold   <br />
                    * (text) - Bullet point(s)
                </p>
                <br />
                <h3>Titles</h3>
                <p>
                    # - Heading 1 <br />
                    ## - Heading 2 <br />
                    ### - Heading 3
                </p>
                <br />
                <h3>Miscellaneous</h3>
                <p>
                    {'>'}(text) - Block quote <br />
                    ![alt_text](https://example.com/image.jpg) - image
                </p>
                <br />
                <u><a href='https://www.markdownguide.org/basic-syntax/' target='_blank'>More on Markdown...</a></u>
            </div>


        </div>
        </>
    )
}

export default MarkdownModal