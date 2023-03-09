import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
		<div className="w-screen min-h-screen h-full bg-gradient-to-t from-indigo-300 via-purple-300 to-pink-300">
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
			<Footer />
		</div>
	);
}
 
export default Layout;