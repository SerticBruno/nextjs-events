import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function EventsPage() {
  const allEvents = getAllEvents();

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <h1>All Events</h1>
      <EventsSearch onSearch={findEventsHandler}></EventsSearch>
      <EventList items={allEvents}></EventList>
    </Fragment>
  );
}

export default EventsPage;
