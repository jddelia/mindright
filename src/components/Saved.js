import React, { Component } from 'react';
import ActionBtns from './ActionBtns';


class Saved extends Component {
  render() {

    let propQuotes = this.props.quotes.filter(quote => {
      return this.props.savedQuotes.includes(quote.key);
    });

    const quotes = propQuotes.map(quote => {
      return (
        <div key={quote.key} className="quote-card">
          <ActionBtns />
          <h4 className="quote-title">{quote.title}</h4>
          <p className="quote-text">{quote.content}</p>
          <div
            className="undo-btn"
            onClick={() => this.props.handleDeleteSaved(quote.key)}>
            <p>Remove</p>
          </div>
          <small className="quote-author">{quote.author}</small>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="quotes-container">
          {quotes}
        </div>
      </div>
    );
  }
}

export default Saved;
