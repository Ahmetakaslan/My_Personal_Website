const translations = {
    tr: {
        // Menü öğeleri
        "Home": "Ana Sayfa",
        "About": "Hakkımda",
        "Educational": "Eğitim",
        "Portfolio": "Portfolyo",
        "Contact": "Iletişim",
        
        // Ana sayfa
        "Software Engineer": "Yazılım Mühendisi",
        "Welcome to my portfolio! I'm passionate about creating innovative solutions through code.": 
            "Portfolyoma hoş geldiniz! Kod ile yenilikçi çözümler üretmeye tutkulu biriyim.",
        
        // Hakkımda sayfası
        "About Me": "Hakkımda",
        "I am a software engineer with expertise in web development and mobile applications.":
            "Web geliştirme ve mobil uygulamalar konusunda uzman bir yazılım mühendisiyim.",
        "Age": "Yaş",
        "Location": "Konum",
        "Email": "E-posta",
        "Turkey": "Türkiye",
        
        // Eğitim sayfası
        "Educational Background": "Eğitim Geçmişi",
        "Computer Engineering": "Bilgisayar Mühendisliği",
        "Firat University": "Fırat Üniversitesi",
        
        // Portfolyo sayfası
        "My Projects": "Projelerim",
        "Project 1": "Proje 1",
        "Project description goes here": "Proje açıklaması buraya gelecek",
        
        // İletişim sayfası
        "Contact Me": "İletişim",
        
        // Diğer
        "Download CV": "CV İndir",
        "All rights reserved.": "Tüm hakları saklıdır."
    },
    en: {
        // Menu items
        "Home": "Home",
        "About": "About",
        "Educational": "Educational",
        "Portfolio": "Portfolio",
        "Contact": "Contact",
        
        // Home page
        "Software Engineer": "Software Engineer",
        "Welcome to my portfolio! I'm passionate about creating innovative solutions through code.": 
            "Welcome to my portfolio! I'm passionate about creating innovative solutions through code.",
        
        // About page
        "About Me": "About Me",
        "I am a software engineer with expertise in web development and mobile applications.":
            "I am a software engineer with expertise in web development and mobile applications.",
        "Age": "Age",
        "Location": "Location",
        "Email": "Email",
        "Turkey": "Turkey",
        
        // Education page
        "Educational Background": "Educational Background",
        "Computer Engineering": "Computer Engineering",
        "Firat University": "Firat University",
        
        // Portfolio page
        "My Projects": "My Projects",
        "Project 1": "Project 1",
        "Project description goes here": "Project description goes here",
        
        // Contact page
        "Contact Me": "Contact Me",
        
        // Other
        "Download CV": "Download CV",
        "All rights reserved.": "All rights reserved."
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Dil butonları için event listener'lar
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        changeLanguage(lang);
        
        // Aktif dil butonunu güncelle
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
    });
}); 