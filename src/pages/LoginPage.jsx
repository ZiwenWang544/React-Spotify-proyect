import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'




export const LoginPage = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const navigate = useNavigate()

    const onSubmit = () =>{
     
       navigate('/dashboard', {
        replace: true, 
        state: {
          logged: true
        }
       })
    }
  
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="text" {...register('password', {
                    required: true,
                    maxLength: 10
                })}/>
               
            </div>
            
           
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    
  )
}
