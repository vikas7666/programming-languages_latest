export const MenuItem = ({ name, price, onOrder }) => {
    // passing data from child to parent component
    // Parent is Menu component 
    return (
        <div>
            <span>{name} - {price}</span>
            <button onClick={() => onOrder(name, price)}>Order</button>
        </div>
    )
}