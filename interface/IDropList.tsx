
interface Service {
	id:number;
	href: string;
	text: string;
  }
  
interface IDropList {
	
	name: string;
	DataLink: Service[];
	mobileMenuOpen: boolean;
}

export default IDropList