import React, { useEffect, useState } from 'react';
import Exercise from '../exercise/Exercise';
import List from '../list/List';
import './Home.css'
const Home = () => {
    const [exercises, setExercises]=useState([]);
    const[list, setList]=useState([])

    useEffect(()=>{
        fetch('exercise.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
    },[])
    const handleAddToList=(exercise)=>{
        
        const newList =[...list,exercise]
        setList(newList)
    }
    return (
        <div className='home-container'>
            <div className="gym-container">
            
                {
                    exercises.map(exercise=><Exercise key={exercise.id} exercise={exercise} handleAddToList={handleAddToList}></Exercise>)
                }
            
            </div>
            <div className="detail-container">
                
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Home;