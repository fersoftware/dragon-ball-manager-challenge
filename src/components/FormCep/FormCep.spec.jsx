import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import FormCep from './FormCep'

it('Should render FormCep Components', () => {
    const {getByPlaceholderText} = render(<FormCep />);
    const inputCEP = getByPlaceholderText('CEP').closest('input');
    const inputLogradouro = getByPlaceholderText('logradouro').closest('input');
    const inputBairro = getByPlaceholderText('bairro').closest('input');

    expect(inputCEP).toBeVisible();
    expect(inputLogradouro).toBeVisible();
    expect(inputBairro).toBeVisible();
})