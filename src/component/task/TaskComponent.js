import React, {useCallback, useEffect, useState} from 'react';
import {
    Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Form, FormGroup, Input, Label
} from "reactstrap";
import {useFormik} from "formik";
import * as yup from "yup";
import {Task, TaskList} from '../../model/Task';
import TaskItem from "./TaskItem";

const schema = yup.object().shape({
    name: yup.string().min(2).required('Name is required'),
    description: yup.string().min(3).required('Description is required'),
    estiPomo: yup.number().positive('age must be greater than zero')
        .required('age is required')
});

const TaskComponent = () => {

    const [tasks, setTasks] = useState(Array())
    const [task, setTask] = useState({
        id: 0, name: "", description: "", estiPomo: 0,
    })
    const [show, setShow] = useState(false);


    const formik = useFormik({
        initialValues: task, validationSchema: schema, onSubmit: (values, {resetForm}) => {
            setTask(values);

            console.log(tasks)
            resetForm()
        },
    });

    useEffect(() => {
        setTasks(array => [...array, task])
    }, [task])

    const setInputValue = useCallback((key, value) => formik.setValues({
        ...formik.values, [key]: value,
    }), [formik]);


    const addTask = () => {
        setShow(true)
    }


    const incrementPomo = (type) => {
        let res = 0

        if (type === "+") {
            if (formik.values.estiPomo >= 0) {
                res = formik.values.estiPomo + 1
            }
        } else {
            if (formik.values.estiPomo > 0) {
                res = formik.values.estiPomo - 1
            }
        }
        formik.setValues({
            ...formik.values, estiPomo: res
        })

    }

    useEffect(()=>{
        
    })

    return (<div className="opacity-100 " style={{width: "35rem"}}>
        <div className="d-flex justify-content-between align-items-md-end w-100 mt-3">
            <h3 className="text-white">Tasks</h3>
            <Button className="text-bg-light" style={{color:"#fff",fontWeight:"bold"}} onClick={addTask}>+</Button>
        </div>
        <hr></hr>

        {show ? <Card
            className="border-0 rounded-0"
            color="white"
            style={{
                width: '100%'
            }}
        >
            <Form onSubmit={formik.handleSubmit}>
                <CardBody>
                    <FormGroup>
                        <Input type="text" className="form-control-lg border-0"
                               value={formik.values.name}
                               onChange={(e) => setInputValue("name", e.target.value)}
                               name="text" id="exampleEmail"
                               placeholder="Task ..."/>

                        <small className="text-danger">{formik.errors.name}</small>
                        {!!formik.errors.name && <br/>}

                    </FormGroup>

                    <CardText className="row container-fluid" style={{fontWeight:"bold"}}>
                        Est PomoFocus
                    </CardText>
                    <FormGroup className="row">
                        <div className="col-4 ">
                            <Input type="number" className="form-control-lg border-1"
                                   value={formik.values.estiPomo}
                                   onChange={(e) => setInputValue("estiPomo", e.target.value)}
                            />
                            <small className="text-danger">{formik.errors.estiPomo}</small>
                            {!!formik.errors.estiPomo && <br/>}
                        </div>
                        <div className="col-4 d-flex align-items-start">
                            <Button type="button" onClick={() => incrementPomo("+")}
                                    className="btn btn-lg btn-light">+</Button>
                            <Button type="button" onClick={() => incrementPomo("-")}
                                    className="btn btn-lg btn-light">-</Button>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Input type="textarea" name="text"
                               value={formik.values.description}
                               id="exampleText" className="form-control-lg border-1"
                               onChange={(e) => setInputValue("description", e.target.value)}
                               placeholder="Note"/>
                        <small className="text-danger">{formik.errors.description}</small>
                        {!!formik.errors.description && <br/>}
                    </FormGroup>

                </CardBody>
                <CardFooter style={{background: "white"}} className="d-flex justify-content-end border-0">
                    <Button className="btn btn-light" onClick={() => setShow(false)}>Cancel</Button>
                    <Button className="btn btn-dark">Add </Button>
                </CardFooter>
            </Form>
        </Card> : <></>}


        <div className=" w-100">
            {tasks?.map((v, i) => v.name === "" ?
               <div key={i}></div>: <TaskItem key={i} v={v} i={i} />
            )}
        </div>

    </div>);

}

export default TaskComponent;