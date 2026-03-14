import type { Context } from 'hono'

export const servicesPage = (c: Context) => {
  return c.render(
    <div>
      {/* Banner */}
      <div class="page-banner">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div style="font-size:3rem;margin-bottom:12px;">🏥</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:12px;">Wellness Services</h1>
          <p style="color:rgba(255,255,255,.8);font-size:1.05rem;max-width:560px;margin:0 auto;">Personalised Ayurvedic care from certified practitioners — in-person and online.</p>
          <div class="breadcrumb">
            <a href="/">Home</a>
            <i class="fas fa-chevron-right" style="font-size:.7rem;"></i>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">What We Offer</div>
            <h2 class="section-title mt-2">Holistic Healing Services</h2>
            <div class="section-divider mx-auto"></div>
            <p class="text-gray-600 max-w-2xl mx-auto mt-4">From personalised consultations to traditional Panchakarma therapies — we offer a complete spectrum of Ayurvedic wellness services.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji:'👨‍⚕️', title:'Ayurvedic Consultation', price:'₹499', duration:'45 min',
                desc:'A comprehensive one-on-one consultation with a certified Ayurvedic doctor. Includes Prakriti analysis, health assessment, and a personalised wellness plan.',
                features:['Dosha Analysis','Personalised Diet Plan','Herbal Prescription','Lifestyle Guidance'],
                tag:'Most Popular', color:'#3a8a3a'
              },
              {
                emoji:'🛁', title:'Panchakarma Therapy', price:'₹2999', duration:'2-5 Days',
                desc:'The classical Ayurvedic detoxification and rejuvenation programme. A series of cleansing therapies tailored to your body constitution.',
                features:['Abhyanga Massage','Shirodhara','Basti Therapy','Personalised Protocol'],
                tag:'Signature', color:'#ffa500'
              },
              {
                emoji:'💆', title:'Abhyanga Massage', price:'₹1299', duration:'60 min',
                desc:'Traditional full-body warm oil massage using customised herbal oils selected for your dosha. Deeply relaxing and rejuvenating.',
                features:['Warm Medicated Oil','Dosha-Specific','Stress Relief','Improved Circulation'],
                tag:'Rejuvenating', color:'#9333ea'
              },
              {
                emoji:'🌊', title:'Shirodhara', price:'₹1499', duration:'60 min',
                desc:'A continuous stream of warm medicated oil poured onto the forehead. Profoundly calming for anxiety, insomnia and mental fatigue.',
                features:['Medicated Herbal Oil','Deep Relaxation','Sleep Improvement','Mental Clarity'],
                tag:'Mind Healing', color:'#2563eb'
              },
              {
                emoji:'💻', title:'Online Consultation', price:'₹349', duration:'30 min',
                desc:'Convenient teleconsultation with our Ayurvedic doctors via video call. Get expert advice from the comfort of your home.',
                features:['Video Call','Digital Prescription','Follow-up Support','Pan India Available'],
                tag:'Digital', color:'#e11d48'
              },
              {
                emoji:'🧪', title:'Nadi Pariksha (Pulse Diagnosis)', price:'₹799', duration:'30 min',
                desc:'The ancient Ayurvedic art of reading the pulse to assess dosha imbalances and identify root causes of health concerns.',
                features:['Prakriti Analysis','Vikriti Detection','Doshic Insights','Custom Protocol'],
                tag:'Diagnostic', color:'#16a34a'
              },
            ].map(svc => (
              <div class="card p-0 overflow-hidden" style={`border-top:4px solid ${svc.color};`}>
                <div style="padding:28px;">
                  <div class="flex items-start justify-between mb-4">
                    <div style={`width:60px;height:60px;background:${svc.color}18;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;`}>{svc.emoji}</div>
                    <span style={`background:${svc.color}18;color:${svc.color};font-size:.75rem;font-weight:700;padding:4px 12px;border-radius:20px;`}>{svc.tag}</span>
                  </div>
                  <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;color:#163616;margin-bottom:8px;">{svc.title}</h3>
                  <div class="flex items-center gap-4 mb-10">
                    <span style={`color:${svc.color};font-weight:700;font-size:1.1rem;`}>{svc.price}</span>
                    <span style="color:#9ca3af;font-size:.85rem;"><i class="fas fa-clock" style="margin-right:4px;"></i>{svc.duration}</span>
                  </div>
                  <p style="color:#5a7a5a;font-size:.87rem;line-height:1.75;margin-bottom:18px;">{svc.desc}</p>
                  <ul style="margin-bottom:20px;">
                    {svc.features.map(f => (
                      <li style="display:flex;align-items:center;gap:8px;color:#3a6a3a;font-size:.83rem;margin-bottom:6px;">
                        <i class="fas fa-check-circle" style="color:#3a8a3a;"></i> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" class="btn-primary" style={`background:linear-gradient(135deg,${svc.color},${svc.color}cc);border-radius:8px;justify-content:center;`}>
                    Book Now <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">How It Works</div>
            <h2 class="section-title mt-2">Your Healing Journey</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step:'01', icon:'📅', title:'Book Appointment', desc:'Choose your service and schedule a convenient time online or by phone.' },
              { step:'02', icon:'📋', title:'Health Assessment', desc:'Fill our detailed health questionnaire so the doctor prepares for your session.' },
              { step:'03', icon:'👨‍⚕️', title:'Expert Consultation', desc:'Meet your certified Ayurvedic doctor for personalised assessment and guidance.' },
              { step:'04', icon:'🌿', title:'Begin Healing', desc:'Receive your customised wellness plan, herbal prescription and lifestyle recommendations.' },
            ].map(step => (
              <div class="card p-8 text-center">
                <div style="width:56px;height:56px;background:linear-gradient(135deg,#3a8a3a,#ffa500);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;margin:0 auto 12px;color:#fff;font-weight:700;">{step.step}</div>
                <div style="font-size:2rem;margin-bottom:12px;">{step.icon}</div>
                <h4 style="font-family:'Playfair Display',serif;color:#163616;margin-bottom:8px;">{step.title}</h4>
                <p style="color:#5a7a5a;font-size:.85rem;line-height:1.7;">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-20">
        <div class="max-w-3xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">FAQs</div>
            <h2 class="section-title mt-2">Common Questions</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div id="faqAccordion">
            {[
              { q:'Are the online consultations as effective as in-person?', a:'Yes! Our online consultations are equally comprehensive. Our doctors use video call to visually assess you and can review any diagnostic reports you share. The only difference is physical treatments like massage cannot be done online.' },
              { q:'How long does it take to see results from Ayurvedic treatment?', a:'Ayurveda works on the root cause, not just symptoms. Most people notice initial improvements within 2-4 weeks, with significant results typically seen in 2-3 months of consistent use. Chronic conditions may require longer treatment.' },
              { q:'Are Phytoatomy products safe for everyone?', a:'Our products are made from natural herbs and are generally safe for most adults. However, we recommend consulting our doctor before use during pregnancy, breastfeeding, or if you take prescription medications. Always follow recommended dosages.' },
              { q:'Do you offer follow-up consultations?', a:'Absolutely! We offer follow-up consultations at discounted rates for existing patients. Your health journey is our responsibility, and we\'ll guide you every step of the way.' },
              { q:'Can Ayurveda be combined with modern medicine?', a:'In most cases, yes — Ayurvedic herbs can complement modern medicine. However, it\'s important to inform both your Ayurvedic doctor and allopathic doctor about all medications and supplements you\'re taking to avoid any potential interactions.' },
            ].map((faq, i) => (
              <div class="card mb-4 overflow-hidden">
                <button
                  onclick={`toggleFaq(${i})`}
                  style="width:100%;text-align:left;padding:18px 22px;background:none;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:'Poppins',sans-serif;font-size:.95rem;font-weight:600;color:#163616;"
                >
                  {faq.q}
                  <i id={`faqIcon${i}`} class="fas fa-plus" style="color:#3a8a3a;min-width:16px;"></i>
                </button>
                <div id={`faqAnswer${i}`} style="display:none;padding:0 22px 18px;color:#5a7a5a;font-size:.9rem;line-height:1.8;border-top:1px solid #e8f5e5;">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section style="background:linear-gradient(135deg,#4caf50,#81c784);padding:70px 0;text-align:center;">
        <div class="max-w-3xl mx-auto px-4">
          <div style="font-size:3rem;margin-bottom:14px;">📅</div>
          <h2 style="font-family:'Playfair Display',serif;font-size:2.2rem;color:#fff;margin-bottom:14px;">Book Your Consultation Today</h2>
          <p style="color:rgba(255,255,255,.8);margin-bottom:28px;">Take the first step toward natural, lasting wellness. Our certified Ayurvedic doctors are here to guide you.</p>
          <a href="/contact" class="btn-saffron" style="font-size:1.05rem;"><i class="fas fa-calendar-alt"></i> Schedule Appointment</a>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        function toggleFaq(i) {
          const answer = document.getElementById('faqAnswer' + i);
          const icon = document.getElementById('faqIcon' + i);
          const isOpen = answer.style.display !== 'none';
          // Close all
          document.querySelectorAll('[id^="faqAnswer"]').forEach(a => a.style.display = 'none');
          document.querySelectorAll('[id^="faqIcon"]').forEach(ic => {
            ic.classList.remove('fa-minus');
            ic.classList.add('fa-plus');
          });
          // Toggle clicked
          if (!isOpen) {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
          }
        }
      ` }}></script>
    </div>,
    { title: 'Services – Phytoatomy' }
  )
}
