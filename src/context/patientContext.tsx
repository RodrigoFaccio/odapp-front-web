// PatientContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { api } from '../utils/api';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface Patient {
  id?: number;
  name: string;
  age:string;
  city:string
  state:string
}
interface IPatientProps {
   children:ReactNode
  }
interface PatientContextProps {
  patients: Patient[];
  createPatient: (newPatient: Patient) => void;
  editPatient: (id: number, editedPatient: Partial<Patient>) => void;
  deletePatient: (id: number) => void;
  getPatient:(name?:string)=>void;
}

const PatientContext = createContext<PatientContextProps | undefined>(undefined);

const PatientContextProvider = ({ children }:IPatientProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);

    const getPatient = async(name?:string)=>{
      console.log(name)
        try {
        const {data} = await api.get('/patients/',{
          params:{
            name:name
          }
        })
        setPatients(data.data)
            
        } catch (error) {
            return console.log('erro ao buscar pacientes')
        }

    }
    

  const createPatient = async (newPatient: Omit<Patient, 'id'>) => {
    const data = {
      ...newPatient,
       age:Number(newPatient.age)
    }
    try {
        await api.post('/patients/',data)
        toast('Paciente cadastrado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type:"success",
          theme: "light",
          });
    setPatients([...patients, newPatient]);

    } catch (error) {
      toast('Erro ao cadastrar paciente', {
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

  const editPatient = async (id: number, editedPatient: Partial<Patient>) => {
    const data = {
      ...editedPatient,
       age:Number(editedPatient.age)
    }
    try {
        await api.put(`/patients/${id}`,data)
        toast('Paciente editado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type:"success",
          theme: "light",
          });
          const updatedPatients = patients.map((patient) =>
          patient.id === id ? { ...patient, ...editedPatient } : patient
        );
        setPatients(updatedPatients);
    } catch (error) {
      toast('Erro ao editar paciente', {
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

  const deletePatient = async (id: number) => {
    try {
        await api.delete(`/patients/${id}`)
        toast('Paciente excluído com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type:"success",
          theme: "light",
          });
          const filteredPatients = patients.filter((patient) => patient.id !== id);
    setPatients(filteredPatients);
    } catch (error) {
      toast('Erro ao excluir paciente', {
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

  const contextValue: PatientContextProps = {
    patients,
    getPatient,
    createPatient,
    editPatient,
    deletePatient,

  };

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  );
};

const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatientContext must be used within a PatientContextProvider');
  }
  return context;
};

export { PatientContextProvider, usePatientContext };
