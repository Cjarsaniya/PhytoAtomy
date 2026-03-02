import type { Context } from 'hono'

export const homePage = (c: Context) => {
  return c.render(
    <div>
      {/* ── Hero ── */}
      <section class="hero-section min-h-screen flex items-center relative">
        {/* Decorative leaves */}
        <div class="floating-leaf" style="top:10%;left:5%;font-size:5rem;">🍃</div>
        <div class="floating-leaf" style="top:20%;right:8%;font-size:4rem;animation-delay:2s;">🌿</div>
        <div class="floating-leaf" style="bottom:15%;left:10%;font-size:3rem;animation-delay:4s;">🌱</div>
        <div class="floating-leaf" style="bottom:25%;right:5%;font-size:6rem;animation-delay:1s;">🍃</div>

        <div class="max-w-7xl mx-auto px-4 py-20 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div class="fade-in-up">
              <div class="hero-badge mb-6">✨ AYUSH Certified · 100% Natural</div>
              <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,5vw,4rem);color:#fff;line-height:1.15;margin-bottom:20px;">
                Ancient Wisdom <br/><span style="color:#ffa500;">Meets</span> Modern<br/>Wellness
              </h1>
              <p style="color:rgba(255,255,255,.8);font-size:1.1rem;line-height:1.8;margin-bottom:32px;max-width:500px;">
                Phytoatomy brings you the purest Ayurvedic formulations, crafted from hand-picked herbs and time-honored recipes. Heal naturally, live vibrantly.
              </p>
              <div class="flex flex-wrap gap-4 mb-10">
                <a href="/products" class="hero-btn-primary">
                  <i class="fas fa-leaf"></i> Explore Products
                </a>
                <a href="/about" class="hero-btn-secondary">
                  <i class="fas fa-play-circle"></i> Our Story
                </a>
              </div>
              {/* Trust Badges */}
              <div class="flex flex-wrap gap-6">
                {[
                  { icon:'fa-certificate', label:'GMP Certified' },
                  { icon:'fa-flask', label:'Lab Tested' },
                  { icon:'fa-leaf', label:'No Chemicals' },
                  { icon:'fa-shield-alt', label:'AYUSH Approved' },
                ].map(b => (
                  <div class="flex items-center gap-2">
                    <div style="width:32px;height:32px;background:rgba(255,165,0,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                      <i class={`fas ${b.icon}`} style="color:#ffa500;font-size:.85rem;"></i>
                    </div>
                    <span style="color:rgba(255,255,255,.8);font-size:.85rem;font-weight:500;">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Visual */}
            <div class="fade-in flex flex-col items-center gap-6" style="animation-delay:.3s;">
              {/* Main visual card */}
              <div style="background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);border-radius:24px;padding:40px;text-align:center;max-width:380px;width:100%;">
                <div style="font-size:5rem;margin-bottom:16px;">🌿</div>
                <h3 style="font-family:'Playfair Display',serif;color:#fff;font-size:1.5rem;margin-bottom:10px;">Nature's Pharmacy</h3>
                <p style="color:rgba(255,255,255,.75);font-size:.95rem;line-height:1.7;">200+ hand-picked herbs from the pristine forests of India, formulated with ancient wisdom.</p>
                <div style="display:flex;justify-content:space-around;margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,.15);">
                  <div style="text-align:center;"><div style="color:#ffa500;font-size:1.6rem;font-weight:700;font-family:'Playfair Display',serif;">200+</div><div style="color:rgba(255,255,255,.6);font-size:.8rem;">Herbs</div></div>
                  <div style="text-align:center;"><div style="color:#ffa500;font-size:1.6rem;font-weight:700;font-family:'Playfair Display',serif;">50+</div><div style="color:rgba(255,255,255,.6);font-size:.8rem;">Products</div></div>
                  <div style="text-align:center;"><div style="color:#ffa500;font-size:1.6rem;font-weight:700;font-family:'Playfair Display',serif;">10K+</div><div style="color:rgba(255,255,255,.6);font-size:.8rem;">Customers</div></div>
                </div>
              </div>

              {/* Product mini cards */}
              <div class="grid grid-cols-2 gap-4" style="max-width:380px;width:100%;">
                {[
                  { icon:'🧴', name:'Skin Radiance', tag:'Bestseller' },
                  { icon:'💊', name:'Immunity Boost', tag:'New' },
                  { icon:'🌸', name:'Hair Vitality', tag:'Popular' },
                  { icon:'🫁', name:'Stress Relief', tag:'Trending' },
                ].map(p => (
                  <div style="background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);border-radius:14px;padding:16px;text-align:center;">
                    <div style="font-size:2rem;margin-bottom:6px;">{p.icon}</div>
                    <div style="color:#fff;font-size:.8rem;font-weight:600;">{p.name}</div>
                    <div style="background:rgba(255,165,0,.25);color:#ffd166;font-size:.65rem;padding:2px 8px;border-radius:10px;display:inline-block;margin-top:4px;">{p.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style="position:absolute;bottom:0;left:0;right:0;">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"><path fill="#fefcf7" fill-opacity="1" d="M0,40L60,35C120,30,240,20,360,22C480,24,600,38,720,40C840,42,960,32,1080,28C1200,24,1320,28,1380,30L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"></path></svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style="background:#fff;border-bottom:1px solid #e8f5e5;">
        <div class="max-w-7xl mx-auto px-4 py-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-green-100">
            {[
              { num:'10,000+', label:'Happy Customers', icon:'😊' },
              { num:'50+',     label:'Herbal Products', icon:'🌿' },
              { num:'15+',     label:'Years of Research', icon:'🔬' },
              { num:'98%',     label:'Satisfaction Rate', icon:'⭐' },
            ].map(s => (
              <div class="counter-item">
                <div style="font-size:1.8rem;margin-bottom:4px;">{s.icon}</div>
                <div class="counter-num">{s.num}</div>
                <div class="counter-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Phytoatomy ── */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Why Choose Us</div>
            <h2 class="section-title mt-2">The Phytoatomy Difference</h2>
            <div class="section-divider mx-auto"></div>
            <p class="text-gray-600 max-w-2xl mx-auto mt-4">We don't just sell products — we curate wellness experiences rooted in the timeless science of Ayurveda.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon:'🌿', bg:'feature-icon-green', title:'100% Pure & Natural', desc:'Every ingredient is ethically sourced from certified organic farms. Zero synthetic chemicals, zero compromises.', tag:'Certified Organic' },
              { icon:'🔬', bg:'feature-icon-saffron', title:'Science-Backed Formulas', desc:'Our team of Ayurvedic doctors and modern scientists co-create formulations validated by clinical research.', tag:'Research-Driven' },
              { icon:'👨‍⚕️', bg:'feature-icon-cream', title:'Expert Guidance', desc:'Get personalized wellness consultations from certified Ayurvedic practitioners — online or in-person.', tag:'Free Consultation' },
              { icon:'🏭', bg:'feature-icon-green', title:'GMP Manufacturing', desc:'Produced in our state-of-the-art GMP & ISO 9001 certified facility with rigorous quality control at every step.', tag:'ISO Certified' },
              { icon:'📦', bg:'feature-icon-saffron', title:'Eco-Friendly Packaging', desc:'Our packaging is 100% biodegradable and recyclable — because we care for the planet as much as your health.', tag:'Sustainable' },
              { icon:'💚', bg:'feature-icon-cream', title:'Holistic Wellness', desc:'From skin & hair care to immunity and stress relief — our complete range supports every dimension of well-being.', tag:'Complete Care' },
            ].map(f => (
              <div class="card p-8 text-center">
                <div class={`feature-icon ${f.bg}`}>{f.icon}</div>
                <div class="tag mb-3 inline-block">{f.tag}</div>
                <h3 style="font-family:'Playfair Display',serif;font-size:1.15rem;color:#163616;margin-bottom:10px;">{f.title}</h3>
                <p style="color:#5a7a5a;font-size:.9rem;line-height:1.75;">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Our Products</div>
            <h2 class="section-title mt-2">Bestselling Formulations</h2>
            <div class="section-divider mx-auto"></div>
            <p class="text-gray-600 max-w-xl mx-auto mt-4">Explore our most-loved herbal products, trusted by thousands for genuine results.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji:'✨', name:'Skin Radiance Serum', cat:'Skin Care', price:'₹899', oldPrice:'₹1199', badge:'Bestseller', rating:5, reviews:312 },
              { emoji:'💪', name:'Ashwagandha Gold', cat:'Supplements', price:'₹649', oldPrice:'₹899', badge:'New', rating:5, reviews:187 },
              { emoji:'🌸', name:'Bhringraj Hair Oil', cat:'Hair Care', price:'₹549', oldPrice:'₹749', badge:'Popular', rating:4, reviews:254 },
              { emoji:'🫀', name:'Heart Guard Tablets', cat:'Cardiac Health', price:'₹799', oldPrice:'₹999', badge:'Trending', rating:5, reviews:143 },
              { emoji:'🧘', name:'Stress Shield Drops', cat:'Mental Wellness', price:'₹699', oldPrice:'₹949', badge:'Top Rated', rating:5, reviews:208 },
              { emoji:'🌿', name:'Triphala Churna', cat:'Digestion', price:'₹299', oldPrice:'₹449', badge:'Classic', rating:4, reviews:421 },
              { emoji:'🦷', name:'Neem & Clove Toothpowder', cat:'Oral Care', price:'₹199', oldPrice:'₹299', badge:'Natural', rating:5, reviews:389 },
              { emoji:'😴', name:'Sleep & Calm Tea', cat:'Sleep Care', price:'₹449', oldPrice:'₹599', badge:'Herbal', rating:4, reviews:175 },
            ].map(p => (
              <div class="card product-card relative">
                <div class="product-badge">{p.badge}</div>
                <div class="product-img">
                  <div style="text-align:center;">
                    <div style="font-size:4rem;margin-bottom:8px;">{p.emoji}</div>
                    <div style="font-size:.75rem;color:#5a7a5a;font-weight:500;">{p.cat}</div>
                  </div>
                </div>
                <div style="padding:18px;">
                  <div style="font-size:.75rem;color:#3a8a3a;font-weight:600;margin-bottom:4px;">{p.cat}</div>
                  <h4 style="font-family:'Playfair Display',serif;font-size:1rem;color:#163616;margin-bottom:8px;line-height:1.3;">{p.name}</h4>
                  <div class="flex items-center gap-1 mb-3">
                    {Array.from({length:5}).map((_,i) => <i class={`fas fa-star star`} style={i<p.rating?'':'opacity:.3'}></i>)}
                    <span style="color:#9ca3af;font-size:.75rem;margin-left:4px;">({p.reviews})</span>
                  </div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="price-tag">{p.price}</span>
                    <span class="old-price">{p.oldPrice}</span>
                  </div>
                  <button class="add-cart-btn">
                    <i class="fas fa-shopping-cart" style="margin-right:6px;"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div class="text-center mt-12">
            <a href="/products" class="btn-primary">
              <i class="fas fa-th-large"></i> View All Products
            </a>
          </div>
        </div>
      </section>

      {/* ── Ayurveda Philosophy ── */}
      <section class="py-20" style="background:linear-gradient(135deg,#163616 0%,#245724 50%,#3a8a3a 100%);position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;right:0;font-size:20rem;opacity:.04;line-height:1;pointer-events:none;">🌿</div>
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div style="color:#ffa500;font-weight:600;font-size:.85rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">Our Philosophy</div>
              <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);color:#fff;margin-bottom:20px;line-height:1.2;">
                Healing Through<br/><span style="color:#ffa500;">Nature's Intelligence</span>
              </h2>
              <p style="color:rgba(255,255,255,.8);line-height:1.85;margin-bottom:24px;">
                Ayurveda — the "Science of Life" — views health as a dynamic balance of body, mind, and spirit. At Phytoatomy, we honour this ancient intelligence by creating formulations that work with your body's natural rhythms, not against them.
              </p>
              <div class="grid grid-cols-3 gap-4 mb-8">
                {[
                  { dosha:'Vata', element:'Air & Space', color:'#a78bfa', desc:'Movement & Creativity' },
                  { dosha:'Pitta', element:'Fire & Water', color:'#ffa500', desc:'Transformation & Drive' },
                  { dosha:'Kapha', element:'Earth & Water', color:'#4ade80', desc:'Stability & Strength' },
                ].map(d => (
                  <div style={`background:rgba(255,255,255,.08);border:1px solid ${d.color}30;border-radius:14px;padding:16px;text-align:center;`}>
                    <div style={`color:${d.color};font-weight:700;font-family:'Playfair Display',serif;font-size:1.1rem;`}>{d.dosha}</div>
                    <div style="color:rgba(255,255,255,.6);font-size:.75rem;margin-top:4px;">{d.element}</div>
                    <div style="color:rgba(255,255,255,.5);font-size:.7rem;margin-top:4px;">{d.desc}</div>
                  </div>
                ))}
              </div>
              <a href="/about" class="btn-saffron">
                <i class="fas fa-book-open"></i> Learn Our Story
              </a>
            </div>
            <div class="grid grid-cols-2 gap-4">
              {[
                { icon:'🌱', title:'Sattvic Sourcing', desc:'We source only sattvic (pure) herbs from pristine, unpolluted environments.' },
                { icon:'⚗️', title:'Traditional Processes', desc:'Classical Ayurvedic extraction methods preserve the full potency of each herb.' },
                { icon:'🧪', title:'Third-Party Testing', desc:'Every batch is independently tested for purity, potency, and contaminants.' },
                { icon:'♻️', title:'Zero Waste Policy', desc:'Our manufacturing is guided by sustainability principles at every stage.' },
              ].map(item => (
                <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:22px;">
                  <div style="font-size:2rem;margin-bottom:10px;">{item.icon}</div>
                  <h4 style="color:#fff;font-weight:600;margin-bottom:6px;font-size:.95rem;">{item.title}</h4>
                  <p style="color:rgba(255,255,255,.6);font-size:.82rem;line-height:1.65;">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Browse by Category</div>
            <h2 class="section-title mt-2">Wellness for Every Need</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon:'✨', label:'Skin Care', count:'12 products', color:'#a78bfa' },
              { icon:'💇', label:'Hair Care', count:'8 products', color:'#3a8a3a' },
              { icon:'💊', label:'Supplements', count:'15 products', color:'#ffa500' },
              { icon:'🫁', label:'Respiratory', count:'6 products', color:'#60a5fa' },
              { icon:'🧠', label:'Mental Wellness', count:'9 products', color:'#f472b6' },
              { icon:'🦷', label:'Oral Care', count:'5 products', color:'#4ade80' },
            ].map(cat => (
              <a href="/products" style="text-decoration:none;">
                <div class="card p-6 text-center cursor-pointer" style="border-top:3px solid transparent;" onmouseover={`this.style.borderTopColor='${cat.color}'`} onmouseout="this.style.borderTopColor='transparent'">
                  <div style={`width:56px;height:56px;background:${cat.color}18;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;margin:0 auto 12px;`}>{cat.icon}</div>
                  <div style="font-weight:600;color:#163616;font-size:.9rem;margin-bottom:4px;">{cat.label}</div>
                  <div style="color:#9dc99d;font-size:.75rem;">{cat.count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Testimonials</div>
            <h2 class="section-title mt-2">What Our Customers Say</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { name:'Priya Sharma', city:'Mumbai', text:'Phytoatomy\'s Ashwagandha Gold completely changed my energy levels. I feel like myself again after years of fatigue. Highly recommend!', rating:5, product:'Ashwagandha Gold', initial:'P' },
              { name:'Rajesh Kumar', city:'Delhi', text:'The Skin Radiance Serum is magical! My hyperpigmentation has reduced so much in just 6 weeks. Pure Ayurveda works!', rating:5, product:'Skin Radiance Serum', initial:'R' },
              { name:'Anita Patel', city:'Bangalore', text:'Finally found a natural solution for my hair fall. The Bhringraj Hair Oil has made my hair thicker and stronger. Love it!', rating:5, product:'Bhringraj Hair Oil', initial:'A' },
              { name:'Suresh Iyer', city:'Chennai', text:'Sleep & Calm Tea is my nightly ritual now. Deep, restful sleep without any grogginess. Pure herbal magic!', rating:5, product:'Sleep & Calm Tea', initial:'S' },
              { name:'Kavya Nair', city:'Kochi', text:'Triphala Churna has completely resolved my digestion issues. I feel so much lighter and healthier. Thank you Phytoatomy!', rating:5, product:'Triphala Churna', initial:'K' },
              { name:'Mohan Reddy', city:'Hyderabad', text:'The consultation service is brilliant. The doctor understood my concerns and recommended the perfect products for my constitution.', rating:5, product:'Wellness Consultation', initial:'M' },
            ].map(t => (
              <div class="testimonial-card">
                <div class="flex items-center gap-1 mb-4">
                  {Array.from({length:t.rating}).map(() => <i class="fas fa-star star"></i>)}
                </div>
                <p style="color:#2e4a2e;font-size:.92rem;line-height:1.8;margin-bottom:18px;font-style:italic;">"{t.text}"</p>
                <div style="border-top:1px solid #cce9c6;padding-top:14px;display:flex;align-items:center;justify-content:space-between;">
                  <div class="flex items-center gap-3">
                    <div class="testimonial-avatar">{t.initial}</div>
                    <div>
                      <div style="font-weight:600;color:#163616;font-size:.9rem;">{t.name}</div>
                      <div style="color:#5a7a5a;font-size:.78rem;">{t.city}</div>
                    </div>
                  </div>
                  <div class="tag" style="font-size:.72rem;">{t.product}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section class="py-20 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <div class="section-tag">Health Insights</div>
            <h2 class="section-title mt-2">Latest from Our Blog</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { emoji:'🌿', cat:'Ayurveda Basics', title:'The Three Doshas: Understanding Your Unique Body Constitution', date:'Feb 18, 2025', read:'5 min read', excerpt:'Discover how knowing your Prakriti (natural constitution) can transform your approach to health, diet, and lifestyle.' },
              { emoji:'✨', cat:'Skin Care', title:'10 Ayurvedic Herbs for Glowing Skin You Should Know About', date:'Feb 10, 2025', read:'7 min read', excerpt:'From Kumkumadi to Manjistha — explore the powerful herbs that have kept Indian skin radiant for centuries.' },
              { emoji:'🧘', cat:'Mental Wellness', title:'Adaptogenic Herbs: Nature\'s Answer to Modern Stress', date:'Jan 28, 2025', read:'6 min read', excerpt:'Ashwagandha, Brahmi, Shankhpushpi — learn how adaptogens help your body and mind thrive under pressure.' },
            ].map(post => (
              <div class="blog-card">
                <div class="blog-img">
                  <div style="text-align:center;">
                    <div style="font-size:4rem;">{post.emoji}</div>
                  </div>
                </div>
                <div style="padding:22px;">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="blog-category">{post.cat}</span>
                    <span style="color:#9ca3af;font-size:.75rem;">{post.read}</span>
                  </div>
                  <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;color:#163616;margin-bottom:10px;line-height:1.4;">{post.title}</h3>
                  <p style="color:#5a7a5a;font-size:.85rem;line-height:1.7;margin-bottom:16px;">{post.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span style="color:#9ca3af;font-size:.78rem;">{post.date}</span>
                    <a href="/blog" style="color:#3a8a3a;font-weight:600;font-size:.85rem;text-decoration:none;">Read More →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="text-center mt-10">
            <a href="/blog" class="btn-outline">
              <i class="fas fa-book"></i> View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section style="background:linear-gradient(135deg,#ffa500,#e08c00);padding:60px 0;">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <div style="font-size:2.5rem;margin-bottom:12px;">📧</div>
          <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#fff;margin-bottom:12px;">Get Wellness Wisdom in Your Inbox</h2>
          <p style="color:rgba(255,255,255,.85);margin-bottom:28px;">Subscribe for exclusive Ayurvedic tips, product launches, and special offers.</p>
          <form onsubmit="return false;" style="display:flex;gap:10px;max-width:460px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
            <input type="email" placeholder="Enter your email address" style="flex:1;min-width:250px;padding:14px 20px;border-radius:30px;border:none;font-family:'Poppins',sans-serif;font-size:.95rem;outline:none;" />
            <button type="submit" style="background:#163616;color:#fff;padding:14px 24px;border-radius:30px;border:none;font-weight:600;cursor:pointer;transition:all .3s;white-space:nowrap;" onmouseover="this.style.background='#245724'" onmouseout="this.style.background='#163616'">
              Subscribe 🌿
            </button>
          </form>
          <p style="color:rgba(255,255,255,.7);font-size:.8rem;margin-top:14px;">🔒 No spam ever. Unsubscribe anytime. Join 5,000+ wellness enthusiasts.</p>
        </div>
      </section>
    </div>,
    { title: 'Home – Phytoatomy | Ayurvedic Wellness' }
  )
}
