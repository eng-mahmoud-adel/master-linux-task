import React from 'react';
import { Button } from 'react-bootstrap';
import './answerButton.css';

const AnswerButton = ({ onClick, children, className, variant }) => {
    return (
        <Button onClick={onClick} className={className} variant={variant}>
            {children}
        </Button>
    )
}

export default AnswerButton;
