import { useState, useEffect } from "react";

const useSearch = (
  data,
  searchFields,
  itemsPerPage = 10,
  debounceDelay = 500
) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, debounceDelay]);

  const filteredData = data.filter((row) =>
    searchFields.some((field) => {
      const cellValue = row[field]?.toString().toLowerCase() || "";
      return cellValue.includes(debouncedQuery.toLowerCase());
    })
  );

  const totalFilteredPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentPageValid = Math.min(currentPage, totalFilteredPages);
  const currentData = filteredData.slice(
    (currentPageValid - 1) * itemsPerPage,
    currentPageValid * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalFilteredPages) return;
    setCurrentPage(page);
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredData: currentData,
    totalFilteredPages,
    currentPageValid,
    handlePageChange,
  };
};

export default useSearch;
