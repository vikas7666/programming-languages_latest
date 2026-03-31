export const Product = ({ title, price, inStcok, category }) => {
    /*
    to pass a mutiple paramter using props use Destructuring
    {} => curly braces and then destructuring parameter
    */
    return (
        <div>
            {/* <h3>{props.title}</h3>
            <p>Price : {props.price}</p>
            <p>In Stock : {props.inStcok ? 'yes' : 'no'}</p>
            <p>Categories : {props.category.join(",")}</p> */}

            {/* How to write better way using descturing in js */}

            <h3>{title}</h3>
            <p>Price : {price}</p>
            <p>In Stock : {inStcok ? 'yes' : 'no'}</p>
            <p>Categories : {category.join(",")}</p>
        </div>
    )
}