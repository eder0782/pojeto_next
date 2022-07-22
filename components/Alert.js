import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alerta({ error, message, active }) {
  const [ativo, setAtivo] = useState(false)
  console.log(active.toString())
  useEffect(() => {
    //setAtivo(active);
    // if (active) {      
      if (error) {
        toast.warning(message, {
          theme: "colored"
        })

      }
      else {
        toast.success(message, {
          theme: "colored"
        })
      }
    // }
  },)
  
  return (
    <>
      <ToastContainer />
    </>
  )
}
