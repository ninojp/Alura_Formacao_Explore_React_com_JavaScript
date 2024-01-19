import styled from 'styled-components';
import tags from './tags.json';

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
`;
const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin-right: 50px;
`;
const ContainerBtnTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const BtnTags = styled.button`
    /* Codigo que eu fiz(desafio) 
    width: 94px;
    height: 49px;
    color: #FFFFFF;
    border: 2px solid;
    border-color: #C98CF1 #7B78E5;
    border-radius: 10px;
    padding: 10px 8px;
    background: linear-gradient(174.61deg, #C98CF1 4.16%, #7B78E5 48%, #D9D9D9 96.76%);
    Codigo proposto */
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }

`;

const Tags = ({setTag}) => {
    return (
        <ContainerTags>
            <TagTitulo>Busque Por Tags</TagTitulo>
            <ContainerBtnTags>
                {tags.map(tag => <BtnTags key={tag.id} onClick={() => setTag(tag.tag)}> {tag.titulo} </BtnTags>)}
            </ContainerBtnTags>
        </ContainerTags>
    );
};
export default Tags;
