export const ARCS_STATE = "arcsState"

export const EMPTY_GAME_STATE = Object.freeze({
	dateTimeStarted: null,
	map: null,
	nPlayers: null,
	nLars: null,
	lars1: {
		playerNumber: null,
		targetPlanet: null,
	},
	lars2: {
		playerNumber: null,
		targetPlanet: null,
	}
})

export const MAPS = {
	"2Homelands": {
		outOfPlay: [
			"Cluster 1: Weapon",
			"Cluster 1: Fuel",
			"Cluster 1: Material",
			"Cluster 4: Relic",
			"Cluster 4: Fuel",
			"Cluster 4: Material",
		],
		larsStarport: {
			1: "Cluster 6: Material",
			2: "Cluster 3: Material",
		}
	},
	"2Frontiers": {
		outOfPlay: [
			"Cluster 1: Weapon",
			"Cluster 1: Fuel",
			"Cluster 1: Material",
			"Cluster 6: Material",
			"Cluster 6: Fuel",
			"Cluster 6: Psionic",
		],
		larsStarport: {
			1: "Cluster 4: Material",
			2: "Cluster 5: Weapon",
		}
	},
	"2Mix Up 1": {
		outOfPlay: [
			"Cluster 2: Psionic",
			"Cluster 2: Weapon",
			"Cluster 2: Relic",
			"Cluster 5: Weapon",
			"Cluster 5: Relic",
			"Cluster 5: Psionic",
		],
		larsStarport: {
			1: "Cluster 3: Fuel",
			2: "Cluster 3: Weapon",
		}
	},
	"2Mix Up 2": {
		outOfPlay: [
			"Cluster 1: Weapon",
			"Cluster 1: Fuel",
			"Cluster 1: Material",
			"Cluster 4: Relic",
			"Cluster 4: Fuel",
			"Cluster 4: Material",
		],
		larsStarport: {
			1: "Cluster 2: Psionic",
			2: "Cluster 6: Material",
		}
	},
	"3Homelands": {
		outOfPlay: [
			"Cluster 5: Weapon",
			"Cluster 5: Relic",
			"Cluster 5: Psionic",
			"Cluster 6: Material",
			"Cluster 6: Fuel",
			"Cluster 6: Psionic",
		],
		larsStarport: {
			1: "Cluster 3: Fuel",
			2: "Cluster 2: Psionic",
			3: "Cluster 4: Material",
		}
	},
	"3Frontiers": {
		outOfPlay: [
			"Cluster 2: Psionic",
			"Cluster 2: Weapon",
			"Cluster 2: Relic",
			"Cluster 3: Material",
			"Cluster 3: Fuel",
			"Cluster 3: Weapon",
		],
		larsStarport: {
			1: "Cluster 4: Material",
			2: "Cluster 1: Fuel",
			3: "Cluster 6: Material",
		}
	},
	"3Core Conflict": {
		outOfPlay: [
			"Cluster 3: Material",
			"Cluster 3: Fuel",
			"Cluster 3: Weapon",
			"Cluster 6: Material",
			"Cluster 6: Fuel",
			"Cluster 6: Psionic",
		],
		larsStarport: {
			1: "Cluster 2: Weapon",
			2: "Cluster 1: Fuel",
			3: "Cluster 2: Psionic",
		}
	},
	"3Mix Up": {
		outOfPlay: [
			"Cluster 1: Weapon",
			"Cluster 1: Fuel",
			"Cluster 1: Material",
			"Cluster 4: Relic",
			"Cluster 4: Fuel",
			"Cluster 4: Material",
		],
		larsStarport: {
			1: "Cluster 5: Relic",
			2: "Cluster 2: Psionic",
			3: "Cluster 3: Material",
		}
	},
	"4Frontiers": {
		outOfPlay: [
			"Cluster 5: Weapon",
			"Cluster 5: Relic",
			"Cluster 5: Psionic",
		],
		larsStarport: {
			1: "Cluster 3: Fuel",
			2: "Cluster 6: Psionic",
			3: "Cluster 2: Psionic",
			4: "Cluster 6: Material",
		}
	},
	"4Mix Up 1": {
		outOfPlay: [
			"Cluster 3: Material",
			"Cluster 3: Fuel",
			"Cluster 3: Weapon",
		],
		larsStarport: {
			1: "Cluster 6: Psionic",
			2: "Cluster 5: Psionic",
			3: "Cluster 1: Material",
			4: "Cluster 1: Weapon",
		}
	},
	"4Mix Up 2": {
		outOfPlay: [
			"Cluster 4: Relic",
			"Cluster 4: Fuel",
			"Cluster 4: Material",
		],
		larsStarport: {
			1: "Cluster 3: Material",
			2: "Cluster 5: Relic",
			3: "Cluster 1: Material",
			4: "Cluster 2: Psionic",
		}
	},
	"4Mix Up 3": {
		outOfPlay: [
			"Cluster 6: Material",
			"Cluster 6: Fuel",
			"Cluster 6: Psionic",
		],
		larsStarport: {
			1: "Cluster 5: Relic",
			2: "Cluster 3: Material",
			3: "Cluster 4: Material",
			4: "Cluster 2: Weapon",
		}
	}
}

export const LOCATIONS = [
	"Cluster 1: Weapon",
	"Cluster 1: Fuel",
	"Cluster 1: Material",
	"Cluster 2: Psionic",
	"Cluster 2: Weapon",
	"Cluster 2: Relic",
	"Cluster 3: Material",
	"Cluster 3: Fuel",
	"Cluster 3: Weapon",
	"Cluster 4: Relic",
	"Cluster 4: Fuel",
	"Cluster 4: Material",
	"Cluster 5: Weapon",
	"Cluster 5: Relic",
	"Cluster 5: Psionic",
	"Cluster 6: Material",
	"Cluster 6: Fuel",
	"Cluster 6: Psionic",
]
