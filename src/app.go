package src

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sort"
)

const PORT = 23472

func getEvents(w http.ResponseWriter, r *http.Request) {
	events := EventbriteScraper{}.GetEvents()
	// Create a map to store unique events based on their titles
	uniqueEvents := make(map[string]Event)

	// Iterate through the events and keep only the first occurrence of each title
	for _, event := range events {
		if _, exists := uniqueEvents[event.Title]; !exists {
			uniqueEvents[event.Title] = event
		}
	}

	// Convert the map back to a slice of events
	events = make([]Event, 0, len(uniqueEvents))
	for _, event := range uniqueEvents {
		events = append(events, event)
	}
	sort.Slice(events, func(i, j int) bool {
		return events[i].Date < events[j].Date
	})

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(events)
}

func App() {
	http.HandleFunc("/api/events", getEvents)
	http.Handle("/", http.FileServer(http.Dir("public")))
	fmt.Printf("Server running on port %d\n", PORT)
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
}
