import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
   return (
      <div className={styles.wrapper}>
         <Header />
         <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
               {children}
               <p style={{ fontSize: '60px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate, fugiat aspernatur
                  inventore sint vel suscipit nulla similique, harum, deleniti iure! Distinctio incidunt aliquid
                  delectus veritatis reiciendis voluptatum culpa. Ipsum, necessitatibus, aspernatur. Ut, facere. Earum,
                  deleniti, veritatis. Necessitatibus laborum velit doloremque sunt est. Et quibusdam reiciendis
                  repellat obcaecati atque molestias quia quos natus eius. Aut consectetur assumenda ipsa reprehenderit,
                  qui impedit pariatur fugiat repudiandae porro velit id similique odio tenetur, perspiciatis quisquam
                  earum sequi? Quia error, iusto cum, ratione omnis nobis officiis totam. Animi dolorum quaerat nemo
                  similique fuga qui, ullam vero voluptatem quam numquam! At voluptatum debitis voluptatem magnam vitae
                  assumenda, in repellat architecto, autem aut officia delectus quis blanditiis obcaecati dicta, dolor
                  tempora voluptates? Velit dolorem, in, possimus esse earum quibusdam odio nesciunt amet, facere aut
                  magnam. Aliquid atque repellendus nihil a iure earum deserunt harum explicabo. Tenetur voluptatem nemo
                  ducimus, doloremque praesentium sed hic in sequi atque est ab dignissimos mollitia maxime soluta dolor
                  numquam? Aliquam ad in tempore repudiandae quis ducimus eius cum aliquid rem natus id magnam rerum
                  similique officia nemo, molestiae aspernatur et eligendi dicta asperiores explicabo. Velit culpa,
                  quaerat error a est magni rem molestiae sequi consequuntur eaque animi esse facilis itaque facere,
                  fuga aperiam mollitia voluptatibus recusandae. Neque repudiandae quae sed, culpa veniam iste
                  architecto, natus necessitatibus ut quasi aut ipsa dolore sunt recusandae accusantium! Corporis, ex,
                  provident. Unde voluptatem soluta laboriosam nemo asperiores numquam consectetur, aliquid facilis
                  earum ducimus ad odio aut! Ratione fugiat dolore enim suscipit praesentium pariatur, non, laboriosam
                  recusandae error rem, hic eum, possimus laudantium autem aspernatur cum deserunt incidunt facere.
                  Excepturi quis hic, facere quidem suscipit accusamus eos odio provident dolor, nemo, dicta, ex
                  praesentium dignissimos possimus pariatur! Labore libero et, obcaecati, ut sint minima. Iure non
                  perferendis, sit, fugit, rem nostrum tempora maxime aperiam sint temporibus atque dolores fuga! Nobis
                  aut maxime odit tempore commodi consequatur hic animi cum molestiae quos. Quisquam recusandae at sint
                  natus vel officia aliquam quos quam qui cum, dolorum optio voluptates saepe et sit voluptatum! Quam,
                  fugit, voluptates, nobis perspiciatis temporibus asperiores repellat fuga recusandae dolorum animi id!
                  Cupiditate odio quasi, praesentium perspiciatis? Laborum voluptatibus cum harum! In vel iure quidem
                  veniam doloribus voluptatem debitis, hic blanditiis. Provident, quo quidem illo alias omnis adipisci
                  est, necessitatibus vel voluptatum molestiae doloremque hic ipsam facilis praesentium, velit
                  cupiditate et. Magnam voluptatum, delectus? Numquam assumenda, dolorem, reiciendis, veniam asperiores
                  rem eum aliquid earum modi inventore dolorum sit dolores quaerat repellendus unde fuga ducimus
                  voluptas? Temporibus blanditiis, veritatis ipsum id illo obcaecati eveniet excepturi quibusdam. Rerum
                  eius nihil id perspiciatis fuga odio soluta consequuntur quisquam qui quia pariatur ut accusamus aut
                  consequatur culpa repellat cumque, voluptatibus maiores? Debitis inventore numquam neque sequi eius
                  quae, quis et, eaque obcaecati, ullam laborum? Accusamus modi laborum non, vitae expedita, totam minus
                  exercitationem harum atque dolor aliquid porro ipsam. Molestiae dolorum consectetur dolorem iure
                  inventore recusandae ullam voluptatum, distinctio, repellat veritatis velit enim fugit aperiam
                  corporis cupiditate saepe unde quidem rem, dolores sunt nam omnis delectus nemo labore? Dignissimos.
               </p>
            </div>
         </div>
      </div>
   );
}

export default DefaultLayout;
