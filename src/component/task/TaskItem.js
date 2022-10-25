import React, {Component} from 'react';

const TaskItem = ({v,i}) => {
    return (<div>

            <li className="list-group-item  mt-3 p-3 s" style={{
                borderLeft: '5px solid blue',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
                borderTop: '1px solid black'
            }}
                key={i}>
                {v.name}
            </li>
        </div>
    );
}

export default TaskItem;