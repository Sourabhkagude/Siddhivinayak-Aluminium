/* =====================================
   SIDDHIVINAYAK ALUMINIUM
   PREMIUM WEBSITE JAVASCRIPT
===================================== */



// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });


});








// ===============================
// STICKY NAVBAR
// ===============================


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }


});








// ===============================
// HERO IMAGE SLIDER
// ===============================


const slides = document.querySelectorAll(".slide");


let slideIndex = 0;



function showSlides() {


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    slides[slideIndex].classList.add("active");



    slideIndex++;


    if (slideIndex >= slides.length) {

        slideIndex = 0;

    }


}



if (slides.length) {

    setInterval(showSlides, 5000);

}








// ===============================
// COUNTER ANIMATION
// ===============================


const counters = document.querySelectorAll(".counter");


let counterStarted = false;



function startCounters() {


    if (counterStarted) return;


    const counterSection =
        document.querySelector(".counter-section");


    if (!counterSection) return;



    const sectionTop =
        counterSection.getBoundingClientRect().top;



    if (sectionTop < window.innerHeight - 100) {


        counterStarted = true;



        counters.forEach(counter => {


            let target =
                Number(counter.dataset.target);



            let count = 0;


            let speed =
                target / 100;



            let update = setInterval(() => {


                count += speed;



                if (count >= target) {


                    counter.innerText =
                        target + "+";


                    clearInterval(update);


                }


                else {


                    counter.innerText =
                        Math.floor(count);


                }



            }, 20);



        });



    }



}



window.addEventListener(
    "scroll",
    startCounters
);








// ===============================
// GALLERY LIGHTBOX
// ===============================


const galleryImages =
    document.querySelectorAll(".gallery-item");


const lightbox =
    document.querySelector(".lightbox");


const lightboxImage =
    document.querySelector(".lightbox-image");


const closeLightbox =
    document.querySelector(".close-lightbox");


const nextBtn =
    document.querySelector(".next-btn");


const prevBtn =
    document.querySelector(".prev-btn");



let currentImage = 0;




galleryImages.forEach((image, index) => {


    image.addEventListener("click", () => {


        currentImage = index;


        openLightbox();


    });


});




function openLightbox() {


    lightboxImage.src =
        galleryImages[currentImage].src;


    lightbox.classList.add("active");


}



function closeBox() {


    lightbox.classList.remove("active");


}



if (closeLightbox) {

    closeLightbox.onclick = closeBox;

}



if (lightbox) {

    lightbox.addEventListener("click", (e) => {


        if (e.target === lightbox) {

            closeBox();

        }


    });

}







// Next Image


function nextImage() {


    currentImage++;



    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }



    lightboxImage.src =
        galleryImages[currentImage].src;


}




// Previous Image


function previousImage() {


    currentImage--;



    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;

    }



    lightboxImage.src =
        galleryImages[currentImage].src;


}



if (nextBtn) {

    nextBtn.onclick = nextImage;

}



if (prevBtn) {

    prevBtn.onclick = previousImage;

}








// Keyboard Controls


document.addEventListener("keydown", (e) => {


    if (!lightbox.classList.contains("active"))
        return;



    if (e.key === "ArrowRight") {

        nextImage();

    }



    if (e.key === "ArrowLeft") {

        previousImage();

    }



    if (e.key === "Escape") {

        closeBox();

    }


});








// ===============================
// SCROLL TO TOP
// ===============================


const scrollTop =
    document.querySelector(".scroll-top");



window.addEventListener("scroll", () => {


    if (window.scrollY > 500) {

        scrollTop.classList.add("active");

    }

    else {

        scrollTop.classList.remove("active");

    }


});



if (scrollTop) {


    scrollTop.addEventListener("click", () => {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });


}








// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {


        anchor.addEventListener("click", function (e) {


            const target =
                document.querySelector(
                    this.getAttribute("href")
                );



            if (target) {


                e.preventDefault();



                target.scrollIntoView({

                    behavior: "smooth"

                });


            }


        });



    });








// ===============================
// REVEAL ON SCROLL
// ===============================


