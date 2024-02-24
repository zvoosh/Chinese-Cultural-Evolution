import './App.css'
import { Routes, Route } from 'react-router-dom';
import { WelcomePage, SculptingPage, FolklorePage, PaintingPage, PeoplePage, ChoosingPage} from './components';

function App() {

  return (
    <>
      <div className='contentSpace font-noto'>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path='/first-page' element={<ChoosingPage />}>
            <Route path="people" element={<PeoplePage />} />
            <Route path="painting" element={<PaintingPage />} />
            <Route path="folklore" element={<FolklorePage />} />
            <Route path="sculptings" element={<SculptingPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
