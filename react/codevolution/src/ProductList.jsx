export const ProductList = () => {

    let product = [
        { id: 1, laptop: "hp", year: 2022 },
        { id: 2, laptop: "Dell", year: 2025 }
    ];

    return (
        <div>
            <h2>Our Product</h2>
            {
                product.map((item) => {
                    return (
                        <div key={item.id}>
                            <p >{item.laptop}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}