module.exports = {
	async index(request, response){
		return response.json(
			[
			{
				"id": "87fab38d-8e09-4772-8807-42c97bd5070b",
				"name": "Marcel Batista",
				"img": "https://i.imgur.com/N2S8rAR.jpg"
			},
			{
				"id": "8e7953b1-3b37-4951-ae44-4e9918c3154f",
				"name": "Fernanda Siqueira",
				"img": "https://i.imgur.com/xx8YmWM.jpg"
			},
			{
				"id": "8e7ddc3c-896d-40ad-9b27-4f597118e53c",
				"name": "Luiz Oliveira",
				"img": "https://i.imgur.com/NK1vY05.jpg"
			},
			{
				"id": "daac720d-895a-4cb2-a452-9067e10c47b8",
				"name": "Ana Virlania",
				"img": "https://i.imgur.com/6ZLLL26.jpg"
			},
			{
				"id": "4a4e2511-4aaf-4c54-88d3-da2b79720828",
				"name": "Carla Silva",
				"img": "https://i.imgur.com/4AUM6ut.jpg"
			}
			]
			);
	}
};