import { useEffect } from 'react';

function SearchBox() {
  useEffect(() => {
    function handleSearchBoxClick() {
      document.body.classList.add('search-active');
    }

    function handleCloseSearchClick() {
      document.body.classList.remove('search-active');
    }

    const searchBox = document.querySelector('.search-box-outer');
    const closeSearch = document.querySelector('.close-search');

    if (searchBox) {
      searchBox.addEventListener('click', handleSearchBoxClick);
    }

    if (closeSearch) {
      closeSearch.addEventListener('click', handleCloseSearchClick);
    }

    return () => {
      if (searchBox) {
        searchBox.removeEventListener('click', handleSearchBoxClick);
      }

      if (closeSearch) {
        closeSearch.removeEventListener('click', handleCloseSearchClick);
      }
    };
  }, []);

  return null;
}

export default SearchBox;
