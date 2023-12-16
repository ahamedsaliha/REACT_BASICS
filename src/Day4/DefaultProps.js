import React from 'react'
export default function DefaultProps(props)
{
    return(
        <div>
            <h1>default props</h1>
            <h1>Default props is {props.name}</h1>
        </div>
    )
}
DefaultProps.defaultProps={
   name:"SKCET"
}