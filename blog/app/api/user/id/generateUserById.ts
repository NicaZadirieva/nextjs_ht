import { API } from '../../helpers';
import { UserResponse } from './../../helpers/interfaces/UserResponse.interface';

export async function generateUserById(blogId: number): Promise<UserResponse | null>{
	const res = await fetch(`${API.user.findOneById}${blogId}`
	);
	if (!res.ok) {
		return null;
	}

	const allData = await res.json();

	return allData;
}