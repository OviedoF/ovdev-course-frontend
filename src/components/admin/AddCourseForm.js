import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {activeScreen, desactiveScreen} from '../../actions/screensActive.actions';

export default function AddCourseForm() {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.type !== 'file'){
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        } 

        if(e.target.type == 'file'){
            setForm({
                ...form,
                images: e.target.files[0]
            })
        }
    }

    const handleSubmit = async (e) => {
        dispatch( activeScreen('isLoading') );
        dispatch( desactiveScreen('successMessage') );
        dispatch( desactiveScreen('errorMessage') );

        e.preventDefault();

        const formData = new FormData();

        formData.append('name', form.name);
        formData.append('dirname', form.dirname);
        formData.append('mini_description', form.mini_description);
        formData.append('description', form.description);
        formData.append('images', form.images);

        if(form.onlyAdmin == 'Y' || form.onlyAdmin == 'y') {
            formData.append('onlyAdmin', true);
        } else {
            formData.append('onlyAdmin', false);
        }

        console.log(form.images);

        await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/courses`, formData, {
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
                console.log(err), 
                dispatch( desactiveScreen('isLoading') );
                dispatch( activeScreen('errorMessage') );
            });
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" id="" placeholder='Name' onChange={(e) => handleChange(e)}/>

        <input type="text" name="dirname" id="" placeholder='Dirname' onChange={(e) => handleChange(e)}/>

        <textarea name="mini_description" id="" cols="10" rows="10" placeholder='mini_description'  onChange={(e) => handleChange(e)}/>

        <textarea name="description" id="" cols="30" rows="10" placeholder='description'  onChange={(e) => handleChange(e)}/>

        <input type="file" name="images" id="" style={{borderBottom: 'none'}}  onChange={(e) => handleChange(e)}/>

        <div className="adminRestriction" style={{display: 'flex'}}>
            <input type="input" name="onlyAdmin" id="onlyAdmin"  placeHolder="Is for admin? Y/N" onChange={(e) => handleChange(e)} style={{height: '20px'}}/>
        </div>



        <button type="submit" style={{cursor: 'pointer', width: '60%'}}>Enviar</button>

        <style jsx>{`
            form{
                background: var(--color-ld);
                padding: 30px;
                box-sizing: border-box;
                width: 40%;
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: var(--color-l) 0px 2px 3px;
            }

            input, textarea, button{
                width: 100%;
                color: white;
                height: 40px;
                background: none;
                border: none;
                border-bottom: 1px solid var(--color-vl);
            }
        `}</style>
    </form>
  )
}
