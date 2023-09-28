import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, ClearIcon, LoadIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import useDebounced from '~/hooks/useDebounced';

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   const debounce = useDebounced(searchValue, 600);

   useLayoutEffect(() => {
      const handleKeyDown = (e) => {
         if (e.keyCode === 32 && e.target.selectionStart === 0) {
            e.preventDefault();
         }
      };

      inputRef.current.addEventListener('keydown', handleKeyDown);
   }, []);

   useEffect(() => {
      if (!debounce.trim()) {
         setSearchResult([]);
         return;
      }

      setLoading(true);

      const fetchApi = async () => {
         try {
            setLoading(true);
            const result = await searchService.search(debounce);

            setSearchResult(result);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };

      fetchApi();
   }, [debounce]);

   const handleClearInput = () => {
      setSearchValue('');
      inputRef.current.focus();
      setSearchResult([]);
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadlessTippy
         interactive
         visible={searchResult.length > 0 && showResult}
         render={(attrs) => (
            <div className={styles.searchResult} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={clsx(styles.searchTitle)}>Tài khoản</h4>
                  {searchResult.map((result) => {
                     return <AccountItem key={result.id} data={result} />;
                  })}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={styles.search}>
            <input
               ref={inputRef}
               value={searchValue}
               spellCheck="false"
               placeholder="Tìm kiếm"
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
               <button className={styles.clear} onClick={handleClearInput}>
                  <ClearIcon />
               </button>
            )}
            {loading && <LoadIcon className={clsx(styles.loading)} />}
            <button className={styles['search-btn']}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
