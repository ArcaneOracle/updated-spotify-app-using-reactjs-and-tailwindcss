import {useState, useEffect} from 'react'

function Song(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`song flex items-start gap-4 rounded-sm transition-all ${hovered ? "ease-in" : "duration-900 ease-out"} `}>
      <img src={props.song.source} className="albumCover rounded-sm" alt="Song" />
      <div className="flex flex-col">
        <h4 className={`songTitle text-xl transition-all ${hovered ?  "ease-in" : "duration-900 ease-out"} `}>{props.song.title}</h4>
        <p className="songArtist">{props.song.artist}</p>
        <p className="songYear">{props.song.album}, ({props.song.year})</p>
      </div>
    </div>
  )
}

export default Song;