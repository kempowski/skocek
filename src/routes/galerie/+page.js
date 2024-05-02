import {pb} from "$lib/db"

export const load = async () => {


	let galerie_events = await pb.collection('Galerie_Nordweg_Events').getFullList({
		// sort: 'created',
	})
	let galerie_text = await pb.collection('Galerie_Nordweg_Text').getFullList({

	})

	galerie_events = galerie_events.sort((a, b) => new Date(b.Datum) - new Date(a.Datum));

	return {
		galerie_events,
		galerie_text
	}
}
