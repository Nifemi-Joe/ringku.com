import Inbox from "../../assets/images/Icon/inbox.svg";
import Arrows from "../../assets/images/Icon/arrows-expand.svg";
import Help from "../../assets/images/Icon/question-mark-circle.svg";

const MyWallet = () => {
	return (
		<section className="w-3/4">
			<div className="flex justify-between px-12 items-center py-9">
				<div className="flex gap-6">
					<button><img src={Inbox} alt="Inbox"/></button>
					<button><img src={Arrows} alt="Arrows"/></button>
				</div>
				<button><img src={Help} alt={Help}/></button>
			</div>
		</section>
	)
}

export default MyWallet