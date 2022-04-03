import React from 'react';
/** Styles */
import styles from './style.module.css';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Actions 
import { deleteStudent } from '../../stores/students';

const Table = () => {
    const students = useSelector((state) => state.students.value);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Faculty</th>
                    <th>Semester</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map(({ id, name, faculty, semester, email }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{faculty}</td>
                        <td>{semester}</td>
                        <td>{email}</td>
                        <td className={styles.deleteText} onClick={() => handleDelete(id)}>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;