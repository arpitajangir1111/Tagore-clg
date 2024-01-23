import { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '../Image/cap.png'
import '../StudentRegistration/Regform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { context } from '../../App';



function FormExample() {
    const serverLink = useContext(context)
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [userName, setUsername] = useState();
    const [fathersName, setFathername] = useState();
    const [mothersName, setMothername] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const StudentRegister = async () => {
        let result = await axios.post(`${serverLink}/data/Register`, {
            Firstname: firstName,
            Lastname: lastName,
            Username: userName,
            Fathername: fathersName,
            Phoneno: phoneNo,
            Email: email,
            Password: password

        })
        result = result.data
        alert("Registration Successfull")
    navigate("/Stdlogin")
       
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
                <div className="hadding">
                    <h1>COLLEGE REGISTRATION FORM</h1>
                    <h6>Enter your registration information below</h6>
                </div>

            </div>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="container">
                    <Row className=" mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstname(e.target.value)}
                            />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                            />

                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label>User name </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Create a user name"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Father's Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Father's name"
                                value={fathersName}
                                onChange={(e) => setFathername(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">

                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Mother's Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your mother's name"
                                value={mothersName}
                                onChange={(e) => setMothername(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">

                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Phone no.</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone no."
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">
                                {/* Please provide a valid zip. */}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">
                                {/* Please provide a valid zip. */}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">
                                {/* Please provide a valid zip. */}
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
                            StudentRegister()
                        }}
                    >Submit</Button>
                </div>
            </Form>
        </>
    );
}

export default FormExample;