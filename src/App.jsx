import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { List } from './List';

function App() {
  const [value, setValue] = useState();
  const [cellphones, setCellphones] = useState([]);

  const onChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  const onAddCellphone = (e) => {
    e.preventDefault();
    //opcion 1
    // const copyCellphones = [...cellphones];
    // copyCellphones.push(value);
    // setCellphones(copyCellphones);

    //opcion 2
    setCellphones(current => {
      const copyCellphones = [...current];
      copyCellphones.push(value)
      return copyCellphones;
    });
    setValue("");
  };

  const onRemove = (e) => {
    e.preventDefault();
    setCellphones([]);
  }

  const onRemoveItem = useCallback((index) => {
    const copyCellphones = [...cellphones];
    if (copyCellphones[index]){
      copyCellphones.splice(index, 1);
      setCellphones(copyCellphones);
    }
  }, [cellphones]);

  return (
    <div>
      <div className='d-block'>
        <input 
          type='text'
          onChange={onChange}
          value={value}
        /><br />
        <button className='mt-2' onClick={onAddCellphone}>
          Agregar Celular
        </button>
      </div>

      <List cellphones={cellphones} onRemove={onRemove} onRemoveItem={onRemoveItem}/>
    </div>
  )
}

export default App
