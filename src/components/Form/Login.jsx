import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// import addInfo from '../../store/reducers/dataReducer';
import { addInfo } from '../../store/slice/userSlice';

const Login = () => {
  const [chekInput, setInputValue] = useState('');
  // const dataState = useSelector((state) => state.data);
  // initial the dispatch here
  const dispatch = useDispatch();
  // console.log(userSlice);
  // useEffect(() => {
  //   insertFormInfo();
  // }, []);

  function insertFormInfo(e) {
    e.preventDefault();
    console.log('chekInput', chekInput);
    dispatch(addInfo(chekInput));
    setInputValue('');
  }

  return (
    <div>
      <Container>
        <Row className='vh-100 d-flex justify-content-center align-items-center'>
          <Col md={8} lg={6} xs={12}>
            <Card className='shadow'>
              <Card.Body>
                <div className='mb-3 mt-md-4'>
                  <h2 className='fw-bold mb-2 text-uppercase '>
                    Login to Your Account
                  </h2>
                  <p className=' mb-5'>Please enter your login and password!</p>
                  <div className='mb-3'>
                    <Form onSubmit={insertFormInfo}>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>Login</Form.Label>
                        <Form.Control
                          value={chekInput}
                          type='text'
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder='Enter Login'
                        />
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' />
                      </Form.Group>

                      <div className='d-grid'>
                        <Button variant='primary' type='submit'>
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
