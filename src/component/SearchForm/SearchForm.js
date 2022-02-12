import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchString, setsearchString] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
        setsearchString('')
    }

    
    return (
        // <form className={styles.searchForm}>
            // <TextInput placeholder="Search…" />
        <form onSubmit={handleSubmit} className={styles.searchForm} >
            <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setsearchString(e.target.value)}/> 
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

  export default SearchForm;