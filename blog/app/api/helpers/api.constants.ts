export const API = {
	blog: {
		getAll: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
		findOneById: `${process.env.NEXT_PUBLIC_DOMAIN}/posts?id=`
	},
	comment: {
		getByBlogId: `${process.env.NEXT_PUBLIC_DOMAIN}/comments/`
	},
	user: {
		findOneById: `${process.env.NEXT_PUBLIC_DOMAIN}/users/`
	}
};