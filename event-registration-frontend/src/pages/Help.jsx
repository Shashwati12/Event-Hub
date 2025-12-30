import { useState } from 'react';
import { Calendar, Users, Award, HelpCircle, CreditCard, ClipboardCheck, AlertCircle, ChevronRight, ChevronDown, Mail, MessageCircle } from 'lucide-react';

export default function EventRegistrationHelp() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      icon: <Calendar size={24} />,
      title: 'Registration Process',
      description: 'How to register for events',
      url: '#registration'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Formation',
      description: 'Creating & managing teams',
      url: '#teams'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Payment Issues',
      description: 'Fees, refunds & receipts',
      url: '#payment'
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: 'Submissions',
      description: 'How to submit your entries',
      url: '#submissions'
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Technical Support',
      description: 'Platform & account help',
      url: '#support'
    },
    {
      icon: <Award size={24} />,
      title: 'Certificates',
      description: 'Access & verification',
      url: '#certificates'
    }
  ];

  const faqs = [
    {
      question: "How do I register for an event?",
      answer: "Browse events on the homepage, click on the event you want to join, and click the 'Register' button. Follow the prompts to complete your registration. You may need to create an account if you don't already have one."
    },
    {
      question: "Can I participate in multiple events simultaneously?",
      answer: "Yes, you can register for multiple events. Make sure to check the event schedules for any conflicts and ensure you can meet all participation requirements."
    },
    {
      question: "How do I create or join a team?",
      answer: "After registering for a team event, you can create a new team and share your team code with others, or use a team code to join an existing team. Team options are available in your event dashboard."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, net banking, UPI, and wallet payments. All transactions are secure and processed through our payment partners."
    },
    {
      question: "How do I get a refund if I can't participate?",
      answer: "Check the refund policy for your specific event. Most events allow refunds if requested before a certain date. Go to 'My Registrations' and select the refund option for the event."
    },
    {
      question: "When will I receive my participation certificate?",
      answer: "Certificates are typically issued within 7-10 days after the event concludes. You'll receive an email notification, or you can download them from your profile under 'My Certificates'."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-purple-200 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#310C7E] to-[#9372C1] text-white pt-16 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Help & Support</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-10 text-center max-w-2xl mx-auto">
            Find answers to your questions about event registration and participation
          </p>
        </div>
      </header>

      {/* Help Categories */}
      <section className="py-16 px-4 -mt-12">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-[#310C7E] text-center">Common Help Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href={category.url}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#9372C1] flex flex-col items-center text-center h-full"
                >
                  <div className="bg-[#f0e8ff] p-4 rounded-xl text-[#310C7E] mb-4 transition-colors duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#310C7E] mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f5ff] px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-[#310C7E] text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-transparent hover:border-[#9372C1] transition-colors duration-200"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-[#310C7E] text-lg">{faq.question}</span>
                  {expandedFaq === index ? 
                    <ChevronDown size={22} className="text-[#9372C1]" /> : 
                    <ChevronRight size={22} className="text-[#9372C1]" />
                  }
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`px-6 py-5 text-gray-600 border-t border-gray-100 bg-[#fdfcff] ${
                    expandedFaq === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#all-faqs" 
              className="inline-flex items-center text-[#9372C1] hover:text-[#310C7E] font-medium text-lg hover:underline"
            >
              View all FAQs
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Support - With Matching Buttons */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#310C7E] to-[#9372C1] rounded-2xl p-10 text-center text-white shadow-xl">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
              <HelpCircle size={32} className="text-[#9372C1]" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-lg mb-10 max-w-xl mx-auto text-white opacity-90">
              Can't find what you're looking for? Our support team is ready to assist you with any questions about event registration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a 
                href="#contact-form" 
                className="bg-white text-[#310C7E] py-4 px-8 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2 shadow-md"
              >
                <Mail size={20} />
                Submit a Request
              </a>
              <a 
                href="#live-chat" 
                className="bg-white text-[#310C7E] py-4 px-8 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={20} />
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#310C7E] text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg">&copy; 2025 Event Registration Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}