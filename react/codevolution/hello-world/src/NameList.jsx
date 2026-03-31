/* keys */
export const NameList = () => {
    const name = ["Bruce", "Diana", "other", "Bruce",];

    const nameList = name.map((name, index) => <h2 key={index}>{name}</h2>)

    return <div>{nameList}</div>
}