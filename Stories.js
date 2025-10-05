const stories = {
    en: [
        { text: "Believe in yourself. You are stronger than you think.", youtube: "https://youtu.be/2QVkvzUJ6fk?si=bLKRTYJ5ZzeWhOXU" },
        { text: "Every day is a new opportunity to improve yourself.", youtube: "https://youtu.be/0jxJC1ANhoA?si=hBqgU9p8ZrK49uj2" },
        { text: "Your mind is a powerful thing. Train it well.", youtube: "https://youtu.be/TLKxdTmk-zc?si=wNu_oj4QpedxhEA-" },
        { text: "Small steps every day lead to big results.", youtube: "https://youtu.be/UMdig0gbdUE?si=ubDKKRIk6Da9a0tG" },
        { text: "Mental health is just as important as physical health.", youtube: "https://youtu.be/lVPKtYd30ic?si=9XVjpe792UYs0RVP" },
        { text: "Never give up on yourself.", youtube: "https://youtu.be/osz6xJnsPpU?si=37H5mFOSNFnUyrHF" },
        { text: "Happiness comes from within.", youtube: "https://youtu.be/3BCrOfn29sM?si=g4VvDNgYCP3FDCiH" },
        { text: "Learn to let go of things you cannot control.", youtube: "https://youtu.be/2GYkT6dlUDo?si=vmb-rs_h9jWZENgA" },
        { text: "Positive thoughts lead to positive actions.", youtube: "https://youtu.be/HwLK9dBQn0g?si=2ygbO3R5icuQOC0i" },
        { text: "You are enough just as you are.", youtube: "https://youtu.be/cFL_woR3Dm8?si=lTXJL6D3Rx2jz7MR" },
        { text: "Focus on progress, not perfection.", youtube: "https://youtu.be/zoDhLbJ0X5U?si=jJ9qwjPTOi2SmK2l" },
        { text: "Surround yourself with positivity.", youtube: "https://youtu.be/KI4FVf_dKPo?si=Muwa6KZQZGrMb85z" },
        { text: "Forgive yourself and move on.", youtube: "https://youtu.be/JsU1oFP9cSk?si=JdvrnYrKSNQOspAj" },
        { text: "Mindfulness can help you manage stress.", youtube: "https://youtu.be/sm0i1Y4g_zA?si=ZGOxwfQq5RYxcJVf" },
        { text: "Consistency is key to success.", youtube: "https://youtu.be/ScYq98y3dbM?si=4g8XTb7HZuKnKLKY" }
    ],
    hi: [
        { text: "खुद पर भरोसा करो। आप जितना सोचते हैं उससे मजबूत हैं।", youtube: "https://youtu.be/jklmLh740CA?si=PbOtTHHyTFIQem_x" },
        { text: "हर दिन खुद को बेहतर बनाने का नया अवसर है।", youtube: "https://youtu.be/PgluKyEwuoE?si=RaqrCu1-Gu0hHUZt" },
        { text: "आपका मन एक शक्तिशाली चीज़ है। इसे अच्छी तरह से प्रशिक्षित करें।", youtube: "https://youtu.be/BLEYCyrLpkI?si=_XyqVSkV9_tcbqRA" },
        { text: "छोटे कदम हर दिन बड़े परिणाम लाते हैं।", youtube: "https://youtu.be/AoFVZjAJC_w?si=6gETVXzrZk7amwHu" },
        { text: "मानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है।", youtube: "https://youtu.be/MaFv-SMgHb0?si=S-izRsjuB3FB2NqN" },
        { text: "कभी खुद को छोड़ो मत।", youtube: "https://youtu.be/3VfiACDVpEU?si=DASuqnfJhHllUjtg" },
        { text: "खुशी आपके अंदर से आती है।", youtube: "https://youtu.be/foYHn1eSL5w?si=lvs0_o4PYdJ_02Tj" },
        { text: "उन चीजों को छोड़ना सीखें जिन्हें आप नियंत्रित नहीं कर सकते।", youtube: "https://youtu.be/k4zOXufrM5E?si=xsSjzIRwpndyN-i1" },
        { text: "सकारात्मक विचार सकारात्मक क्रियाओं की ओर ले जाते हैं।", youtube: "https://youtu.be/-5-NAVKxfFU?si=bDug86vfEpy3kHDy" },
        { text: "आप जैसे हैं वैसे ही पर्याप्त हैं।", youtube: "https://youtu.be/UfkKZqG-WTs?si=LBBfeOkrEOXVm1zT" },
        { text: "प्रगति पर ध्यान दें, पूर्णता पर नहीं।", youtube: "https://youtu.be/UPlRvZy5Ttk?si=5T7YKnbPfnNZGUzX" },
        { text: "खुद को सकारात्मकता से घेरें।", youtube: "https://youtu.be/s4ipRP_AjbM?si=-UeMNvBVA3OY7kpK" },
        { text: "खुद को माफ करें और आगे बढ़ें।", youtube: "https://youtu.be/0nWAXmeDZ1o?si=KHwZvji3SKmFlXfW" },
        { text: "माइंडफुलनेस तनाव प्रबंधन में मदद कर सकता है।", youtube: "https://youtu.be/hwPdYf3zV10?si=JJW9gHV-PBh7lZZK" },
        { text: "सफलता के लिए निरंतरता महत्वपूर्ण है।", youtube: "https://youtu.be/U5f5brswshY?si=HIYfYT-lvTyE_pEs" }
    ]
};

function setLanguage(lang) {
    const container = document.getElementById('stories-container');
    container.innerHTML = '';
    stories[lang].forEach(story => {
        const div = document.createElement('div');
        div.className = 'story';
        div.innerHTML = `
            <p>${story.text}</p>
            <a href="${story.youtube}" target="_blank" class="youtube-link">Watch on YouTube</a>
        `;
        container.appendChild(div);
    });

    // Change title
    document.getElementById('title').innerText = (lang === 'en') 
        ? "Motivational Stories for Mental Health" 
        : "मानसिक स्वास्थ्य के लिए प्रेरक कहानियाँ";
}

// Default language
setLanguage('en');
