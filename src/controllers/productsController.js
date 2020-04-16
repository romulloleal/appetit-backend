module.exports = {
	async index(request, response){
		return response.json(
			[
			{
				"id": "908e343c-3fd2-4f60-b698-1f8235318c75",
				"category": "Cuscuz",
				"productName": "Cuscuz simples",
				"img": "https://i.imgur.com/fqUWoIM.jpg",
				"value": 2.25,
				"options":[
				{
					"option":"Milho"
				},
				{
					"option":"Arroz"
				}
				]
			},
			{
				"id": "12a64478-531e-4059-9681-199c81621db5",
				"category": "Cuscuz",
				"productName": "Cuscuz completo",
				"img": "https://i.imgur.com/fqUWoIM.jpg",
				"value": 3.25,
				"options":[
				{
					"option":"Milho"
				},
				{
					"option":"Arroz"
				}
				]
			},
			{
				"id": "e058872c-e76c-4847-9bc2-3a78706b8fa0",
				"category": "Pães",
				"productName": "Pão caseiro",
				"img": "https://i.imgur.com/T4nLoHP.jpg",
				"value": 2.25,
				"options":[
				{
					"option":"Massa fina"
				},
				{
					"option":"Massa grossa"
				}
				]
			},
			{
				"id": "b98c7cfc-6b38-4325-b745-d7cb5ddf9f82",
				"category": "Pães",
				"productName": "Pão caseiro completo",
				"img": "https://i.imgur.com/T4nLoHP.jpg",
				"value": 2.25,
				"options":[
				{
					"option":"Massa fina"
				},
				{
					"option":"Massa grossa"
				}
				]
			}
			]
			);
	}
};