import {pb} from "$lib/db"

export const load = async () => {


	const kontakt = await pb.collection('Kontakt').getFullList({
		sort: 'created',
	})



	return {
		kontakt,
	}
}
