import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import confetti from 'canvas-confetti';
import { runFireWorks } from '../lib/utils';


const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0); 
      runFireWorks();   
      
    }, [])
    

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order!</h2>
                <p className='email-msg'>Check your email box for the receipt.</p>
                <p className='description'>
                    If you have any questions then email
                    <a className='email' href='mailto:orders@example.com'>orders@example.com</a>
                </p>
                <Link href="/">
                    <button width='300px' className='btn' type='button'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success;