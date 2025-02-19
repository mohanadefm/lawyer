import React from 'react';

const teamMembers = [
  {
    name: "أحمد محمد",
    position: "شريك مؤسس",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    specialization: "القانون التجاري",
    experience: "٢٥ سنة خبرة"
  },
  {
    name: "سارة عبدالله",
    position: "محامي رئيسي",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    specialization: "قانون الأسرة",
    experience: "١٥ سنة خبرة"
  },
  {
    name: "خالد عمر",
    position: "مستشار قانوني",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    specialization: "التقاضي المدني",
    experience: "٢٠ سنة خبرة"
  },
  {
    name: "نورة سعيد",
    position: "محامي",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    specialization: "القانون الجنائي",
    experience: "١٠ سنوات خبرة"
  }
];

function Team() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">فريق العمل</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يضم مكتبنا نخبة من المحامين والمستشارين القانونيين ذوي الخبرة والكفاءة العالية
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 mb-2">{member.specialization}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">انضم إلى فريقنا</h2>
          <p className="text-gray-600 mb-6">
            نحن دائماً نبحث عن المواهب القانونية المتميزة للانضمام إلى فريقنا
          </p>
          <button className="bg-yellow-600 text-white px-8 py-3 rounded hover:bg-yellow-700 transition-colors">
            تقدم للوظائف
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;