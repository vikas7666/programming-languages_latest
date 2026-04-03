export default function L7({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <footer style={{ backgroundColor: 'pink', color: 'black' }}>
                Auth Footer
            </footer>
        </>
    )
}