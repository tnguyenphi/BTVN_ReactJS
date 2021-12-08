import React from 'react'

export default function ChildrenCompoment(props) {

    return (
        <div>
            <h3>Children</h3>
            {/* props.children: cu phap luon ko tu dat */}
            {props.children}  
        </div>
    )
}
