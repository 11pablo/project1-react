import styles from './List.module.scss';
import Column from '../Column/Column';
const List = () => {
    return (
      <div className={styles.list}>
        <header className={styles.header}>
            <h1 className={styles.title}>Things to do<span>soon</span></h1>
            <p className={styles.description}>Interesting things I want to check out</p>
        </header>
        <section className={styles.columns}>
           <Column title="Books" icon="book"/>
           <Column title="Movies" icon="film"/>
           <Column title="Games" icon="gamepad"/>
        </section>
      </div>
    );
  };

  export default List;