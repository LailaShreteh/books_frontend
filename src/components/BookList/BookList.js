import React from 'react';
import Book from '../Book/Book';

function BookList ({ books }) {
  return (
    <div>
      {
        books.map((user, i) => {
          return (
            <Book 
              key={i}
              isbn={books[i].isbn}
              title={books[i].title}
              author_id={books[i].author_id}
              subtitle={books[i].subtitle}
              published={books[i].published}
              publisher={books[i].publisher}
              pages={books[i].pages}
              description={books[i].description}
              website={books[i].website}   
              />
          );
        })
      }
    </div>
  );
}

export default BookList;