import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
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

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   };

   return (
      // Using a wrapper <div> tag around the reference element solves
      // this by creating a new parentNode context.
      <div>
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
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />
               {!!searchValue && !loading && (
                  <button className={styles.clear} onClick={handleClearInput}>
                     <ClearIcon />
                  </button>
               )}
               {loading && <LoadIcon className={clsx(styles.loading)} />}
               <button
                  className={styles['search-btn']}
                  onMouseDown={e => e.preventDefault()}
               >
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
