const text = "SurveilEyesSolutions | Always Watching...";
const el = document.getElementById("loading-text");
const preloader = document.getElementById("preloader");

let index = 0;

function typeText() {
    if (index < text.length) {
        el.textContent += text[index++];
        setTimeout(typeText, 120); // typing speed
    } else {
        // TEXT COMPLETED → REMOVE PRELOADER
        setTimeout(() => {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.remove();
            }, 600); // fade-out duration
        }, 300); // tiny pause after completion (optional)
    }
}


typeText();
/* CLOSE MOBILE MENU ON CLICK */
$(document).ready(function () {
    // When a link inside the mobile menu is clicked...
    $('#navbarResponsive .menu li a').click(function() {
        // ...check if the menu is currently visible (open)
        if ($('#navbarResponsive').hasClass('in')) {
            // ...and trigger a click on the toggle button to close it
            $('.navbar-toggler').click();
        }
    });
});


     new WOW().init();


     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});

    // $('#countdown_dashboard').countDown({
    //     targetDate: {
    //         'day':      30,
    //         'month':    12,
    //         'year':     2018,
    //         'hour':     23,
    //         'min':      59,
    //         'sec':      59,
    //     },
    //     omitWeeks: true
    // });

    $(".about-slider").owlCarousel(
        {
        singleItem: true,
        pagination : true,
        autoPlay : 5000,
        }
    );

    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });


      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const baseTitle = "SurveilEyesSolutions";
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
          }
        });

        document.title = currentSection ? `${baseTitle} | ${currentSection}` : baseTitle;
      });

      $(document).ready(function() {
    // 1. Disable Right-Click (Context Menu)
    $(document).bind("contextmenu", function(e) {
        return false;
    });

    // 2. Disable F12 and Shortcuts (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    $(document).keydown(function(e) {
        // F12
        if (e.keyCode == 123) {
            return false;
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
            return false;
        }
    });
});

//chatbot

