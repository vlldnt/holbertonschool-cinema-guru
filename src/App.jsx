import { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';

const optionsList = [
  'Default',
  'Latest',
  'Oldest',
  'Highest Rated',
  'Lowest Rated',
];

function App() {
  const [sort, setSort] = useState('Default');

  return (
    <>
      <Input label="Username" icon={faUser} type="text" />
      <br />
      <br />
      <SelectInput label="Sort:" options={optionsList} value={sort} setValue={setSort} />
    </>
  );
}

export default App;
