
import JSONDATA from './MOCK_DATA.json';
import {StyledApp} from './components/StyledComponents/StyledApp.styled';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <StyledApp>
      <h1>Hello World</h1>
      <input type='text' placeholder='Search...' onChange={event =>{setSearchTerm(event.target.value)}} />
      {JSONDATA.filter((value) => {
        if(searchTerm === ''){
          return value;
        }else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return value;
        }}).map((value, key)=>{
        return (
          <div key={key}> <p>{value.first_name} </p></div>)
      })}
    </StyledApp>
  );
}

export default App;
