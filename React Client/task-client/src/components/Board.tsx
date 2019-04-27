import * as React from 'react';

export interface BoardProps {
    
}
 
export interface BoardState {
    
}
 
class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <h1>Board Works</h1>
          );
    }
}
 
export default Board;