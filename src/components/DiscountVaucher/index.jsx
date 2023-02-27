import React from 'react'
import s from './index.module.css'
import discountImg from '../../media/voucher_img.png'
import Form from '../Form'

export default function DiscountVaucher() {

const onSubmitVoucherForm = (data) => {
    console.log( 'client number', data.number );
}

    return (
        <section  id='discount' className={s.wrapper}>
            <div className={[s.discount_section,'wrapper'].join(' ')}>
                <img src={discountImg} alt="img" />
                <div>
                    <h2 className={s.discount_title}>
                        <span className={s.accent_discount}>5% off</span>
                        on the first order
                    </h2>
                    <Form 
                        buttonText='Get discount'
                        inputStyles={s.form_input}
                        formBtnStyles={s.form_btn}
                        errorStyles={s.errors_message}
                        onSubmit={onSubmitVoucherForm}
                    />
                </div>
            </div>
        </section>
  )
}
