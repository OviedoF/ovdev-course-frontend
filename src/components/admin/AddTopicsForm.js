import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTopicRadio from './AddTopicRadio'
import styles from './AddTopicsForm.module.scss';
import axios from 'axios';
import {activeScreen, desactiveScreen} from '../../actions/screensActive.actions';

export default function AddTopicsForm({coursesNames, setError}) {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch( activeScreen('isLoading') );
        dispatch( desactiveScreen('successMessage') );
        dispatch( desactiveScreen('errorMessage') );

        await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/topics`, form, {
            headers: {
                'x-access-token': localStorage.getItem('x-access')
            }
        })
            .then(res => {
                console.log(res), 
                dispatch( desactiveScreen('isLoading') );
                dispatch( activeScreen('successMessage') );
            })
            .catch(err => {
                setError(err),
                dispatch( desactiveScreen('isLoading') );
                dispatch( activeScreen('errorMessage') );
            });
    }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Nombre del tópico.</label>
        <input type="text" name="name" id="name" onChange={(e) => handleChange(e)}/>

        <label htmlFor="filename">Nombre del archivo del tópico</label>
        <input type="text" name="filename" id="filename" onChange={(e) => handleChange(e)}/>

        <div id={styles.names_container}>
            {coursesNames.map(el => {
                return (<AddTopicRadio key={el} name={el} handleChange={handleChange}/>)
            })}
        </div>

        <button type="submit">Enviar</button>
    </form>
  )
}
