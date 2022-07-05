import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}

export default HomePage;
