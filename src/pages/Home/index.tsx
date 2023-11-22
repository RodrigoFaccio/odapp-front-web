import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { ActionsView, Container,ContainerSide } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { ModalComponent } from '../../components/Modal';
import { ModalAlert } from '../../components/ModalAlert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDebounce } from '../../hooks/useDebounce';
import { usePatientContext } from '../../context/patientContext';
import SideMenuComponent from '../../components/SideMenu';
 interface Patient {
    id?: number;
    name: string;
    age:string;
    city:string
    state:string
  }
function Home() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [alertModal,setAlertModal] = useState(false)
    const [menuOpen,setMenuOpen] = useState('200px')

    const [search,setSearch] = useState('')
const {getPatient} = usePatientContext()
    const debouncedSearchTerm = useDebounce(search, 500); // 500ms de atraso


    useEffect(() => {
        getPatient(debouncedSearchTerm)
    }, [debouncedSearchTerm]);
    const [id,setId] = useState(0)

    const [dataEdit,setDataEdit] = useState<Patient>()

    const handleConfirm = ()=>{
        setModalIsOpen(!modalIsOpen)
        setDataEdit({age:'',city:'',name:'',state:''})
    }
   
const handleEditPatient = (data:Patient)=>{
    setModalIsOpen(!modalIsOpen)

    setDataEdit(data)
}
const handleDelete = (id:number)=>{
    setId(id)
    setAlertModal(!alertModal)

}


  return (
   <ContainerSide>

    <Container className='ol'>
        {
            modalIsOpen&&(
        <ModalComponent onConfirm={handleConfirm} isOpen={modalIsOpen} data={dataEdit} />

            )
        }
        {
            alertModal&&(
                <ModalAlert id={id} isOpen={alertModal} onConfirm={()=>setAlertModal(!alertModal)}/>

            )
        }
       <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

        <ActionsView >
           
            
            <Button dataCy='button-add'  onClick={()=>handleConfirm()} type='primary'>
                Adicionar
                <AiOutlinePlus color='white' size={20} />
            </Button>
        </ActionsView>
        <Table onEdit={handleEditPatient} onDelete={handleDelete} />
    </Container>
   </ContainerSide> 

  );
}

export default Home;
