package posts_controller

import (
	"fmt"
	"net/http"
	"strings"

	"karthikshenoy.in/backend/database"
)

func PostsController(w http.ResponseWriter, req *http.Request) {
	pathTokens := strings.Split(req.URL.Path, "/")
	if len(pathTokens) != 3 {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	dbInstance, err := database.GetInstance()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}

	dbInstance.Prepare("Select * from posts where")

	fmt.Println("req.params", pathTokens[len(pathTokens)-1])
}
