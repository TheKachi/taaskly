export type ProfileType = {
	id: string | null;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	verifiedLevel: number;
	profileLevel: number;
	tasker_rating: number | boolean;
	runner_rating: number | boolean;
	created_at: string;
	updated_at: string;
};
