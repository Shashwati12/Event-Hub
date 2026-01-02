import { create } from 'zustand';
import { getEvents, getUpcomingEvents, addEvent, updateEvent, deleteEvent } from './firebase'

const useEventStore = create((set, get) => ({
  events: [],
  isLoading: false,
  error: null,

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      const events = await getEvents();
      set({ events, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchUpcomingEvents: async (limit = 10) => {
    set({ isLoading: true, error: null });
    try {
      const events = await getUpcomingEvents(limit);
      set({ events, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  addNewEvent: async (eventData) => {
    set({ isLoading: true, error: null });
    try {
      const newEvent = await addEvent(eventData);
      set(state => ({
        events: [...state.events, newEvent],
        isLoading: false
      }));
      return newEvent;
    } catch (error) {
      set({ error, isLoading: false });
      throw error;
    }
  },

  updateExistingEvent: async (eventId, eventData) => {
    set({ isLoading: true, error: null });

    const currentEvents = get().events;
    const updatedEvents = currentEvents.map(event =>
      event.id === eventId ? { ...event, ...eventData } : event
    );

    set({ events: updatedEvents });

    try {
      const updatedEvent = await updateEvent(eventId, eventData);
      return updatedEvent;
    } catch (error) {
      set({
        events: currentEvents,
        error,
        isLoading: false
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  removeEvent: async (eventId) => {
    set({ isLoading: true, error: null });

    const currentEvents = get().events;
    const filteredEvents = currentEvents.filter(event => event.id !== eventId);

    set({ events: filteredEvents });

    try {
      await deleteEvent(eventId);
      return true;
    } catch (error) {
      set({
        events: currentEvents,
        error,
        isLoading: false
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  }
}));

export default useEventStore;
