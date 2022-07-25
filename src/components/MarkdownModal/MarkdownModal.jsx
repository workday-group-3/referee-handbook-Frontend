import React from 'react'

import "./MarkdownModal.css"

function MarkdownModal({open, onClose}) {
    if (!open) {
        return null
    }
    
    return (
        <div className='modal'>
            <button onClick={onClose}>Close</button>
            <div>MarkdownModal</div>

        </div>
    )
}

export default MarkdownModal