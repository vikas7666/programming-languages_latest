export default function AuthLayout({children,} : {children : React.ReactNode}){
    return (
        <html lang="en">
            <body>
                {children}
                <footer style={{backgroundColor:'pink'}}>Auth Footer</footer>
            </body>
        </html>
    )
}