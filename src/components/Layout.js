import Head from "next/head";
import Header from './Header'

const Layout = ({ children }) => {
    return (
		<div className="w-screen h-screen bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-400">
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
		</div>
	);
}
 
export default Layout;