import { registerTeam } from "@/api/registerTeam"; // 👈 Add this

const handleSubmit = async () => {
  if (!teamName || teamMembers.some(m => !m.name || !m.email)) {
    return alert("Please fill all required fields.");
  }

  try {
    // Example: Pass eventId and eventName from props or context
    await registerTeam({
      eventId: "YOUR_EVENT_ID",         // 🔁 Replace this dynamically
      eventName: "Your Event Name",     // 🔁 Replace this dynamically
      teamName,
      teamMembers
    });

    alert("Team registered successfully!");
    setIsOpen(false);
  } catch (err) {
    console.error("Registration error:", err);
    alert(err.message || "Failed to register");
  }
};
