import React from "react"


export default function HeadingSection(props) {
    return (
        <>
            <div className="row">
                <p className="font-weight-bold heading">
                    {props.heading}
                </p>
            </div>
            <div className="row">
                <div className="underline-bar"></div>
            </div>
        </>
    )
}