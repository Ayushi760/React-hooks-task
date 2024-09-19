import { useMemo } from 'react';

export const useSortedItems = (items, sortOption, isAscending, searchTerm) => {
  return useMemo(() => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredItems.sort((a, b) => {
      let comparison = 0;
      if (sortOption === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortOption === 'description') {
        comparison = a.description.localeCompare(b.description);
      }
      return isAscending ? comparison : -comparison;
    });
  }, [items, sortOption, isAscending, searchTerm]);
};
