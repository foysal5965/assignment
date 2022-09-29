import React from 'react';
import './exercise.css'
const Exercise = (props) => {
    const{name,img,time,detail,forage}=props.exercise
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h4 className='exercise-name'>{name}</h4>
            <p>{detail}</p>
            <p>for age: {forage}</p>
            <p>Time Taken: {time}m</p>
            <button  onClick={()=>props.handleAddToList(props.exercise)} className='add-btn'><p>Add To list</p></button>
        </div>
    );
};

export default Exercise;