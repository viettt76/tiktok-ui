import clsx from 'clsx';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSpinner,
   faPlus,
   faEllipsisVertical,
   faEarthAsia,
   faGear,
   faCoins,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircleQuestion, faKeyboard, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import Logo from '~/assets/logo';
import { MailBoxIcon, MessageIcon, SearchIcon, ClearIcon } from '~/components/Icons';
import Image from '~/components/Image';

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
         separate: true,
      },
   ];

   return (
      <header className={styles.wrapper}>
         <div className={styles.content}>
            <Logo />

            {/* Search */}
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
                     <ClearIcon />
                  </button>
                  <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
                  <button className={styles['search-btn']}>
                     <SearchIcon />
                  </button>
               </div>
            </HeadlessTippy>

            {/* Action */}
            <div className={styles.action}>
               <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  <span>Tải lên</span>
               </Button>

               {currentUser ? (
                  <>
                     <Tippy interactive content="Tin nhắn" placement="bottom">
                        <button className={clsx(styles.actionBtn)}>
                           <MessageIcon />
                        </button>
                     </Tippy>

                     <Tippy interactive content="Hộp thư" placement="bottom">
                        <button className={clsx(styles.actionBtn)}>
                           <div className={clsx(styles.wrapBtn)}>
                              <MailBoxIcon />
                              <span className={clsx(styles.numOfNotify)}>1</span>
                           </div>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <Button primary>Đăng nhập</Button>
               )}

               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
                  {currentUser ? (
                     <Image
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1695981600&x-signature=aDPnJDKxj1oyNduaxArB9PswNUw%3D"
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
