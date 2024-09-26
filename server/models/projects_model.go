package projects_model

import (
	"github.com/lib/pq"
	"karthikshenoy.in/backend/database"
)

type Project struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	ImgUrl      string   `json:"imgUrl"`
	TechStack   []string `json:"techStack"`
	Id          uint32   `json:"id"`
	DocLink     string   `json:"docLink"`
	DemoLink    string   `json:"demoLink"`
}

type ProjectsModel struct {
	db *database.Database
}

func (model *ProjectsModel) GetProjects() ([]Project, error) {
	rows, err := model.db.Query("Select * from projects")
	projects := make([]Project, 0)
	var serializedTechStack pq.StringArray

	if err != nil {
		return projects, err
	}

	for rows.Next() {
		project := Project{}

		err := rows.Scan(&project.Title,
			&project.Description,
			&project.ImgUrl,
			&serializedTechStack,
			&project.Id,
			&project.DocLink,
			&project.DemoLink)

		if err != nil {
			return nil, err
		}

		project.TechStack = []string(serializedTechStack)

		projects = append(projects, project)
	}

	return projects, nil
}

func NewProjectsModel(db *database.Database) *ProjectsModel {
	return &ProjectsModel{
		db,
	}
}
