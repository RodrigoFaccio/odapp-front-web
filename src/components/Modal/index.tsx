import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Row, Title, ViewModal, DivForm, DivClose } from './styles';
import Input from '../Input';
import Button from '../Button';
import { FaClosedCaptioning } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { usePatientContext } from '../../context/patientContext';
import { toast } from 'react-toastify';
interface Patient {
    id?: number;
    name: string;
    age:string;
    city:string
    state:string
  }
interface IModalComponent {
  isOpen: boolean;
  onConfirm:()=>void;
  data?:Patient
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const ModalComponent = ({ isOpen,onConfirm,data }: IModalComponent) => {
  const { createPatient,editPatient,deletePatient } = usePatientContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  useEffect(() => {
    if (data) {
      setName(data.name);
      setAge(data.age);
      setCity(data.city );
      setState(data.state );
    }
  }, [data]);
  const handleSubmitCreate = () => {
    if(age!=='' && name!=='' && city!==''&& state!==''){
      createPatient({ name,age, city, state });
      onConfirm()

    }else{
      toast('Preencha todos os campos', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type:"error",
        theme: "light",
        });
    }
  };
  const handleEdit = () => {

    if(data?.id){
        editPatient(data.id,{ name,age, city, state },);
        onConfirm()
    }
    
  };
 
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <ViewModal>
        <DivClose>
        <IoCloseSharp style={{cursor:'pointer'}} onClick={onConfirm} size={20} />

        </DivClose>
        <Title>Informações do Paciente</Title>

        <DivForm>
          <Row>
            <Input defaultValue={data?.name} label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <Input width="50%"  defaultValue={data?.age} label="Idade" value={String(age)} onChange={(e) => setAge(e.target.value)} />
          </Row>
          <Row>
            <Input label="Cidade" defaultValue={data?.city} value={city} onChange={(e) => setCity(e.target.value)} />
            <Input width="50%" label="Estado" defaultValue={data?.state} value={state} onChange={(e) => setState(e.target.value)} />
          </Row>
        </DivForm>
        {
            data?.name?(<Button dataCy='edit-button' type="primary" onClick={handleEdit}>
            Editar
          </Button>):(<Button dataCy='create-button' type="primary" onClick={handleSubmitCreate}>
          Cadastrar
        </Button>)
        }
        
        
      </ViewModal>
    </Modal>
  );
};
