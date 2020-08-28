import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = filterText => {
    setFilterText(filterText);
  };

  const handleInStockOnlyChange = inStockOnly => {
    setInStockOnly(inStockOnly);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props}
      />
    </div>
  );
}
