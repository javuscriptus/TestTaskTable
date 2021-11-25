import { DataTable } from './components/RenderTable'
import { Info } from './Pages/Info'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="*" element={<DataTable />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;