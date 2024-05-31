// export function load({ cookies }) {
// 	const visited = cookies.get('visited');

// 	cookies.set('visited', 'true', { path: '/' });

//     console.log(visited)

// 	return {
// 		visited
// 	};
// }


import {pb} from "$lib/db"

// is statement fuer language hier?

export const load = async ({cookies}) => {

    const visited = cookies.get('visited')
    const cookieSet = cookies.get('cookieSet')
    const accepted = cookies.get('accepted')
	cookies.set('visited', 'true', { path: '/' });
	cookies.set('cookieSet', 'false', { path: '/' });
	cookies.set('accepted', 'false', { path: '/' });

	// POCKETBASE
	const startseite = await pb.collection('Startseite').getFullList({
		sort: 'created',
	})
	const hintergrundbild = await pb.collection('hintergrundbild').getFullList({
		sort: 'created',
	})

	return {
		startseite,
		hintergrundbild,
        visited,
        accepted,
        // cookies
	}
}


