import React from 'react';
import {useHistory} from 'react-router-dom';
import {paises} from '../../constants/selectPaises';
import useForm from '../../hooks/useForm';
import useRequestData from '../../hooks/useRequestData';
import { baseUrl } from '../../constants/urls';
import axios from 'axios';
import { Button } from "@chakra-ui/react";
import styled, { Form, DivContainer, Input, Select, DivBotao, DivInput, DivBotaoVoltar } from './styled';



export default function ApplicationFormPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const { form, onChange, cleanFields }= useForm({
        name:'',
        age: '',
        applicationText: '',
        profession:'',
        country:'',
        trip:''
    })

    const enviar = (e) =>{
        e.preventDefault()
        cleanFields();
        const body = { 
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
         };
        axios.post(`${baseUrl}/trips/${form.trip}/apply`, body).then((res) => {
            console.log(res)
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }

    const listaPaises = paises.map((item) => {
        return(
            <>
                <option value={item}>{item}</option>
            </>
        )
    })

    const listTrips = useRequestData( `${baseUrl}/trips`, [] )
    console.log (listTrips)

    const idsViagens = listTrips.trips && listTrips.trips.map((id) => {
        return (
            <>
                <option value={id.id}>{id.name}</option>
            </>
        )
    })

    return(
        <DivContainer>
            <DivBotaoVoltar>
                <Button onClick = {goBack} colorScheme="none"  border= '1px' borderColor="white" >VOLTAR</Button>
            </DivBotaoVoltar>
            <DivInput>
                <p>INSCRIÇÃO</p>
                <hr />
                <Form onSubmit={enviar}>
                    <Select name={'trip'} placeholder={'Planeta'} value={form.trip} onChange={onChange}  required>
                        <option value='' selected disabled>Escolha um destino</option>
                        {idsViagens}
                    </Select>
                    <br />
                    <Input name={'name'} onChange={onChange} placeholder={'Nome'} value={form.name} pattern='^.{3,}' title="Deve ter no mínimo 3 letras" required/>
                    <br />
                    <Input name={'age'} onChange={onChange} placeholder={'Idade'} value={form.age} type="number" min="18"/>
                    <br />
                    <Input name={'applicationText'} onChange={onChange} placeholder={'Texto de Candidatura'} value={form.applicationText} pattern='^.{30,}' title={'Deve ter no mínimo 30 caracteres'} required/>
                    <br />
                    <Input name={'profession'}onChange={onChange} placeholder={'Profissão'} value={form.profession} pattern='^.{10,}' title={'Deve ter no mínimo 00 caracteres'} required/>
                    <br />
                    <Select name={'country'} placeholder={'Planeta'} value={form.country} onChange={onChange}  required>
                    <option value='' selected disabled>Escolha um país</option>
                        {listaPaises}
                    </Select>
                    <br />
                    <DivBotao>
                        <Button colorScheme="none"  border= '1px' borderColor="white">ENVIAR</Button>
                    </DivBotao>
                </Form>
            </DivInput>
        </DivContainer>
    );
}