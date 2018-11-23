export function selectBook(book) {
    // selectBook is an ActionCreator which needs to return an action
    // an object with a type of property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};