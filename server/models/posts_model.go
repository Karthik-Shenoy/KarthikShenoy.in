package models

import (
	"fmt"
	"time"

	"github.com/lib/pq"
	"karthikshenoy.in/backend/database"
)

type Post struct {
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Category    string    `json:"category"`
	Tags        []string  `json:"tags"`
	Id          uint32    `json:"id"`
	CreatedAt   time.Time `json:"createdAt"`
}

type PostsModel struct {
	db *database.Database
}

func (model *PostsModel) GetPosts() {}

func (model *PostsModel) GetPostsByCategory(category string) ([]Post, error) {
	var query string = fmt.Sprintf("select * from posts where category = '%s'", category)
	rowsItr, err := model.db.Query(query)

	if err != nil {
		return nil, err
	}

	var serializedTags pq.StringArray
	posts := make([]Post, 0)
	for rowsItr.Next() {
		post := Post{}
		rowsItr.Scan(
			&post.Id,
			&post.Title,
			&post.Description,
			&serializedTags,
			&post.CreatedAt,
			&post.Category)

		// convert pq.StringArray to []string
		post.Tags = []string(serializedTags)
		posts = append(posts, post)
	}

	return posts, nil
}

func NewPostsModel(db *database.Database) *PostsModel {
	return &PostsModel{
		db,
	}
}
