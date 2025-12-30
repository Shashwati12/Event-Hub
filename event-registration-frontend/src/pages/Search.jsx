import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  FiArrowLeft,
  FiSearch,
  FiFilter,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiBookOpen,
} from "react-icons/fi";

import { mockEvents } from "utils/MockData";
import EventCard from "../components/EventCard";

export function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [sortOption, setSortOption] = useState("date-asc");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const departments = [
    "Computer Science",
    "Engineering",
    "Business",
    "Arts",
    "Science",
    "Humanities",
    "Medical",
  ];
  const colleges = [
    "MIT",
    "Harvard",
    "Stanford",
    "IIT Delhi",
    "Oxford",
    "Cambridge",
    "Yale",
  ];
  const locations = [
    "New York",
    "London",
    "Mumbai",
    "Tokyo",
    "Sydney",
    "Berlin",
    "Paris",
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("q", searchQuery);
    if (selectedDate) params.set("date", selectedDate);
    if (selectedDepartment !== "all") params.set("dept", selectedDepartment);
    if (selectedCollege !== "all") params.set("college", selectedCollege);
    if (selectedLocation !== "all") params.set("location", selectedLocation);
    if (onlineOnly) params.set("online", "true");
    if (sortOption) params.set("sort", sortOption);
    params.set("price", `${priceRange[0]}-${priceRange[1]}`);

    setSearchParams(params, { replace: true });

    let result = [...events];

    if (searchQuery) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.college.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      result = result.filter((event) => event.date >= selectedDate);
    }

    if (selectedDepartment !== "all") {
      result = result.filter((event) => event.department === selectedDepartment);
    }

    if (selectedCollege !== "all") {
      result = result.filter((event) => event.college === selectedCollege);
    }

    if (selectedLocation !== "all") {
      result = result.filter((event) => event.location === selectedLocation);
    }

    if (onlineOnly) {
      result = result.filter((event) => event.isOnline);
    }

    result = result.filter(
      (event) => event.price >= priceRange[0] && event.price <= priceRange[1]
    );

    switch (sortOption) {
      case "date-asc":
        result.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "date-desc":
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "popular":
        result.sort((a, b) => b.registrations - a.registrations);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    setFilteredEvents(result);
  }, [
    searchQuery,
    selectedDate,
    selectedDepartment,
    selectedCollege,
    selectedLocation,
    onlineOnly,
    priceRange,
    sortOption,
    events,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDate("");
    setSelectedDepartment("all");
    setSelectedCollege("all");
    setSelectedLocation("all");
    setOnlineOnly(false);
    setPriceRange([0, 5000]);
    setSortOption("date-asc");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div
        className={`sticky top-0 z-10 w-full transition-all duration-300 ${
          isSticky
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-blue-700 hover:bg-blue-50"
            >
              <FiArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for events, colleges, keywords..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/80"
              />
            </div>

            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px] rounded-xl bg-white/80">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-asc">Date (Soonest)</SelectItem>
                <SelectItem value="date-desc">Date (Latest)</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-md h-fit sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiFilter className="h-5 w-5 text-blue-600" />
                Filters
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear All
              </Button>
            </div>

            <Separator className="my-3" />

            {/* Date */}
            <div className="mb-5">
              <Label htmlFor="date-filter" className="flex gap-2 text-sm text-gray-700">
                <FiCalendar className="text-gray-500" />
                Date
              </Label>
              <Input
                id="date-filter"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Department */}
            <div className="mb-5">
              <Label className="flex gap-2 text-sm text-gray-700">
                <FiBookOpen className="text-gray-500" />
                Department
              </Label>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="mt-1 w-full rounded-md border-gray-300">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* College */}
            <div className="mb-5">
              <Label className="flex gap-2 text-sm text-gray-700">
                <FiGlobe className="text-gray-500" />
                College
              </Label>
              <Select
                value={selectedCollege}
                onValueChange={setSelectedCollege}
              >
                <SelectTrigger className="mt-1 w-full rounded-md border-gray-300">
                  <SelectValue placeholder="All Colleges" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Colleges</SelectItem>
                  {colleges.map((college) => (
                    <SelectItem key={college} value={college}>
                      {college}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="mb-5">
              <Label className="flex gap-2 text-sm text-gray-700">
                <FiMapPin className="text-gray-500" />
                Location
              </Label>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="mt-1 w-full rounded-md border-gray-300">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Online */}
            <div className="mb-5 flex items-center justify-between">
              <Label htmlFor="online-filter" className="text-sm font-medium text-gray-700 cursor-pointer">
                Online Events Only
              </Label>
              <Switch
                id="online-filter"
                checked={onlineOnly}
                onCheckedChange={setOnlineOnly}
              />
            </div>

            {/* Price */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm text-gray-700">Price Range</Label>
                <span className="text-sm text-gray-500">
                  ₹{priceRange[0]} - ₹{priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 5000]}
                min={0}
                max={5000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {filteredEvents.length}{" "}
                {filteredEvents.length === 1 ? "Event" : "Events"} Found
              </h2>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No events found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
                <Button
                  onClick={clearFilters}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
