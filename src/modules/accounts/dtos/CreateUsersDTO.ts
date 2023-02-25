interface ICreateUsersDTO {
	name: string;
	email: string;
	password: string;
	driver_license: string;
	avatar?: string;
	id?: string;
}

export { ICreateUsersDTO };
