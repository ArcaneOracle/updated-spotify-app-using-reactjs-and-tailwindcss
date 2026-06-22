import Song from './Song.jsx';

function SongListing(props) {
    return (
      <div className="space-y-2 my-2">
          {props.songs.map(song => (
            <Song
              key={song.id}
              song={song}
            />
          ))}
      </div>
    )
}

export default SongListing;