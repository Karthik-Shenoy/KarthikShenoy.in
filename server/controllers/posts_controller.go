package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"karthikshenoy.in/backend/database"
	"karthikshenoy.in/backend/models"
	"karthikshenoy.in/backend/utils"
)

// all the urls that start with /posts/ will be handled by this controller
// currently we only allow GET requests by Category or Get All
func PostsController(w http.ResponseWriter, req *http.Request) {
	pathTokens := strings.Split(req.URL.Path, "/")
	fmt.Println("req.params", pathTokens)
	if len(pathTokens) != 3 {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	db, err := database.GetInstance()
	postsModel := models.NewPostsModel(db)

	if err != nil {
		fmt.Println("Error getting db instance", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if len(pathTokens) != 3 {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	posts, err := postsModel.GetPostsByCategory(pathTokens[2])

	if err != nil {
		fmt.Println("Error getting posts", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	payload, err := json.Marshal(posts)

	if err != nil {
		fmt.Println("Error marshalling posts", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("Cache-Control", "max-age=86400")
	w.Write(payload)
}

func PostControllerRoot(w http.ResponseWriter, req *http.Request) {

}

func InitPostController() {
	http.Handle("/posts/", utils.CorsMiddleWare(http.MethodGet, PostsController))
}
