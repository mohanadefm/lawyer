import React, { useState } from "react";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header */}

      {/* Navigation */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
              نوار الدوسري
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <button onClick={() => scrollToSection("home")} className="hover:text-gray-300">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-300">
                من نحن
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-gray-300">
                الخدمات
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="hover:text-gray-300">
                قالوا عنا
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300">
                اتصل بنا
              </button>
            </div>
            <button className="md:hidden z-50" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button onClick={() => scrollToSection("home")} className="text-xl text-white">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection("about")} className="text-xl text-white">
                من نحن
              </button>
              <button onClick={() => scrollToSection("services")} className="text-xl text-white">
                الخدمات
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-xl text-white">
                قالوا عنا
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-xl text-white">
                اتصل بنا
              </button>
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="self-start bg-gray-900 p-4 rounded-lg shadow-md h-40">
              <h3 className="text-xl font-bold text-white mb-4">مكتب المحامي نوار الدوسري</h3>
              <p className="text-sm">نقدم خدمات قانونية استثنائية منذ عام ٢٠٢٢</p>
            </div>
            <div className="self-start bg-gray-900 p-4 rounded-lg shadow-md h-40">
              <h4 className="text-white font-semibold mb-4">معلومات الاتصال</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 ml-2" />
                  0595552224
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 ml-2" />
                  contact@email.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 ml-2" />
                  مركز الملك عبد الله المالي، الرياض
                </li>
              </ul>
            </div>
            <div className="self-start bg-gray-900 p-4 rounded-lg shadow-md h-40">
              <h4 className="text-white font-semibold mb-4">ساعات العمل</h4>
              <ul className="space-y-2 text-gray-300">
                <li>الأحد - الخميس: ٩:٠٠ ص - ٦:٠٠ م</li>
                <li className="text-red-400">الجمعة: مغلق</li>
                <li>السبت: ١٠:٠٠ ص - ٢:٠٠ م</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>جميع الحقوق محفوظة © ٢٠٢٥</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
