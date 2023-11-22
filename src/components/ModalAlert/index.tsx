import Modal from 'react-modal';
import { useState } from 'react';
import { DivButtons,Title, ViewModal, } from './styles';
import Input from '../Input';
import Button from '../Button';
import { usePatientContext } from '../../context/patientContext';
interface Patient {
    id?: number;
    name: string;
    age:number;
    city:string
    state:string
  }
interface IModalComponent {
  isOpen: boolean;
  onConfirm:()=>void;
  id:number;
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:8
    },
  };

export const ModalAlert = ({ isOpen,id,onConfirm }: IModalComponent) => {
  const { createPatient,editPatient,deletePatient } = usePatientContext();

  const handleDelete = ()=>{
    deletePatient(id)
    onConfirm()
  }
 
 
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <ViewModal>
        <Title>
          Deseja excluir o paciente?
        </Title>
        <DivButtons>
          <Button type='primary' onClick={()=>onConfirm()}>
            Cancelar
          </Button>
          <Button type='delete' onClick={()=>handleDelete()}>
            Excluir
          </Button>

        </DivButtons>
      </ViewModal>
    </Modal>
  );
};
