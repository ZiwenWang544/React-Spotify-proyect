import { useForm } from "react-hook-form"
import { edadValidator } from "../components/validators";



export const RegisterPage = () => {
    const {register, formState: {errors}, watch, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }

    const incluirTelefono = watch('incluirTelefono')
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div>
                <label htmlFor="" >Direccion</label>
                <input type="text" {...register('direccion')}/>
            </div>
            <div>
                <label htmlFor="" >Email</label>
                <input type="text" {...register('email', {
                    pattern:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })}/>
                {errors.email?.type === 'pattern' && <p>Email no valido </p>}
            </div>
            <div>
                <label htmlFor="">Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })}/>
                {errors.edad && <p>No tienes edad para estar aquí</p>}
            </div>
            <div>
                <label htmlFor="">País</label>
                <select  {...register('pais')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                </select>
            </div>
            <div>
                <label>Incluir Teléfono</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                 <div>
                 <label>Teléfono</label>
                 <input type="telf" {...register('telefono')} />
             </div>
            )}
           
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    
  )
}
