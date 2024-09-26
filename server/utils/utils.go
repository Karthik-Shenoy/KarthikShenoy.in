package utils

import "net/http"

func CorsMiddleWare(method string, handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Methods", "GET")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type")

		if method == http.MethodOptions {
			w.Header().Add("Cache-Control", "max-age=604800")
			w.WriteHeader(200)
		}

		if req.Method == method {
			handler(w, req)
		} else {
			w.WriteHeader(405)
		}
	}
}
