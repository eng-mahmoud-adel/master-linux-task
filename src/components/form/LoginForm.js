import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/auth.action';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(10),
}).required();

const LoginForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        setTimeout(() => {
            dispatch(signIn(data));
            navigate('/');
        }, 1500);
    }

    return (
        <Form className="login_form p-4" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register("name")} />
                <p className="text-danger">{errors.name?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                <p className="text-danger">{errors.email?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password")} />
                <p className="text-danger">{errors.password?.message}</p>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-25">
                Login
            </Button>
        </Form>
    )
}

export default LoginForm;