const revealElements =
    document.querySelectorAll(
        ".service-card,.why-card,.gallery-item,.counter-box"
    );



const observer =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";


            }


        });



    }, {
        threshold: .15
    });



revealElements.forEach(element => {


    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";


    observer.observe(element);


});



// ===== Language Switch =====

const services = {

en: [

["Aluminium Doors","Stylish and durable aluminium doors with modern finishes."],

["Aluminium Windows","Energy efficient and elegant aluminium window solutions."],

["Sliding Windows","Smooth operating sliding windows with premium hardware."],

["Sliding Doors","Modern aluminium sliding doors for stylish interiors."],

["Aluminium Partitions","Professional office and commercial aluminium partitions."],

["Aluminium Furniture","Customized aluminium furniture for every space."],

["Kitchen Aluminium Work","Premium aluminium kitchen cabinets and accessories."],

["Glass Aluminium Work","Combination of premium glass and aluminium designs."],

["Aluminium False Ceiling","Contemporary aluminium ceiling solutions."],

["Aluminium Railings","Strong and stylish balcony and staircase railings."],

["Office Interiors","Complete aluminium solutions for workplaces."],

["Commercial Projects","Large-scale aluminium fabrication services."],

["Aluminium Louvers","Modern shading and ventilation solutions."],

["Custom Fabrication","Bespoke aluminium designs according to requirements."],

["Aluminium Repair Work","Professional repair and maintenance services."],

["Installation Services","Expert installation with perfect finishing."]

],

mr: [

["अॅल्युमिनियम दरवाजे","मजबूत व आकर्षक अॅल्युमिनियम दरवाजे."],

["अॅल्युमिनियम खिडक्या","ऊर्जा बचत करणाऱ्या आधुनिक खिडक्या."],

["स्लायडिंग खिडक्या","उत्तम दर्जाच्या स्लायडिंग खिडक्या."],

["स्लायडिंग दरवाजे","आधुनिक स्लायडिंग दरवाजे."],

["अॅल्युमिनियम पार्टिशन","ऑफिस व व्यावसायिक पार्टिशन."],

["अॅल्युमिनियम फर्निचर","सानुकूल अॅल्युमिनियम फर्निचर."],

["किचन अॅल्युमिनियम काम","प्रीमियम किचन कॅबिनेट."],

["ग्लास अॅल्युमिनियम काम","ग्लास आणि अॅल्युमिनियमचे सुंदर डिझाइन."],

["फॉल्स सिलिंग","आधुनिक फॉल्स सिलिंग."],

["रेलिंग","मजबूत आणि आकर्षक रेलिंग."],

["ऑफिस इंटिरियर","संपूर्ण ऑफिस उपाय."],

["व्यावसायिक प्रकल्प","मोठ्या प्रकल्पांसाठी सेवा."],

["अॅल्युमिनियम लुव्हर्स","आधुनिक व्हेंटिलेशन उपाय."],

["कस्टम फॅब्रिकेशन","गरजेनुसार डिझाइन."],

["दुरुस्ती सेवा","व्यावसायिक दुरुस्ती सेवा."],

["इन्स्टॉलेशन","तज्ञांकडून बसविण्याची सेवा."]

],

kn: [

["ಅಲ್ಯೂಮಿನಿಯಂ ಬಾಗಿಲುಗಳು","ಬಲವಾದ ಮತ್ತು ಆಕರ್ಷಕ ಬಾಗಿಲುಗಳು."],

["ಅಲ್ಯೂಮಿನಿಯಂ ಕಿಟಕಿಗಳು","ಶಕ್ತಿ ಉಳಿತಾಯದ ಆಧುನಿಕ ಕಿಟಕಿಗಳು."],

["ಸ್ಲೈಡಿಂಗ್ ಕಿಟಕಿಗಳು","ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಸ್ಲೈಡಿಂಗ್ ಕಿಟಕಿಗಳು."],

["ಸ್ಲೈಡಿಂಗ್ ಬಾಗಿಲುಗಳು","ಆಧುನಿಕ ಸ್ಲೈಡಿಂಗ್ ಬಾಗಿಲುಗಳು."],

["ಅಲ್ಯೂಮಿನಿಯಂ ಪಾರ್ಟಿಷನ್","ಕಚೇರಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಪಾರ್ಟಿಷನ್."],

["ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್","ಕಸ್ಟಮ್ ಫರ್ನಿಚರ್."],

["ಅಡುಗೆಮನೆ ಕೆಲಸ","ಪ್ರೀಮಿಯಂ ಕಿಚನ್ ಕ್ಯಾಬಿನೆಟ್."],

["ಗಾಜು ಅಲ್ಯೂಮಿನಿಯಂ ಕೆಲಸ","ಗಾಜು ಮತ್ತು ಅಲ್ಯೂಮಿನಿಯಂ ಸಂಯೋಜನೆ."],

["ಫಾಲ್ಸ್ ಸೀಲಿಂಗ್","ಆಧುನಿಕ ಸೀಲಿಂಗ್ ಪರಿಹಾರ."],

["ರೇಲಿಂಗ್","ಬಲವಾದ ಮತ್ತು ಆಕರ್ಷಕ ರೇಲಿಂಗ್."],

["ಆಫೀಸ್ ಇಂಟೀರಿಯರ್","ಸಂಪೂರ್ಣ ಕಚೇರಿ ಪರಿಹಾರ."],

["ವಾಣಿಜ್ಯ ಯೋಜನೆಗಳು","ದೊಡ್ಡ ಯೋಜನೆಗಳಿಗೆ ಸೇವೆಗಳು."],

["ಅಲ್ಯೂಮಿನಿಯಂ ಲೂವರ್ಸ್","ಆಧುನಿಕ ಗಾಳಿ ಪರಿಹಾರಗಳು."],

["ಕಸ್ಟಮ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್","ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣ ವಿನ್ಯಾಸ."],

["ದುರಸ್ತಿ ಕೆಲಸ","ವೃತ್ತಿಪರ ದುರಸ್ತಿ ಸೇವೆ."],

["ಅಳವಡಿಕೆ ಸೇವೆ","ತಜ್ಞರಿಂದ ಅಳವಡಿಕೆ."]

]

};

