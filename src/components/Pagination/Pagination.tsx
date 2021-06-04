import React from 'react';
import getEndPoint from '../../helpers/getEndPoint';
import { PaginationBtn, PaginationWrap } from './styles';

const Pagination = ({ prevPage, nextPage, setEndPoint }: PageProps) => {
  return (
    <PaginationWrap>
      {prevPage && (
        <PaginationBtn onClick={() => setEndPoint(getEndPoint(prevPage))}>
          Prev
        </PaginationBtn>
      )}
      {nextPage && (
        <PaginationBtn onClick={() => setEndPoint(getEndPoint(nextPage))}>
          Next
        </PaginationBtn>
      )}
    </PaginationWrap>
  );
};

export default Pagination;
