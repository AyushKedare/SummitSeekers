import { useState, useEffect,useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { userContext } from '../userContext'
import axios from "axios"
import "./Login.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";





const LoginScreen = () => {
	const {user,setUser} = useContext(userContext)
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
		const {data} = await axios.post("https://summit-seekers-backend.vercel.app/api/users/auth/",{email,password},{withCredentials:true})
		console.log(data)
		setUser(data)
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {success ? <Navigate to="/"/> : <></>}

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={isLoading}
          type='submit'
          variant='primary'
          className='mt-3'
        >
          Sign In
        </Button>
        <GoogleOAuthProvider clientId="938049730934-rt456ctopauvia38i4a5b909sm0ggs3o.apps.googleusercontent.com">
        <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse.credential);

    console.log(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    while(!localStorage.getItem("user")){
      continue;
    }
    setSuccess(true);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>


      </Form>

      {isLoading && <Loader />}

      <Row className='py-3'>
        <Col>
          New Customer? <Link to='/register'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
