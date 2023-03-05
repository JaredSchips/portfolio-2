import Head from "next/head";

const Layout = ({ children }) => {
    return (
		<>
			<Head>
				<title>Jared Schips</title>
				<meta
					name="description"
					content="Jared Schips's Portfolio"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
            
			{children}
		</>
	);
}
 
export default Layout;