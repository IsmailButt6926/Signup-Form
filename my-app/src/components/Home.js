import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
const Home = () => {

    const [inputval, setinputval] = useState({
        name: "",
        email: "",
        date: "",
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


    // FORM SUBMIT FUNCTION 
    // const addData = (e) => {
    //     e.preventDefault();
    //     const { name, email, date, password } = inputval

    //     if (name === "") {
    //         alert("name field is required")
    //     } else if (email === "") {
    //         alert("email field is required")
    //     } else if (!email.includes("@")) {
    //         alert("email is not valid")

    //     } else if (date === "") {
    //         alert("date field is required")
    //     } else if (password === "") {
    //         alert("password field is required")

    //     } else if (password.length < 5) {
    //         alert("password shoudl be greater then 5")

    //     } else {
    //         console.log("Data added successfully")
    //     }
    // }
    return (
        <>

            <div className="container"></div>
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 mx-3 col-lg-6 p-5">
                    <h3 className='text-center col-lg-10'>Home</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Email" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control type="date" name="date" onChange={getdata} placeholder="Enter date" />
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
              
                < Sign_img />
                <div>
                    {
                        records.map((currElement)=>{
                            return(
                                <div className='showData'>
                                    <p>{currElement.name}</p>
                                    <p>{currElement.email}</p>
                                    <p>{currElement.date}</p>
                                    <p>{currElement.password}</p>
                                </div>
                            )

                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Home
