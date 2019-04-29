import * as React from 'react';
import BoardColumn from './BoardColumn';
import * as TaskService from '../services/TaskService';


export interface BoardProps {
    
}
 
export interface BoardState {
    boardColumns: any[];
    tasks: any[];
}
 
class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            boardColumns: [], 
            tasks: []
        };
    }

    async componentDidMount() {
        const boardColumns = [...this.state.boardColumns];

        boardColumns.push({
            columnId: 1,
            columnTitle: 'Backlog'
        },
        {
            columnId: 2,
            columnTitle: 'This Iteration'
        },
        {
            columnId: 3,
            columnTitle: 'In Review'
        },
        {
            columnId: 4,
            columnTitle: 'Completed'
        });

        const tasks: any[] = await TaskService.getTasks();
        this.setState({ boardColumns, tasks });
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Board Works</h1>
                <div className="row">
                {
                    this.state.boardColumns.map(boardcol => {
                        return (<BoardColumn key={boardcol.columnId} tasks={this.state.tasks.filter(t => t.assignedColumn === boardcol.columnId)} columnId={boardcol.columnId} columnTitle={boardcol.columnTitle} />)
                    })
                }
                </div>
            </React.Fragment>
        );
    }
}
 
export default Board;