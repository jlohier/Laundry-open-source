import React from "react"
import { CardElement } from "@stripe/react-stripe-js"
//import './styles.css'


export default function Card () {
    return (
        
       
        <CardElement
            options={{
                style: {
                    base: {
                        margin: '50%',
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                           
                            
                            
                        },
                        textAlign: "center",
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
            />
            
        )

}