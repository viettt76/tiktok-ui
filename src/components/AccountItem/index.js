import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Image from '../Image';

function AccountItem({ data }) {
   return (
      <Link className={clsx(styles.wrapper)} to={`/${data.nickname}`}>
         <Image className={clsx(styles.avatar)} src={data.avatar} alt={data.full_name} />
         <div className={clsx(styles.info)}>
            <p className={clsx(styles.name)}>
               <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheckCircle} />}
            </p>

            <span className={clsx(styles.username)}>{data.nickname}</span>
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
      </Link>
   );
}

export default AccountItem;
