export default function ProductDetailLayout({ children, }: { children: React.ReactNode }) {
    return <>
        {children}
        <h2>From children : feature Product of </h2>
    </>
}