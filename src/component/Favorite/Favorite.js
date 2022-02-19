import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store.js';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  const cards = useSelector(state => getFavoriteCards(state));
  return (
    <div className={styles.container}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} />)}
        </ul>
      </article>
    </div>
  );
}

export default Favorite;
