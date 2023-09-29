import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faEarthAsia, faGear, faCoins, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircleQuestion, faKeyboard, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import config from '~/config'

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Logo from '~/assets/logo';
import { MailBoxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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
            <Link to={config.routes.home} className={styles.logoLink}>
               <Logo />
            </Link>

            <Search />

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
