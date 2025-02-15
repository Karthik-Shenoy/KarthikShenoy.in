package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"karthikshenoy.in/backend/database"
	"karthikshenoy.in/backend/models"
)

func ProjectsController(w http.ResponseWriter, req *http.Request) {

	db, err := database.GetInstance()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Print(err)
		return
	}

	projectsModel := models.NewProjectsModel(db)
	projects, err := projectsModel.GetProjects()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Print(err)
		return
	}

	payload, err := json.Marshal(projects)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Print(err)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("Cache-Control", "max-age=86400")
	w.Write(payload)
}
