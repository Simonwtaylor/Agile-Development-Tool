import * as React from 'react';
import { IBoardsProps, Boards } from '../../components/boards';
import { shallow } from 'enzyme';
import { Grid, Card, Button } from 'semantic-ui-react';
import { BoardColumn } from '../../components/board-column';

describe('Boards - Component', () => {
  let props: IBoardsProps;

  beforeEach(() => {
    props = {
      onRemoveBoard: (id: number) => console.log(`remove ${id}`),
      boards: [],
      onAddNewBoard: (name: string) => console.log(`Add board ${name}`),
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <Boards
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(Grid.Column)
        .at(0)
        .key()
    ).toBe('addnewboard');

    expect(
      wrap
        .find(Card)
        .at(0)
        .props()['className']
    ).toBe('board add-new');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find('div')
        .at(0)
        .props()['className']
    ).toBe('col card');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find('div')
        .at(1)
        .props()['className']
    ).toBe('card-body card-container');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find('h4')
        .at(0)
        .childAt(0)
        .text()
    ).toBe('Add New Board');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find(Button)
        .at(0)
        .props()['inverted']
    ).toBe(true);

    expect(
      wrap
        .find(Card)
        .at(0)
        .find(Button)
        .at(0)
        .props()['color']
    ).toBe('green');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find(Button)
        .at(0)
        .find('span')
        .at(0)
        .props()['role']
    ).toBe('img');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find(Button)
        .at(0)
        .find('span')
        .at(0)
        .props()['aria-label']
    ).toBe('save');

    expect(
      wrap
        .find(Card)
        .at(0)
        .find(Button)
        .at(0)
        .childAt(1)
        .text()
    ).toBe('<ButtonContent />');

    wrap
      .find(Card)
      .at(0)
      .find(Button)
      .at(0)
      .simulate('click');
  });

  it('Should render with boards', () => {
    
    props.boards = [
      {
        id: 1,
        name: 'Example',
        tasks: [
          {
            id: 1,
            completed: false,
            description: 'example',
            storyPoints: 5,
            title: 'Example 1',
            user: undefined,
          }
        ]
      }
    ];
    
    const wrap = shallow(
      <Boards
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(Grid.Column)
        .length
    ).toBe(props.boards.length + 1);

    expect(
      wrap
        .find(Grid.Column)
        .at(0)
        .key()
    ).toBe('board0');

    expect(
      wrap
        .find(Grid.Column)
        .at(0)
        .find(BoardColumn)
        .at(0)
        .props()['id']
    ).toBe(props.boards[0].id);
    
    expect(
      wrap
        .find(Grid.Column)
        .at(0)
        .find(BoardColumn)
        .at(0)
        .props()['columnTitle']
    ).toBe(props.boards[0].name);

    expect(
      wrap
        .find(Grid.Column)
        .at(0)
        .find(BoardColumn)
        .at(0)
        .key()
    ).toBe(`boardcol${props.boards[0].id}`);
  });
});
