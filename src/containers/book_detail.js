import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Get started</div>;
        }
        return (
            <div>{this.props.book.title}</div>
        );
    }
}

// it has store's current state as an argument
function mapStateToProps(state) {
    // whatever is returened will show up as props
    // in our BookList container
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);