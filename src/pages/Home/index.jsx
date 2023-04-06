import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hook';
import { getAuth } from 'firebase/auth';
import styles from './Home.module.css';
import Header from '../../components/Header';
import clsx from 'clsx';
import { useEffect } from 'react';

function Home() {
  return (
    <div className={clsx(styles.wrapper, 'grid')}>
      <Header />
      <section className={styles.body}>
        <ul className={styles.bodyLeft}>
          <li className={styles.leftItem}>
            <h6 className={styles.leftItemTitle}>
              Welcome to note-app Discussions!
            </h6>
            <p className={styles.leftItemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quo
              quae iure aperiam, repellendus reiciendis officiis earum dolor
              eveniet explicabo molestiae voluptatem deserunt laboriosam ratione
              animi magnam, corrupti aut in.
            </p>
          </li>
          <li className={clsx(styles.leftItem, styles.active)}>
            <h6 className={styles.leftItemTitle}>
              Welcome to note-app Discussions!
            </h6>
            <p className={styles.leftItemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quo
              quae iure aperiam, repellendus reiciendis officiis earum dolor
              eveniet explicabo molestiae voluptatem deserunt laboriosam ratione
              animi magnam, corrupti aut in.
            </p>
          </li>
        </ul>
        <div className={styles.bodyRight}>
          <div className={styles.bodyRightHeader}>
            <div className={styles.headerLeft}>
              <h5 contentEditable className={styles.headerTitle}>
                Welcome to note-app Discussions!
              </h5>
              <div className={styles.headerTime}>07/04/2023 12:23 SA</div>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.headerRightMore}>
                <i class='fa-solid fa-ellipsis'></i>
              </div>
            </div>
          </div>
          <div className={styles.bodyRightContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            reiciendis quas recusandae voluptatibus beatae officia fuga qui
            harum quod iste, ad temporibus dolores optio quasi possimus quos
            eveniet, illo eum?
          </div>
        </div>
        <div className={styles.btnAddNote}>
          <div className={styles.btnAddNoteIcon}>
            <i className='fa-solid fa-pencil'></i>
          </div>
          <div className={styles.btnAddNoteText}>Thêm ghi chú mới</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
