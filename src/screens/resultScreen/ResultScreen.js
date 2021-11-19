import React from 'react';
import { useSelector } from 'react-redux';

import './resultScreen.css';

const ResultScreen = () => {
    const {result} = useSelector(state => state.result);
    const {questions} = useSelector(state => state.questions);

    return (
        <div>
            <p className='text-center text-white mt-5 result'>You answered {result} out of {questions.length}</p>
            <p className='text-center text-white mt-5 display-5'>{Number.parseFloat((result*100) / questions.length).toPrecision(4)} %</p>
        </div>
    )
}

export default ResultScreen;
