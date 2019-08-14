import * as React from 'react';
import CustomDropdown from './custom-dropdown.component';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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

  const GET_ALL_BOARDS = gql`
    {
      boards {
        _id
        name 
      }
    }
  `;

  const onSelectBoard = (e: any) => {
    console.log(e);
    handleBoardSelect(e);
  }

  return (
    <Query query={GET_ALL_BOARDS}>
    {
      (result: any) => {
        const { error, loading, data } = result;
        if(error) return <h1>Error loading data</h1>;
        if(loading) return <h3>Loading...</h3>;

        const options: any[] = [];

        data.boards.map((board: any, index: number) => {
          options.push(
            {
              key: board._id, 
              value: board._id, 
              text: board.name
            }
          );
        });

        console.log(options);

        return (
          <CustomDropdown 
            name={name}
            items={options}
            onSelectItem={onSelectBoard}
            selectedItem={selectedBoard}
          />
        )
      }
    }
    </Query>
  );
}
 
export default BoardDropdownContainer;