import React, { useState, useMemo } from 'react';
import TextInput from '../../atoms/TextField';
import Typography from '../../atoms/Typography';


const UseMemoComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, items]);

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <Typography>{item}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoComponent;
