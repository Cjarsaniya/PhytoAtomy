import type { Context } from 'hono'

const posts = [
  {
    id:1, emoji:'🌿', cat:'Ayurveda Basics', title:'The Three Doshas: Understanding Your Unique Body Constitution',
    date:'Feb 18, 2025', author:'Dr. Arjun Verma', read:'5 min read',
    excerpt:'Discover how knowing your Prakriti (natural constitution) can transform your approach to health, diet, and lifestyle choices.',
    tags:['Doshas','Prakriti','Ayurveda 101'],
    content:'Ayurveda recognizes three fundamental biological energies or doshas — Vata, Pitta and Kapha — that govern our physical and mental processes. Understanding your unique combination of these doshas is the foundation of personalised Ayurvedic wellness...'
  },
  {
    id:2, emoji:'✨', cat:'Skin Care', title:'10 Ayurvedic Herbs for Glowing Skin You Should Know About',
    date:'Feb 10, 2025', author:'Dr. Meera Nair', read:'7 min read',
    excerpt:'From Kumkumadi to Manjistha — explore the powerful herbs that have kept Indian skin radiant for centuries.',
    tags:['Skincare','Herbs','Natural Beauty'],
    content:'The ancient texts of Ayurveda describe dozens of herbs with remarkable skin-enhancing properties. Modern research is now confirming what Ayurvedic practitioners have known for millennia — that nature holds the keys to beautiful, healthy skin...'
  },
  {
    id:3, emoji:'🧘', cat:'Mental Wellness', title:"Adaptogenic Herbs: Nature's Answer to Modern Stress",
    date:'Jan 28, 2025', author:'Dr. Sunita Bhatt', read:'6 min read',
    excerpt:'Ashwagandha, Brahmi, Shankhpushpi — learn how adaptogens help your body and mind thrive under pressure.',
    tags:['Adaptogens','Stress','Ashwagandha'],
    content:'In our fast-paced world, stress has become an epidemic. Adaptogens are a unique class of herbs that help the body adapt to physical and mental stressors while normalizing physiological functions...'
  },
  {
    id:4, emoji:'🌾', cat:'Digestion', title:'Triphala: The Ancient Elixir for Gut Health & Detox',
    date:'Jan 15, 2025', author:'Dr. Arjun Verma', read:'8 min read',
    excerpt:'One of Ayurveda\'s most celebrated formulations — a tri-fruit combination that supports every aspect of digestive wellness.',
    tags:['Triphala','Gut Health','Detox'],
    content:'Triphala — combining Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula) — is often called the cornerstone of Ayurvedic medicine...'
  },
  {
    id:5, emoji:'💤', cat:'Sleep & Wellness', title:'Ayurvedic Secrets for Deep, Restorative Sleep',
    date:'Jan 5, 2025', author:'Dr. Sunita Bhatt', read:'6 min read',
    excerpt:'Ancient wisdom meets modern sleep science — Ayurvedic herbs, routines, and lifestyle tips for quality rest.',
    tags:['Sleep','Insomnia','Herbs'],
    content:'Nidra (sleep) is one of the three pillars of life in Ayurveda, alongside Ahara (food) and Brahmacharya (regulated lifestyle). Poor sleep disrupts all three doshas and undermines every aspect of health...'
  },
  {
    id:6, emoji:'💪', cat:'Immunity', title:'Building Your Immune Defense the Ayurvedic Way',
    date:'Dec 22, 2024', author:'Dr. Meera Nair', read:'5 min read',
    excerpt:"Ojas — Ayurveda's concept of vital immunity — and how to build it naturally with herbs, food, and lifestyle.",
    tags:['Immunity','Ojas','Rasayana'],
    content:"In Ayurveda, true immunity is described as Ojas — the refined essence of all seven body tissues (Dhatus). When Ojas is abundant, the body radiates vitality and resists disease. Here's how to build yours naturally..."
  },
]

