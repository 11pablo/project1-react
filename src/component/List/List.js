import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getColumnsByList } from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux';
import SearchForm from '../SearchForm/SearchForm'
import { Navigate } from 'react-router-dom';


const List = () => {
    
	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));
	
	console.log('listData', listData);
	console.log('columns',columns);

	if(!listData) return <Navigate to="/"/>
		return (
			<div className={styles.list}>
				<header className={styles.header}>
					<h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
				</header>
				<SearchForm />
				
				<p className={styles.description}>{listData.description}</p>
				<section className={styles.columns}>
					{columns.map(column =>
						<Column key={column.id} {...column}  />
					)}
				</section>
			
				<ColumnForm listId={listData.id}/> 
			</div>
		);
};

export default List;