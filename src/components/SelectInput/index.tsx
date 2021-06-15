import React from 'react'

import { Container } from './styles'

const SelectInput: React.FC = () => {
    return (
        <Container>
            <select>
                <option value="a">Ana</option>
                <option value="b">Marcos</option>
                <option value="c">Maria</option>
            </select>
        </Container>
    )
}

export default SelectInput