import React from 'react';
import styled from 'styled-components';
import { Thumbnail } from './Thumbnail';

const GridContainer = styled.div<{ size: string, columnCount: number }>`
  width: ${props => props.size};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${props => props.columnCount}, 1fr);
  font-size: ${props => {
    const gridItemSize = parseInt(props.size.replace(/[^0-9]/g,'')) / props.columnCount;
    return (
      gridItemSize >= 16 ? '2rem' :
      gridItemSize >= 12 ? '1.5rem' :
      '1rem'
    );
  }};
`;

const GridItem = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

interface Item {
  itemImageUrl: string;
  itemTitle: string;
  authorName: string;
  size: string;
}

interface ThumbnailGridProps {
  itemList: Item[];
  size: string,
  columnCount: number;
}

export const ThumbnailGrid = ({
  itemList,
  size,
  columnCount,
}: ThumbnailGridProps) => {
  return (
    <GridContainer size={size} columnCount={columnCount}>
      {itemList.map(item => (
        <GridItem>
          <Thumbnail {...item}></Thumbnail>
        </GridItem>
      ))}
    </GridContainer>
  );
};