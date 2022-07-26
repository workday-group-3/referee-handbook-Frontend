import React from 'react'

import "./MarkdownPreviewModal.css"

import ReactMarkdown from 'react-markdown'


function MarkdownPreviewModal({open, onClose, content}) {
    if (!open) {
        return null
    }
    
    return (
        <>

        <div className='overlay' onClick={onClose}></div>

        <div className='modal'>

            <button className='close-modal-button' onClick={onClose}>x</button>

            <div className='markdown-content'>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>

        </div>
        </>
    )
}

export default MarkdownPreviewModal