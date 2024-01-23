import React from 'react'
import '../StudentRecord/StudentRecord.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Student from '../Image/cap.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { context } from '../../App';


function StudentRecord() {
    const serverLink = useContext(context)
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [Dob, setDob] = useState()
    const [Phone, setPhone] = useState()
    const [Fathername, setFathername] = useState()
    const [Mothername, setMothername] = useState()
    const [Email, setEmail] = useState()
    const [Course, setCourse] = useState()
    const [Photo, setPhoto] = useState()
    const [Gender, setGender] = useState()
    const [ParentNo, setParentNo] = useState()
    const [Idproof, setIdproof] = useState()
    const [LocalAddress, setLocalAddress] = useState()
    const [PermanentAddress, setPermanentAddress] = useState()
    const [RegistrationDate, setRegistrationDate] = useState()
    const [District, setDistrict] = useState()
    const [State, setState] = useState()
    const [PinCode, setPinCode] = useState()
    const [validated, setValidated] = useState(false);

    const StudentDetails = async () => {
        const formData = new FormData();
        formData.append("Firstname", Firstname);
        formData.append("Lastname", Lastname);
        formData.append("Dob", Dob);
        formData.append("Phone", Phone);
        formData.append("ParentNo", ParentNo);
        formData.append("Fathername", Fathername);
        formData.append("Mothername", Mothername);
        formData.append("Email", Email);
        formData.append("Course", Course);
        formData.append("Photo", Photo);
        formData.append("Idproof", Idproof);
        formData.append("Gender", Gender);
        formData.append("LocalAddress", LocalAddress);
        formData.append("PermanentAddress", PermanentAddress);
        formData.append("RegistrationDate", RegistrationDate);
        formData.append("District", District);
        formData.append("State", State);
        formData.append("PinCode", PinCode);


        let result = await axios.post(`${serverLink}/StdRecord/StudentRecordadd`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        result = result.data
        console.log(result)
        if (result) {
            alert("Your Data has been added")
            setFirstname('')
            setLastname('')
            setFathername('')
            setMothername('')
            setEmail('')
            setDob('')
            setPhone('')
            setParentNo('')
            setPhoto('')
            setRegistrationDate('')
            setLocalAddress('')
            setPermanentAddress('')
            setIdproof('')
            setCourse('')
            setGender('')
            setState('')
            setPinCode('')
            setDistrict('')
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
                    <div className='logo'><img src={Student} alt="" /></div>
                    <div className='decription'>
                        <h4>Tagore P.G College </h4>
                        <h6>Gudha Gorji, jhunujhunu, rajasthan</h6>

                        <h6>983-3989-282</h6>

                    </div>
                </div>
            </div>
            <div className="student-form">
                <h2>STUDENT FORM</h2>
                <Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className='std'>First name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    value={Firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                // defaultValue="Mark"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Last name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    value={Lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>D.O.B :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                    value={Dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Father's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Father's name"
                                    value={Fathername}
                                    onChange={(e) => setFathername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Mother's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mother's name"
                                    value={Mothername}
                                    onChange={(e) => setMothername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Phone No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone no."
                                    value={Phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Parent's No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Parent's number"
                                    value={ParentNo}
                                    onChange={(e) => setParentNo(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label className='std'>Course</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" value={Course}
                                    onChange={(e) => setCourse(e.target.value)}>
                                    <option >Course</option>
                                    <option value="B.A-1st">B.A-1st</option>
                                    <option value="B.A-2nd">B.A-2nd</option>
                                    <option value="B.A-3rd">B.A-3rd</option>

                                    <option value="B.SC-1st">B.SC-1st</option>
                                    <option value="B.SC-2nd">B.SC-2nd</option>
                                    <option value="B.SC-3rd">B.SC-3rd</option>

                                    <option value="BCA-1st">BCA-1st</option>
                                    <option value="BCA-2nd">BCA-2nd</option>
                                    <option value="BCA-3rd">BCA-3rd</option>

                                    <option value="BBA-1st">BBA-1st</option>
                                    <option value="BBA-2nd">BBA-2nd</option>
                                    <option value="BBA-3rd">BBA-3rd</option>

                                    <option value="M.Sc-1st">M.Sc-1st</option>
                                    <option value="M.Sc-2nd">M.Sc-2nd</option>
                                    <option value="M.Sc-3rd">M.Sc-3rd</option>

                                    <option value="M.A-1st">M.A-1st</option>
                                    <option value="M.A-2nd">M.A-2nd</option>
                                    <option value="M.A-3rd">M.A-3rd</option>

                                    <option value="M.Com-1st">M.Com-1st</option>
                                    <option value="M.Com-2nd">M.Com-2nd</option>
                                    <option value="M.Com-3rd">M.Com-3rd</option>


                                </Form.Select>
                            </Form.Group>


                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="" className='std'>Gender</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" value={Gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option >Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">others</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Local address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Local address"
                                    value={LocalAddress}
                                    onChange={(e) => setLocalAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Permanent address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Permanent address"
                                    value={PermanentAddress}
                                    onChange={(e) => setPermanentAddress(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Email .</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='std'>Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="File"

                                    onChange={(e) => setPhoto(e.target.files[0])}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='std'>Aadhar Number</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder='Aadhar number'
                                    onChange={(e) => setIdproof(e.target.files[0])}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='std'>Registration Date :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                    value={RegistrationDate}
                                    onChange={(e) => setRegistrationDate(e.target.value)}
                                />
                            </Form.Group>



                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label className='std'>District</Form.Label>
                                <Form.Control type="text" placeholder="District" required
                                    value={District}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid District.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label className='std'>State</Form.Label>
                                <Form.Control type="text" placeholder="State"
                                    required
                                    value={State}
                                    onChange={(e) => setState(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label className='std'>Pin-Code</Form.Label>
                                <Form.Control type="text" placeholder="Pin-Code"
                                    required
                                    value={PinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid PinCode.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                            StudentDetails()
                        }}>Submit form</Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default StudentRecord