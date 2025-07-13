"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Camera, Users, TrendingUp, Wrench, Languages, Scale } from "lucide-react" // Removed Sun, Moon
// Removed useTheme import

export default function AqarioLanding() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
    city: "",
    district: "",
    area: "", // Added area field
    saleType: "",
    price: "",
    notes: "",
  })

  // Removed theme and setTheme state/hook

  const isRTL = language === "ar"

  const content = {
    ar: {
      // Hero Section
      heroTitle: "عقاريو",
      heroSubtitle1: "وجهتك الأمثل للتسويق العقاري",
      heroSubtitle2: "أرسل بيانات عقارك في دقيقة، وخلي فريقنا يوصّلك بالمشتري المناسب",
      heroCTA: "أضف عقارك الآن",

      // Navigation
      navServices: "خدماتنا",
      navSubmit: "أضف عقارك",
      navContact: "تواصل معنا",

      // Who We Are
      whoWeAreTitle: "من نحن",
      whoWeAreText: "عقاريو هي منصة عقارية ذكية تساعدك على بيع عقارك بأسرع طريقة في كل محافظات مصر",

      // Services
      servicesTitle: "خدماتنا",
      service1: "نوصلك بمشترين جادين بسرعة",
      service2: "تصوير احترافي لعقارك",
      service3: "ندير التفاوض والطلبات نيابة عنك",
      service4: "تقييم مجاني لسعر السوق",
      service5: "نوفر لك حلول تشطيب متكاملة",
      service6: "محامي للشؤون العقارية",

      // Form
      formTitle: "أضف عقارك",
      formName: "الاسم",
      formPhone: "رقم الهاتف",
      formPropertyType: "نوع العقار",
      formCity: "المدينة",
      district: "الحي",
      area: "المساحة (متر مربع)",
      saleType: "إيجار أم بيع",
      formPrice: "السعر المطلوب",
      formNotes: "تفاصيل إضافية",
      formSubmit: "أرسل البيانات عبر واتساب",
      selectType: "اختر النوع",

      // Property Types (Expanded list)
      apartment: "شقة",
      villa: "فيلا",
      duplex: "دوبلكس",
      chalet: "شاليه",
      studio: "استوديو",
      office: "مكتب",
      clinic: "عيادة",
      shop: "محل تجاري",
      warehouse: "مخزن",
      factory: "مصنع",
      land: "أرض",
      farm: "مزرعة",
      wholeBuilding: "مبنى كامل",
      residentialBuilding: "مبنى سكني",
      commercialBuilding: "مبنى تجاري",
      administrativeBuilding: "مبنى إداري",
      mixedUseBuilding: "مبنى متعدد الاستخدامات",
      garage: "جراج",
      roof: "روف",

      // FAQ
      faqTitle: "الأسئلة الشائعة",
      faq1Q: "كم تستغرق عملية البيع؟",
      faq1A: "متوسط وقت البيع من 15-45 يوم حسب نوع العقار والمنطقة",
      faq2Q: "هل توجد رسوم مقدمة؟",
      faq2A: "لا، نحن نتقاضى العمولة فقط عند إتمام البيع بنجاح",
      faq3Q: "هل تغطون جميع المحافظات؟",
      faq3A: "نعم، لدينا شبكة وكلاء في جميع محافظات مصر",

      // Footer
      footerPrivacy: "سياسة الخصوصية",
      footerContact: "تواصل معنا",
      footerWork: "فرص التعاون",
      footerMade: "عقاريو - جميع الحقوق محفوظة",

      // WhatsApp
      whatsappFloat: "تواصل معنا",
    },
    en: {
      // Hero Section
      heroTitle: "Aqario",
      heroSubtitle1: "Your Ultimate Destination for Real Estate Marketing",
      heroSubtitle2: "Send your property details in one minute and we'll connect you with serious buyers",
      heroCTA: "Submit Your Property",

      // Navigation
      navServices: "Services",
      navSubmit: "Submit Property",
      navContact: "Contact",

      // Who We Are
      whoWeAreTitle: "Who We Are",
      whoWeAreText:
        "Aqario is a smart real estate platform that helps you sell your property quickly across all Egyptian cities",

      // Services
      servicesTitle: "Our Services",
      service1: "Reach serious buyers fast",
      service2: "Professional photography",
      service3: "We handle negotiations",
      service4: "Free property evaluation",
      service5: "Provide comprehensive finishing solutions",
      service6: "Real estate legal advisor",

      // Form
      formTitle: "Submit Your Property",
      formName: "Name",
      formPhone: "Phone Number",
      formPropertyType: "Property Type",
      formCity: "City",
      district: "District",
      area: "Area (sqm)",
      saleType: "Rent or Sale",
      formPrice: "Asking Price",
      formNotes: "Additional Details",
      formSubmit: "Send via WhatsApp",
      selectType: "Select Type",

      // Property Types (Expanded list)
      apartment: "Apartment",
      villa: "Villa",
      duplex: "Duplex",
      chalet: "Chalet",
      studio: "Studio",
      office: "Office",
      clinic: "Clinic",
      shop: "Shop",
      warehouse: "Warehouse",
      factory: "Factory",
      land: "Land",
      farm: "Farm",
      wholeBuilding: "Whole Building",
      residentialBuilding: "Residential Building",
      commercialBuilding: "Commercial Building",
      administrativeBuilding: "Administrative Building",
      mixedUseBuilding: "Mixed-use Building",
      garage: "Garage",
      roof: "Roof",

      // FAQ
      faqTitle: "Frequently Asked Questions",
      faq1Q: "How long does the selling process take?",
      faq1A: "Average selling time is 15-45 days depending on property type and location",
      faq2Q: "Are there any upfront fees?",
      faq2A: "No, we only charge commission when the sale is successfully completed",
      faq3Q: "Do you cover all governorates?",
      faq3A: "Yes, we have a network of agents in all Egyptian governorates",

      // Footer
      footerPrivacy: "Privacy Policy",
      footerContact: "Contact Us",
      footerWork: "Work With Us",
      footerMade: "Aqario - All Rights Reserved",

      // WhatsApp
      whatsappFloat: "Contact Us",
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message =
      language === "ar"
        ? `مرحباً، أريد بيع عقاري:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
نوع العقار: ${formData.propertyType}
المدينة: ${formData.city}
الحي: ${formData.district}
المساحة: ${formData.area} متر مربع
إيجار أم بيع: ${formData.saleType}
السعر المطلوب: ${formData.price}
تفاصيل إضافية: ${formData.notes}`
        : `Hello, I want to sell my property:
Name: ${formData.name}
Phone: ${formData.phone}
Property Type: ${formData.propertyType}
City: ${formData.city}
District: ${formData.district}
Area: ${formData.area} sqm
Rent or Sale: ${formData.saleType}
Asking Price: ${formData.price}
Additional Details: ${formData.notes}`

    const whatsappUrl = `https://wa.me/201012673037?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsApp = () => {
    const message =
      language === "ar" ? "مرحباً، أريد الاستفسار عن خدمات عقاريو" : "Hello, I want to inquire about Aqario services"
    const whatsappUrl = `https://wa.me/201012673037?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* Logo color is now fixed to primary (Royal Blue) */}
              <div className="text-2xl font-bold text-primary">{language === "ar" ? "عقاريو" : "Aqario"}</div>
            </div>

            <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                {t.navServices}
              </a>
              <a href="#submit" className="text-foreground hover:text-primary transition-colors">
                {t.navSubmit}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {t.navContact}
              </a>
            </nav>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {/* Language Switch Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                className="flex items-center space-x-2 rtl:space-x-reverse text-foreground border-border"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "ar" ? "English" : "العربية"}</span>
              </Button>

              {/* Removed Theme Toggle Button */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Background */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-background min-h-[500px] flex items-center">
        {/* Background Image */}
        <img
          src="/images/door-opening-revealing-beautiful-city.jpeg"
          alt="City view through an open door"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability - now uses fixed opacity */}
        <div className="absolute inset-0 bg-primary opacity-70"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90 leading-relaxed">{t.heroSubtitle1}</p>
            <p className="text-lg md:text-xl mb-8 opacity-80 leading-relaxed">{t.heroSubtitle2}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById("submit")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.heroCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Property Form */}
      <section id="submit" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{t.formTitle}</h2>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formName}</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formPhone}</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formPropertyType}</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder={t.formPropertyType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">{t.apartment}</SelectItem>
                      <SelectItem value="villa">{t.villa}</SelectItem>
                      <SelectItem value="duplex">{t.duplex}</SelectItem>
                      <SelectItem value="chalet">{t.chalet}</SelectItem>
                      <SelectItem value="studio">{t.studio}</SelectItem>
                      <SelectItem value="office">{t.office}</SelectItem>
                      <SelectItem value="clinic">{t.clinic}</SelectItem>
                      <SelectItem value="shop">{t.shop}</SelectItem>
                      <SelectItem value="warehouse">{t.warehouse}</SelectItem>
                      <SelectItem value="factory">{t.factory}</SelectItem>
                      <SelectItem value="land">{t.land}</SelectItem>
                      <SelectItem value="farm">{t.farm}</SelectItem>
                      <SelectItem value="wholeBuilding">{t.wholeBuilding}</SelectItem>
                      <SelectItem value="residentialBuilding">{t.residentialBuilding}</SelectItem>
                      <SelectItem value="commercialBuilding">{t.commercialBuilding}</SelectItem>
                      <SelectItem value="administrativeBuilding">{t.administrativeBuilding}</SelectItem>
                      <SelectItem value="mixedUseBuilding">{t.mixedUseBuilding}</SelectItem>
                      <SelectItem value="garage">{t.garage}</SelectItem>
                      <SelectItem value="roof">{t.roof}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formCity}</label>
                  <Input
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.district}</label>
                  <Input
                    required
                    value={formData.district || ""}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.area}</label>
                  <Input
                    required
                    type="number"
                    value={formData.area || ""}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.saleType}</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, saleType: value })}>
                    <SelectTrigger className="text-foreground">
                      <SelectValue placeholder={t.selectType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">{language === "ar" ? "بيع" : "Sale"}</SelectItem>
                      <SelectItem value="rent">{language === "ar" ? "إيجار" : "Rent"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formPrice}</label>
                  <Input
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.formNotes}</label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-foreground"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-success hover:bg-green-600 text-white py-3 text-lg font-semibold rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t.formSubmit}</span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.whoWeAreTitle}</h2>
            <p className="text-lg text-foreground leading-relaxed">{t.whoWeAreText}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, text: t.service1 },
              { icon: Camera, text: t.service2 },
              { icon: MessageCircle, text: t.service3 },
              { icon: TrendingUp, text: t.service4 },
              { icon: Wrench, text: t.service5 },
              { icon: Scale, text: t.service6 },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 text-success mx-auto mb-4" />
                  <p className="text-foreground font-medium">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">{t.faqTitle}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: t.faq1Q, a: t.faq1A },
              { q: t.faq2Q, a: t.faq2A },
              { q: t.faq3Q, a: t.faq3A },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.q}</h3>
                  <p className="text-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Image Section */}
      <section className="py-0 bg-background">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
          <img src="/images/aqario-cover.png" alt="Aqario Brand" className="w-full h-full object-cover object-bottom" />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{language === "ar" ? "عقاريو" : "Aqario"}</h3>
              <p className="text-primary-foreground">{t.whoWeAreText}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{language === "ar" ? "روابط مهمة" : "Important Links"}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground hover:text-white transition-colors">
                    {t.footerPrivacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground hover:text-white transition-colors">
                    {t.footerContact}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground hover:text-white transition-colors">
                    {t.footerWork}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{language === "ar" ? "تواصل معنا" : "Contact Us"}</h4>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground" dir="ltr">
                  +20 101 267 3037
                </span>
              </div>
              <Button onClick={openWhatsApp} className="bg-success hover:bg-green-600 text-white mt-4">
                <MessageCircle className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                {t.whatsappFloat}
              </Button>
            </div>
          </div>

          <div className="border-t border-blue-600 mt-8 pt-8 text-center">
            <p className="text-primary-foreground">{t.footerMade}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 bg-success hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-50 animate-pulse"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
