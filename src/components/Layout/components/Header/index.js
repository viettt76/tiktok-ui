import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
   faEllipsisVertical,
   faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Layout/Menu';
import { faCircleQuestion, faKeyboard, faLightbulb } from '@fortawesome/free-regular-svg-icons';

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: 'Trung tâm Nhà sáng tạo LIVE',
      to: '/live/creators',
   },
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'Tiếng Việt',
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Phản hồi và trợ giúp',
      to: 'feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Phím tắt trên bàn phím',
   },
]

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);

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
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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

               <Button primary >Đăng nhập</Button>

               <Menu
                  items={MENU_ITEMS}
               >
                  <button className={clsx(styles.menuExpandIcon)} >
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
