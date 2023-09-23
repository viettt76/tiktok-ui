import Header from "~/components/Layout/components/Header";
import styles from './DefaultLayout.module.scss'
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return ( 
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;