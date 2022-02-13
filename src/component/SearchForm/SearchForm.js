import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchString } from '../../redux/store';


const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
        dispatch(getSearchString(searchString));
    }

    return (
        // <form className={styles.searchForm}>
            // <TextInput placeholder="Search…" />
        <form onSubmit={handleSubmit} className={styles.searchForm} >
            <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setSearchString(e.target.value)}/>
        
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

  export default SearchForm;