const faqData = [
 {
    "keywords": ["hello", "hi", "hey", "greetings", "good morning", "good evening"],
    "answer": "Hello! Welcome to SurveilEyesSolutions. I'm here to help you with our monitoring plans, installation services, or support. How can I assist you?"
  },
  {
    "keywords": ["price", "cost", "rates", "plans", "pricing", "much"],
    "answer": "We offer three plans:\n1. Basic Secure ($500/mo)\n2. Advance Shield ($450/mo)\n3. Elite Guardian ($400/mo)\nWhich one would you like details on?"
  },
  {
    "keywords": ["basic", "secure", "cheapest", "500", "starter"],
    "answer": "The **Basic Secure** plan is $500/mo (1-month commitment). It includes Standard HD Monitoring, 24/7 Digital Support, 7 Days Cloud Storage, and Instant Mobile Alerts."
  },
  {
    "keywords": ["advance", "shield", "middle", "450", "ai"],
    "answer": "The **Advance Shield** plan is our most popular at $450/mo (3-month commitment, $1,350 total). It adds AI Human Detection, 30 Days Cloud Storage, and a Priority Support Line."
  },
  {
    "keywords": ["elite", "guardian", "best", "400", "4k", "audit"],
    "answer": "The **Elite Guardian** plan is $400/mo (6-month commitment, $2,400 total). It features 4K Ultra-HD Resolution, a Dedicated Account Manager, and Quarterly On-site Audits."
  },
  {
    "keywords": ["contact", "email", "phone", "support", "reach", "talk"],
    "answer": "You can email us directly at **SurveilEyesSolutions@gmail.com**. Alternatively, fill out the form in the 'Contact' section below to get in touch. or by whatsapp +1(281) 7367 985"
  },
  {
    "keywords": ["location", "address", "where", "city", "office"],
    "answer": "We are headquartered in **Houston, Texas**. However, our remote monitoring services cover businesses nationwide."
  },
  {
    "keywords": ["services", "what do you do", "offer", "monitoring"],
    "answer": "We provide 24/7 Remote Video Monitoring, AI Threat Detection, Real-time Alerts, and Professional Camera Installation to keep your business secure."
  },
  {
    "keywords": ["install", "installation", "setup", "cameras"],
    "answer": "Yes, we offer expert installation services to ensure maximum coverage. We also provide regular maintenance checks to keep your system running smoothly."
  },
  {
    "keywords": ["hours", "open", "time", "operating"],
    "answer": "Our monitoring center never sleeps. We are active **24/7, 365 days a year** to ensure your assets are always protected."
  },
  {
    "keywords": ["storage", "recording", "cloud", "save"],
    "answer": "Cloud storage depends on your plan: Basic gets 7 days, Advance gets 30 days, and Elite options can be customized. We ensure your data is stored securely."
  },
  {
    "keywords": ["bye", "goodbye", "exit", "end"],
    "answer": "Goodbye! Stay safe and secure. Feel free to chat again if you have more questions."
  }
    ];

   function toggleChat() {
        const chatWindow = document.getElementById("chatWindow");
        const display = window.getComputedStyle(chatWindow).display;
        chatWindow.style.display = (display === "none") ? "flex" : "none";
    }

    // 3. Send Message Main Logic
    function sendMessage() {
        const inputField = document.getElementById("userInput");
        const userText = inputField.value.trim();
        if (!userText) return;

        appendMessage(userText, "user-msg");
        inputField.value = ""; 

        // Get the Smart Answer
        const botAnswer = getSmartResponse(userText);
        
        setTimeout(() => {
            appendMessageAnimated(botAnswer, "bot-msg");
        }, 500); 
    }

    // 4. SMART RESPONSE LOGIC (The Brain)
    function getSmartResponse(input) {
        let bestMatch = null;
        let highestScore = 0;
        
        // Clean input: lowercase, remove punctuation, split into words
        let userWords = input.toLowerCase().replace(/[?.,!]/g, "").split(" ");

        // Loop through every FAQ item
        faqData.forEach(item => {
            let score = 0;
            
            // Compare every User Word vs Every Keyword
            userWords.forEach(uWord => {
                item.keywords.forEach(kWord => {
                    // Exact match gets 1 point
                    if (uWord === kWord) {
                        score += 1; 
                    } 
                    // Partial match (e.g. "pricing" contains "pric") gets 0.8 points
                    else if (uWord.includes(kWord) || kWord.includes(uWord)) {
                        score += 0.8;
                    }
                    // Fuzzy match (typos) gets 0.5 points
                    else if (getSimilarity(uWord, kWord) > 0.6) { // 60% similarity threshold
                        score += 0.5;
                    }
                });
            });

            // Keep track of the winner
            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        });

        // Return answer if we have a decent score, else default
        if (bestMatch && highestScore > 0.4) {
            return bestMatch.answer;
        } else {
            return "I didn't quite catch that. Try asking about 'Pricing', 'Services', or 'Support'.";
        }
    }

    // 5. FUZZY MATCH MATH (Levenshtein Distance Simplified)
    // Returns a number between 0 (different) and 1 (same)
    function getSimilarity(s1, s2) {
        let longer = s1;
        let shorter = s2;
        if (s1.length < s2.length) { longer = s2; shorter = s1; }
        let longerLength = longer.length;
        if (longerLength === 0) return 1.0;
        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        let costs = new Array();
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i == 0) costs[j] = j;
                else {
                    if (j > 0) {
                        let newValue = costs[j - 1];
                        if (s1.charAt(i - 1) != s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }

    // 6. UI Helper Functions
    function appendMessage(text, className) {
        const chatBody = document.getElementById("chatBody");
        const div = document.createElement("div");
        div.className = className;
        div.innerText = text;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function appendMessageAnimated(text, className) {
        const chatBody = document.getElementById("chatBody");
        const div = document.createElement("div");
        div.className = className;
        chatBody.appendChild(div);
        let i = 0;
        function type() {
            if (i < text.length) {
                div.innerHTML += (text.charAt(i) === '\n') ? "<br>" : text.charAt(i);
                i++;
                chatBody.scrollTop = chatBody.scrollHeight;
                setTimeout(type, 20); // Typing speed
            }
        }
        type();
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") sendMessage();
    }



    //sheet script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzNr6qOsqvpxF19_Ne_Ql9ucWC293WrS2UwMDtW_bXxRfKRfacZON6R-mXSyPEe82mGFQ/exec';

    const tealColor = "#00a8b4";

    // --- 1. HANDLE NEWSLETTER SUBSCRIPTION (No Reload, just clear) ---
    const subForm = document.forms['submit-to-google-sheet-subscribe'];
    const subMsg = document.getElementById('sub-msg');

    if(subForm){
        subForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = subForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Subscribing...";
            btn.disabled = true;
            
            fetch(scriptURL, { method: 'POST', body: new FormData(subForm)})
                .then(response => {
                    subMsg.innerText = "Thank you for subscribing!";
                    subMsg.style.color = tealColor; // Teal Theme
                    subForm.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                    setTimeout(() => { subMsg.innerText = ""; }, 4000);
                })
                .catch(error => {
                    subMsg.innerText = "Error subscribing.";
                    subMsg.style.color = "red";
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }

    // --- 2. HANDLE CONTACT FORM (Reloads on Success) ---
    const contactForm = document.forms['submit-to-google-sheet-contact'];
    const contactMsg = document.getElementById('contact-msg');

    if(contactForm){
        contactForm.addEventListener('submit', e => {
            e.preventDefault(); // Stop page from reloading immediately
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            // UI Feedback
            btn.innerText = "Sending...";
            btn.disabled = true;

            fetch(scriptURL, { method: 'POST', body: new FormData(contactForm)})
                .then(response => {
                    // 1. Show Teal Success Message
                    contactMsg.innerHTML = `<div style="padding: 10px; background-color: ${tealColor}; color: white; text-align: center; border-radius: 5px;">Message Sent Successfully! Reloading...</div>`;
                    
                    // 2. Reset Form Visuals
                    contactForm.reset();
                    
                    // 3. WAIT 2 SECONDS, THEN RELOAD PAGE
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000); 
                })
                .catch(error => {
                    contactMsg.innerHTML = "<p style='color: red; text-align: center;'>Error sending message. Please check your internet.</p>";
                    btn.disabled = false;
                    btn.innerText = originalText;
                    console.error('Error!', error.message);
                });
        });
    }