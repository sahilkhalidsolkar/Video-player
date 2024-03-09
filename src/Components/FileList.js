import React from 'react'

const FileList = ({ files, setCurrentVideo }) => {
    return (
        <div className='file_list'>
            {files.map(file => (
                <div
                    className='file_list_item'
                    onClick={() => setCurrentVideo({
                        url: URL.createObjectURL(file),
                        type: file.type
                    })}>{file.name}</div>

            ))}
        </div>
    )
}

export default FileList