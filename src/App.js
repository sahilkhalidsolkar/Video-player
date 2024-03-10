
import './App.css';
import videojs from 'video.js';
import { useRef, useState } from 'react';
import FileSelector from './Components/FileSelector';
import Player from './Components/Player';
import FileList from './Components/FileList';
import NavBar from './Components/NavBar';

function App() {
  const [files, setFiles] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({})


  const onChange = event => {
    const fileList = event.target.files;

    setFiles([...files, ...fileList]);
  };

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    skipButtons: {
      forward: 5,
      backward: 5
    },
    sources: [{
      src: currentVideo.url,
      type: currentVideo.type
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  console.log(files, currentVideo)

  return (
    <>
      <NavBar />
      <div className="App">
        <FileSelector onChange={onChange} />
        <Player videoJsOptions={videoJsOptions} handlePlayerReady={handlePlayerReady} currentVideo={currentVideo} />
        <FileList setFiles={setFiles} currentVideo={currentVideo} files={files} setCurrentVideo={setCurrentVideo} />
      </div>
    </>);
}

export default App;
