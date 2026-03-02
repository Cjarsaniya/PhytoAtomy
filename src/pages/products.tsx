import type { Context } from 'hono'

const products = [
  { id:1, emoji:'✨', name:'Skin Radiance Serum', cat:'Skin Care', price:'₹899', oldPrice:'₹1199', badge:'Bestseller', rating:5, reviews:312, desc:'Kumkumadi & Saffron enriched anti-aging serum for glowing, even-toned skin.', tags:['Anti-Aging','Brightening'] },
  { id:2, emoji:'💪', name:'Ashwagandha Gold Capsules', cat:'Supplements', price:'₹649', oldPrice:'₹899', badge:'New', rating:5, reviews:187, desc:'KSM-66 Ashwagandha root extract for energy, vitality and stress management.', tags:['Adaptogen','Energy'] },
  { id:3, emoji:'🌸', name:'Bhringraj Hair Oil', cat:'Hair Care', price:'₹549', oldPrice:'₹749', badge:'Popular', rating:4, reviews:254, desc:'Traditional hair growth oil with Bhringraj, Amla and Brahmi for thick lustrous hair.', tags:['Hair Growth','Nourishing'] },
  { id:4, emoji:'🫀', name:'Heart Guard Tablets', cat:'Cardiac Health', price:'₹799', oldPrice:'₹999', badge:'Trending', rating:5, reviews:143, desc:'Arjuna and Garlic combination for healthy cholesterol and cardiovascular support.', tags:['Heart Health','Cholesterol'] },
  { id:5, emoji:'🧘', name:'Stress Shield Drops', cat:'Mental Wellness', price:'₹699', oldPrice:'₹949', badge:'Top Rated', rating:5, reviews:208, desc:'Brahmi, Jatamansi and Shankhpushpi liquid extract for calm focus and mental clarity.', tags:['Stress Relief','Focus'] },
  { id:6, emoji:'🌿', name:'Triphala Churna', cat:'Digestion', price:'₹299', oldPrice:'₹449', badge:'Classic', rating:4, reviews:421, desc:'The classic tridoshic formulation for gentle daily detox and healthy digestion.', tags:['Detox','Digestion'] },
  { id:7, emoji:'🦷', name:'Neem Clove Toothpowder', cat:'Oral Care', price:'₹199', oldPrice:'₹299', badge:'Natural', rating:5, reviews:389, desc:'Antibacterial neem and pain-relieving clove for sparkling white teeth naturally.', tags:['Whitening','Antibacterial'] },
  { id:8, emoji:'😴', name:'Sleep & Calm Tea', cat:'Sleep Care', price:'₹449', oldPrice:'₹599', badge:'Herbal', rating:4, reviews:175, desc:'Chamomile, Valerian and Ashwagandha blend for deep, restorative, natural sleep.', tags:['Deep Sleep','Calming'] },
  { id:9, emoji:'🌺', name:'Rose & Sandalwood Face Pack', cat:'Skin Care', price:'₹349', oldPrice:'₹499', badge:'New', rating:5, reviews:96, desc:'Weekly detox face mask with rose petal powder and Chandan for soft, supple skin.', tags:['Detox','Anti-Tan'] },
  { id:10, emoji:'🌾', name:'Shatavari Granules', cat:'Women\'s Health', price:'₹599', oldPrice:'₹799', badge:'Popular', rating:5, reviews:162, desc:'Pure Shatavari for hormonal balance, reproductive health and vitality in women.', tags:['Hormonal Balance','Women'] },
  { id:11, emoji:'🫁', name:'Tulsi & Ginger Syrup', cat:'Respiratory', price:'₹249', oldPrice:'₹349', badge:'Immunity', rating:4, reviews:298, desc:'Time-tested Tulsi and Ginger blend for respiratory health and strong immunity.', tags:['Immunity','Cough & Cold'] },
  { id:12, emoji:'🦴', name:'Boswellia Joint Capsules', cat:'Joint Health', price:'₹749', oldPrice:'₹999', badge:'Relief', rating:5, reviews:134, desc:'Shallaki (Boswellia) and Guggulu for inflammation reduction and joint flexibility.', tags:['Joint Pain','Anti-Inflammatory'] },
]

const categories = ['All','Skin Care','Hair Care','Supplements','Digestion','Mental Wellness','Oral Care','Respiratory','Women\'s Health','Joint Health','Cardiac Health','Sleep Care']

