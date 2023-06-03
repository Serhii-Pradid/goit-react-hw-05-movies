import styled from 'styled-components';

export const Searchbar = styled.div`
display: flex;
    margin-top: 30px;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #6D6D54;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `;

  export const SearchForm = styled.form`
  display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding-left: 5px;
    background-color: #fff;  
    border-radius: 3px;
    overflow: hidden`;

    export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #6D6D54;
    color: #fff;
    font-size: 30px;
    &::placeholder {
        font: inherit;
        font-size: 25px;
        color: #ffffff66;
      }
    
    `;
  
    export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-color: #fff;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    
    &:hover {
    opacity: 1;
  }

    `;

    
  