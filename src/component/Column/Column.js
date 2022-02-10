import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from'../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id)); //jęśli właściwość karty columnId jest = id danej kolumny to
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon+ ' fa fa-' + props.icon}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {/* {props.cards.map(card => <Card key={card.id} title={card.title} />)} */}
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>

            {/* <CardForm columnId={props.id} action={props.action} /> */}
            <CardForm columnId={cards.id} action={props.action} />
        </article>
    );
};


export default Column;