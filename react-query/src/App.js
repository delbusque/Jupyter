import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Clubs } from './components/Clubs.js';
import { Managers } from './components/Managers.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/managers' element={<Managers />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
