import clsx from 'clsx';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Header({ title, onBack }) {
   return (
      <header className={clsx(styles.header)}>
         <button className={clsx(styles.backBtn)} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <h4 className={clsx(styles.headerTitle)}>{title}</h4>
      </header>
   );
}

export default Header;
