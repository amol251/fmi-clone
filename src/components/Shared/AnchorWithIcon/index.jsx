import React from 'react'

export default function AnchorWithIcon({ label, link, iconClass }) {
    return (
        <a href={link} title={label} target="_blank" rel="nofollow noopener">
            <span class={"newsIcon " + iconClass}></span>
        </a>
    )
}