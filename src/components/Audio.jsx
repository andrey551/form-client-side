import React, {useState, userEffect} from 'react'

export const Audio = (props) => {
  const [audioSource, setAudioSource] = useState({})

  //  Dynamic load audio
  userEffect(() => {
    async function importFile() {
      const file = await import(
        `../resources/nirvana.mp3`
      );
      setSoundFile(file.default); 
    }
    importFile();
  },[])
  return (
    <div>
      <AudioPlayer
        className="audio-player"
        style={{ direction: 'ltr' }}
        showJumpControls={false}
        autoPlay
        src={soundFile}/>
    </div>
  )
}
