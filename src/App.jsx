import './App.css'
import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from './components/WelcomePage';
import { ChoosingPage } from './components/ChoosingPage';
import { PeoplePage } from './components/PeoplePage';
import { Chooser } from './components/Chooser';
import { PaintingPage } from './components/PaintingPage';

function App() {

  return (
    <>
      <div className='contentSpace font-noto'>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path='/first-page' element={<ChoosingPage />}>
            <Route path="people" element={<PeoplePage />} />
            <Route path="painting" element={<PaintingPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
