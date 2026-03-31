function Profilecard({name, age, greeting, children}){
//    const {name, age, greeting, children} = props;
    return(
        <>
            <p>Name : {name}</p>
            <p>age : {age}</p>
            <div>greeting : {greeting}</div>
            <div>{children}</div>
        </>
    )
}

export default Profilecard