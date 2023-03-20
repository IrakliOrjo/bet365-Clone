import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import './index.css';

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className='flex'>
      <Sidebar />
      <Main />
      </div>
      {/* Match details*/}

    </div>
  );
}

export default App;
