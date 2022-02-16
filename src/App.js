import Container from './component/Container/Container';
import NavBar from './component/NavBar/NavBar';
import Favorite from './component/Favorite/Favorite';
import About from './component/About/About';
import Home from './component/Home/Home';
import WrongAdress from './component/WrongAddress/WrongAddress';
import { Routes, Route } from 'react-router-dom'; //routes - może renderować różne treści w zależnie od adresu, Route - ustala jaki komponent ma się znaleźć pod jakim adresem.

const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} /> {/*pod linkiem / renderuj komponent Home */}
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<WrongAdress />}
          />
        </Routes>
      </Container>
    </main>
  );
};


export default App;
