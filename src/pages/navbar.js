import React from 'react'
import {Link} from 'react-router-dom'

function navbar(){
    return(
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/dbWorkouts'>Dumbell Workouts</Link></li>
            <li><Link to='/exercises'>Exercises</Link></li>
            <li><Link to='/bestExercises'>Best Exercises</Link></li>
            <li><Link to='/equipment'>Dumbbell Equipment</Link></li>
            <li><Link to='/training'>Dumbbell Training</Link></li>
        </ul>
    );
}
export default navbar;