import React from 'react';
import './list.css'
const List = ({list}) => {
    let total =0;
    for(const exercise of list)
        total=total+exercise.time
    return (
        <div className='list'>
            <div className="personal-info">
                <h4>Foysal Ahmed</h4>
                <p>Dhaka, Bangladesh</p>
            </div>
            <h4>Add A Break</h4>
            <div className="btn-break">
                <button>10</button>
                <button>20</button>
                <button>30</button>
                <button>40</button>
                <button>50</button>
            </div>
            <h3>Exercise Detail</h3>
            <h5>Exercise Time: {total}m</h5>
            <h5>Break Time: </h5>
        </div>
    );
};

export default List;