import clsx from 'clsx';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
   faEllipsisVertical,
   faEarthAsia,
   faGear,
   faCoins,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import {
   faBookmark,
   faCircleQuestion,
   faKeyboard,
   faLightbulb,
   faMessage,
   faPaperPlane,
   faUser,
} from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: 'Trung tâm Nhà sáng tạo LIVE',
      to: '/live/creators',
   },
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'Tiếng Việt',
      children: {
         title: 'Ngôn ngữ',
         data: [
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
         ],
      },
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
];

function Header() {
   let currentUser = true;

   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);

   // Handle logic
   const handleChangeMenu = (item) => {
      switch (item.type) {
         case 'language':
            // Handle language change
            break;
         default:
      }
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'Xem hồ sơ',
         to: 'user',
      },
      {
         icon: <FontAwesomeIcon icon={faBookmark} />,
         title: 'Yêu thích',
         to: 'user',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Nhận xu',
         to: 'coins',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Cài đặt',
         to: 'setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Đăng xuất',
         to: '/logout',
         separate: true
      },
   ]

   return (
      <header className={styles.wrapper}>
         <div className={styles.content}>
            <img src={images.logo} alt="TikTok" />
            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={styles.action}>
               <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  <span>Tải lên</span>
               </Button>

               {currentUser ? (
                  <>
                     <Tippy
                        interactive
                        content='Tin nhắn'
                        placement='bottom'
                     >
                        <button className={clsx(styles.actionBtn)}>
                           <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                     </Tippy>

                     <Tippy
                        interactive
                        content='Hộp thư'
                        placement='bottom'
                     >
                        <button className={clsx(styles.actionBtn)}>
                           <FontAwesomeIcon icon={faMessage} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <Button primary>Đăng nhập</Button>
               )}

               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
                  {currentUser ? (
                     <img
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7281562541422182418.jpeg?x-expires=1695960000&x-signature=TvrqQSmDMe%2F7%2BOUv6QO6NpL1Q48%3D"
                        className={clsx(styles.userAvatar)}
                        alt="Đào Lê Phương Hoa"
                     />
                  ) : (
                     <button className={clsx(styles.menuExpandIcon)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
