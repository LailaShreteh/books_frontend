import React from 'react';
import Author from '../Author/Author';

const AuthorList = ({ authors }) => {
  return (
    <div>
      {
        authors.map((user, i) => {
          return (
            <Author
              key={i}
              first_name={authors[i].first_name}
              last_name={authors[i].last_name}
              />
          );
        })
      }
    </div>
  );
}

export default AuthorList;