import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemArea = styled.View`
    background-color: #CCC;
    padding:10px;
`;

const AddItemInput = styled.TextInput`
    background-color:#FFF;
    font-size:15px;
    height:50px;
    border-radius:5px;
    padding:10px;
`;


export default (props) => {
    const [item, setItem] = useState('');
    
    const handleSubmit = () => {
        if(item.trim() != '') { 
            props.onAdd(item.trim());
            setItem('');
        }   
    };
    return (
        <AddItemArea>
            <AddItemInput
                placeholder="Escreva seu pensamento"
                value={item}
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
            />
        </AddItemArea>
    );
}