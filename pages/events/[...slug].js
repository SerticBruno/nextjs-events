import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router"
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { Fragment } from "react";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData){
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter, adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Browse All Events</Button>
        </div>
      </Fragment>
      )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  if(!filteredEvents || filteredEvents.length === 0){
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for {numMonth}/{numYear}.</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Browse All Events</Button>
        </div>
      </Fragment>
      )
  }

  return (
    <Fragment>
      <h1>Filtered Events</h1>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilteredEventsPage;
