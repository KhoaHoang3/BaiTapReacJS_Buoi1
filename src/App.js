import logo from './logo.svg';
import './App.css';
import Header from './BaiTapLayOut/Header';
import Body from './BaiTapLayOut/Body';
import Footer from './BaiTapLayOut/Footer';

function App() {
  return (
    <div className='container pr-0'>
      <div className='header'>
        <Header/>
      </div>

      <div className='body'>
        <Body/>
      </div>

      <div className='footer col-12 pl-0'>
        <Footer/>
      </div>
      

    </div>
    
  );
}

export default App;
