import {React} from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react-v1';
import {Route, Routes} from 'react-router-dom';

import Navbar from './pages/navbar';

import Best from './pages/best'
import Dumbbell from './pages/dumbell'
import Equipment from './pages/equipment'
import Exercises from './pages/exercise'
import Training from './pages/training'
import Home from './pages/home'


Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <AmplifySignOut />
            <Navbar/>

            <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/bestExercises" element={<Best />} />
            <Route path="/dbWorkouts" element={<Dumbbell/>} />
            <Route path="/equipment" element={<Equipment/>} />
            <Route path="/exercises" element={<Exercises/>} />
            <Route path="/training" element={<Training/>} />
            </Routes>


        </div>
    );
}

export default withAuthenticator(App);