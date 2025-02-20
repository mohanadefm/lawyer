import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow numbers
      const numbersOnly = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numbersOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validation
    if (!formData.name.trim()) {
      newErrors.name = "الرجاء إدخال الاسم";
    }

    if (!formData.email.trim()) {
      newErrors.email = "الرجاء إدخال البريد الإلكتروني";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "الرجاء إدخال بريد إلكتروني صحيح";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "الرجاء إدخال رقم الهاتف";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرجاء إدخال الرسالة";
    }

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some((error) => error)) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة قانونية مجانية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">ارسل رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded focus:outline-none focus:border-yellow-600 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="ادخل اسمك الكامل"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded focus:outline-none focus:border-yellow-600 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="ادخل بريدك الإلكتروني"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded focus:outline-none focus:border-yellow-600 text-right placeholder-gray-400 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="ادخل رقم هاتفك"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded focus:outline-none focus:border-yellow-600 h-32 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="اكتب رسالتك هنا"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <Phone className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">اتصل بنا</h3>
                  <p className="text-gray-600">0595552224</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">راسلنا</h3>
                  <p className="text-gray-600">contact@email.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">موقعنا</h3>
                  <p className="text-gray-600">مركز الملك عبد الله المالي، الرياض</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">ساعات العمل</h3>
                  <p className="text-gray-600">الأحد - الخميس: ٩:٠٠ ص - ٦:٠٠ م</p>
                  <p className="text-gray-600">الجمعة: مغلق</p>
                  <p className="text-gray-600">السبت: ١٠:٠٠ ص - ٢:٠٠ م</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14491.444693303352!2d46.619986499999995!3d24.7659977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2fb056ead47%3A0x828d40023cc0ff61!2sKAFD%2C%20Al%20Aqiq%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1709667547646!5m2!1sen!2ssa"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
