import {pb} from "$lib/db"

export const load = async () => {


	const uber = await pb.collection('Uber').getFullList({
		sort: 'created',
	})



	return {
		uber,
	}
}
