import React from 'react'
/** Styles */
import styles from './style.module.css';
/** React Router */
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import { addStudent } from '../../stores/students';

const Form = ({inputs, setInputs}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const [name, faculty, semester, email] = inputs;

        const newStudent = {
            id: +new Date(),
            name: name.value,
            faculty: faculty.value,
            semester: semester.value,
            email: email.value,
        };

        dispatch(addStudent(newStudent));

        navigate('/list');
    }

    const handleInput = (value, inputIdx) => {
        const newInput = { ...inputs[inputIdx], value };
        
        inputs[inputIdx] = newInput;
        setInputs([...inputs]);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            {
                inputs.map((input, inputIdx) => (
                    <div className={styles.input_container} key={inputIdx}>
                        <label>{input.label}</label>
                        <input name={input.label} type={input.type} placeholder={input.placeholder} value={input.value} onChange={(e) => handleInput(e.target.value, inputIdx)} /> 
                    </div>
                ))
            }
            <button type='submit'>Add Student</button>
        </form>
    )
}

export default Form;