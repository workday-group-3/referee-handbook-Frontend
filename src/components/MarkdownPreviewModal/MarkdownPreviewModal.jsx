import React from 'react'


function MarkdownPreviewModal({open, onClose, content}) {
    if (!open) {
        return null
    }
    
    return (
        <>

        <div className='overlay' onClick={onClose}></div>

        <div className='modal'>

            <button className='close-modal-button' onClick={onClose}>x</button>

            <h1>I am text to be replaced</h1>

        </div>
        </>
    )
}

export default MarkdownPreviewModal