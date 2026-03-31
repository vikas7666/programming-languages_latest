// declaring color="green" as a default props
export default function PropsWrapper({ children, color = "green" }) {
    return (
        <>
            <h3>7: Default Props</h3>
            <div style={{ color: color, border: `5px solid ${color} `, width: '100px' }}>
                {children}
            </div>
        </>
    )
}