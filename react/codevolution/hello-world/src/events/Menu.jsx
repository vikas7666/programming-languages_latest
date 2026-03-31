import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered  ${itemName} for ${itemPrice}`)
    }
    // getting data from child
    return (
        <div>
            <h2>Our Menu</h2>

            <MenuItem name="Pizz" price={12} onOrder={handleOrder} />
            <MenuItem name="Burger" price={8} onOrder={handleOrder} />
            <MenuItem name="Salad" price={6} onOrder={handleOrder} />
        </div>
    )
}