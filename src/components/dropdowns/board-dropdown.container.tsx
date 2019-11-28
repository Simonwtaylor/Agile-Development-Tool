import * as React from 'react';
import { CustomDropdown } from './';
import { gql } from 'apollo-boost';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

export interface IBoardDropdownContainerProps {
  handleBoardSelect: any;
  selectedBoard?: any;
  name: string;
}

export const GET_ALL_BOARDS = gql`
{
  boards {
    id
    name 
  }
}
`;

const BoardDropdownContainer: React.FC<IBoardDropdownContainerProps> = ({
  handleBoardSelect,
  selectedBoard,
  name
}) => {

  const onSelectBoard = (e: any) => {
    handleBoardSelect(e);
  }

  const client = useApolloClient();

  const { error, loading, data } = useQuery(GET_ALL_BOARDS, { client });

  if(error) return <h1>Error loading users</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: any[] = [];

  data.boards.map((board: any) => {
    return options.push(
      {
        key: board._id, 
        value: board._id, 
        text: board.name
      }
    );
  });
  
  return (
    <CustomDropdown 
      name={name}
      items={options}
      onSelectItem={onSelectBoard}
      selectedItem={selectedBoard}
    />
  );
}
 
export default BoardDropdownContainer;