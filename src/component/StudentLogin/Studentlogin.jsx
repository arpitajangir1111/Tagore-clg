import { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '../Image/cap.png'
import '../StudentLogin/Studentlogin.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { context } from '../../App';


function FormExample() {
    const serverLink = useContext(context)
    const navigater = useNavigate()
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const StudentLogin = async () => {
        let result = await axios.post(`${serverLink}/data/login`, {
            Username: username,
            Password: password,
        })
        result = result.data
        console.log(result.data)
        if (result.Username) {
           alert("Successfull login")
           navigater('/stdPage')

          }
          else {
            alert("Please Enter Correct Details")
          }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>

            <div className='container'>
                <div className="hadder">
                    <div className='logo'><img src={cap} alt="" /></div>
                    <div className='decription'>
                        <h4>Tagore P.G College </h4>

                        <h6>TagoreCollege@gmail.com</h6>
                        <h6>983-3989-282</h6>

                    </div>
                </div>
            </div>
            <div className='main'>
                <div className="container">
                    <div className="stdLogin">
                    <h1>STUDENT LOGIN FORM</h1>
                    <h6>Enter your login information below</h6>
                    <button><Link to='/stdReg'>New Registration</Link></button>
                    </div>

                </div>

                 
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="container">
                        <Row className="  mb-3">
                            <Form.Group as={Col} md="7" controlId="validationCustom01">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your usrername"
                                    value={username}
                                    onChange={(e)=> setUsername(e.target.value)}
                                />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="7" controlId="validationCustom05">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your Password" 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                
                                required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>



                        </Row>
                        <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
                        
                        <Button type="submit" 
                         onClick={(e) => {
                            e.preventDefault();
                            StudentLogin();
                        }}
                        >Submit</Button>
                    </div>
                </Form>
                </div >
            </>
            );
}

            export default FormExample;