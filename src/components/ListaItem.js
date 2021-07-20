import React from 'react';
import styled from 'styled-components/native'

const Item = styled.TouchableHighlight`
  background-color:#EEE;
  flex-direction:row;
  height:50px;
  padding-left:10px;
  padding-right:20px;
  align-items:center;
`;
const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;
const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:5px solid #ccc;
  background-color:${props=>props.done?'#CCC':'#FFF'};
`

export default (props) => {
    return (
      <Item onPress={props.onPress} underlayColor='#CCC' activeOpacity={1}>
            <>
            <ItemText>{props.data.task}</ItemText>
            <ItemCheck done={props.data.done}></ItemCheck>
            </>
          </Item>
        );
}
