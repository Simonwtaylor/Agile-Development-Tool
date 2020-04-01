import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_SPRINT_BOARDS } from '../../queries';
import { connect } from 'react-redux';

export interface IBoardDropdownContainerProps {
  handleBoardSelect: any;
  selectedBoard?: any;
  name: string;
  sprintId: string;
}

const BoardDropdownContainer: React.FC<IBoardDropdownContainerProps> = ({
  handleBoardSelect,
  selectedBoard,
  name,
  sprintId
}) => {

  const onSelectBoard = (e: any) => {
    handleBoardSelect(e);
  }

  const client = useApolloClient();

  const { error, loading, data } = useQuery(GET_SPRINT_BOARDS, {
    client,
    variables: {
      sprintId: +sprintId || 0,
    }
  });

  if(error) return <h1>Error loading users</h1>;
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

const mapStateToProps = (store: any) => ({
  sprintId: (store.sprint && store.sprint.currentSprint) ? store.sprint.currentSprint.id : '',
});

export default connect(mapStateToProps)(BoardDropdownContainer);