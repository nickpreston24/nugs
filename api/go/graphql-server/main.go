package main

import (
	"fmt"
	"net/http"
)

func handler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Welcome %s, to Jurassic Park!", request.URL.Path[1:])
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
