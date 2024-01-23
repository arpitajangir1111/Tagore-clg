import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '../Image/cap.png'
import '../EmployeeLogin/Employeelogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { context } from '../../App';



function FormExample() {
    const serverLink = useContext(context)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [userName, setUsername] = useState()
    const [password, setPassword] = useState()


    const AdminLogin = async () => {
        let result = await axios.post(`${serverLink}/admindata/AdminsLogin`, {
            UserName: userName,
            Password: password
        })
        result = result.data

        if (result.UserName) {
            alert("Successful login")
            navigate("/AdminPage")
        }
        else {
            console.log(result)

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
                    <div className="Adminreg">
                        <h1>EMPLOYEE LOGIN FORM</h1>
                        <h6>Enter your login information below</h6>
                        <button><Link to='/adminreg'>New Registration</Link></button>
                    </div>
                </div>


                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="container">
                        <Row className="mb-3">



                            <Form.Group as={Col} md="7" controlId="validationCustom01">
                                <Form.Label>UserName </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your usrername"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">



                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="Password" placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password
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
                                AdminLogin();
                            }}>Submit</Button>
                    </div>
                </Form>
            </div >
        </>
    );
}

export default FormExample;