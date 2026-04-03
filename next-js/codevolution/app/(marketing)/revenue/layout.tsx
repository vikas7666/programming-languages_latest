export default function MarketingLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            {/* <header style={{ backgroundColor: 'red' }}>Marketing header</header> */}
            {children}
            <footer style={{ backgroundColor: 'skyblue' }}>Marketing Footer</footer>
        </>
    )
}