const languageSelect = document.getElementById("languageSelect");

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const exploreBtn = document.getElementById("exploreBtn");
const contactBtn = document.getElementById("contactBtn");
const aboutTag = document.getElementById("aboutTag");
const aboutTitle = document.getElementById("aboutTitle");
const whyTag = document.getElementById("whyTag");
const whyTitle = document.getElementById("whyTitle");
const whyText = document.getElementById("whyText");

const serviceTag = document.getElementById("serviceTag");
const serviceTitle = document.getElementById("serviceTitle");
const serviceText = document.getElementById("serviceText");

const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
const counter4 = document.getElementById("counter4");

const galleryTag = document.getElementById("galleryTag");
const galleryTitle = document.getElementById("galleryTitle");
const galleryText = document.getElementById("galleryText");

const instaTag = document.getElementById("instaTag");
const instaTitle = document.getElementById("instaTitle");
const instaText = document.getElementById("instaText");
const instaBtn = document.getElementById("instaBtn");
const contactTitle2 = document.getElementById("contactTitle");
const contactText2 = document.getElementById("contactText");
const contactBtn2 = document.getElementById("contactBtn2");

const footerCompany = document.getElementById("footerCompany");
const footerDesc = document.getElementById("footerDesc");
const quickLinks = document.getElementById("quickLinks");
const footerContact = document.getElementById("footerContact");
const copyright = document.getElementById("copyright");


const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navServices = document.getElementById("navServices");
const navGallery = document.getElementById("navGallery");
const navContact = document.getElementById("navContact");

const serviceNames = document.querySelectorAll(".service-name");
const serviceDescs = document.querySelectorAll(".service-desc");

const savedLanguage = localStorage.getItem("language");

if(savedLanguage){
    languageSelect.value = savedLanguage;
}

