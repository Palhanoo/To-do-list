import React from 'react';
import styled from 'styled-components';

const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:50px;
    background-color:#FFF;
    justify-content:center;
`;
const ListaItemIcon = styled.Image`
    width:25px;
    height:25px;
    background-color:#FFF;
    margin-left:20px;
`;
export default (props) => {
    return (
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF4444">
            <ListaItemIcon
                source={require('../images/delete.png')}
                style={{width:15, height:15}}
                resizeMode="cover"
            ></ListaItemIcon>
        </ListaItemSwipe>
    );
}