import React, {useState} from 'react';

const Writer = function () {
    const [value, setValue] = useState('text in input')

  return (
    <div>
      <h1>{value}</h1>
      <input 
        type ="text" 
        value={value}
        onChange={event => setValue(event.target.value)} 
      />
    </div>
  );
};

export default Writer;