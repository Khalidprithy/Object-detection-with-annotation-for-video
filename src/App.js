import { useState } from 'react';
import './App.css';
import Banner from './Pages/Banner';
import ContactUs from './Pages/ContactUs';
import LocalFileHome from './Pages/LocalFile/LocalFileHome';
import Reviews from './Pages/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import WebcamHome from './Pages/Webcam/WebcamHome';

function App() {
  const [showCam, setShowCam] = useState(false);
  const [showLocalFile, setShowLocalFile] = useState(false);

  return (
    <div className='scroll-smooth'>
      <header>
        <Header />
      </header>
      <main>

        <Banner
          showCam={showCam}
          setShowCam={setShowCam}
          showLocalFile={showLocalFile}
          setShowLocalFile={setShowLocalFile}
        />
        <WebcamHome
          setShowCam={setShowCam}
          showCam={showCam}
        />
        <LocalFileHome
          showLocalFile={showLocalFile}
          setShowLocalFile={setShowLocalFile}
        />
        <Reviews />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
