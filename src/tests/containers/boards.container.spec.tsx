import * as React from 'react';
import {
  IBoardsContainerProps,
  BoardsContainer,
  GET_ALL_BOARDS,
} from '../../components/boards';
import * as TestRenderer from 'react-test-renderer';
import { ApolloProvider } from "@apollo/react-hooks";
import { wait, createClient } from "@apollo/react-testing";
import { act } from 'react-test-renderer';

describe('Boards - Container', () => {
  let props: IBoardsContainerProps;

  beforeEach(() => {
    props = {

    };
  });
  it('Should render properly', async () => {
    await act(async () => {
      const client = createClient({
        boards: [
          {
            _id: 1,
            name: 'Example',
            tasks: [
              {
                _id: '11231',
                completed: false,
                description: 'example',
                storyPoints: 5,
                title: 'Example 1',
                user: null,
                userId: '1',
                boardId: '1',
              }
            ]
          }
        ]
      }, GET_ALL_BOARDS);

      const component = TestRenderer.create(
        // ts-lint:ignore-next-line
        <ApolloProvider client={client}>
            <BoardsContainer {...props} />
        </ApolloProvider>
      );

      await wait(0);

      expect(
        component
      ).not.toBeNull();
    });
  });
});
