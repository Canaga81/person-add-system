import { useState } from 'react';
import './App.css'
import AddWorker from './components/Workers/AddWorker';
import WorkerList from './components/Workers/WorkerList';

function App() {

  const [workers, setWorkers] = useState([]);

  return (
    <>

      <h1 className='text-white text-center text-[36px] font-bold pt-6 tracking-[3.6px]'>Maas Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />

    </>
  )
}

export default App;