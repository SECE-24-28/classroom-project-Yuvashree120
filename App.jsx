import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddPost from './AddPost';
import EditPost from './EditPost';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <>
      <div className="topbar">
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/newpost">NewPost</Link>
        </div>
      </div>

      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<AddPost />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;  this 