export const CardWrapper = ({ title, children }) => {
    /* By using React children we can load anything  */
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    )
}