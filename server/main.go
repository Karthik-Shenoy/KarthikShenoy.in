package main

import (
	"fmt"
	"net/http"

	projects_controller "karthikshenoy.in/backend/controllers/projects-controller"
	"karthikshenoy.in/backend/utils"
)

func main() {
	http.Handle("/projects", utils.CorsMiddleWare(http.MethodGet, projects_controller.ProjectsController))

	fmt.Println("Server starting on: 127.0.0.1:3000")

	http.ListenAndServe(":3000", nil)
}
