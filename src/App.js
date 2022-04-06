import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/Contexts/AuthProvider';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
