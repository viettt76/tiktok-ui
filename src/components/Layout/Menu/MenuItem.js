import clsx from 'clsx';
import styles from './Menu.module.scss'
import Button from '~/components/Button';

function MenuItem({ data }) {
   return (
      <Button className={clsx(styles.menuItem)} leftIcon={data.icon} to={data.to}>
         {data.title}
      </Button>
   );
}

export default MenuItem;
