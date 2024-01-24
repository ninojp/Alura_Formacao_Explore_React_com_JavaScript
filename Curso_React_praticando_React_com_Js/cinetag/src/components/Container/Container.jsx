import styled from "styled-components";

const ContainerPages = styled.section`
    margin: 2rem 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const Container = ({children}) => {
    return (
        <ContainerPages>
            {children}
        </ContainerPages>
    );
};
