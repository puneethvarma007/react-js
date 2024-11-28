import React, { useMemo, useState } from 'react';

export const TodoMemo = ({ products }) => {
  const [filter, setFilter] = useState('');

  
  const filteredproducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => p.toLowerCase().includes(filter.toLowerCase()));
  }, [products, filter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredproducts.map((products, index) => (
          <h3 key={index}>{products}</h3>
        ))}
      </ul>
    </div>
  );
};
