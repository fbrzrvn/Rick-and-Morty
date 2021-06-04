import React from 'react';
import getEndPoint from '../../helpers/getEndPoint';

const Pagination = ({ prevPage, nextPage, setEndPoint }: PageProps) => {
  return (
    <div>
      {prevPage && (
        <button onClick={() => setEndPoint(getEndPoint(prevPage))}>Prev</button>
      )}
      {nextPage && (
        <button onClick={() => setEndPoint(getEndPoint(nextPage))}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
