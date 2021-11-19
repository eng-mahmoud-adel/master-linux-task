import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import BaseNavbar from './components/navbar/Navbar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import './App.css';
import ResultScreen from './screens/resultScreen/ResultScreen';

function Layout({ children }) {
  return (
    <>
      <BaseNavbar />
        <Container>
          {children}
        </Container>
    </>
  );
}

function App() {
  const { user } = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="/" element={!user ? <Navigate replace to="/login" /> :
        <Layout>
          <HomeScreen />
        </Layout>
      }>
      </Route>

      <Route path="/result" element={!user ? <Navigate replace to="/login" /> :
        <Layout>
          <ResultScreen />
        </Layout>
      }>
      </Route>

        <Route path="/login" element={user ? <Navigate replace to="/" /> : <LoginScreen />} />

        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
