import React from 'react'

const FileList = ({ setFiles, currentVideo, files, setCurrentVideo }) => {
    return (
        <div className='file_list'>
            {files.length > 0 && (<button
                className='file_clear_btn'
                onClick={() => {
                    setFiles([])
                    setCurrentVideo({ ...currentVideo, idx: null })
                }}>Clear All</button>)}

            {files.map((file, idx) => (
                <div
                    key={file.name}
                    className='file_list_item'
                    style={{ background: `${currentVideo.idx === idx ? 'var(--title)' : ''}` }}
                    onClick={() => {
                        setCurrentVideo({
                            url: URL.createObjectURL(file),
                            name: file.name,
                            type: file.type,
                            idx: idx
                        })
                    }}>{file.name}</div>

            ))}
        </div>
    )
}

export default FileList