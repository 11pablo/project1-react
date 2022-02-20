import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector  } from 'react-redux';
import { getToggleCardFavorite,removeCard } from '../../redux/cardsRedux';



const Card = props => {
    const cardId = props.cardId;
    const dispatch = useDispatch();

    const clickFavorite = (e) => {
        e.preventDefault();
        dispatch(getToggleCardFavorite( cardId ))
    }

    const clickingRemove = e => {
        e.preventDefault();
        dispatch(removeCard( cardId ))
    }

    const card = useSelector(state => state.cards.filter(card => card.id === cardId));
    const isFavorite = card[0].isFavorite;
    return (
        
        <li className={styles.card}>{props.title}
           

            <div className={styles.iconContainer}>
                <button className={styles.buttonFavorite} onClick={clickFavorite}>
                    <span className={clsx(styles.icon, {[styles.active] : isFavorite }) + ' fa fa-star-o'}></span>
                </button>
                <button className={styles.buttonDelete} onClick={clickingRemove}>
                    <span className={styles.icon + ' fa fa-trash'}></span>
                </button>
            </div>

        </li>
    )
}

export default Card;


