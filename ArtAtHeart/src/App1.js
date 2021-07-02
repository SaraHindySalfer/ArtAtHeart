import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home.js'
import NavBar from './components/navBar/NavBar.js'
import Gallery from './components/gallery/Gallery.js'
import Artists from './components/artists/Artists.js'
import ArtType from './components/artType/ArtType.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/artists' >
            
            </Route>
          <Route path='/abstractArt' >
            <ArtType type={'abstractArt'}/>
          </Route>
          <Route path='/modernArt' >
            <ArtType type={'modernArt'}/>
          </Route>
          <Route path='/drawings' >
            <ArtType type={'drawings'}/>
          </Route>
          <Route path='/sculptures' >
            <ArtType type={'sculptures'}/>
          </Route>
          <Route path='/Photography' >
            <ArtType type={'Photography'}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
