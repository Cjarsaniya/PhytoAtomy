import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | Phytoatomy` : 'Phytoatomy – Ancient Wisdom, Modern Wellness'}</title>
        <meta name="description" content="Phytoatomy - Premium Ayurvedic products rooted in ancient wisdom. Discover pure herbal formulations for holistic health and wellness." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  forest:  { 50:"#f2f9f2",100:"#e0f0e0",200:"#bfdfbf",300:"#8ec48e",400:"#5aa25a",500:"#3a8a3a",600:"#2e6e2e",700:"#245724",800:"#1d451d",900:"#163616" },
                  saffron: { 50:"#fffbf0",100:"#fff3d1",200:"#ffe4a0",300:"#ffd166",400:"#ffbb33",500:"#ffa500",600:"#e08c00",700:"#c07500",800:"#9a5e00",900:"#7a4a00" },
                  cream:   { 50:"#fefcf7",100:"#fdf6e8",200:"#faebd0",300:"#f5d9aa",400:"#eec37f",500:"#e5a84e",600:"#d08a25",700:"#aa6e1a",800:"#875613",900:"#6c430e" },
                  herb:    { 50:"#f6fbf4",100:"#e8f5e5",200:"#cce9c6",300:"#a3d69a",400:"#73bc69",500:"#4ea044",600:"#3b8133",700:"#2f6629",800:"#274f22",900:"#20401b" },
                },
                fontFamily: {
                  display: ["Playfair Display", "serif"],
                  body:    ["Poppins", "sans-serif"],
                },
              }
            }
          }
        ` }}></script>
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Poppins', sans-serif; background: #fefcf7; color: #1d2d1d; overflow-x: hidden; }
          h1,h2,h3,h4,.font-display { font-family: 'Playfair Display', serif; }

          /* ── Scrollbar ── */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #f1f1f1; }
          ::-webkit-scrollbar-thumb { background: #3a8a3a; border-radius: 3px; }

          /* ── Navbar ── */
          .navbar { background: rgba(22,53,22,0.97); backdrop-filter: blur(10px); position: sticky; top:0; z-index:1000; border-bottom: 2px solid #ffa500; }
          .nav-link { color: #d4edda; font-weight:500; transition: color .25s, background .25s; padding:6px 12px; border-radius:6px; }
          .nav-link:hover, .nav-link.active { color:#ffa500; background:rgba(255,165,0,0.1); }
          .nav-cta { background: linear-gradient(135deg,#ffa500,#e08c00); color:#fff!important; border-radius:25px; padding:8px 20px!important; font-weight:600!important; }
          .nav-cta:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(255,165,0,.45); background:linear-gradient(135deg,#ffbb33,#ffa500)!important; }

          /* ── Hero ── */
          .hero-section { background: linear-gradient(135deg, #163616 0%, #245724 35%, #3a8a3a 65%, #2e6e2e 85%, #d08a25 100%); position:relative; overflow:hidden; }
          .hero-section::before { content:''; position:absolute; inset:0; background:url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M40 0C18 0 0 18 0 40s18 40 40 40 40-18 40-40S62 0 40 0zm0 70C23.4 70 10 56.6 10 40S23.4 10 40 10s30 13.4 30 30-13.4 30-30 30z'/%3E%3C/g%3E%3C/svg%3E"); }
          .hero-badge { background:linear-gradient(135deg,#ffa500,#e08c00); color:#fff; border-radius:30px; padding:6px 18px; font-size:.8rem; font-weight:600; letter-spacing:1px; display:inline-block; }
          .hero-btn-primary { background:linear-gradient(135deg,#ffa500,#e08c00); color:#fff; padding:14px 32px; border-radius:30px; font-weight:600; font-size:1rem; border:none; cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:8px; }
          .hero-btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 30px rgba(255,165,0,.5); }
          .hero-btn-secondary { background:transparent; color:#fff; padding:14px 32px; border-radius:30px; font-weight:600; font-size:1rem; border:2px solid rgba(255,255,255,.5); cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:8px; }
          .hero-btn-secondary:hover { border-color:#ffa500; color:#ffa500; transform:translateY(-2px); }
          .floating-leaf { position:absolute; opacity:.07; animation:floatLeaf 8s ease-in-out infinite; pointer-events:none; }
          @keyframes floatLeaf { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(10deg)} }

          /* ── Section Styles ── */
          .section-tag { color:#3a8a3a; font-weight:600; font-size:.85rem; letter-spacing:2px; text-transform:uppercase; }
          .section-title { font-family:'Playfair Display',serif; font-size:clamp(1.8rem,4vw,3rem); color:#163616; line-height:1.2; }
          .section-divider { width:60px; height:4px; background:linear-gradient(90deg,#3a8a3a,#ffa500); border-radius:2px; margin:16px 0; }
          .section-bg-alt { background:linear-gradient(180deg,#f6fbf4 0%,#fefcf7 100%); }

          /* ── Cards ── */
          .card { background:#fff; border-radius:16px; box-shadow:0 2px 20px rgba(0,0,0,.07); transition:all .35s; border:1px solid #e8f5e5; overflow:hidden; }
          .card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(58,138,58,.18); border-color:#a3d69a; }
          .product-badge { position:absolute; top:12px; left:12px; background:linear-gradient(135deg,#ffa500,#e08c00); color:#fff; font-size:.7rem; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:.5px; }
          .product-img { width:100%; height:220px; object-fit:cover; background:linear-gradient(135deg,#e8f5e5,#cce9c6); display:flex; align-items:center; justify-content:center; }
          .price-tag { color:#3a8a3a; font-weight:700; font-size:1.2rem; }
          .old-price { color:#9ca3af; text-decoration:line-through; font-size:.9rem; }
          .add-cart-btn { background:linear-gradient(135deg,#3a8a3a,#245724); color:#fff; border:none; border-radius:8px; padding:10px 20px; font-weight:600; cursor:pointer; transition:all .3s; width:100%; }
          .add-cart-btn:hover { background:linear-gradient(135deg,#245724,#163616); transform:translateY(-1px); box-shadow:0 6px 20px rgba(36,87,36,.4); }

          /* ── Feature Icons ── */
          .feature-icon { width:70px; height:70px; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:1.8rem; margin:0 auto 16px; }
          .feature-icon-green { background:linear-gradient(135deg,#e8f5e5,#cce9c6); color:#3a8a3a; }
          .feature-icon-saffron { background:linear-gradient(135deg,#fff3d1,#ffe4a0); color:#e08c00; }
          .feature-icon-cream { background:linear-gradient(135deg,#fdf6e8,#faebd0); color:#d08a25; }

          /* ── Testimonials ── */
          .testimonial-card { background:linear-gradient(135deg,#f6fbf4,#e8f5e5); border:1px solid #cce9c6; border-radius:16px; padding:28px; }
          .star { color:#ffa500; }
          .testimonial-avatar { width:52px; height:52px; border-radius:50%; background:linear-gradient(135deg,#3a8a3a,#245724); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:1.2rem; }

          /* ── Buttons ── */
          .btn-primary { background:linear-gradient(135deg,#3a8a3a,#245724); color:#fff; padding:12px 28px; border-radius:30px; font-weight:600; border:none; cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
          .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(58,138,58,.4); background:linear-gradient(135deg,#245724,#163616); }
          .btn-outline { background:transparent; color:#3a8a3a; padding:12px 28px; border-radius:30px; font-weight:600; border:2px solid #3a8a3a; cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
          .btn-outline:hover { background:#3a8a3a; color:#fff; transform:translateY(-2px); }
          .btn-saffron { background:linear-gradient(135deg,#ffa500,#e08c00); color:#fff; padding:12px 28px; border-radius:30px; font-weight:600; border:none; cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
          .btn-saffron:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(255,165,0,.45); }

          /* ── Footer ── */
          .footer { background:linear-gradient(180deg,#163616 0%,#0f2510 100%); color:#d4edda; border-top:3px solid #ffa500; }
          .footer-link { color:#9dc99d; transition:color .2s; text-decoration:none; font-size:.9rem; display:block; margin-bottom:8px; }
          .footer-link:hover { color:#ffa500; }
          .footer-social { width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,.08); display:flex; align-items:center; justify-content:center; color:#d4edda; transition:all .3s; text-decoration:none; }
          .footer-social:hover { background:#ffa500; color:#fff; transform:translateY(-2px); }

          /* ── Mobile Nav ── */
          .mobile-menu { display:none; }
          .mobile-menu.open { display:block; }
          #hamburger { display:none; }
          @media(max-width:768px) {
            #hamburger { display:flex; }
            .desktop-menu { display:none; }
            .mobile-menu.open { display:flex; flex-direction:column; position:absolute; top:100%; left:0; right:0; background:rgba(22,53,22,0.98); padding:16px; border-top:1px solid #2e6e2e; }
          }

          /* ── Page Banner ── */
          .page-banner { background:linear-gradient(135deg,#163616 0%,#245724 50%,#3a8a3a 100%); padding:80px 0 60px; text-align:center; position:relative; overflow:hidden; }
          .page-banner::before { content:''; position:absolute; inset:0; background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E"); }

          /* ── Animations ── */
          @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
          .fade-in-up { animation:fadeInUp .7s ease forwards; }
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
          .fade-in { animation:fadeIn 1s ease forwards; }

          /* ── Counter ── */
          .counter-item { text-align:center; padding:24px; }
          .counter-num { font-family:'Playfair Display',serif; font-size:2.8rem; font-weight:700; color:#ffa500; line-height:1; }
          .counter-label { color:#9dc99d; font-size:.9rem; margin-top:4px; }

          /* ── Tags / Badges ── */
          .tag { background:#e8f5e5; color:#245724; padding:4px 12px; border-radius:20px; font-size:.8rem; font-weight:500; }
          .tag-saffron { background:#fff3d1; color:#e08c00; }

          /* ── Form ── */
          .form-input { width:100%; padding:12px 16px; border:2px solid #e8f5e5; border-radius:10px; font-family:'Poppins',sans-serif; font-size:.95rem; transition:border .3s; background:#fefcf7; outline:none; }
          .form-input:focus { border-color:#3a8a3a; background:#fff; }
          .form-label { font-weight:500; color:#2e6e2e; font-size:.9rem; margin-bottom:6px; display:block; }
          textarea.form-input { resize:vertical; min-height:130px; }

          /* ── Blog ── */
          .blog-card { border-radius:16px; overflow:hidden; background:#fff; box-shadow:0 2px 20px rgba(0,0,0,.07); transition:all .35s; border:1px solid #e8f5e5; }
          .blog-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(58,138,58,.15); }
          .blog-img { height:200px; background:linear-gradient(135deg,#e8f5e5,#cce9c6); display:flex; align-items:center; justify-content:center; overflow:hidden; }
          .blog-category { background:#e8f5e5; color:#245724; padding:4px 12px; border-radius:20px; font-size:.75rem; font-weight:600; }

          /* ── Sticky CTA ── */
          .sticky-whatsapp { position:fixed; bottom:28px; right:28px; z-index:999; background:#25d366; color:#fff; width:58px; height:58px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 6px 24px rgba(37,211,102,.5); transition:all .3s; text-decoration:none; }
          .sticky-whatsapp:hover { transform:scale(1.1); box-shadow:0 10px 30px rgba(37,211,102,.7); }

          /* ── Breadcrumb ── */
          .breadcrumb { display:flex; gap:8px; align-items:center; font-size:.85rem; color:rgba(255,255,255,.65); justify-content:center; margin-top:12px; }
          .breadcrumb a { color:rgba(255,255,255,.65); text-decoration:none; }
          .breadcrumb a:hover { color:#ffa500; }
          .breadcrumb span { color:#ffa500; }
        ` }}></style>
      </head>
      <body>
        {/* Navbar */}
        <nav class="navbar">
          <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
            {/* Logo */}
            <a href="/" class="flex items-center gap-3" style="text-decoration:none;">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,#ffa500,#3a8a3a);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;color:#fff;font-weight:700;">🌿</div>
              <div>
                <div style="font-family:'Playfair Display',serif;font-size:1.35rem;font-weight:700;color:#fff;line-height:1;">Phytoatomy</div>
                <div style="font-size:.65rem;color:#9dc99d;letter-spacing:1.5px;text-transform:uppercase;">Ancient Wisdom · Modern Wellness</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div class="desktop-menu flex items-center gap-1">
              <a href="/" class="nav-link">Home</a>
              <a href="/about" class="nav-link">About</a>
              <a href="/products" class="nav-link">Products</a>
              <a href="/services" class="nav-link">Services</a>
              <a href="/blog" class="nav-link">Blog</a>
              <a href="/contact" class="nav-link">Contact</a>
              <a href="/products" class="nav-link nav-cta ml-3">Shop Now</a>
            </div>

            {/* Hamburger */}
            <button id="hamburger" onclick="toggleMenu()" style="background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;padding:4px;" aria-label="Menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          {/* Mobile Menu */}
          <div id="mobileMenu" class="mobile-menu max-w-7xl mx-auto px-4">
            <a href="/" class="nav-link py-3 border-b border-green-900">Home</a>
            <a href="/about" class="nav-link py-3 border-b border-green-900">About</a>
            <a href="/products" class="nav-link py-3 border-b border-green-900">Products</a>
            <a href="/services" class="nav-link py-3 border-b border-green-900">Services</a>
            <a href="/blog" class="nav-link py-3 border-b border-green-900">Blog</a>
            <a href="/contact" class="nav-link py-3">Contact</a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer class="footer">
          <div class="max-w-7xl mx-auto px-4 py-14">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand */}
              <div class="md:col-span-1">
                <div class="flex items-center gap-3 mb-5">
                  <div style="width:44px;height:44px;background:linear-gradient(135deg,#ffa500,#3a8a3a);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;">🌿</div>
                  <div>
                    <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:#fff;">Phytoatomy</div>
                    <div style="font-size:.65rem;color:#9dc99d;letter-spacing:1.5px;">AYURVEDIC WELLNESS</div>
                  </div>
                </div>
                <p style="color:#9dc99d;font-size:.9rem;line-height:1.8;margin-bottom:20px;">Rooted in the 5,000-year wisdom of Ayurveda, crafting pure botanical formulations for modern wellness seekers.</p>
                <div class="flex gap-3">
                  <a href="#" class="footer-social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="footer-social"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="footer-social"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="footer-social"><i class="fab fa-youtube"></i></a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style="font-family:'Playfair Display',serif;color:#fff;font-size:1.1rem;margin-bottom:16px;">Quick Links</h4>
                <a href="/" class="footer-link">Home</a>
                <a href="/about" class="footer-link">About Us</a>
                <a href="/products" class="footer-link">Our Products</a>
                <a href="/services" class="footer-link">Wellness Services</a>
                <a href="/blog" class="footer-link">Health Blog</a>
                <a href="/contact" class="footer-link">Contact Us</a>
              </div>

              {/* Products */}
              <div>
                <h4 style="font-family:'Playfair Display',serif;color:#fff;font-size:1.1rem;margin-bottom:16px;">Product Range</h4>
                <a href="/products" class="footer-link">Herbal Supplements</a>
                <a href="/products" class="footer-link">Skin & Beauty</a>
                <a href="/products" class="footer-link">Hair Care</a>
                <a href="/products" class="footer-link">Digestive Wellness</a>
                <a href="/products" class="footer-link">Immunity Boosters</a>
                <a href="/products" class="footer-link">Stress & Sleep</a>
              </div>

              {/* Contact */}
              <div>
                <h4 style="font-family:'Playfair Display',serif;color:#fff;font-size:1.1rem;margin-bottom:16px;">Contact Us</h4>
                <div class="footer-link" style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;">
                  <i class="fas fa-map-marker-alt mt-1" style="color:#ffa500;min-width:16px;"></i>
                  <span>123 Herbal Lane, Wellness Park,<br/>Nature City – 400001</span>
                </div>
                <a href="tel:+919773038217" class="footer-link" style="display:flex;gap:10px;align-items:center;">
                  <i class="fas fa-phone" style="color:#ffa500;"></i> +91 977 303 8217
                </a>
                <a href="mailto:info@phytoatomy.com" class="footer-link" style="display:flex;gap:10px;align-items:center;">
                  <i class="fas fa-envelope" style="color:#ffa500;"></i> info@phytoatomy.com
                </a>
                <div class="footer-link" style="display:flex;gap:10px;align-items:center;">
                  <i class="fas fa-clock" style="color:#ffa500;"></i> Mon–Sat: 9AM – 7PM
                </div>
                <div class="mt-4 p-3 rounded-lg" style="background:rgba(255,165,0,.1);border:1px solid rgba(255,165,0,.2);">
                  <p style="color:#ffa500;font-size:.8rem;font-weight:600;margin-bottom:4px;">🌿 100% Natural Certified</p>
                  <p style="color:#9dc99d;font-size:.75rem;">GMP · ISO 9001 · AYUSH Approved</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div style="border-top:1px solid rgba(255,255,255,.1);margin-top:40px;padding-top:20px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
              <p style="color:#9dc99d;font-size:.85rem;">© 2025 Phytoatomy. All rights reserved. Crafted with 🌿 and ❤️</p>
              <div class="flex gap-4">
                <a href="#" style="color:#9dc99d;font-size:.85rem;text-decoration:none;">Privacy Policy</a>
                <a href="#" style="color:#9dc99d;font-size:.85rem;text-decoration:none;">Terms of Service</a>
                <a href="#" style="color:#9dc99d;font-size:.85rem;text-decoration:none;">Shipping Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky WhatsApp */}
        <a href="https://wa.me/919773038217" target="_blank" class="sticky-whatsapp" title="Chat on WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>

        <script dangerouslySetInnerHTML={{ __html: `
          function toggleMenu() {
            var menu = document.getElementById("mobileMenu");
            menu.classList.toggle("open");
          }
          var currentPath = window.location.pathname;
          document.querySelectorAll(".nav-link").forEach(function(link) {
            var href = link.getAttribute("href");
            if (href === currentPath || (href !== "/" && currentPath.startsWith(href))) {
              link.classList.add("active");
            }
          });
        ` }}></script>
      </body>
    </html>
  )
})
