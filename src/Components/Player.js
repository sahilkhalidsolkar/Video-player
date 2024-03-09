import React, { useEffect, useState } from 'react'
import VideoJS from './VideoJS'

const Player = ({ videoJsOptions, handlePlayerReady, currentVideo }) => {
    const [invertValue, setInvertValue] = useState(0)
    useEffect(() => {

        let vidElem = document.getElementsByTagName("VIDEO")[0];
        if (vidElem) {
            vidElem.style.filter = `invert(${invertValue})`

        }

    }, [invertValue])
    return (
        <>
            <div className="invert_container">
                <label htmlFor="invert_strength" className='invert_strength_label'>Inversion Intensity</label>
                <input type="range"
                    value={invertValue}
                    onChange={(e) => setInvertValue(e.target.value)}
                    min='0' max='1' step='0.1'
                    id='invert_strength'
                />
            </div>
            {currentVideo.url !== '' && (
                <div className='player_container'>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </div>
            )}
        </>
    )
}

export default Player