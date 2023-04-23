
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './request';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <Nav/>  
    
    <Banner/>

    <Row 
    title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

    </div>
  );
}

// d24bb430305e98dc1b28cfaddd434795
// https://netflix-clone-bc4ea.web.app/

export default App;
