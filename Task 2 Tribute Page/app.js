document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
      "Remembering you is easy, I do it every day 😔. Missing you is the heartache that never goes away 😭.",
      "Although you are no longer with me, I want you to know how much I loved you when I was lucky enough to have you in my life.",
      "I want you to know that even though you are no longer with me, I still think about and miss you so much my superhero...",
      "Loving you was the only feeling I never want to forget or lose 💫.",
      "You are my first thought when I wake up and the last thought when I go to sleep. I cannot describe how much I'm in love with you; it's simply indescribable ❤.",
      "I loved you, I love you, and I will love you until I die, and if there's a life after that, I love you then.",
      "Miss you so much 😭"
    ];
  
    const quoteContainer = document.getElementById('quote-container');
  
    quotes.forEach(quote => {
      const p = document.createElement('p');
      p.textContent = quote;
      quoteContainer.appendChild(p);
    });
  });
  