import React from 'react'

const FileSelector = ({ onChange }) => {
    return (
        <div className='select_files_container'>
            <label htmlFor="select_files"  >select files ++</label>
            <input id='select_files' type="file" accept="video/*" onChange={onChange} multiple />
        </div>
    )
}

export default FileSelector