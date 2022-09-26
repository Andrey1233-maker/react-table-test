import { Pagination } from './components/Pagination/Pagination';
import { Table } from './components/Table/Table';
import { Filter } from './components/Filter/Filter';
import { ErrorBox } from './components/ErrorBox/ErrorBox';

import './App.css';


function App() {

  

  return (
    <div>
      <Filter />
      <Table className="table" />
      <Pagination />
      <ErrorBox className="error" />
    </div>
  );
}

export default App;
