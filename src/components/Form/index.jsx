import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button';

export default function Form({ onSubmit, buttonText, inputStyles, formStyles, formBtnStyles, errorStyles }) {

    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    const submit = (data) => {
        onSubmit(data)
        reset();              // очистить инпут после отправки
    }

    // зарегистривать данные которые будут вводиться
    const numberRegister = register('number', {
        required: '*The field number is required',
        pattern: {
            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 
            message: '*Not valid number-format'
        }
    })

  return (
        <form className={formStyles} onSubmit={handleSubmit(submit)}>
            <input className={inputStyles} type="tel" name='number' placeholder='+49'  {...numberRegister}/>
            <div className={errorStyles}>
                {errors.number && <p>{errors.number?.message}</p>}
            </div>
            <Button className={formBtnStyles}>{ buttonText }</Button>
        </form>
    )
}

