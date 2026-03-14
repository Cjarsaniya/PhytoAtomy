import type { Context } from 'hono'

export const contactPage = (c: Context) => {
  return c.render(
    <div>
      {/* Banner */}
      <div class="page-banner">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div style="font-size:3rem;margin-bottom:12px;">📞</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:12px;">Contact Us</h1>
          <p style="color:rgba(255,255,255,.8);font-size:1.05rem;max-width:520px;margin:0 auto;">We'd love to hear from you. Reach out for consultations, orders, or any wellness question.</p>
          <div class="breadcrumb">
            <a href="/">Home</a>
            <i class="fas fa-chevron-right" style="font-size:.7rem;"></i>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <section class="py-16 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon:'📍', title:'Visit Us', lines:['123 Herbal Lane, Wellness Park', 'Nature City – 400001', 'Maharashtra, India'], color:'#3a8a3a', action:'Get Directions', href:'#' },
              { icon:'📞', title:'Call Us', lines:['+91 800 123 4567', '+91 800 765 4321', 'Mon–Sat: 9AM–7PM IST'], color:'#ffa500', action:'Call Now', href:'tel:+918001234567' },
              { icon:'📧', title:'Email Us', lines:['info@phytoatomy.com', 'support@phytoatomy.com', 'Typically reply within 4hrs'], color:'#2563eb', action:'Send Email', href:'mailto:info@phytoatomy.com' },
              { icon:'💬', title:'WhatsApp', lines:['Chat with our team', 'Get instant responses', 'Available 10AM–6PM'], color:'#25d366', action:'Chat Now', href:'https://wa.me/918001234567' },
            ].map(info => (
              <div class="card p-7 text-center" style={`border-top:4px solid ${info.color};`}>
                <div style={`width:60px;height:60px;background:${info.color}18;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;margin:0 auto 14px;`}>{info.icon}</div>
                <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;color:#163616;margin-bottom:10px;">{info.title}</h3>
                {info.lines.map((line,i) => (
                  <p style={`color:${i===0?'#2e6e2e':'#9ca3af'};font-size:.85rem;margin-bottom:3px;font-weight:${i===0?'600':'400'};`}>{line}</p>
                ))}
                <a href={info.href} style={`display:inline-block;margin-top:14px;color:${info.color};font-weight:600;font-size:.85rem;text-decoration:none;`} target={info.href.startsWith('http')?'_blank':undefined}>
                  {info.action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form + Sidebar */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div class="lg:col-span-2">
              <div class="section-tag mb-2">Get in Touch</div>
              <h2 class="section-title mb-3">Send Us a Message</h2>
              <div class="section-divider mb-8"></div>

              <form id="contactForm" onsubmit="submitContact(event);" class="card p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label class="form-label" for="fname">First Name *</label>
                    <input id="fname" type="text" class="form-input" placeholder="e.g. Priya" required />
                  </div>
                  <div>
                    <label class="form-label" for="lname">Last Name *</label>
                    <input id="lname" type="text" class="form-input" placeholder="e.g. Sharma" required />
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label class="form-label" for="email">Email Address *</label>
                    <input id="email" type="email" class="form-input" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label class="form-label" for="phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-input" placeholder="+91 9876 543 210" />
                  </div>
                </div>
                <div class="mb-5">
                  <label class="form-label" for="subject">Subject *</label>
                  <select id="subject" class="form-input" required>
                    <option value="">-- Select a topic --</option>
                    <option>Product Enquiry</option>
                    <option>Book Consultation</option>
                    <option>Order / Shipping Issue</option>
                    <option>Wholesale / B2B</option>
                    <option>General Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="mb-5">
                  <label class="form-label" for="message">Your Message *</label>
                  <textarea id="message" class="form-input" placeholder="Tell us how we can help you..." required></textarea>
                </div>
                <div class="mb-6 flex items-start gap-3">
                  <input type="checkbox" id="consent" required style="margin-top:4px;accent-color:#3a8a3a;width:16px;height:16px;" />
                  <label for="consent" style="color:#5a7a5a;font-size:.85rem;line-height:1.6;cursor:pointer;">
                    I agree to Phytoatomy's <a href="#" style="color:#3a8a3a;">Privacy Policy</a> and consent to being contacted regarding my enquiry.
                  </label>
                </div>
                <button type="submit" class="btn-primary" style="width:100%;justify-content:center;padding:15px;font-size:1rem;">
                  <i class="fas fa-paper-plane"></i> Send Message
                </button>
              </form>

              {/* Success Message */}
              <div id="successMsg" style="display:none;" class="card p-8 text-center mt-4">
                <div style="font-size:3rem;margin-bottom:14px;">✅</div>
                <h3 style="font-family:'Playfair Display',serif;color:#163616;margin-bottom:10px;">Message Sent!</h3>
                <p style="color:#5a7a5a;">Thank you for reaching out. Our team will get back to you within 4 hours. 🌿</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Info */}
              <div class="card p-7 mb-6" style="border-left:4px solid #3a8a3a;">
                <h3 style="font-family:'Playfair Display',serif;color:#163616;margin-bottom:16px;">Business Hours</h3>
                {[
                  { day:'Monday – Friday', time:'9:00 AM – 7:00 PM' },
                  { day:'Saturday', time:'9:00 AM – 5:00 PM' },
                  { day:'Sunday', time:'10:00 AM – 2:00 PM' },
                  { day:'Public Holidays', time:'Closed' },
                ].map(h => (
                  <div style="display:flex;justify-content:space-between;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8f5e5;">
                    <span style="color:#163616;font-size:.85rem;font-weight:500;">{h.day}</span>
                    <span style="color:#3a8a3a;font-size:.85rem;font-weight:600;">{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Book Consultation */}
              <div class="card p-7 mb-6" style="background:linear-gradient(135deg,#4caf50,#81c784);border:none;">
                <div style="font-size:2.5rem;margin-bottom:12px;">👨‍⚕️</div>
                <h3 style="font-family:'Playfair Display',serif;color:#fff;margin-bottom:10px;">Book a Consultation</h3>
                <p style="color:rgba(255,255,255,.8);font-size:.88rem;line-height:1.7;margin-bottom:18px;">Talk directly with a certified Ayurvedic doctor. Online and in-person slots available.</p>
                <a href="/services" class="btn-saffron" style="width:100%;justify-content:center;">Book Now</a>
              </div>

              {/* Social */}
              <div class="card p-7">
                <h3 style="font-family:'Playfair Display',serif;color:#163616;margin-bottom:16px;">Follow Our Journey</h3>
                {[
                  { icon:'fab fa-instagram', name:'Instagram', handle:'@phytoatomy', color:'#e1306c' },
                  { icon:'fab fa-facebook-f', name:'Facebook', handle:'/phytoatomy', color:'#1877f2' },
                  { icon:'fab fa-youtube', name:'YouTube', handle:'Phytoatomy Wellness', color:'#ff0000' },
                  { icon:'fab fa-twitter', name:'Twitter / X', handle:'@phytoatomy', color:'#1da1f2' },
                ].map(social => (
                  <a href="#" style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e8f5e5;text-decoration:none;" class="hover:opacity-80 transition-opacity">
                    <div style={`width:38px;height:38px;background:${social.color}18;border-radius:10px;display:flex;align-items:center;justify-content:center;color:${social.color};`}>
                      <i class={social.icon}></i>
                    </div>
                    <div>
                      <div style="font-weight:600;color:#163616;font-size:.88rem;">{social.name}</div>
                      <div style="color:#9ca3af;font-size:.78rem;">{social.handle}</div>
                    </div>
                    <i class="fas fa-external-link-alt" style="color:#9ca3af;font-size:.7rem;margin-left:auto;"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style="height:300px;background:linear-gradient(135deg,#e8f5e5,#cce9c6);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><rect fill=%22none%22 width=%2260%22 height=%2260%22/><path d=%22M30 5 Q50 5 50 25 Q50 45 30 55 Q10 45 10 25 Q10 5 30 5Z%22 fill=%22%233a8a3a%22 opacity=%220.04%22/></svg>');background-size:60px;"></div>
        <div style="text-align:center;z-index:1;">
          <div style="font-size:3rem;margin-bottom:12px;">🗺️</div>
          <h3 style="font-family:'Playfair Display',serif;color:#163616;font-size:1.4rem;margin-bottom:6px;">Find Our Wellness Centre</h3>
          <p style="color:#5a7a5a;">123 Herbal Lane, Wellness Park, Nature City – 400001</p>
          <a href="#" style="display:inline-flex;align-items:center;gap:8px;background:#3a8a3a;color:#fff;padding:10px 24px;border-radius:25px;text-decoration:none;font-weight:600;font-size:.88rem;margin-top:14px;">
            <i class="fas fa-directions"></i> Get Directions
          </a>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        function submitContact(e) {
          e.preventDefault();
          document.getElementById('contactForm').style.display = 'none';
          document.getElementById('successMsg').style.display = 'block';
        }
      ` }}></script>
    </div>,
    { title: 'Contact Us – Phytoatomy' }
  )
}
