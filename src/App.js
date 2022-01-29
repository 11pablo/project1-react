import Hero from './component/Hero/Hero';
import SearchForm from './component/SearchForm/SearchForm';
import List from './component/List/List';
import Container from './component/Container/Container'

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};


export default App;
