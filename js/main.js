document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif menü öğesini güncelle
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Aktif sayfayı göster
            const targetPage = this.getAttribute('data-page');
            pages.forEach(page => {
                if (page.id === targetPage) {
                    // Önce tüm sayfaları gizle
                    pages.forEach(p => {
                        p.classList.remove('active');
                        p.style.display = 'none';
                    });
                    
                    // Hedef sayfayı göster
                    setTimeout(() => {
                        page.style.display = 'block';
                        setTimeout(() => {
                            page.classList.add('active');
                        }, 50);
                    }, 300);
                }
            });
        });
    });

    // Dil değiştirme fonksiyonları
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('preferred-language') || 'en';

    // Sayfa yüklendiğinde son seçili dili uygula
    updateLanguage(currentLang);
    updateActiveLanguageButton(currentLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('preferred-language', lang);
            updateLanguage(lang);
            updateActiveLanguageButton(lang);
        });
    });

    function updateLanguage(lang) {
        // Başlıkları güncelle
        document.querySelector('.subtitle').textContent = translations[lang].softwareEngineer;
        document.querySelector('.download-cv').textContent = translations[lang].downloadCV;
        
        // Menü öğelerini güncelle
        document.querySelector('[data-page="home"] span').textContent = translations[lang].home;
        document.querySelector('[data-page="about"] span').textContent = translations[lang].about;
        document.querySelector('[data-page="resume"] span').textContent = translations[lang].educational;
        document.querySelector('[data-page="portfolio"] span').textContent = translations[lang].portfolio;
        document.querySelector('[data-page="contact"] span').textContent = translations[lang].contact;

        // Age ve Location etiketlerini güncelle
        document.querySelector('#Age').textContent = translations[lang].age + ":";
        document.querySelector('#Location').textContent = translations[lang].location + ":";

        // Sayfa içeriklerini güncelle
        document.querySelector('.home-content p').textContent = translations[lang].welcome;
        document.querySelector('#about h2').innerHTML = `${translations[lang].aboutMe} <span class="highlight">Me</span>`;
        document.querySelector('.about-content > p').textContent = translations[lang].aboutContent;
        
        // Diğer çeviriler...
    }

    function updateActiveLanguageButton(lang) {
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
}); 