export const blogPage = (c: Context) => {
  return c.render(
    <div>
      {/* Banner */}
      <div class="page-banner">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div style="font-size:3rem;margin-bottom:12px;">📖</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:12px;">Health & Wellness Blog</h1>
          <p style="color:rgba(255,255,255,.8);font-size:1.05rem;max-width:540px;margin:0 auto;">Ancient wisdom, modern research, and practical tips for living well.</p>
          <div class="breadcrumb">
            <a href="/">Home</a>
            <i class="fas fa-chevron-right" style="font-size:.7rem;"></i>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="section-tag mb-3">Featured Article</div>
          <div class="card overflow-hidden" style="border:none;box-shadow:0 4px 30px rgba(58,138,58,.12);">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div style="background:linear-gradient(135deg,#163616 0%,#3a8a3a 100%);padding:60px 40px;display:flex;align-items:center;justify-content:center;min-height:300px;">
                <div style="text-align:center;">
                  <div style="font-size:6rem;margin-bottom:16px;">{posts[0].emoji}</div>
                  <span style="background:rgba(255,165,0,.25);color:#ffd166;padding:5px 15px;border-radius:20px;font-size:.8rem;font-weight:600;">{posts[0].cat}</span>
                </div>
              </div>
              <div style="padding:48px 40px;display:flex;flex-direction:column;justify-content:center;">
                <div class="flex gap-3 mb-4">
                  <span class="blog-category">{posts[0].cat}</span>
                  <span style="color:#9ca3af;font-size:.8rem;">{posts[0].read}</span>
                </div>
                <h2 style="font-family:'Playfair Display',serif;font-size:1.7rem;color:#163616;margin-bottom:14px;line-height:1.35;">{posts[0].title}</h2>
                <p style="color:#5a7a5a;line-height:1.8;margin-bottom:20px;font-size:.95rem;">{posts[0].excerpt}</p>
                <div class="flex items-center gap-4 mb-6">
                  <div style="width:40px;height:40px;background:linear-gradient(135deg,#3a8a3a,#245724);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">{posts[0].author.charAt(3)}</div>
                  <div>
                    <div style="font-weight:600;color:#163616;font-size:.88rem;">{posts[0].author}</div>
                    <div style="color:#9ca3af;font-size:.78rem;">{posts[0].date}</div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  {posts[0].tags.map(tag => <span class="tag tag-saffron">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section class="pb-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-wrap gap-3 mb-10 justify-center">
            {['All','Ayurveda Basics','Skin Care','Mental Wellness','Digestion','Sleep & Wellness','Immunity'].map((cat,i) => (
              <button
                class={`category-pill px-5 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${i===0?'active':'border-green-200 text-green-700 bg-green-50'}`}
                data-cat={cat}
                onclick={`filterPosts('${cat}')`}
                style="font-family:'Poppins',sans-serif;"
              >
                {cat}
              </button>
            ))}
          </div>

          <div id="blogGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map(post => (
              <div class="blog-card" data-category={post.cat}>
                <div class="blog-img" style="background:linear-gradient(135deg,#163616,#3a8a3a);">
                  <div style="text-align:center;padding:20px;">
                    <div style="font-size:4rem;">{post.emoji}</div>
                  </div>
                </div>
                <div style="padding:22px;">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="blog-category">{post.cat}</span>
                    <span style="color:#9ca3af;font-size:.75rem;"><i class="fas fa-clock" style="margin-right:3px;"></i>{post.read}</span>
                  </div>
                  <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;color:#163616;margin-bottom:8px;line-height:1.4;">{post.title}</h3>
                  <p style="color:#5a7a5a;font-size:.83rem;line-height:1.7;margin-bottom:14px;">{post.excerpt}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => <span class="tag" style="font-size:.7rem;">{tag}</span>)}
                  </div>
                  <div style="border-top:1px solid #e8f5e5;padding-top:14px;display:flex;justify-content:space-between;align-items:center;">
                    <div class="flex items-center gap-2">
                      <div style="width:30px;height:30px;background:linear-gradient(135deg,#3a8a3a,#245724);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.75rem;font-weight:700;">{post.author.charAt(3)}</div>
                      <div>
                        <div style="font-size:.75rem;font-weight:600;color:#163616;">{post.author}</div>
                        <div style="font-size:.7rem;color:#9ca3af;">{post.date}</div>
                      </div>
                    </div>
                    <a href="#" style="color:#3a8a3a;font-weight:600;font-size:.82rem;text-decoration:none;white-space:nowrap;">Read →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section class="py-16 section-bg-alt">
        <div class="max-w-2xl mx-auto px-4 text-center">
          <div style="font-size:2.5rem;margin-bottom:12px;">📬</div>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.9rem;color:#163616;margin-bottom:10px;">Never Miss a Health Tip</h2>
          <p style="color:#5a7a5a;margin-bottom:24px;">Subscribe to our newsletter for weekly Ayurvedic insights, tips, and product updates.</p>
          <form onsubmit="subscribeNewsletter(event);" style="display:flex;gap:10px;max-width:420px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
            <input id="blogEmail" type="email" placeholder="your@email.com" class="form-input" style="flex:1;min-width:220px;" required />
            <button type="submit" class="btn-primary" style="white-space:nowrap;">Subscribe 🌿</button>
          </form>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        function filterPosts(cat) {
          document.querySelectorAll('.category-pill').forEach(p => {
            p.classList.remove('active');
            if (p.dataset.cat === cat) p.classList.add('active');
          });
          document.querySelectorAll('[data-category]').forEach(card => {
            if (cat === 'All' || card.dataset.category === cat) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        }

        function subscribeNewsletter(e) {
          e.preventDefault();
          const email = document.getElementById('blogEmail').value;
          if (email) {
            alert('🌿 Thank you for subscribing! Welcome to the Phytoatomy wellness community!');
            document.getElementById('blogEmail').value = '';
          }
        }
      ` }}></script>
    </div>,
    { title: 'Blog – Phytoatomy Health Insights' }
  )
}
