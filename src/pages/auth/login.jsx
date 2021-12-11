import React, { useEffect } from 'react';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import logo from '../logo7.svg'

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { form, formData, updateFormData } = useFormData();

  const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();

    login({
      variables: formData,
    });
  };

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate('/');
      }
    }
  }, [dataMutation, setToken, navigate]);

  return (
    <div className='wrapper' >
      <img src={logo} alt=""></img>
      <h1 className='text-xl font-bold text-gray-900 '>Iniciar sesión</h1>
      <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <Input name='correo' type='email' label='Correo' required={true} />
        <Input name='password' type='password' label='Contraseña' required={true} />
        <ButtonLoading
          className='btn btn-primary'
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Iniciar Sesión'
        />
      </form>
      <span>¿Deseas registrarte? </span>
  

      
      
      <Link to='/auth/register'>
        <br></br>
        <span className='text-blue-700'>Registrar</span>
      </Link>
    </div>
  );
};

export default Login;
