// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import POPOSList from './components/POPOSList';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
