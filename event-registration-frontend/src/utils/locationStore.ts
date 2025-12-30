import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Sample cities data
export const cities = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', country: 'India', lat: 19.0760, lng: 72.8777 },
  { id: 'delhi', name: 'Delhi', state: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025 },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', country: 'India', lat: 12.9716, lng: 77.5946 },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', country: 'India', lat: 17.3850, lng: 78.4867 },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', country: 'India', lat: 13.0827, lng: 80.2707 },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', country: 'India', lat: 22.5726, lng: 88.3639 },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', country: 'India', lat: 18.5204, lng: 73.8567 },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', country: 'India', lat: 23.0225, lng: 72.5714 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', country: 'India', lat: 26.9124, lng: 75.7873 },
  { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', country: 'India', lat: 26.8467, lng: 80.9462 },
];

const useLocationStore = create(
  persist(
    (set, get) => ({
      selectedCity: null,
      isLocationModalOpen: true,
      detectedLocation: null,
      isDetecting: false,
      error: null,

      setSelectedCity: (city) => set({ selectedCity: city, isLocationModalOpen: false }),

      setLocationModalOpen: (isOpen) => set({ isLocationModalOpen: isOpen }),

      detectCurrentLocation: async () => {
        set({ isDetecting: true, error: null });

        try {
          if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser');
          }

          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            });
          });

          const { latitude, longitude } = position.coords;
          set({
            detectedLocation: { lat: latitude, lng: longitude },
            isDetecting: false,
          });

          const nearestCity = get().getNearestCity();
          if (nearestCity) {
            get().setSelectedCity(nearestCity);
          }

        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to detect location',
            isDetecting: false,
          });
        }
      },

      getNearestCity: () => {
        const { detectedLocation } = get();
        if (!detectedLocation) return null;

        let nearestCity = cities[0];
        let shortestDistance = Number.MAX_VALUE;

        cities.forEach(city => {
          if (city.lat && city.lng) {
            const distance = calculateDistance(
              detectedLocation.lat,
              detectedLocation.lng,
              city.lat,
              city.lng
            );

            if (distance < shortestDistance) {
              shortestDistance = distance;
              nearestCity = city;
            }
          }
        });

        return nearestCity;
      }
    }),
    {
      name: 'eventhub-location',
      partialize: (state) => ({ selectedCity: state.selectedCity }),
    }
  )
);

// Helper functions
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default useLocationStore;
