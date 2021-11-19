import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnswerButton from '../../components/buttons/AnswerButton';
import { getQuestions } from '../../redux/actions/questions.action';
import { getResult } from '../../redux/actions/result.action';
import './homeScreen.css';

const HomeScreen = () => {
    const {questions} = useSelector(state => state.questions);
    const {answers} = useSelector(state => state.questions);
    console.log(answers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuestions());

    }, [getQuestions, dispatch]);

    const handleAnswerOptionClick = (isCorrect) => {        
		if (isCorrect) {
			setResult(result + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
            }, 1500);
            
		} else {
			setShowResult(true);
            dispatch(getResult(result));
            navigate('/result');
		}
	}

    return (
        <>
            {questions.length && <div className="questions_screen">
                <h4 className="text-white mt-5 title">Please choose the correct answers:</h4>
                <p className="text-white">Question {currentQuestion + 1} of {questions.length}</p>

                <div className="questions">
                    <p className="text-white quetionText">{currentQuestion + 1}- {questions[currentQuestion].questionText}</p>
                    <Row className="flex-column">
                        {answers.length && answers[currentQuestion].map((answerOption, index) => (
                            <Col md={7} lg={5} key={index}>
                                <AnswerButton className="w-100 my-2" variant="light" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</AnswerButton>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>}
        </>
    )
}

export default HomeScreen;
