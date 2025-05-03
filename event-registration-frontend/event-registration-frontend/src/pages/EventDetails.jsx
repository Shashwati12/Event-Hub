import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Countdown from "react-countdown";
import {
  BookmarkCheck,
  BookmarkPlus,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Users,
  Trophy,
  Info,
  Tag
} from "lucide-react";
import TeamRegisterModal from "../components/TeamRegisterModal";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user?.email || !eventId) return;

    const fetchEventAndRegistration = async () => {
      try {
        const eventRes = await axios.get(`http://localhost:5000/api/events/${eventId}`);
        setEvent(eventRes.data);

        const regRes = await axios.get("http://localhost:5000/api/register/user-events", {
          params: { userEmail: user.email.toLowerCase() },
        });

        const registered = regRes.data.some(
          (r) => r.eventId === eventId || r.eventId === eventRes.data._id
        );
        setIsRegistered(registered);
      } catch (err) {
        console.error("Error fetching event or registration:", err);
      }
    };

    fetchEventAndRegistration();
  }, [eventId, user?.email]);

  const handleRegistration = async ({ teamName, teamMembers }) => {
    if (!event || isRegistered) return;

    const payload = {
      eventId: event._id,
      eventName: event.eventName,
      teamName,
      teamMembers,
      userEmail: user.email.toLowerCase(),
    };

    try {
      await axios.post("http://localhost:5000/api/register", payload);
      alert("Registration successful!");
      setIsRegistered(true);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };

  if (!event) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <img src={`http://localhost:5000/${event.image}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end px-6 py-10 text-white">
          <div>
            <h1 className="text-4xl font-bold">{event.eventName}</h1>
            <div className="flex gap-4 mt-2 text-sm">
              <span>{event.college}</span>
              <span>{event.mode}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Details */}
        <div className="lg:col-span-2">
          {/* Navigation Tabs */}
          <div className="flex border-b mb-6">
            <button 
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 font-medium ${activeTab === "description" ? "text-[#310C7E] border-b-2 border-[#310C7E]" : "text-gray-500"}`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-2 font-medium ${activeTab === "timeline" ? "text-[#310C7E] border-b-2 border-[#310C7E]" : "text-gray-500"}`}
            >
              Timeline
            </button>
            <button 
              onClick={() => setActiveTab("rules")}
              className={`px-4 py-2 font-medium ${activeTab === "rules" ? "text-[#310C7E] border-b-2 border-[#310C7E]" : "text-gray-500"}`}
            >
              Rules
            </button>
            <button 
              onClick={() => setActiveTab("prizes")}
              className={`px-4 py-2 font-medium ${activeTab === "prizes" ? "text-[#310C7E] border-b-2 border-[#310C7E]" : "text-gray-500"}`}
            >
              Prizes
            </button>
          </div>

          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-[#310C7E] mb-4">About Event</h2>
                <p className="text-gray-700 mb-4">
                  {event.description || "Join us for an exciting event that brings together talented individuals to showcase their skills and creativity. This event is designed to challenge participants and foster innovation."}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="text-[#310C7E]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-sm text-gray-600">{event.startDate}, 10:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="text-[#310C7E]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-gray-600">{event.mode} {event.mode === "Online" ? "- Link will be shared" : `- ${event.college}`}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="text-[#310C7E]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Team Size</h3>
                      <p className="text-sm text-gray-600">{event.minTeam} - {event.maxTeam} members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Tag className="text-[#310C7E]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Registration Fee</h3>
                      <p className="text-sm text-gray-600">₹ {event.price || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-[#310C7E] mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.contacts?.map((contact, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium">{contact.name}</span>
                      <span className="text-sm text-gray-600">{contact.email}</span>
                      <span className="text-sm text-gray-600">{contact.phone}</span>
                    </div>
                  )) || (
                    <>
                      <div className="flex flex-col">
                        <span className="font-medium">Event Coordinator</span>
                        <span className="text-sm text-gray-600">coordinator@example.com</span>
                        <span className="text-sm text-gray-600">+91 98765 43210</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Technical Support</span>
                        <span className="text-sm text-gray-600">support@example.com</span>
                        <span className="text-sm text-gray-600">+91 98765 43211</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#310C7E] mb-4">Event Timeline</h2>
              {event.timeline?.map((item, index) => (
                <div key={index} className="flex gap-3 mb-5">
                  <div className={`w-3 h-3 rounded-full mt-2 ${item.status === "completed" ? "bg-green-500" : "bg-gray-400"}`} />
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.date}</p>
                    {item.description && <p className="text-sm text-gray-700 mt-1">{item.description}</p>}
                    {item.status === "completed" && (
                      <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                        <CheckCircle size={12} /> Completed
                      </span>
                    )}
                  </div>
                </div>
              )) || (
                <p className="text-gray-600">Timeline information will be updated soon.</p>
              )}
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === "rules" && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#310C7E] mb-4">Rules & Guidelines</h2>
              {event.rules ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2 text-gray-700">
                  <p>1. All team members must be enrolled students at the time of registration.</p>
                  <p>2. Teams must have between {event.minTeam} and {event.maxTeam} members.</p>
                  <p>3. All submissions must be original work created during the event period.</p>
                  <p>4. Each team is allowed one submission only.</p>
                  <p>5. The decision of the judges will be final.</p>
                  <p>6. Any form of plagiarism will result in immediate disqualification.</p>
                  <p>7. Participants must adhere to the code of conduct.</p>
                </div>
              )}
            </div>
          )}

          {/* Prizes Tab */}
          {activeTab === "prizes" && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#310C7E] mb-4">Prizes & Rewards</h2>
              {event.prizes ? (
                <div className="space-y-4">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Trophy className="text-[#310C7E]" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">{prize.title}</h3>
                        <p className="text-sm text-gray-600">{prize.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Trophy className="text-yellow-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">First Prize</h3>
                      <p className="text-sm text-gray-600">₹ 10,000 + Certificate + Internship Opportunity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-200 rounded-lg">
                      <Trophy className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Second Prize</h3>
                      <p className="text-sm text-gray-600">₹ 5,000 + Certificate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Trophy className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Third Prize</h3>
                      <p className="text-sm text-gray-600">₹ 3,000 + Certificate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Info className="text-[#310C7E]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Participation Benefits</h3>
                      <p className="text-sm text-gray-600">All participants will receive a digital certificate of participation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-[#310C7E]">₹ {event.price || 0}</h3>
            <button onClick={() => setIsSaved(!isSaved)}>
              {isSaved ? <BookmarkCheck /> : <BookmarkPlus />}
            </button>
          </div>

          <div className="text-sm space-y-2">
            <div className="flex justify-between"><span>Team Size:</span><span>{event.minTeam}-{event.maxTeam}</span></div>
            <div className="flex justify-between"><span>Impressions:</span><span>{event.impressions || 500}</span></div>
            <div className="flex justify-between"><span>Deadline:</span><span><Countdown date={event.deadline} /></span></div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            disabled={isRegistered}
            className={`w-full py-2 rounded text-white font-semibold ${isRegistered ? 'bg-green-500' : 'bg-[#310C7E]'}`}
          >
            {isRegistered ? "Registered ✓" : "Register Now"}
          </button>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><Calendar size={16} /><span>{event.startDate}</span></div>
            <div className="flex gap-2"><Clock size={16} /><span>10:00 AM</span></div>
            <div className="flex gap-2"><MapPin size={16} /><span>{event.mode}</span></div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <TeamRegisterModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        onSubmit={handleRegistration}
      />
    </div>
  );
};

export default EventDetails;