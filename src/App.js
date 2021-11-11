import { Component } from 'react';

import { Header } from './Header/Header';
import { SearchForm } from './SearchForm/SearchForm';
import { Footer } from './Footer/Footer';

class App extends Component {
  state = {
    status: 'idle',
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SearchForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
