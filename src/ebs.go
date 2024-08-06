package src

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
)

type Event struct {
	Image string
	Title string
	Date  int64
	Link  string
	Venue string
}

type EventbriteScraper struct{}

func (es EventbriteScraper) createEvent(s *goquery.Selection) (Event, error) {
	image := s.Find("img").AttrOr("src", "")
	titleLink := s.Find("a")
	title := strings.TrimSpace(titleLink.Text())
	link := strings.TrimSpace(titleLink.AttrOr("href", ""))
	dateStr := strings.TrimSpace(s.Find("p").Eq(-2).Text())

	now := time.Now().In(time.FixedZone("MST", -7*60*60))
	layout := "Today at 3:04 PM"
	t, err := time.Parse(layout, dateStr)
	if err != nil {
		return Event{}, err
	}
	date := time.Date(now.Year(), now.Month(), now.Day(), t.Hour(), t.Minute(), 0, 0, now.Location())
	unixTimestamp := date.Unix()

	venue := strings.TrimSpace(s.Find("p").Last().Text())

	event := Event{
		Image: image,
		Title: title,
		Link:  link,
		Date:  unixTimestamp,
		Venue: venue,
	}

	return event, nil
}

func (es EventbriteScraper) scrapeEvents(url string) []Event {
	resp, err := http.Get(url)
	if err != nil {
		return nil
	}
	defer resp.Body.Close()

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return nil
	}

	var events []Event
	doc.Find(".search-results-panel-content").Children().Eq(0).Children().Eq(1).Children().Eq(1).Children().Eq(2).Children().Eq(0).Children().Each(func(i int, s *goquery.Selection) {
		s = s.Children().Eq(0).Children().Eq(0).Children().Eq(1).Children().Eq(0).Children().Eq(0)
		event, err := es.createEvent(s)
		if err != nil {
			return
		}
		events = append(events, event)
	})

	return events
}

func (es EventbriteScraper) GetEvents() []Event {
	url := "https://www.eventbrite.com/d/az--phoenix/free--events--today"
	events := []Event{}

	for i := 1; ; i++ {
		pageURL := fmt.Sprintf("%s/?page=%d", url, i)
		newEvents := es.scrapeEvents(pageURL)
		if newEvents == nil {
			break
		}
		events = append(events, newEvents...)
	}

	return events
}
