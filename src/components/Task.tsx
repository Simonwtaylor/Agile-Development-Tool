import * as React from 'react';
import { Link } from 'react-router-dom';


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
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
}
 
export default Task;