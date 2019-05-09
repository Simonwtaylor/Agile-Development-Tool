import * as React from 'react';

export interface TaskProps {
    Id: string, 
    Title: string,
    StoryPoints: number, 
    AssignedColumn: number, 
    AssignedUser: any
}
 
const Task: React.SFC<TaskProps> = ({ Id, Title, StoryPoints, AssignedColumn, AssignedUser }) => {
    return (
        <div className="card">
            <div className="card-header">
                {Title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{StoryPoints}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
 
export default Task;