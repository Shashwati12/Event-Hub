import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const TeamRegisterModal = ({ isOpen, setIsOpen, onSubmit }) => {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([{ name: "", email: "", phone: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { name: "", email: "", phone: "" }]);
  };

  const handleSubmit = () => {
    if (!teamName || teamMembers.some(m => !m.name || !m.email)) {
      alert("Please fill all required fields.");
      return;
    }
    onSubmit({ teamName, teamMembers });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
          <Dialog.Title className="text-2xl font-bold text-[#310C7E] mb-4">Team Registration</Dialog.Title>

          {/* Team Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Team Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#9372C1]"
              placeholder="Enter your team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          {/* Members */}
          <div className="space-y-6 max-h-[400px] overflow-y-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="border border-gray-200 p-4 rounded-xl shadow-sm bg-gray-50">
                <h4 className="text-md font-semibold text-[#310C7E] mb-2">Member {idx + 1}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={member.name}
                    onChange={(e) => handleChange(idx, "name", e.target.value)}
                    className="border rounded px-3 py-2 w-full outline-none focus:ring-2 focus:ring-[#9372C1]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={member.email}
                    onChange={(e) => handleChange(idx, "email", e.target.value)}
                    className="border rounded px-3 py-2 w-full outline-none focus:ring-2 focus:ring-[#9372C1]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={member.phone}
                    onChange={(e) => handleChange(idx, "phone", e.target.value)}
                    className="border rounded px-3 py-2 w-full outline-none focus:ring-2 focus:ring-[#9372C1]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button onClick={handleAddMember} className="text-sm text-blue-600 hover:underline">
              + Add another member
            </button>
            <div className="space-x-3">
              <button onClick={() => setIsOpen(false)} className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-[#310C7E] text-white px-6 py-2 rounded-md hover:bg-[#4f2f91]">
                Register
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TeamRegisterModal;
