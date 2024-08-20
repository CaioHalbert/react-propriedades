import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import './style.css';

export default function Login() {
  return (
    <>
        <Header tittle='Login' />
            <h1>Login</h1>
            <p>Welcome to the Login page!</p>
            <Form metodo='post' isSignUp={false} />
        <Footer />
    </>
  );
}