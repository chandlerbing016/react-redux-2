import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

// this is the main App dumb component that does not
// care about the state of any component ( dumb or smart )
// but cares only about giving instruction ( or just rendering components )

// all the (dumb) componenets are gonna be inside the folder: componenets
// all the smart components ( able to take care of their state with redux) are gonna
//     be inside the folder: contianer

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
