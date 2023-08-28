import './Header.css';
import Header from './Header';
import Bod from './Bod';
import Bod2 from './Bod2'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
    <div className='phone'> <Header/><br/>
     <Bod/>
     <Bod2/>
     <Footer/></div>
     <div className='pc'>
      <p>
        This websites was built and designed only for devices of width
        900px and above 
      </p>
     </div>
    </div>
  );
}

export default App;
