import Hero from './component/Hero/Hero';
import SearchForm from './component/SearchForm/SearchForm';
import List from './component/List/List';
import Container from './component/Container/Container';
import NavBar from './component/NavBar/NavBar';

const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
};


export default App;
