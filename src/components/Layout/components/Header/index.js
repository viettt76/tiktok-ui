import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoutItem from '~/components/AccountItem';

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, searchResult);

   return (
      <header className={styles.wrapper}>
         <div className={styles.content}>
            <img src={images.logo} alt="TikTok" />
            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={clsx(styles.searchTitle)}>Tài khoản</h4>
                        <AccoutItem />
                        <AccoutItem />
                        <AccoutItem />
                        <AccoutItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={styles.search}>
                  <input placeholder="Tìm kiếm" />
                  <button className={styles.clear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
                  <button className={styles['search-btn']}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={styles.action}>
               <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  <span>Tải lên</span>
               </Button>

               <Button primary>Đăng nhập</Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
