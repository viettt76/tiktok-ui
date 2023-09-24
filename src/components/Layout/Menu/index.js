import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
   const renderItems = items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
   });

   return (
      <>
         <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
               <div className={clsx(styles.menuExpand)} tabIndex="-1" {...attrs}>
                  <PopperWrapper className={clsx(styles.menuList)}>{renderItems}</PopperWrapper>
               </div>
            )}
         >
            {children}
         </Tippy>
      </>
   );
}

export default Menu;