languageSelect.addEventListener("change", function () {
    localStorage.setItem("language", this.value);

    if (this.value === "en") {

        heroTitle.innerHTML = "Premium Aluminium Furniture<br>For Modern Spaces";

        heroText.innerHTML = "Designing elegant, durable and stylish aluminium solutions for homes, offices and commercial spaces.";

        exploreBtn.innerHTML = "Explore Services";

        contactBtn.innerHTML = "Contact Us";

        aboutTag.innerHTML = "About Us";

        aboutTitle.innerHTML = "Crafting Premium Aluminium Furniture With Excellence";
        whyTag.innerHTML = "Why Choose Us";

        whyTitle.innerHTML = "Quality, Innovation & Trusted Craftsmanship";

        whyText.innerHTML =
            "We provide premium aluminium solutions with modern designs, advanced technology and professional finishing.";

        serviceTag.innerHTML = "Our Services";

        serviceTitle.innerHTML = "Complete Aluminium Furniture Solutions";

        serviceText.innerHTML =
            "Premium aluminium products designed for residential, commercial and industrial requirements.";
            counter1.innerHTML = "Projects Completed";
counter2.innerHTML = "Years Experience";
counter3.innerHTML = "Happy Customers";
counter4.innerHTML = "Premium Services";

galleryTag.innerHTML = "Gallery";
galleryTitle.innerHTML = "Our Premium Aluminium Works";
galleryText.innerHTML = "Explore our latest aluminium furniture and fabrication projects.";

instaTag.innerHTML = "Follow Us";
instaTitle.innerHTML = "Latest Updates On Instagram";
instaText.innerHTML = "See our newest aluminium projects and designs.";
instaBtn.innerHTML = "Follow Our Instagram";
   contactTitle2.innerHTML = "Ready To Upgrade Your Space?";

contactText2.innerHTML =
"Contact Siddhivinayak Aluminium Furniture Works today.";

contactBtn2.innerHTML = "Call Now";


footerCompany.innerHTML =
"Siddhivinayak Aluminium Furniture Works";

footerDesc.innerHTML =
"Premium aluminium furniture and fabrication solutions for residential and commercial spaces.";

quickLinks.innerHTML = "Quick Links";

footerContact.innerHTML = "Contact";

copyright.innerHTML =
"© 2026 Siddhivinayak Aluminium Furniture Works. All Rights Reserved.";         
 navHome.innerHTML = "Home";
navAbout.innerHTML = "About";
navServices.innerHTML = "Services";
navGallery.innerHTML = "Gallery";
navContact.innerHTML = "Contact";      
    }

    else if (this.value === "mr") {

        heroTitle.innerHTML = "आधुनिक जागांसाठी प्रीमियम अॅल्युमिनियम फर्निचर";

        heroText.innerHTML = "घर, कार्यालय आणि व्यावसायिक जागांसाठी आकर्षक, टिकाऊ आणि आधुनिक अॅल्युमिनियम उपाय.";

        exploreBtn.innerHTML = "आमच्या सेवा";

        contactBtn.innerHTML = "संपर्क करा";

        aboutTag.innerHTML = "आमच्याबद्दल";

        aboutTitle.innerHTML = "उत्कृष्ट दर्जाच्या अॅल्युमिनियम फर्निचरची निर्मिती";

        whyTag.innerHTML = "आम्हालाच का निवडावे";

        whyTitle.innerHTML = "गुणवत्ता, नावीन्य आणि विश्वासार्ह काम";

        whyText.innerHTML =
            "आम्ही आधुनिक डिझाइन, प्रगत तंत्रज्ञान आणि उत्कृष्ट फिनिशिंगसह प्रीमियम अॅल्युमिनियम उपाय प्रदान करतो.";

        serviceTag.innerHTML = "आमच्या सेवा";

        serviceTitle.innerHTML = "संपूर्ण अॅल्युमिनियम फर्निचर उपाय";

        serviceText.innerHTML =
            "घरगुती, व्यावसायिक आणि औद्योगिक गरजांसाठी प्रीमियम अॅल्युमिनियम उत्पादने.";
            counter1.innerHTML = "पूर्ण झालेले प्रकल्प";
counter2.innerHTML = "वर्षांचा अनुभव";
counter3.innerHTML = "समाधानी ग्राहक";
counter4.innerHTML = "प्रीमियम सेवा";

galleryTag.innerHTML = "गॅलरी";
galleryTitle.innerHTML = "आमची उत्कृष्ट अॅल्युमिनियम कामे";
galleryText.innerHTML = "आमचे नवीन अॅल्युमिनियम फर्निचर आणि फॅब्रिकेशन प्रकल्प पहा.";

instaTag.innerHTML = "आम्हाला फॉलो करा";
instaTitle.innerHTML = "इन्स्टाग्रामवरील नवीन अपडेट्स";
instaText.innerHTML = "आमचे नवीन प्रकल्प आणि डिझाईन्स पहा.";
instaBtn.innerHTML = "आमचे इन्स्टाग्राम फॉलो करा";
contactTitle2.innerHTML =
"तुमची जागा अपग्रेड करण्यासाठी तयार आहात का?";

contactText2.innerHTML =
"आजच सिद्धिविनायक अॅल्युमिनियम फर्निचर वर्क्सशी संपर्क साधा.";

contactBtn2.innerHTML =
"कॉल करा";


footerCompany.innerHTML =
"सिद्धिविनायक अॅल्युमिनियम फर्निचर वर्क्स";

footerDesc.innerHTML =
"घर आणि व्यावसायिक जागांसाठी प्रीमियम अॅल्युमिनियम फर्निचर व फॅब्रिकेशन उपाय.";

quickLinks.innerHTML =
"महत्त्वाच्या लिंक";

footerContact.innerHTML =
"संपर्क";

copyright.innerHTML =
"© 2026 सिद्धिविनायक अॅल्युमिनियम फर्निचर वर्क्स. सर्व हक्क राखीव.";
   navHome.innerHTML = "मुख्यपृष्ठ";
navAbout.innerHTML = "आमच्याबद्दल";
navServices.innerHTML = "सेवा";
navGallery.innerHTML = "गॅलरी";
navContact.innerHTML = "संपर्क";   
    }

    else if (this.value === "kn") {

        heroTitle.innerHTML = "ಆಧುನಿಕ ಸ್ಥಳಗಳಿಗಾಗಿ ಪ್ರೀಮಿಯಂ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್";

        heroText.innerHTML = "ಮನೆ, ಕಚೇರಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಸ್ಥಳಗಳಿಗಾಗಿ ಆಕರ್ಷಕ, ಬಾಳಿಕೆ ಬರುವ ಮತ್ತು ಆಧುನಿಕ ಅಲ್ಯೂಮಿನಿಯಂ ಪರಿಹಾರಗಳು.";

        exploreBtn.innerHTML = "ನಮ್ಮ ಸೇವೆಗಳು";

        contactBtn.innerHTML = "ಸಂಪರ್ಕಿಸಿ";

        aboutTag.innerHTML = "ನಮ್ಮ ಬಗ್ಗೆ";

        aboutTitle.innerHTML = "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ನಿರ್ಮಾಣ";

        whyTag.innerHTML = "ನಮ್ಮನ್ನೇ ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು";

        whyTitle.innerHTML = "ಗುಣಮಟ್ಟ, ಹೊಸತನ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಕೆಲಸ";

        whyText.innerHTML =
            "ಆಧುನಿಕ ವಿನ್ಯಾಸ, ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಫಿನಿಷಿಂಗ್‌ನೊಂದಿಗೆ ನಾವು ಪ್ರೀಮಿಯಂ ಅಲ್ಯೂಮಿನಿಯಂ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.";

        serviceTag.innerHTML = "ನಮ್ಮ ಸೇವೆಗಳು";

        serviceTitle.innerHTML = "ಸಂಪೂರ್ಣ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ಪರಿಹಾರಗಳು";

        serviceText.innerHTML =
            "ಮನೆ, ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಅಗತ್ಯಗಳಿಗೆ ಪ್ರೀಮಿಯಂ ಅಲ್ಯೂಮಿನಿಯಂ ಉತ್ಪನ್ನಗಳು.";
            counter1.innerHTML = "ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು";
counter2.innerHTML = "ವರ್ಷಗಳ ಅನುಭವ";
counter3.innerHTML = "ತೃಪ್ತ ಗ್ರಾಹಕರು";
counter4.innerHTML = "ಪ್ರೀಮಿಯಂ ಸೇವೆಗಳು";

galleryTag.innerHTML = "ಗ್ಯಾಲರಿ";
galleryTitle.innerHTML = "ನಮ್ಮ ಅತ್ಯುತ್ತಮ ಅಲ್ಯೂಮಿನಿಯಂ ಕೆಲಸಗಳು";
galleryText.innerHTML = "ನಮ್ಮ ಹೊಸ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ಮತ್ತು ಫ್ಯಾಬ್ರಿಕೇಶನ್ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ.";

instaTag.innerHTML = "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ";
instaTitle.innerHTML = "ಇನ್‌ಸ್ಟಾಗ್ರಾಂನಲ್ಲಿನ ಹೊಸ ಅಪ್‌ಡೇಟ್‌ಗಳು";
instaText.innerHTML = "ನಮ್ಮ ಹೊಸ ಯೋಜನೆಗಳು ಮತ್ತು ವಿನ್ಯಾಸಗಳನ್ನು ನೋಡಿ.";
instaBtn.innerHTML = "ನಮ್ಮ ಇನ್‌ಸ್ಟಾಗ್ರಾಂ ಅನುಸರಿಸಿ";
   contactTitle2.innerHTML =
"ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ನವೀಕರಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?";

contactText2.innerHTML =
"ಇಂದು ಸಿದ್ಧಿವಿನಾಯಕ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ವರ್ಕ್ಸ್ ಸಂಪರ್ಕಿಸಿ.";

contactBtn2.innerHTML =
"ಈಗ ಕರೆ ಮಾಡಿ";


footerCompany.innerHTML =
"ಸಿದ್ಧಿವಿನಾಯಕ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ವರ್ಕ್ಸ್";

footerDesc.innerHTML =
"ಮನೆ ಮತ್ತು ವಾಣಿಜ್ಯ ಸ್ಥಳಗಳಿಗೆ ಪ್ರೀಮಿಯಂ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ಮತ್ತು ಫ್ಯಾಬ್ರಿಕೇಶನ್ ಪರಿಹಾರಗಳು.";

quickLinks.innerHTML =
"ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು";

footerContact.innerHTML =
"ಸಂಪರ್ಕ";

copyright.innerHTML =
"© 2026 ಸಿದ್ಧಿವಿನಾಯಕ ಅಲ್ಯೂಮಿನಿಯಂ ಫರ್ನಿಚರ್ ವರ್ಕ್ಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.";     
   navHome.innerHTML = "ಮುಖಪುಟ";
navAbout.innerHTML = "ನಮ್ಮ ಬಗ್ಗೆ";
navServices.innerHTML = "ಸೇವೆಗಳು";
navGallery.innerHTML = "ಗ್ಯಾಲರಿ";
navContact.innerHTML = "ಸಂಪರ್ಕ"; }
    for (let i = 0; i < serviceNames.length; i++) {

    serviceNames[i].innerHTML = services[this.value][i][0];

    serviceDescs[i].innerHTML = services[this.value][i][1];

}
    

});
if (savedLanguage) {
    languageSelect.dispatchEvent(new Event("change"));
}



/* ================= FREE QUOTE WHATSAPP ================= */

const quoteBtn = document.getElementById("quoteBtn");

if (quoteBtn) {

    quoteBtn.addEventListener("click", function () {

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const service = document.getElementById("customerService").value;

        if (name === "" || phone === "") {
            alert("Please enter your Name and Phone Number.");
            return;
        }

        const message =
`Hello Siddhivinayak Aluminium Furniture Works,

Name: ${name}
Phone: ${phone}
Service: ${service}

I need a quotation. Please contact me.`;

        const whatsappURL =
`https://wa.me/919604645001?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}