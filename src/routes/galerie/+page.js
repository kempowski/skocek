import {pb} from "$lib/db"

export const load = async () => {


	let galerie = await pb.collection('Galerie_Nordweg').getFullList({
		// sort: 'created',
	})

	galerie = galerie.sort((a, b) => new Date(b.Datum) - new Date(a.Datum));

	return {
		galerie,
	}
}
