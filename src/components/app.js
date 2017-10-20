import React from 'react';
import Table from './table';

const App = () => {
    return (
        <div className="container">
            <h1>
                Student Grade Table
            </h1>
            <Table data = {students}/>
        </div>
    )
};
export default App;


const students = [
    {
        name: 'Peter Parker',
        course: 'Intro to Photography',
        grade: 85
    },
    {
        name: 'Bruce Banner',
        course: 'Psychology',
        grade: 91
    },
    {
        name: 'Tony Stark',
        course: 'Mechanical Engineering',
        grade: 100
    }
];