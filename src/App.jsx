import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage, SculptingPage, FolklorePage, PaintingPage, PeoplePage, ChoosingPage} from './components';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <div className='contentSpace font-noto'>
        <Routes >
          <Route path="/" element={<WelcomePage />} />
          <Route path='/first-page' element={<ChoosingPage />}>
            <Route path="people" element={<PeoplePage />} />
            <Route path="painting" element={<PaintingPage />} />
            <Route path="folklore" element={<FolklorePage />} />
            <Route path="craftmenship" element={<SculptingPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
            <Route path="*"  element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
