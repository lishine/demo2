import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Box } from 'styles/ss-components'

export const Table = styled.div`
    display: block;
    border-radius: 5px;
    border: solid 1px #ddd;
    /* overflow: scroll; */
`

export const RowBase = styled.div`
    display: flex;
    border-bottom: solid 1px #ddd;

    :last-child {
        border-bottom: 0;
    }
`

export const Row = styled(RowBase)`
    cursor: pointer;
    background: ${props => (props.even ? 'rgba(42, 117, 146, 0.12)' : '')};
    opacity: ${props => (props.selected ? 0.4 : 1)};
`

export const HeaderRow = styled(RowBase)`
    background: rgba(42, 117, 146, 1);
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    color: white;
`

export const Pagination = styled(RowBase)`
    background: rgba(42, 117, 146, 1);
    color: white;
`

export const Cell = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: solid 1px rgba(0, 0, 0, 0.1);
    padding: 0.6rem;

    :last-child {
        border-right: 0;
    }
`

export const Header = styled(Cell)`
    font-weight: bold;
    flex-direction: column;
    justify-content: flex-start;

    ${props => {
        const width = (props.sortedIndex + 1) * 5
        return (
            props.sorted &&
            (props.sortedDesc
                ? css`
                      box-shadow: inset 0 ${width}px hsla(0, 100%, 40%);
                  `
                : css`
                      box-shadow: inset 0 -${width}px hsl(55, 100%, 50%);
                  `)
        )
    }};
`

export const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    background: white;
    border-radius: 5px;
    cursor: pointer;

    :disabled {
        opacity: 0.3;
    }
`

export const Select = styled.select`
    appearance: none;
    background: white;
    border: 0;
    margin: 0;
    color: black;
    font-size: 1rem;
    border-radius: 5px;
    padding: 0.5rem 0.7rem;
    border: 0;
    cursor: pointer;
`

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
`
