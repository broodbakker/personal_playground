
import React from 'react'
//styles
import styled, { css } from "styled-components"
import { TextInput } from "grommet"
import { normalizeColor } from "grommet/utils";
import { Search } from 'grommet-icons';

const SearchContainer = styled(TextInput)`
  border-radius:0;
  ${props => css`
    border: 1px ${normalizeColor("primary", props.theme)} solid;
    background-color: ${props.bgColor === "light" ? "white" : normalizeColor("primary", props.theme)};
  `}
  ::placeholder {
    font-size:1em;
  }
  &:focus {
    outline: none;
      ${props => css`
        box-shadow:  0px 0px 5px  ${normalizeColor("primary", props.theme)} ;
        border: 1px ${normalizeColor("primary", props.theme)} solid;
  `}
    }
`

type InputProps = {
  value: string,
  handleChange: (event: any) => void
  placeholder: string
  bgColor?: string
  name: string
  type?: string
}

const SearchInput = ({ value, handleChange, placeholder, bgColor, name }: InputProps) => {
  return (
    <SearchContainer
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      icon={<Search />}
      bgColor={bgColor}
      name={name}
      size="medium"
    />
  );
}

export default SearchInput