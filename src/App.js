import React, { Component } from 'react';
import Card from './components/Card';
import About from './components/About';
import Saved from './components/Saved';
import Quotes from './data/Quotes';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedQuotes: [],
      savedHistory: []
    };
    this.handleSaveQuote = this.handleSaveQuote.bind(this);
    this.handleDeleteSaved = this.handleDeleteSaved.bind(this);
  }

  handleSaveQuote(refNum) {
    this.setState({
      savedQuotes: [...this.state.savedQuotes, refNum],
      savedHistory: [...this.state.savedHistory, this.state.savedQuotes]
    });
  }

  handleDeleteSaved(id) {
    const savedQuotes = this.state.savedQuotes.filter(quoteId => {
      return quoteId !== id;
    });
    this.setState({
      savedQuotes: savedQuotes
    });
  }

  render() {
    let savedQuotes;
    if (this.state.savedHistory.length > 0) {
      savedQuotes = (
        <Link to="/saved">Saved Quotes</Link>
      )
    }
    return (
      <BrowserRouter>
        <div className="">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://www.github.com/jddelia">JDelia</a>
            {savedQuotes}
          </nav>
          <header>
            <h1><Link to="/"><span>MindRight</span></Link></h1>
          </header>
          <Switch>
            <Route exact path="/" render={() =>
              <Card
                quotes={Quotes}
                filterText={this.state.filterText}
                handleSaveQuote={this.handleSaveQuote}
                handleDeleteSaved={this.handleDeleteSaved}/>} />
            <Route path="/about" component={About} />
            <Route path="/saved" render={() =>
              <Saved
                quotes={Quotes}
                savedQuotes={this.state.savedQuotes}
                handleDeleteSaved={this.handleDeleteSaved}/>} />
          </Switch>
          <footer>
            <p>&copy; MINDRIGHT 2018</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
