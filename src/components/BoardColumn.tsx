import * as React from 'react';
import Task from './Task';

export interface BoardColumnProps {
    columnId: number;
    columnTitle: string;
    tasks: any[];
}
 
const BoardColumn: React.SFC<BoardColumnProps> = ({columnId, columnTitle, tasks}) => {
    return (
        <div className="col card">
            <div className="card-body">
                <h5>Column id: {columnId} - Column title: {columnTitle}</h5>
                {
                    tasks.map(task => {
                        return(<Task key={task.Id + task.Title} StoryPoints={task.StoryPoints} AssignedColumn={task.AssignedColumn} Id={task.Id} AssignedUser={task.AssignedUser} Title={task.Title} />)
                    })
                }
            </div>
        </div>
        
    );
}
 
export default BoardColumn;