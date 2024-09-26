package database

import (
	"database/sql"
	"fmt"
	"sync"

	_ "github.com/lib/pq"
)

// Constants
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "12345678"
	dbName   = "PortfolioWebSite"
)

type Database struct {
	dbConn *sql.DB
}

func (db *Database) connect() error {
	dbConnString := fmt.Sprintf("host=%s port= %d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbName)
	dbConn, err := sql.Open("postgres", dbConnString)

	if err != nil {
		db.dbConn = nil
		return err
	}

	db.dbConn = dbConn
	return nil
}

func (db *Database) Query(queryString string, args ...any) (*sql.Rows, error) {
	rows, err := db.dbConn.Query(queryString)

	return rows, err
}

func (db *Database) Dispose() {
	db.dbConn.Close()
}

func (db *Database) Prepare(queryString string) (*sql.Stmt, error) {
	return db.dbConn.Prepare("")
}

var singletonInstanceMutex sync.Mutex
var singletonInstance *Database = nil

// Static method to get the singleton database instance
func GetInstance() (*Database, error) {
	if singletonInstance == nil {
		singletonInstanceMutex.Lock()

		singletonInstance = &Database{}
		err := singletonInstance.connect()

		if err != nil {
			return nil, err
		}

		singletonInstanceMutex.Unlock()
	}
	return singletonInstance, nil
}
