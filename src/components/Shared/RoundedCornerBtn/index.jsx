import React from 'react'

export default function RoundedCornerBtn({ classname, label, link }) {
    return (
        <a href={link} class={"event_link" + " " + classname} title={label}>{label}</a>
    )
}