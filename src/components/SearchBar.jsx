import React from 'react';

export default function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const handleFilterTextChange = e => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = e => {
    props.onInStockOnlyChange(e.target.checked);
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Search...'
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <input
        type='checkbox'
        id='check'
        checked={inStockOnly}
        onChange={handleInStockOnlyChange}
      />
      <label htmlFor='check'>Only show products in stock</label>
    </form>
  );
}
