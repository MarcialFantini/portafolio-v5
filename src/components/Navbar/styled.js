import styled from "styled-components";



export const NavbarStyled = styled.div`
    transition: all 0.3s;
       
    background: ${(props) => props.theme.secundario};
    display   :flex ;
    flex-direction: row;
    align-items: center;

    height: 120px;
    width: 100%;
    
    padding: 10px;
`

export const ImgHome = styled.div`
height: 100px;
width: 100px;
    background: ${props => props.theme.terciario};
`



export const BtnActiveNav = styled.button`
    height: 100px;
    width: 100px;

    background:${props => props.theme.terciario} ;
    color: ${props => props.theme.cuarto};
    font-size: 3rem;

    margin-left: auto;

    transition: all 0.3s;
`

export const Nav = styled.nav`
    transition: all 0.3s;

    position: absolute;
    z-index: 40;

    top: 0;
    left: ${props => props.position};


    width: 70%;
    height: 100vh;
    background: ${props => props.theme.cuarto};
    
    border-right: 2px solid black;
`

export const Ul = styled.ul`
    
    
    list-style: none;
    padding: 0;
    margin: 0;
`

export const Li = styled.li`
    cursor: pointer;

    background: ${props => props.theme.terciario} ;
    color: ${props => props.theme.cuarto};

    text-align: start;
    font-size: 3rem;

    padding: 30px;
    margin: 10px 0 10px 0;
    
    transition: all 0.3s;
`