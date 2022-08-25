import React from 'react'

export default function AddTopicRadio({name, handleChange}) {
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <input type="radio" name="course" id={name} onChange={(e) => handleChange(e)} value={name} />

        <style jsx>{`
            div{
                margin-top: 20px;
            }
            label{
                text-align: center;
            }
        `}</style>
    </div>
  )
}
