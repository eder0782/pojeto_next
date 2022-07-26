import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = function Alert({ error, message, active }) {
    useEffect(()=>{
        ativarToast
    },)

    function ativarToast() {
        if (active)
            if (error) {
                toast.error(message, {
                    theme: "colored"
                })

            }
            else {
                toast.success(message, {
                    theme: "colored"
                })
            }
    }

    return (
        <>
            <ToastContainer />
        </>
    )
}

export default ToastMessage;