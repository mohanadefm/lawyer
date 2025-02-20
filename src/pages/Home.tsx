import React, { useState, useEffect } from "react";
import {
  Scale,
  Shield,
  Users,
  BookOpen,
  Building2,
  GavelIcon,
  HeartHandshake,
  Calculator,
  Coins,
  Briefcase,
  AlertTriangle,
  BookOpenCheck,
} from "lucide-react";
import About from "./About";
import Contact from "./Contact";
import backgroundImage from "../assets/main-bg.jpg";
import backgroundImage2 from "../assets/mohamad-bn-salman.png";
import backgroundImage3 from "../assets/Picture1.png";
import { User } from "lucide-react";

function Home() {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuote(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "الخدمات القانونية للشركات",
      desc: "دعم قانوني متكامل لتأسيس الشركات وإدارتها، بما في ذلك الترخيص والامتثال التنظيمي وحل النزاعات الداخلية والخارجية.",
    },
    {
      icon: GavelIcon,
      title: "التقاضي والمرافعات",
      desc: "التمثيل القانوني المحترف أمام المحاكم، مع تقديم حجج قوية ومدعومة بالأدلة لضمان حصولك على كامل حقوقك والدفاع عنك في مختلف القضايا.",
    },
    {
      icon: HeartHandshake,
      title: "استشارة محامي",
      desc: "استشارات قانونية متخصصة وشاملة في جميع مجالات القانون، فريق من المحامين المتخصصين لتقديم الاستشارات والحلول المناسبة لقضاياك تساعدك على اتخاذ القرارات الصحيحة",
    },
    {
      icon: Calculator,
      title: "الضرائب",
      desc: "استشارات قانونية متخصصة في قضايا الضرائب، بما في ذلك التخطيط الضريبي وحل النزاعات مع الجهات الرقابية.",
    },
    {
      icon: Coins,
      title: "تحصيل الديون",
      desc: "خدمات فعالة لتحصيل الديون، نستخدم الأساليب القانونية المناسبة لضمان استرداد حقوقك المالية في اسرع وقت ممكن.",
    },
    {
      icon: Briefcase,
      title: "العمل والعمال",
      desc: "حلول قانونية عادلة وفعالة في نزاعات العمل، مثل إنهاء الخدمة والمطالبات المالية. نعمل على تحقيق التوازن بين حقوق العمال وأصحاب الأعمال.",
    },
    {
      icon: AlertTriangle,
      title: "تحليل المخاطر القانونية",
      desc: "تقييم شامل للمخاطر القانونية المحتملة في عملك، مع تقديم توصيات استباقية لتجنب النزاعات والمشكلات المستقبلية.",
    },
    {
      icon: BookOpenCheck,
      title: "الأوقاف والوصايا",
      desc: "استشارات قانونية متخصصة في قضايا الأوقاف والوصايا، مع ضمان تنفيذ رغباتك وفقًا لأحكام الشريعة الإسلامية.",
    },
    {
      icon: Scale,
      title: "التقاضي المدني",
      desc: "تمثيل العملاء في مختلف النزاعات والدعاوى المدنية",
    },
    {
      icon: Shield,
      title: "الدفاع الجنائي",
      desc: "حماية حقوقك في الإجراءات الجنائية",
    },
    {
      icon: Users,
      title: "قانون الأسرة",
      desc: "التعامل مع قضايا الطلاق والحضانة والمسائل الأسرية",
    },
    {
      icon: BookOpen,
      title: "القانون التجاري",
      desc: "خدمات قانونية للشركات والمؤسسات",
    },
  ];

  const testimonials = [
    {
      name: "محمد العلي",
      position: "رجل أعمال",
      content: "خدمة ممتازة وفريق محترف. ساعدوني في حل قضية معقدة بكل كفاءة.",
    },
    {
      name: "سارة سعيد",
      position: "مديرة شركة",
      content: "أفضل مكتب محاماة تعاملت معه. خبرتهم وتفانيهم في العمل لا مثيل له.",
    },
    {
      name: "عبدالله المصري",
      position: "مستثمر",
      content: "استشاراتهم القانونية ساعدتني في تجنب الكثير من المشاكل المحتملة في عملي.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl font-bold mb-6">تمثيل قانوني متميز وموثوق</h1>
          <p className="text-2xl mb-8 text-gray-300">نحمي حقوقك ونؤمن مستقبلك بخبرة قانونية متخصصة</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-600 text-black px-8 py-3 rounded flex items-center justify-center mx-auto hover:bg-yellow-700 transition-colors"
          >
            استشارة مجانية
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <div className={`transition-opacity duration-1000 ${showQuote ? "opacity-100" : "opacity-0"}`}>
        <section className="h-screen flex flex-col bg-white">
          {/* Background Image (Top Half) */}
          <div
            className="h-1/2 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage3})` }}
          ></div>

          {/* Content (Bottom Half) */}
          <div className="h-1/2 container mx-auto px-4 flex items-center mb-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between text-right w-full">
              {/* Text Content (Left) */}
              <div className="w-2/3 ">
                <blockquote className="text-3xl font-medium text-gray-900 mb-1 leading-relaxed">
                  يجب أن يكون القانون هو السند الوحيد للجميع
                </blockquote>
                <blockquote className="text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                  كل شخص يستحق العدالة
                </blockquote>
                <cite className="text-2xl font-semibold text-gray-500 block">محمد بن سلمان</cite>
              </div>

              {/* Image (Right) */}
              <div className="w-1/3 flex justify-end">
                <img
                  src={backgroundImage2}
                  alt="صاحب السمو الملكي الأمير محمد بن سلمان"
                  className="w-80 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

<section id="testimonials" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">قالوا عنا</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          {/* User Icon */}
          <User className="w-12 h-12 text-gray-400 mb-4" />
          
          {/* Testimonial Text */}
          <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
          
          {/* Name & Position */}
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-yellow-600">{testimonial.position}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى مساعدة قانونية؟</h2>
          <p className="mb-8 text-gray-300">اتصل بنا اليوم للحصول على استشارة مجانية مع محامينا ذوي الخبرة</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-600 text-white px-8 py-3 rounded inline-flex items-center hover:bg-yellow-700 transition-colors"
          >
            اتصل بنا الآن
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
