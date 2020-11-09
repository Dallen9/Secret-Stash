import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <Home />
      </div>
      <Footer />
    </div>
   
  );
}

export default App;
