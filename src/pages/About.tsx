import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن مكتب قانوني رائد يقدم خدمات قانونية شاملة بأعلى معايير الجودة والمهنية
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">تاريخنا وخبرتنا</h2>
            <p className="text-gray-600 mb-4">
              تأسس مكتبنا في عام ٢٠٢٢، وعلى مدى أكثر من عام، قدمنا خدمات قانونية متميزة لعملائنا في مختلف المجالات.
            </p>
            <p className="text-gray-600">
              نفتخر بفريقنا المكون من محامين ذوي خبرة عالية ومتخصصين في مجالات القانون المختلفة، ونسعى دائماً لتحقيق أفضل النتائج لعملائنا.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">إنجازاتنا بالأرقام</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">٥٠</div>
                <div className="text-gray-600">قضية ناجحة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">٣+</div>
                <div className="text-gray-600">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">١٠</div>
                <div className="text-gray-600">محامي متخصص</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">٤٠</div>
                <div className="text-gray-600">عميل راضٍ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">التميز</h3>
            <p className="text-gray-600">نسعى دائماً لتقديم أفضل الخدمات القانونية وتحقيق نتائج متميزة لعملائنا</p>
          </div>
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">المهنية</h3>
            <p className="text-gray-600">نلتزم بأعلى معايير المهنية والأخلاق في جميع تعاملاتنا</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">العمل الجماعي</h3>
            <p className="text-gray-600">نعمل كفريق واحد لتقديم أفضل الحلول القانونية لعملائنا</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;