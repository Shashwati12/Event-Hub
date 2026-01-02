import React, { useEffect } from "react";
import { MapPin, Loader2, X, Navigation } from "lucide-react";
import useLocationStore, { cities } from "utils/locationStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const LocationModal = () => {
  const {
    selectedCity,
    isLocationModalOpen,
    setLocationModalOpen,
    setSelectedCity,
    detectCurrentLocation,
    isDetecting,
    error,
  } = useLocationStore();

  // Close modal on Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isLocationModalOpen) {
        if (!selectedCity) {
          setSelectedCity(cities[0]);
        }
        setLocationModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isLocationModalOpen, selectedCity, setLocationModalOpen, setSelectedCity]);

  const handleCloseModal = () => {
    if (!selectedCity) {
      setSelectedCity(cities[0]);
    }
    setLocationModalOpen(false);
  };

  return (
    <Dialog open={isLocationModalOpen} onOpenChange={setLocationModalOpen}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#310C7E] to-[#9372C1] bg-clip-text text-transparent">
            Choose Your City
          </DialogTitle>
          <button
            onClick={handleCloseModal}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="py-4">
          <p className="text-center text-gray-600 mb-6">
            Select a city to see local events or let us detect your location
          </p>

          <div className="mb-8">
            <Button
              onClick={detectCurrentLocation}
              disabled={isDetecting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              {isDetecting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Detecting your location...</span>
                </>
              ) : (
                <>
                  <Navigation className="h-4 w-4" />
                  <span>Auto-detect my location</span>
                </>
              )}
            </Button>
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or select a city</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`flex items-center p-3 rounded-lg transition-all ${
                  selectedCity?.id === city.id
                    ? "bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-[#9372c1] shadow-md"
                    : "hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <MapPin
                  className={`h-5 w-5 mr-2 ${
                    selectedCity?.id === city.id ? "text-[#9372c1]" : "text-gray-400"
                  }`}
                />
                <div className="text-left">
                  <div className="font-semibold">{city.name}</div>
                  <div className="text-xs text-gray-500">
                    {city.state}, {city.country}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedCity && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1 text-[#9372C1]" />
            <span>
              Currently selected:{" "}
              <span className="font-medium text-gray-700">{selectedCity.name}</span>
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
