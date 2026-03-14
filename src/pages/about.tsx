import type { Context } from 'hono'

export const aboutPage = (c: Context) => {
  return c.render(
    <div>
      {/* Banner */}
      <div class="page-banner">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div style="font-size:3rem;margin-bottom:12px;">🌿</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:12px;">About Phytoatomy</h1>
          <p style="color:rgba(255,255,255,.8);font-size:1.05rem;max-width:560px;margin:0 auto;">Rooted in 5,000 years of Ayurvedic tradition, driven by modern scientific validation.</p>
          <div class="breadcrumb">
            <a href="/">Home</a>
            <i class="fas fa-chevron-right" style="font-size:.7rem;"></i>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="section-tag">Our Story</div>
              <h2 class="section-title mt-2 mb-4">Born from a Healing Garden</h2>
              <div class="section-divider"></div>
              <p class="mt-6" style="color:#4a6a4a;line-height:1.9;font-size:.97rem;margin-bottom:18px;">
                Phytoatomy was born in the heart of a family herb garden where generations of Ayurvedic knowledge were passed down through stories, remedies, and recipes. Our founder, Dr. Arjun Verma, grew up watching his grandmother heal the entire village with simple herbs from their backyard.
              </p>
              <p style="color:#4a6a4a;line-height:1.9;font-size:.97rem;margin-bottom:18px;">
                Inspired by this profound wisdom, he spent 15 years studying classical Ayurvedic texts, modern pharmacognosy, and botanical science to create formulations that marry the best of both worlds. Phytoatomy was established in 2010 with a single mission: <strong style="color:#163616;">Make authentic Ayurveda accessible to everyone.</strong>
              </p>
              <p style="color:#4a6a4a;line-height:1.9;font-size:.97rem;">
                Today, we serve over 10,000 families across India with a curated range of products that are as pure as nature intended and as effective as science demands.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="card p-7 text-center">
                <div style="font-size:3rem;margin-bottom:10px;">🌱</div>
                <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:#ffa500;">2010</div>
                <div style="color:#5a7a5a;font-size:.88rem;margin-top:6px;">Year Founded</div>
              </div>
              <div class="card p-7 text-center">
                <div style="font-size:3rem;margin-bottom:10px;">🏆</div>
                <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:#ffa500;">15+</div>
                <div style="color:#5a7a5a;font-size:.88rem;margin-top:6px;">National Awards</div>
              </div>
              <div class="card p-7 text-center">
                <div style="font-size:3rem;margin-bottom:10px;">👨‍🔬</div>
                <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:#ffa500;">25+</div>
                <div style="color:#5a7a5a;font-size:.88rem;margin-top:6px;">Experts & Doctors</div>
              </div>
              <div class="card p-7 text-center">
                <div style="font-size:3rem;margin-bottom:10px;">🌍</div>
                <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:#ffa500;">18+</div>
                <div style="color:#5a7a5a;font-size:.88rem;margin-top:6px;">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon:'🎯', title:'Our Mission', color:'#3a8a3a', desc:'To democratize authentic Ayurvedic wellness by crafting pure, potent, and scientifically validated herbal formulations that empower every individual to live in harmony with nature and their own body.' },
              { icon:'🔭', title:'Our Vision', color:'#ffa500', desc:'A world where every home has access to the timeless healing wisdom of Ayurveda — where natural remedies are not an alternative but the first choice for health and wellness.' },
              { icon:'💎', title:'Our Values', color:'#9333ea', desc:'Purity in every ingredient. Integrity in every process. Respect for ancient wisdom. Responsibility toward our planet. Compassion for every customer on their wellness journey.' },
            ].map(mv => (
              <div class="card p-8" style={`border-top:4px solid ${mv.color};`}>
                <div style={`font-size:2.5rem;margin-bottom:14px;`}>{mv.icon}</div>
                <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;color:#163616;margin-bottom:14px;">{mv.title}</h3>
                <p style="color:#5a7a5a;line-height:1.85;font-size:.92rem;">{mv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Meet the Team</div>
            <h2 class="section-title mt-2">The Healers Behind the Brand</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { name:'Dr. Arjun Verma', role:'Founder & Chief Ayurvedic Officer', exp:'20 yrs exp.', emoji:'👨‍⚕️', spec:'Classical Ayurveda & Herbal Pharmacology', color:'#3a8a3a' },
              { name:'Dr. Meera Nair', role:'Head of Research & Development', exp:'15 yrs exp.', emoji:'👩‍🔬', spec:'Phytochemistry & Nutraceuticals', color:'#ffa500' },
              { name:'Mr. Rohit Joshi', role:'Quality Assurance Director', exp:'12 yrs exp.', emoji:'👨‍💼', spec:'GMP & ISO Quality Systems', color:'#9333ea' },
              { name:'Dr. Sunita Bhatt', role:'Clinical Wellness Consultant', exp:'18 yrs exp.', emoji:'👩‍⚕️', spec:'Panchakarma & Lifestyle Medicine', color:'#e11d48' },
            ].map(member => (
              <div class="card p-7 text-center">
                <div style={`width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,${member.color}22,${member.color}44);border:3px solid ${member.color};display:flex;align-items:center;justify-content:center;font-size:2.2rem;margin:0 auto 14px;`}>{member.emoji}</div>
                <h4 style="font-family:'Playfair Display',serif;font-size:1rem;color:#163616;margin-bottom:5px;">{member.name}</h4>
                <div style={`color:${member.color};font-size:.78rem;font-weight:600;margin-bottom:5px;`}>{member.role}</div>
                <div style="color:#9ca3af;font-size:.75rem;margin-bottom:8px;">{member.spec}</div>
                <span class="tag">{member.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Certifications</div>
            <h2 class="section-title mt-2">Trusted & Certified</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon:'🏅', cert:'AYUSH Certified', body:'Ministry of AYUSH, Govt. of India', color:'#ffa500' },
              { icon:'🔬', cert:'GMP Compliant', body:'Good Manufacturing Practice', color:'#3a8a3a' },
              { icon:'📋', cert:'ISO 9001:2015', body:'International Quality Management', color:'#2563eb' },
              { icon:'🌿', cert:'Organic Certified', body:'National Organic Programme', color:'#16a34a' },
            ].map(cert => (
              <div class="card p-7 text-center">
                <div style={`width:64px;height:64px;background:${cert.color}18;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 14px;`}>{cert.icon}</div>
                <h4 style="font-weight:700;color:#163616;font-size:.95rem;margin-bottom:6px;">{cert.cert}</h4>
                <p style="color:#5a7a5a;font-size:.8rem;line-height:1.5;">{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Our Journey</div>
            <h2 class="section-title mt-2">Milestones That Define Us</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div style="position:relative;">
            <div style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#3a8a3a,#ffa500);transform:translateX(-50%);"></div>
            {[
              { year:'2010', title:'Founded', desc:'Dr. Arjun Verma establishes Phytoatomy in a small lab with 5 products and a big dream.', side:'left', icon:'🌱' },
              { year:'2013', title:'First 1000 Customers', desc:'Word-of-mouth growth drives us to 1,000 happy families within 3 years.', side:'right', icon:'🎉' },
              { year:'2016', title:'AYUSH Certification', desc:'Received prestigious AYUSH certification, validating our quality standards.', side:'left', icon:'🏅' },
              { year:'2019', title:'GMP Facility Launch', desc:'Inaugurated our state-of-the-art GMP manufacturing facility in Pune.', side:'right', icon:'🏭' },
              { year:'2022', title:'10,000 Families', desc:'Crossed the milestone of serving 10,000+ families across 18 states of India.', side:'left', icon:'👨‍👩‍👧‍👦' },
              { year:'2025', title:'Expanding Horizons', desc:'Launching international shipping and new category expansions in 2025 and beyond.', side:'right', icon:'🚀' },
            ].map((event, i) => (
              <div class={`flex ${event.side === 'right' ? 'flex-row-reverse' : ''} items-center gap-8 mb-10`}>
                <div style="flex:1;" class={event.side === 'right' ? 'text-right' : ''}>
                  <div class="card p-6">
                    <div style="color:#ffa500;font-weight:700;font-size:.85rem;margin-bottom:4px;">{event.year}</div>
                    <h4 style="font-family:'Playfair Display',serif;color:#163616;margin-bottom:6px;">{event.title}</h4>
                    <p style="color:#5a7a5a;font-size:.88rem;line-height:1.65;">{event.desc}</p>
                  </div>
                </div>
                <div style="width:48px;height:48px;background:linear-gradient(135deg,#4caf50,#66bb6a);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;z-index:1;border:3px solid #fefcf7;">{event.icon}</div>
                <div style="flex:1;"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style="background:linear-gradient(135deg,#4caf50,#81c784);padding:70px 0;text-align:center;">
        <div class="max-w-3xl mx-auto px-4">
          <h2 style="font-family:'Playfair Display',serif;font-size:2.2rem;color:#fff;margin-bottom:14px;">Ready to Begin Your Wellness Journey?</h2>
          <p style="color:rgba(255,255,255,.8);margin-bottom:28px;font-size:1rem;line-height:1.75;">Explore our range of authentic Ayurvedic products and start living in harmony with nature today.</p>
          <div class="flex justify-center gap-4 flex-wrap">
            <a href="/products" class="btn-saffron"><i class="fas fa-leaf"></i> Shop Products</a>
            <a href="/contact" class="hero-btn-secondary"><i class="fas fa-phone"></i> Talk to an Expert</a>
          </div>
        </div>
      </section>
    </div>,
    { title: 'About Us – Phytoatomy' }
  )
}
