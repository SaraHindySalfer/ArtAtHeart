import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home.js'
import NavBar from './components/navBar/NavBar.js'
import Gallery from './components/gallery/Gallery.js'
import Artists from './components/artists/Artists.js'
import ArtType from './components/artType/ArtType.js'
import Footer from './components/footer/Footer.js'
import Login from './components/loginn/Login.js'
import SignUp from './components/login/signUp/SignUp.js'
import Sell from './components/addItem/sell/Sell.js'
import Buy from './components/buy/Buy.js'
import Error404 from './components/error404/Error404.js'
import About from './components/about/About.js'
import { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <NavBar />
      <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/artists' >
            </Route>
            <Route path='/Van Gogh' >
              <Artists artist='Van Gogh' />
            </Route>
            <Route path='/Pablo Picasso' >
              <Artists artist='Pablo Picasso' />
            </Route>
            <Route path='/Robert Loft' >
              <Artists artist='Robert Loft' />
            </Route>
            <Route path='/Daniel Sader' >
              <Artists artist='Daniel Sader' />
            </Route>
            <Route path='/All Artists' >
              <Artists artist='All Artists' />
            </Route>
            <Route path='/abstractArt' >
              <ArtType type='abstractArt' />
            </Route>
            <Route path='/modernArt' >
              <ArtType type='modernArt' />
            </Route>
            <Route path='/drawings' >
              <ArtType type='drawings' />
            </Route>
            <Route path='/TangibleArt' >
              <ArtType type='TangibleArt' />
            </Route>
            <Route path='/Photography' >
              <ArtType type='Photography' />
            </Route>
            <Route path='/paintings' >
              <ArtType type='paintings' />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/sell' component={Sell} />
            <Route path='/buy' render={(props) => <Buy {...props}  />} />

            <Route path='/signUp' component={SignUp} />
            <Route component={Error404} />
          </Switch>

        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
