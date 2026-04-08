import React from "react"

export default async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('interval delay')
        }, 2000)
    })
    return (
        <React.Fragment>
            <div>Hello blog</div>
        </React.Fragment>
    )
}