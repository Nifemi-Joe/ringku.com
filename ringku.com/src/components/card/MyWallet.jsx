import Inbox from "../../assets/images/Icon/inbox.svg";
import Arrows from "../../assets/images/Icon/arrows-expand.svg";
import Help from "../../assets/images/Icon/question-mark-circle.svg";
import Hello from "../../assets/images/hello.png";
import Menu from "../../assets/images/MenuDot.svg";
import Send from "../../assets/images/SendPayment.svg";
import Request from "../../assets/images/RequestPayment.svg";
import Emergency from "../../assets/images/EmergencyFund.svg";
import Travel from "../../assets/images/TravelPlan.svg";
import Education from "../../assets/images/Education.svg";
import Foods from "../../assets/images/FoodsAndGroceries.svg";
import Repair from "../../assets/images/RepairVehicle.svg";
import Donation from "../../assets/images/Donation.svg";
import Add from "../../assets/images/Plus.svg"
const MyWallet = () => {
	const walletCards = [
		{
			name: "Emergency fund",
			image: Emergency,
			date: "August 28, 2022",
			amountPaid: 300,
			amountBudget: 1000,
		},
		{
			name: "Travel Plan",
			image: Travel,
			date: "June 01, 2022",
			amountPaid: 10000,
			amountBudget: 20000,
		},
		{
			name: "Education",
			image: Education,
			date: "May 14, 2022",
			amountPaid: 7000,
			amountBudget: 10000,
		},
		{
			name: "Foods and Groceries",
			image: Foods,
			date: "August 28, 2022",
			amountPaid: 300,
			amountBudget: 1000,
		},
		{
			name: "Repair Vehicle",
			image: Repair,
			date: "August 01, 2022",
			amountPaid: 900,
			amountBudget: 1000,
		},
		{
			name: "Donation",
			image: Donation,
			date: "August 20, 2022",
			amountPaid: 200,
			amountBudget: 1000,
		}
	]
	return (
		<section className="w-3/4 pb-16	">
			<div className="flex justify-between px-12 items-center py-9 border-solid border-b box-shadow-1 border-slate-200">
				<div className="flex gap-6">
					<button><img src={Inbox} alt="Inbox"/></button>
					<button><img src={Arrows} alt="Arrows"/></button>
				</div>
				<button><img src={Help} alt="Help"/></button>
			</div>
			<div className="flex items-center gap-24 py-9 px-12">
				<div className="flex flex-col gap-2">
					<h2 className="text-4xl font-bold text-black">My Wallet</h2>
					<p className="text-grey">Keep track your financial plan</p>
				</div>
			</div>
			<div className="flex flex-col justify-center px-12">
				<div className="flex gap-6">
					<div
						className="flex flex-col gap-5 h-40	px-6 py-4 rounded-md w-3/6 border-solid border border-slate-200 box-shadow-1">
						<div className="flex justify-between gap-4">
							<div className="flex gap-4 items-center">
								<img src={Hello} alt="Hello"/>
								<h2 className="text-black font-bold text-2xl">Hi Adrian!</h2>
							</div>
							<button><img src={Menu} alt="Menu"/></button>
						</div>
						<span className="text-blue text-3xl">$124,543</span>
					</div>
					<div
						className="flex w-3/6 justify-between items-center gap-5 h-40 rounded-md border-solid border border-slate-200 box-shadow-1">
						<a className="flex flex-col w-1/2 gap-2.5 items-center justify-center px-6 py-8">
							<img src={Send} alt="Send Payment"/>
							<span className="text-blue font-semibold">Send a payment</span>
						</a>
						<span className="border-solid border border-slate-200 h-full"></span>
						<a className="flex flex-col w-1/2 gap-2.5 items-center justify-center px-6 py-8">
							<img src={Request} alt="Request Payment"/>
							<span className="text-blue font-semibold">Request a payment</span>
						</a>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mt-6 px-12">
				{
					walletCards.map((wallet, index) => <div
							className="flex flex-col gap-4	p-6 border-solid border border-slate-200 rounded-md box-shadow-2">
							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-3">
									<img src={wallet.image} alt={wallet.name}/>
									<span className="text-blue font-semibold text-lg">{wallet.name}</span>
								</div>
								<span className="text-grey text-xs">Last Paid on {wallet.date}</span>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex items-baseline justify-between">
									<span className="text-purple text-xl">${wallet.amountPaid}<span className="text-light-purple text-xs">/ ${wallet.amountBudget}</span></span>
									<span className="text-grey text-xs">{(wallet.amountPaid/wallet.amountBudget) * 100}%</span>
								</div>
								<div className="flex flex-col relative h-2.5 rounded-md">
									<div className="absolute bg-purple top-0 transition h-full rounded-md" style={{width: `${(wallet.amountPaid/wallet.amountBudget) * 100}%`}}></div>
									<div className="w-full bg-dark-purple h-full rounded-md"></div>
								</div>
							</div>
						</div>
					)
				}
			</div>
			<a className="flex py-6 mt-6 mx-12 flex-col items-center box-shadow-2 justify-center gap-3.5 bg-dark-purple rounded-md border-solid border border-slate-200">
				<span><img src={Add} alt="Plus"/></span>
				<span className="text-purple font-semibold text-lg">Create New Wallet</span>
			</a>
		</section>
	)
}

export default MyWallet