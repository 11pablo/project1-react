import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from './ListForm.module.scss';
import { addList } from "../../redux/listsRedux";
import { useState } from "react";
import { useDispatch } from "react-redux";


const ListForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const handelSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}))
        setTitle('');
        setDescription('');
    }
    return (
        <form  className={styles.listForm} onSubmit={handelSubmit}>
            <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>ADD COLUMN</Button>
        </form>
	);
}

export default ListForm;

