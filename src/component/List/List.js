import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../redux/store';
import { useParams } from 'react-router';
import { getColumnsByList, getListById } from '../../redux/store';


const List = () => {
    
	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));
	
	console.log('listData', listData);
	console.log('columns',columns);

	return (
		<div className={styles.list}>
		  <header className={styles.header}>
			{/* <h2 className={styles.title}>Things to do<span>soon!</span></h2>  */}
			<h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
		  </header>
		  <p className={styles.description}>Interesting things I want to check out</p>
		  {/* <p className={styles.description}>{listData.description}</p> */}
		  <section className={styles.columns}>
			{columns.map(column =>
			  <Column
				key={column.id}
				{...column}  />
			)}
		  </section>
		  
		  <ColumnForm listId={listData.id}/> 
		</div>
	  );
};

export default List;