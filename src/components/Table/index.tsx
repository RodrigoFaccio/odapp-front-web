import React, { useEffect } from 'react';
import { StyledTable } from './styles';
import Button from '../Button';
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { usePatientContext } from '../../context/patientContext';

interface Patient {
    id?: number;
    name: string;
    age:string;
    city:string
    state:string
  }
interface ITableProps{
    onEdit:(data:Patient)=>void;
    onDelete:(id:number)=>void;
}
const Table = ({onDelete,onEdit}:ITableProps) => {
    const {getPatient,patients} = usePatientContext()

    useEffect(() => {
        getPatient()
    
       
    }, []);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {patients?.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.city}</td>
            <td>{patient.state}</td>
            <td>
             <Button onClick={()=>onEdit(patient)} type='primary'>
                <MdEdit color='white' />

             </Button>
             <Button onClick={()=> patient.id&& onDelete(patient.id)} type='delete'>
                <IoMdTrash color='white'/>
             </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
