import React, { Component } from 'react';
import ActionBtns from './ActionBtns';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {filterText: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterText: e.target.value
    });
  }

  handleGreenClick(refs, refNum) {
    this.props.handleSaveQuote(refs, refNum);
  }

  render() {
    let propQuotes;
    if (this.state.filterText.length > 1) {
      propQuotes = this.props.quotes.filter(quote => {
        return quote.title === this.state.filterText;
      });
    } else {
      propQuotes = this.props.quotes;
    }

    const quotes = propQuotes.map(quote => {
      return (
        <div ref={'quoteCard' + quote.key} key={quote.key} className="quote-card">
          <ActionBtns
            greenClick={() => this.handleGreenClick(quote.key)}
          />
          <h4 className="quote-title">{quote.title}</h4>
          <p className="quote-text">{quote.content}</p>
          <small className="quote-author">{quote.author}</small>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="quotes-container">
          <div className="card-filter">
            <select value={this.state.filterText} onChange={this.handleChange}>
              <option value="">Show All</option>
              <option value="Success">Success</option>
              <option value="Mentality">Mentality</option>
              <option value="Balance">Balance</option>
              <option value="Perseverance">Perseverance</option>
            </select>
          </div>
          {quotes}
        </div>
      </div>
    );
  }
}

export default Card;
