import React from 'react'
import styled from 'styled-components'
import {config} from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const StyledTimeline = styled.div`
 position: relative;
`
const ListInitit = styled.div`
display: inline-block;
height: 10px;
width: 10px;
background-color: #ffc400;
border-radius: 10px;
margin-right: 20px;
`
export default () => {
    return (
        <StyledTimeline>
            <h1>Learning</h1>
            {siteConfig.learning && siteConfig.learning.map(knowledge => (
                <div>
                  <ListInitit> </ListInitit>
                  {knowledge.description ? <><strong>{knowledge.skill} </strong>: {knowledge.description}</> : <strong>{knowledge.skill}</strong>}
                </div>
            ))}
        </StyledTimeline>
    )
}

