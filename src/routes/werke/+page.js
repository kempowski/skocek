import {pb} from "$lib/db"

export const load = async () => {


	const arbeitenRaw = await pb.collection('Arbeiten').getFullList({
		sort: 'created',
	})
    const serien = await pb.collection('Serien').getFullList({
		sort: '-created',
	})

	// arbeiten = arbeten.sort(a, b) => 
	// galerie = galerie.sort((a, b) => new Date(b.Datum) - new Date(a.Datum));

	const arbeiten = {}
	
	arbeitenRaw.forEach(obj => {
		arbeiten[obj.Serie] = arbeiten[obj.Serie] || [];
		arbeiten[obj.Serie].push(obj)
	});

	// console.log("__________________")
	// console.log(arbeiten)
	// arbeiten = arbeiten

	return {
		arbeiten,
        serien
	}
}
