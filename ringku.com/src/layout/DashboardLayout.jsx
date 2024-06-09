import Logo from "../assets/images/RingkuLogo.svg";
import Settings from "../assets/images/Icon/cog.svg";
import Chat from "../assets/images/Icon/chat.svg";
import Avatar from "../assets/images/Avatar.png";
import Menu from "../assets/images/MenuButton.svg";
import {Link} from "react-router-dom";
const DashboardLayout = ({children}) => {
	const activeLink = "My Wallet"; // For example, let's say "My Wallet" is the active link
	const links = [{
		name: "My Wallet",
		active: true,
		path: "/"
	},
		{
			name: "My Card",
			active: false,
			path: "/my-card"
		},
		{
			name: "Finance Chart",
			active: false,
			path: "finance-chart"
		},
		{
			name: "Recent Transactions",
			active: false,
			path: "recent-transactions"
		}]
	return (
		<main className="flex h-screen">
			<div className="bg-blue w-1/4 flex flex-col justify-between">
				<header className="flex flex-col">
					<div className="flex items-center justify-between p-6">
						<div className="flex items-center">
							<img src={Logo} alt="Logo"/>
						</div>
						<button><img src={Menu} alt="Menu button"/></button>
					</div>
					<div className="flex gap-1 flex-col px-6">
						{
							links.map((link,index) => <Link to={link.path}
								className={`flex gap-4 items-center p-5 ${window.location.pathname === link.path ? "active" : ""}`} key={index}>
								<span className="flex items-center gap-3.5 w-full">
									<img src={Chat} alt="Chat"/>
									<span className="text-white font-semibold">{link.name}</span>
								</span>
								{
									index === 3 && <span
										className="w-6 h-6 flex items-center border-full px-1.5 py-1 text-white bg-red font-semibold text-xxs justify-center">14</span>
								}
							</Link>)
						}

					</div>
				</header>
				<footer className="flex flex-col px-6">
					<Link to="/settings" className="flex gap-4 items-center p-5">
						<span className="flex items-center gap-3.5 w-full">
									<img src={Settings} alt="Settings"/>
									<span className="text-white font-semibold">Settings</span>
								</span>
					</Link>
					<Link to="/profile" className="flex gap-4 items-center p-5">
						<span className="flex items-center gap-3.5 w-full">
									<img src={Avatar} alt="Avatar"/>
									<span className="text-white font-semibold">Adrian Tra</span>
								</span>
					</Link>
				</footer>
			</div>
			{children}
		</main>
	)
}

export default DashboardLayout