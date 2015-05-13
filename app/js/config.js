{
	"name": "Github Search Repositories v3",
	"endpoint": "https://api.github.com/search/repositories?q=__query__",
	"params": [{
		"query": {
			"syntax": [{
				"in:",
				"options": ["name", "description", "readme"]
			}]
		}
	}]
}