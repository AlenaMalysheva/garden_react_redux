import React from 'react'
import s from './index.module.css'
import discountImg from '../../media/voucher_img.png'
import { useForm } from 'react-hook-form'
import Button from '../Button';


export default function DiscountVaucher() {

const {register, handleSubmit, formState: {errors}, reset } = useForm();

const submit = (data) => {
    console.log(data);
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
    <section  id='discount' className={s.wrapper}>
     <div className={[s.discount_section,'wrapper'].join(' ')}>
            <img src={discountImg} alt="img" />
            <div>
                <h2 className={s.discount_title}>
                    <span className={s.accent_discount}>5% off</span>
                    on the first order
                </h2>
                <form className={s.discount_form} onSubmit={handleSubmit(submit)}>
                    <input type="tel" name='number' placeholder='+49'  {...numberRegister}/>
                    <div className={s.errors_message}>
                        {errors.number && <p>{errors.number?.message}</p>}
                    </div>
                    <Button className={s.discount_btn}>Get discount</Button>
                </form>
            </div>
        </div>
    </section>
  )
}
