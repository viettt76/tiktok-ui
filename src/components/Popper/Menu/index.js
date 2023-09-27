import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

function Menu({ children, items = [], onChange }) {
   const [history, setHistory] = useState([{ data: items }])
   const current = history[history.length - 1]


   const renderItems = current.data.map((item, index) => {
      const isParent = !!item.children
      return <MenuItem
         key={index}
         data={item}
         onClick={() => {
            if(isParent) {
               setHistory(prev => [...prev, item.children])
            } else {
               onChange(item)
            }
         }}
      />;
   });

   return (
      <Tippy
         delay={[0, 800]}
         offset={[20, 10]}
         interactive
         placement="bottom-end"
         render={(attrs) => (
            <div className={clsx(styles.menuExpand)} tabIndex="-1" {...attrs}>
               <PopperWrapper className={clsx(styles.menuList)}>
                  {current.title &&
                     <Header title={current.title} onBack={() => {
                        setHistory(prev => prev.slice(0, prev.length - 1))
                     }} />
                  }
                  {renderItems}
               </PopperWrapper>
            </div>
         )}
         onHide={() => {
            setHistory(prev => prev.slice(0, 1))
         }}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
