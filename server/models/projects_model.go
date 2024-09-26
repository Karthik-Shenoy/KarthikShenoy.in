package projects_model

import "karthikshenoy.in/backend/database"

type Project struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	ImgUrl      string   `json:"imgUrl"`
	TechStack   []string `json:"techStack"`
	Id          uint32   `json:"id"`
	DocLink     string   `json:"docLink"`
}

type ProjectsModel struct {
	db *database.Database
}

func (model *ProjectsModel) GetProjects() ([]Project, error) {
	rows, err := model.db.Query("Select * from projects")
	projects := make([]Project, 0)

	if err != nil {
		return projects, err
	}

	for rows.Next() {
		project := Project{}

		rows.Scan(&project.Title,
			&project.Description,
			&project.ImgUrl,
			&project.TechStack,
			&project.Id,
			&project.DocLink)

		projects = append(projects, project)
	}

	return projects, nil
}

func NewProjectsModel(db *database.Database) *ProjectsModel {
	return &ProjectsModel{
		db,
	}
}
