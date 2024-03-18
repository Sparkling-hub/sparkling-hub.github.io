interface RolesData {
    other: string;
    team_augmentation: string;
    software_development: string;
    consulting: string;
    startup: string;
    careers: string;
    [key: string]: string; 
}

const rolesData: RolesData = {

	other: "Other",
	team_augmentation: "Team Augmentation",
	software_development: 'Software development',
	consulting: 'Consulting',
	startup: 'Startup',
	careers: 'Careers',

}

export default rolesData;
