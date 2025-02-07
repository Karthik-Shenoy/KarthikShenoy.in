package main

import (
	"fmt"
	"net/http"

	"karthikshenoy.in/backend/controllers"
	"karthikshenoy.in/backend/utils"
)

func main() {

	http.Handle("/projects", utils.CorsMiddleWare(http.MethodGet, controllers.ProjectsController))
	http.Handle("/posts/", utils.CorsMiddleWare(http.MethodGet, controllers.PostsController))

	fmt.Println("Server starting on: 127.0.0.1:3000")

	http.ListenAndServe(":3000", nil)
}
