import React from 'react';
import Table from '../../components/Table';
import { DivInput, InputStyled, Label } from './styles';

interface IInputProps{
    label:string;
    placeholder?:string;
    width?:string;
    value:string;
    defaultValue?:string|number;
    dataCy?:string

    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

function Input({label,placeholder,width,value,defaultValue,onChange}:IInputProps) {
  return (
    <DivInput>
        {
            label!==''&&(
                <Label>{label}</Label>

            )
        }
        <InputStyled defaultValue={defaultValue} onChange={onChange} value={value} width={width}  placeholder={placeholder}/>
    </DivInput>
       
    
  );
}

export default Input;
