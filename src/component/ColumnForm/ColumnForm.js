import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon}));
        //dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });  //uruchamia akcję add column ,przekazuje rodzaj akcji oraz wartość nowej kolumny
        //props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
        
	);
};

export default ColumnForm;