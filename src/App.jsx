// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Homepage } from './pages';

function App() {
  return (
    <main className='root-wrapper'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
