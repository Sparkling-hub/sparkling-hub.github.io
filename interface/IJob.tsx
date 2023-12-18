interface IJob {
	namePosition: any;
	id: string;
	location: JSX.Element;
	experience: JSX.Element;
	head: JSX.Element;
	text: JSX.Element;
	slug: string;
	task: string[];
	nameProf: string;
	descript: JSX.Element;
	mustHave: string[];
	niceToHave: string[];
	weOffer: string[];
}

export default IJob