import React from 'react'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectdPage'
import useForm from '../hooks/useForm';


export default function CreateTripPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    useProtectedPage ();

    const { form, onChange, cleanFields }= useForm({
        name:'',
        planet: '',
        date: '',
        description:'',
        durationInDays:''
    })

    const cadastrar = (e) =>{
        e.preventDefault()
        console.log('cadastrado', form);
        cleanFields();
    }

    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataAtual = ano + '-' + mes + '-' + dia;

    return(
        <>
            <button onClick = {goBack} >VOLTAR</button>
            <p>CreateTripPage - form para criar viagens</p>
            <form onSubmit={cadastrar}>
                <input name={'name'} placeholder={'Nome Viagem'} value={form.name} onChange={onChange} pattern = '[a-z]{5,}' title={'Deve ter no mínimo 5 letras'} required/>
                <br />
                <select name={'planet'} placeholder={'Planeta'} value={form.planet} onChange={onChange}  required>
                    <option value='' selected disabled>Destino</option>
                    <option value='Mercúrio'>Mercúrio</option>
                    <option value='Vênus'>Vênus</option>
                    <option value='Marte'>Marte</option>
                    <option value='Jupter'>Jupter</option>
                    <option value='Saturno'>Saturno</option>
                    <option value='Urano'>Urano</option>
                    <option value='Netuno'>Netuno</option>
                    <option value='Plutão'>Plutão</option>
                    <option value='Lua'>Lua</option>
                </select>
                <br />
                <input name={'date'} placeholder={'Data Prevista'} type={'date'} min={dataAtual} value={form.date} onChange={onChange} required/>
                <br />
                <input name={'description'} placeholder={'Descrição'} value={form.description} onChange={onChange} pattern = '[a-z]{30,}' title={'Deve ter no mínimo 30 letras'} required/>
                <br />
                <input name={'durationInDays'} placeholder={'Duração'} value={form.durationInDays} onChange={onChange} type={'number'} min={50} required/>
                <br />
                <button>CADASTRAR</button>
            </form>
            
        </>
    );
}