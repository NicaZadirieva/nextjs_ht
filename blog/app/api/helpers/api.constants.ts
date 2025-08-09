export const API = {
	blog: {
		getAll: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
		findOneById: `${process.env.NEXT_PUBLIC_DOMAIN}/posts?id=`
	}
};