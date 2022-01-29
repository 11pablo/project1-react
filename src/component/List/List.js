import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react'; /*hooki nie używane w każdym komponęcie */
import shortid from 'shortid';
const List = () => {
  const [value, setValue] = useState(''); /*pusty string,funkcja modyfikująca*/
    const [columns, setColumns] = useState([ /*referencja do wartości stanu,referencj  do modyfikacji*/
      { id: 1, title: 'Books', icon: 'book' },
      { id: 2, title: 'Movies', icon: 'film' },
      { id: 3, title: 'Games', icon: 'gamepad' }
    ]);

    const handleSubmit = e => {
      e.preventDefault();
      setColumns([...columns, { id: shortid(), title: value }]);  /*shortid -losowe id+ */
      setValue('');
    };

    

    return (
      <div className={styles.list}>
        <header className={styles.header}>
            <h1 className={styles.title}>Things to do<span>soon</span></h1>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
          {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
        </section>
        <form onSubmit={handleSubmit}> 
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
			    <button>Add column</button>
        </form>
      </div>
    );

    
  };

  export default List;