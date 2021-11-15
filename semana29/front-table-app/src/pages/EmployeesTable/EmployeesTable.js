import moment from "moment";
import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData"
import { urlBase } from "../../parameters/urlBase";
import { ImgEmployees, HeadTable, Row, Tr, InputSearch, ContainerInputIcon, ContainerInputName } from "./styled";
import formatPhoneNumber from "../../parameters/formatPhoneNumber";


const EmployeesTable = () => {
    const [searchInput, setSearchInput] = useState('')
    const { data, getAll } = useRequestData(`${urlBase}`);


    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const TableHead = () => {
        return (
            <HeadTable>
                <Tr>
                    <th>FOTO</th>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>DATA DE ADMISSÃO</th>
                    <th>TELEFONE</th>
                </Tr>
            </HeadTable>
        )
    }

    const RowTable = () => {
        return (
            <tbody>
                {data && data.filter((dado) => {

                    if (!searchInput) {
                        return dado
                    } else if (dado.name.toLowerCase().includes(searchInput.toLowerCase()) || dado.job.toLowerCase().includes(searchInput.toLowerCase()) || dado.admission_date.toLowerCase().includes(searchInput.toLowerCase())) {
                        return dado
                    }
                }).map((dado) => {
                    const dateFormat = moment(dado.admission_date, "YYYY/MM/DD").format("DD/MM/YYYY")

                    return (
                        <Row key={dado.id}>
                            <td><ImgEmployees src={dado.image} alt="foto funcionário" width="50px" /></td>
                            <td>{dado.name}</td>
                            <td>{dado.job}</td>
                            <td>{dateFormat}</td>
                            <td>{formatPhoneNumber(dado.phone)}</td>
                        </Row>
                    )
                })}
            </tbody>
        )
    }

    return (
        <>
            <ContainerInputName>
                <p>Funcionários</p>
                <ContainerInputIcon>
                    <InputSearch type="text" placeholder="Pesquisar" onChange={handleChange} />
                    <i class="fas fa-search"></i>
                </ContainerInputIcon>
                
            </ContainerInputName>

            <table>
                <TableHead />
                <RowTable />
            </table>
        </>
    )
}

export default EmployeesTable;