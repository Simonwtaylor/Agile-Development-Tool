import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { getBoardsBySprintId } from '../../queries';
import { useSelector } from 'react-redux';
import { selectCurrentSprint } from '../../redux/sprint/sprint.selector';

export interface IBoardDropdownContainerProps {
  handleBoardSelect: any;
  selectedBoard?: any;
  name: string;
}

const BoardDropdownContainer: React.FC<IBoardDropdownContainerProps> = ({
  handleBoardSelect,
  selectedBoard,
  name
}) => {

  const currentSprint = useSelector(selectCurrentSprint);

  const onSelectBoard = (e: any) => {
    handleBoardSelect(e);
  }

  const client = useApolloClient();

  const { error, loading, data } = useQuery(getBoardsBySprintId, {
    client,
    variables: {
      sprintId: (currentSprint && +currentSprint.id) || 0,
    }
  });

  if(error) return <h1>Error loading boards</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: any[] = [];

  if (
    data &&
    data.getBoardsBySprintId
  ) {
    data.getBoardsBySprintId.map((board: any) => {
      return options.push(
        {
          key: board.id, 
          value: board.id, 
          text: board.name
        }
      );
    });
  }

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