import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Buttons from "./buttons";
import {
    ErrorField,
    ErrorMapping,
    ErrorObject,
    FieldNames,
    NameValue,
    Rule
} from "../models/form-validation.model";


const errorMapping: ErrorMapping = {
    length: 'must be > 1 char',
    alpha: 'must be all alpha chars',
    alphanumeric: 'must be alpha numeric chars'
}

function ruleProcessor(ruleArr: Rule[], value: string){
    return (ruleArr || []).reduce((accum: string[], e: Rule) =>{
        const { rule, name } = e;
        let pass = true;
        if(typeof rule === 'function'){
            pass = rule(value);
        } else {
            pass =  rule.test(value)
        }
        if (!pass){
            accum.push(name);
        }

        return accum;

    },[])

}

function View1 (){
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const errorObj: ErrorObject = {
        firstName: {
            touched: false,
            errors: [],
            rules: [
                {
                    rule: (value: any)=>{
                        return value.length > 1
                    },
                    name: 'length'
                },
                {
                    rule: /^[A-Za-z]+$/,
                    name: 'alpha'
                }
            ]
        },
        lastName: {
            touched: false,
            errors: [],
            rules: [
                {
                    rule: (value: any)=>{
                        return value.length > 1
                    },
                    name: 'length'
                },
                {
                    rule: /^[A-Za-z0-9']+$/,
                    name: 'alphanumeric'
                }
            ]
        }
    }
    const [errors, setErrors] = useState<ErrorObject>(errorObj);

    function shouldSubmit(){
        const inputArr: NameValue[] = [
            {name: FieldNames.firstName, value: firstName}, {name: FieldNames.lastName, value: lastName}];
        const anyErrors = inputArr.reduce((accum: boolean, e: NameValue) =>{
            const validation = runValidation(e, true);
            accum = accum === false ?  validation.length > 0 : accum;
            return accum;
        }, false)
        return !anyErrors;
    }


    function runValidation(target: NameValue, touched=false){
        const { name, value } = target;
        const ruleArr = errors[name].rules;
        const prevTouched = errors[name].touched;
        const validationNameFailures = ruleProcessor(ruleArr, value);
        setErrors(prevState => {
            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    touched: prevTouched ? true: touched,
                    errors: validationNameFailures,
                }
            };
        });
        return validationNameFailures;
    }

    function showError(name: FieldNames){
        const thisError: ErrorField = errors[name];
        const errorText = errorMapping[thisError.errors[0]];
        return (
            thisError.touched && <p style={{color: 'red', marginTop: '5px'}}>{errorText}</p>
        )
    }

    return (
        <>
            <Form.Group>
                <Row>
                    <Col sm={12}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            name={"firstName"}
                            onChange={(e) =>{
                                setFirstName(e.currentTarget.value);
                                const nv: NameValue = { name: FieldNames.firstName, value: e.currentTarget.value }
                                runValidation(nv)
                            }}
                            onBlur={(e) =>{
                                const nv: NameValue = { name: FieldNames.firstName, value: e.currentTarget.value }
                                runValidation(nv, true);
                            }}
                        />
                        {showError(FieldNames.firstName)}
                    </Col>
                    <Col sm={12}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            name={"lastName"}
                            onChange={(e) =>{
                                setLastName(e.currentTarget.value);
                                const nv: NameValue = { name: FieldNames.lastName, value: e.currentTarget.value }
                                runValidation(nv)
                            }}
                            onBlur={(e) =>{
                                const nv: NameValue = { name: FieldNames.lastName, value: e.currentTarget.value }
                                runValidation(nv, true);
                            }}
                        />
                        {showError(FieldNames.lastName)}
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} style={{ marginTop: '20px'}}>
                        <Buttons shouldSubmit={shouldSubmit}></Buttons>
                    </Col>
                </Row>

            </Form.Group>

        </>
    )
}




export default (View1);