export default function ProductDetailLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <h2>Featured Product</h2>
        </>
    );
}
