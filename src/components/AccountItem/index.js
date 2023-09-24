import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

function AccountItem() {
   return (
      <div className={clsx(styles.wrapper)}>
         <img
            className={clsx(styles.avatar)}
            src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1695607200&x-signature=80MCjxxTunpDOPyZp%2BoyQ5T5Szo%3D"
            alt="hoaa"
         />
         <div className={clsx(styles.info)}>
            <p className={clsx(styles.name)}>
               <span>Đào Lê Phương Hoa</span>
               <FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheckCircle} />
            </p>

            <span className={clsx(styles.username)}>hoaa.hanassii</span>
         </div>
         <div className={clsx(styles.expand)}>
            <FontAwesomeIcon className={clsx(styles.expandIcon)} icon={faEllipsis} />
            <ul className={clsx(styles.expandMenu)}>
                <li className={clsx(styles.expandItem)}>
                    <FontAwesomeIcon className={clsx(styles.expandItemIcon)} icon={faFlag} />
                    <span>Báo cáo</span>
                </li>
                <li className={clsx(styles.expandItem)}>
                    <FontAwesomeIcon className={clsx(styles.expandItemIcon)} icon={faHeartCrack} />
                    <span>Đánh dấu là không phù hợp</span>
                </li>
            </ul>
         </div>
      </div>
   );
}

export default AccountItem;