export const productsPage = (c: Context) => {
  return c.render(
    <div>
      {/* Banner */}
      <div class="page-banner">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div style="font-size:3rem;margin-bottom:12px;">🛍️</div>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:12px;">Our Products</h1>
          <p style="color:rgba(255,255,255,.8);font-size:1.05rem;max-width:540px;margin:0 auto;">Pure Ayurvedic formulations for every wellness need — backed by nature, validated by science.</p>
          <div class="breadcrumb">
            <a href="/">Home</a>
            <i class="fas fa-chevron-right" style="font-size:.7rem;"></i>
            <span>Products</span>
          </div>
        </div>
      </div>

      {/* USP Bar */}
      <div style="background:#fff;border-bottom:1px solid #e8f5e5;padding:14px 0;">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-wrap justify-center gap-8">
            {[
              { icon:'🚚', text:'Free Shipping above ₹499' },
              { icon:'🔄', text:'Easy 30-Day Returns' },
              { icon:'🌿', text:'100% Natural Ingredients' },
              { icon:'🔒', text:'Secure & Safe Payment' },
            ].map(u => (
              <div class="flex items-center gap-2">
                <span style="font-size:1.2rem;">{u.icon}</span>
                <span style="font-size:.85rem;font-weight:500;color:#2e6e2e;">{u.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-wrap gap-4 mb-10 justify-center">
            {categories.map((cat,i) => (
              <button
                class={`category-pill px-5 py-2 rounded-full font-medium text-sm border transition-all cursor-pointer ${i===0 ? 'active' : 'border-green-200 text-green-700 bg-green-50'}`}
                onclick={`filterProducts('${cat}')`}
                data-cat={cat}
                style="font-family:'Poppins',sans-serif;"
              >
                {cat}
              </button>
            ))}
          </div>

          <div id="productsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <div class="card product-card relative" data-category={p.cat}>
                <div class="product-badge">{p.badge}</div>
                <div class="product-img" style="position:relative;">
                  <div style="text-align:center;">
                    <div style="font-size:4.5rem;margin-bottom:8px;">{p.emoji}</div>
                    <div style="font-size:.75rem;color:#5a7a5a;font-weight:500;">{p.cat}</div>
                  </div>
                </div>
                <div style="padding:18px;">
                  <div class="flex flex-wrap gap-1 mb-2">
                    {p.tags.map(tag => <span class="tag" style="font-size:.7rem;padding:2px 8px;">{tag}</span>)}
                  </div>
                  <h4 style="font-family:'Playfair Display',serif;font-size:1rem;color:#163616;margin-bottom:6px;line-height:1.35;">{p.name}</h4>
                  <p style="color:#5a7a5a;font-size:.8rem;line-height:1.6;margin-bottom:10px;">{p.desc}</p>
                  <div class="flex items-center gap-1 mb-3">
                    {Array.from({length:5}).map((_,i) => <i class="fas fa-star star" style={i<p.rating?'color:#ffa500':'color:#ddd'}></i>)}
                    <span style="color:#9ca3af;font-size:.72rem;margin-left:4px;">({p.reviews})</span>
                  </div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="price-tag">{p.price}</span>
                    <span class="old-price">{p.oldPrice}</span>
                    <span style="color:#16a34a;font-size:.75rem;font-weight:600;background:#dcfce7;padding:2px 8px;border-radius:10px;">
                      {Math.round((1 - parseInt(p.price.replace(/[₹,]/g,'')) / parseInt(p.oldPrice.replace(/[₹,]/g,''))) * 100)}% OFF
                    </span>
                  </div>
                  <div class="flex gap-2">
                    <button class="add-cart-btn" onclick={`addToCart('${p.name}', '${p.price}')`} style="flex:1;">
                      <i class="fas fa-shopping-cart" style="margin-right:6px;"></i> Add to Cart
                    </button>
                    <button onclick={`wishlist('${p.name}')`} style="width:42px;height:42px;border:2px solid #e8f5e5;border-radius:8px;background:#fff;cursor:pointer;font-size:1rem;transition:all .3s;display:flex;align-items:center;justify-content:center;" title="Wishlist">❤️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Natural */}
      <section class="py-16 section-bg-alt">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <div class="section-tag">Quality Promise</div>
            <h2 class="section-title mt-2">From Farm to Formulation</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
            {[
              { step:'01', title:'Ethical Sourcing', icon:'🌱', desc:'Wild-crafted & organic herbs from certified farms' },
              { step:'02', title:'Traditional Extraction', icon:'⚗️', desc:'Classical Ayurvedic methods preserving potency' },
              { step:'03', title:'Lab Testing', icon:'🧪', desc:'3rd-party testing for purity and potency' },
              { step:'04', title:'GMP Manufacturing', icon:'🏭', desc:'Sterile production in certified facility' },
              { step:'05', title:'Quality Packaging', icon:'📦', desc:'Eco-friendly, tamper-proof packaging' },
            ].map((step, i) => (
              <div style="display:flex;align-items:center;flex:1;">
                <div class="card p-5 text-center flex-1">
                  <div style="font-size:2rem;margin-bottom:8px;">{step.icon}</div>
                  <div style="background:linear-gradient(135deg,#3a8a3a,#ffa500);color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;margin:0 auto 8px;">{step.step}</div>
                  <div style="font-weight:600;color:#163616;font-size:.85rem;margin-bottom:5px;">{step.title}</div>
                  <div style="color:#5a7a5a;font-size:.75rem;line-height:1.55;">{step.desc}</div>
                </div>
                {i < 4 && <div style="width:24px;height:2px;background:linear-gradient(90deg,#3a8a3a,#ffa500);flex-shrink:0;"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Notification & Filter Script */}
      <div id="cartNotification" style="display:none;position:fixed;bottom:90px;right:28px;background:#163616;color:#fff;padding:14px 20px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.3);font-size:.9rem;z-index:998;max-width:280px;" class="notification">
        <i class="fas fa-check-circle" style="color:#4ade80;margin-right:8px;"></i>
        <span id="cartMsg">Item added to cart!</span>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        function filterProducts(cat) {
          // Update active pill
          document.querySelectorAll('.category-pill').forEach(p => {
            p.classList.remove('active');
            if (p.dataset.cat === cat) p.classList.add('active');
          });
          // Filter cards
          document.querySelectorAll('[data-category]').forEach(card => {
            if (cat === 'All' || card.dataset.category === cat) {
              card.parentElement.style.display = '';
            } else {
              card.parentElement.style.display = 'none';
            }
          });
        }

        function addToCart(name, price) {
          const notif = document.getElementById('cartNotification');
          document.getElementById('cartMsg').textContent = name + ' added to cart! ' + price;
          notif.style.display = 'block';
          setTimeout(() => { notif.style.display = 'none'; }, 3000);
        }

        function wishlist(name) {
          alert('❤️ ' + name + ' added to your wishlist!');
        }
      ` }}></script>
    </div>,
    { title: 'Products – Phytoatomy' }
  )
}
