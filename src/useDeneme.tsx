import React, {useState} from 'react';
export default function useDeneme() {

    const [deneme,setDeneme] = useState('boşluk')
    const [show,setShow] = useState(false)

    const handleClose = () => {setShow(false)}

    return {
        deneme,
        setDeneme,
        show,
        setShow,
        handleClose,
    };


}