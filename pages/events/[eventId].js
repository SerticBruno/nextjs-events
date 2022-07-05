import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

import EventItem from "../../components/events/event-item";
import EventList from "../../components/events/event-list";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import ErrorAlert from "../../components/ui/error-alert";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
        <Fragment>
          <ErrorAlert>
            <p>There is no event with that Id</p>
          </ErrorAlert>
        </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
