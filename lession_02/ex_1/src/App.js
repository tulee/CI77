
import './App.css';
import './style.css';
import RowCard from './RowCard';
import SquareCard from './SquareCard';
import {TopMusic, TopAlbum} from './data';
import Counter from './Counter';

function App(props) {
  const MusicList = (a,b) => {
    return  (<div className="TopMusicColumn">
              {TopMusic.slice(a,b).map(e =>
                <RowCard
                img={e.img}
                songName={e.songName}
                singer={e.singer}
                publishedTime={e.publishedTime}
              />)}
            </div> )
  }

  const AlbumList = () =>{
    return  TopAlbum.map(e =>
                <SquareCard
                img={e.img}
                albumTitle={e.albumTitle}
                albumDescription={e.albumDescription}
              />)
  }

  return (
    <div className="App">
        <div className="TopMusic">
          <h2>Mới phát hành</h2>
          <div className="TopMusicList">
              {MusicList(0,4)}
              {MusicList(4,8)}
              {MusicList(8,12)}
          </div>
        </div>
        <div className="TopAlbum">
          <h2>Cuối tuần lên nhạc</h2>
          <div className="TopAlbumList">
              {AlbumList()}
          </div>
        </div>
    </div>
  );

  // return <Counter />
}

export default App;
