import React from 'react';
import Book from '../Book/Book';

function BookList ({ booksList }) {
  return (
    <div>
      {
        booksList.map((user, i) => {
          return (
            <Book 
              key={i}
              isbn={booksList[i].isbn}
              title={booksList[i].title}
              author_id={booksList[i].author_id}
              subtitle={booksList[i].subtitle}
              published={booksList[i].published}
              publisher={booksList[i].publisher}
              pages={booksList[i].pages}
              description={booksList[i].description}
              website={booksList[i].website} 
              authorNames={booksList[i].author_id.map(name => "'"+name.first_name+" "+name.last_name+"' ")}  
              />
          );
        })
      }
    </div>
  );
}

export default BookList;