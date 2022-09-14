import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
// import Sign_img from './Sign_img'


const Login = () => {

    const [inputval, setinputval] = useState({
        email: "",
        password: ""
    })
    console.log(inputval)

    const [records, setRecord] = useState([])



    const getdata = (e) => {
        //  console.log(e.target.value);
        const { value, name } = e.target
        // console.log(value,name) ; 
        setinputval({
            ...inputval,
            [name]: value
        })


    }

    const addData = (e) => {
        e.preventDefault();

        const newRecord = { ...inputval, id: new Date().getTime.toString }
        console.log(records)
        setRecord([...records, newRecord])
        console.log(records)

        setinputval({
            name: "",
            email: "",
            date: "",
            password: ""
        })
    }
    return (
        <>
            <div className="left_data mt-3 mx-3 col-lg-6 p-5">
                <h3 className='text-center col-lg-10'>User login </h3>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button variant="dark" className='col-lg-12' onClick={addData} style={{ backgroundColor: "#4CAF50" }} type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>




            </div>

        </>
    )
}

export default Login