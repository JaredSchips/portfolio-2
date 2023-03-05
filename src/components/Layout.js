import Head from "next/head";
import Header from './Header'

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
            
			<Header />
			{children}
		</>
	);
}
 
export default Layout;