import SongListing from "../components/SongListing.jsx";

function MySongs( {songs, isLoggedIn }) {
  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center w-full">
        <p>Please log in to view your songs.</p>
      </div>
    );
  }
  return <SongListing songs={songs} />;
}
export default MySongs;