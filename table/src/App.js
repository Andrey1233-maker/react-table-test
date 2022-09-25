import { Pagination } from './components/Pagination/Pagination';
import { Table } from './components/Table/Table';
import { Filter } from './components/Filter/Filter';

import './App.css';


function App() {
  return (
    <div>
      <Filter />
      <Table className="table" />
      <Pagination />
    </div>
  );
}

export default App;
