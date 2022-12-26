// NAVBAR SCROLL FUNCTION
function whenScrolledChangeBackgroundColor() {
  var header = document.getElementsByTagName("header")[0];
  var getStartedButton = document.querySelector(
    ".header-links.get-started_button"
  );

  var scrollValue = window.scrollY;

  if (scrollValue < 375) {
    header.classList.remove("white-background");
    getStartedButton.classList.remove("green-background");
  } else {
    header.classList.add("white-background");
    getStartedButton.classList.add("green-background");
  }
}

window.addEventListener("scroll", whenScrolledChangeBackgroundColor);

// TRENDING CARDS DATA

var trendingCardsData = [
  {
    number: "01",
    authorName: `<a href = '#'> Tom Cooper </a>`,
    title: "Ukraine War, 23 October 2022",
    publicationDate: "Oct 23",
    readingDuration: "5",
    authorPhotoSrcAttribute: "../assets/imgs/image01.jpeg",
  },
  {
    number: "02",
    authorName: `<a href="#">Arthur Hayes</a> in <a href="#">Entrepreneur's Handbook</a>`,
    title: "Comeback",
    publicationDate: "Oct 26",
    readingDuration: "24",
    authorPhotoSrcAttribute: "../assets/imgs/image02.png",
  },
  {
    number: "03",
    authorName: `<a href="#">Erin A Ross</a> in <a href="#">Slackjaw</a>`,
    title:
      "How I Learned to Love My Breasts Even Though One Is A Horcrux For Voldemort",
    publicationDate: "Oct 26",
    readingDuration: "2",
    authorPhotoSrcAttribute: "../assets/imgs/image03.jpeg",
  },
  {
    number: "04",
    authorName: `<a href="#">Frank Mastropolo</a> in <a href="#">The Riff</a>`,
    title: "The Night Paul McCartney Donned a Disguise at Fillmore East",
    publicationDate: "Oct 22",
    readingDuration: "3",
    authorPhotoSrcAttribute: "../assets/imgs/image04.png",
  },
  {
    number: "05",
    authorName: `<a href="#">Frank Andrade</a> in <a href="#">Towards Data Science</a>`,
    title: "5 Python projects to Automate Your Life: From Beginner to Advanced",
    publicationDate: "Oct 13",
    readingDuration: "6",
    authorPhotoSrcAttribute: "../assets/imgs/image05.jpeg",
  },
  {
    number: "06",
    authorName: `<a href="#">Wesley Smits</a> in <a href="#">Javascript in Plain English</a>`,
    title: "How To Make Visual Studio Code Look Amazing",
    publicationDate: "Oct 20",
    readingDuration: "7",
    authorPhotoSrcAttribute: "../assets/imgs/image06.png",
  },
];

// GLOBAL VARIABLES FOR TRENDING CARDS
var trendingCardsArea = document.getElementById("trending-cards-area");

// CREATING TRENDING CARDS USING THE DATA
var createTrendingCards = function () {
  // ! LONG WAY TO DO IT
  //   for (let i = 0; i < trendingCardsData.length; i++) {
  // 1. create trending-card div
  //     let trendingCard = document.createElement("div");
  // 2. add a class to trending-card
  //     trendingCard.className = "trending-card";
  // 3. append the card to the container
  //     trendingCardsArea.appendChild(trendingCard);
  // 4. create div for number
  //     let trendingCardNumber = document.createElement("div");
  // 5. add a class to number
  //     trendingCardNumber.className = "trending-card_number";
  // 6. edit inner text
  //     trendingCardNumber.innerText = trendingCardsData[i].number;
  // 7. append the number
  //     trendingCard.appendChild(trendingCardNumber);
  // 8. create trending card content container
  //     let trendingCardContentContainer = document.createElement("div");
  // 9. add a class to trending card content container
  //     trendingCardContentContainer.className = "trending-card_content-container";
  // 10. append the content container
  //     trendingCard.appendChild(trendingCardContentContainer);
  // 11. create author info container
  //     let trendingCardAuthorInfoContainer = document.createElement("div");
  // 12. add a class to author info container
  //     trendingCardAuthorInfoContainer.className =
  //       "trending-card_author-info-container";
  // 13. append author info container
  //     trendingCardContentContainer.appendChild(trendingCardAuthorInfoContainer);
  // 14. create author photo container
  //     let trendingCardAuthorPhotoContainer = document.createElement("div");
  // 15. add a class to image
  //     trendingCardAuthorPhotoContainer.className = "trending-card_author-photo";
  // 16. edit inner HTML
  //     trendingCardAuthorPhotoContainer.innerHTML = `<img src="${trendingCardsData[i].authorPhotoSrcAttribute}" alt="${trendingCardsData[i].authorName} profile picture">`;
  // 17. append the photo
  //     trendingCardAuthorInfoContainer.appendChild(
  //       trendingCardAuthorPhotoContainer
  //     );
  // 18. create author name
  //     let trendingCardAuthorName = document.createElement("div");
  // 19. add a class to author name
  //     trendingCardAuthorName.className = "trending-card_author-name";
  // 20. edit inner HTML
  //     trendingCardAuthorName.innerHTML = `<a href="#">${trendingCardsData[i].authorName}</a>`;
  // 21. append the author name
  //     trendingCardAuthorInfoContainer.appendChild(trendingCardAuthorName);
  // 22. create title
  //     let trendingCardTitle = document.createElement("a");
  // 23. edit inner text
  //     trendingCardTitle.innerText = trendingCardsData[i].title;
  // 24. edit href attribute
  //     trendingCardTitle.setAttribute("href", "#");
  // 25. append the title
  //     trendingCardContentContainer.appendChild(trendingCardTitle);
  // 26. create date and reading duration container
  //     let trendingCardDateAndDuration = document.createElement("div");
  // 27. add a class
  //     trendingCardDateAndDuration.className =
  //       "trending-card_date-and-reading-time";
  // 28. edit inner HTML
  //     trendingCardDateAndDuration.innerHTML = `<span>${trendingCardsData[i].publicationDate}</span>
  //          <span> · </span>
  //          <span>${trendingCardsData[i].readingDuration}</span>
  //          <i class="bi bi-stars"></i>`;
  // 29. append the container
  //     trendingCardContentContainer.appendChild(trendingCardDateAndDuration);
  //   }

  // ! The easiest way to do it
  for (card of trendingCardsData) {
    // 1. create trending-card div
    let trendingCard = document.createElement("div");
    // 2. add a class to trending-card
    trendingCard.className = "trending-card";
    // 3. append the card to the container
    trendingCardsArea.appendChild(trendingCard);
    // 4. edit inner HTML
    trendingCard.innerHTML = `<div class="trending-card_number">
                ${card.number}
            </div>
            <div class="trending-card_content-container">
                <div class="trending-card_author-info-container">
                    <div class="trending-card_author-photo">
                        <img src="${card.authorPhotoSrcAttribute}" alt="author's profile picture">
                    </div>
                    <div class="trending-card_author-name">
                        ${card.authorName} 
                    </div>
                </div>
                <a href="#">${card.title}</a>
                <div class="trending-card_date-and-reading-time">
                    <span>${card.publicationDate}</span> 
                    <span> · </span>
                    <span>${card.readingDuration} min read</span>
                    <img src="../assets/imgs/svg/star.svg" alt="star icon">
                </div>
            </div>`;
  }
};

// ESSAY CARDS DATA

var essayCardsData = [
  {
    authorName: `<a href="#">Robert Roy Britt</a>`,
    title: "How Old is Old?",
    summary:
      "What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age",
    publicationDate: "Oct 27",
    readingDuration: "5",
    topic: "Aging",
    authorPhotoSrcAttribute: "../assets/imgs/image07.jpeg",
    essayImageSrcAttribute: "../assets/imgs/image08.jpeg",
  },
  {
    authorName: `<a href="#">Taru Anniina Liikanen</a>`,
    title: "Is Taylor Swift Allowed to Speak About Fat?",
    summary: "Can you speak about your trauma if you don't look traumatized?",
    publicationDate: "Oct 24",
    readingDuration: "6",
    topic: "Health",
    authorPhotoSrcAttribute: "../assets/imgs/image09.jpeg",
    essayImageSrcAttribute: "../assets/imgs/image10.jpeg",
  },
  {
    authorName: `<a href="#">David Rodenas, Ph. D.</a>`,
    title: "Don't Screw Up, You Will Be Found Guilty",
    summary:
      "Software Engineer, yours is the right to produce high-quality work at all times, also the liability.",
    publicationDate: "Oct 15",
    readingDuration: "5",
    topic: "Software Engineering",
    authorPhotoSrcAttribute: "../assets/imgs/image11.jpeg",
    essayImageSrcAttribute: "../assets/imgs/image12.png",
  },
  {
    authorName: `<a href="#">Microsoft Design</a>`,
    title: "Leave No Trace",
    summary:
      "How product designers can break from the status quo and help our planet",
    publicationDate: "Oct 25",
    readingDuration: "11",
    topic: "Sustainability",
    authorPhotoSrcAttribute: "../assets/imgs/image13.png",
    essayImageSrcAttribute: "../assets/imgs/image14.png",
  },
  {
    authorName: `<a href="#">Scott H. Young</a>`,
    title: "Variability, Not Repetition, is the Key to Mastery",
    summary:
      "Bruce Lee is reported to have said, “I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000...",
    publicationDate: "Oct 26",
    readingDuration: "7",
    topic: "Learning",
    authorPhotoSrcAttribute: "../assets/imgs/image15.jpeg",
    essayImageSrcAttribute: "../assets/imgs/image16.jpg",
  },
  {
    authorName: `<a href="#">Paul A. DeStefano</a> in <a href="#">Human Parts</a>`,
    title: "What I Overheard as an Escape Room Actor",
    summary:
      "Lock a group of people in a room and you'll witness some surprising confessions",
    publicationDate: "Jan 18, 2020",
    readingDuration: "6",
    topic: "Experiences",
    authorPhotoSrcAttribute: "../assets/imgs/image17.png",
    essayImageSrcAttribute: "../assets/imgs/image18.jpeg",
  },
  {
    authorName: `<a href="#">Kim Scott</a>`,
    title: `6 Steps for Setting Measurable Goals to Avoid "Productivity Paranoia"`,
    summary:
      "With more people working in remote and hybrid environments than ever before, company, team and individual goals must be explicit and…",
    publicationDate: "Oct 25",
    readingDuration: "10",
    topic: "Productivity",
    authorPhotoSrcAttribute: "../assets/imgs/image19.jpeg",
    essayImageSrcAttribute: "../assets/imgs/image20.jpg",
  },
];

// GLOBAL VARIABLES FOR ESSAY CARDS
var essayCardsContainer = document.getElementById("essay-cards_container");

var createEssayCards = function () {
  for (card of essayCardsData) {
    // 1. create essay-card div
    let essayCard = document.createElement("div");
    // 2. add a class to essay-card
    essayCard.className = "essay-card";
    // 3. append the card to the container
    essayCardsContainer.appendChild(essayCard);
    // 4. edit inner HTML
    essayCard.innerHTML = `<div class="essay-card-content_container">
            <div class="essay-card_author-info">
                <div class="essay-card_author-photo">
                    <img src="${card.authorPhotoSrcAttribute}" alt="author profile photo">
                </div>
                <div class="essay-card_author-name">
                    ${card.authorName} 
                </div>
            </div>
            <div class="essay-card_text-part">
                <a href="#">${card.title}</a>
                <br>
                <br>
                <a href="#">${card.summary}</a>
            </div>
            <div class="publication-info">
                    <div>
                        <span class="essay_publication-date">${card.publicationDate}</span>
                        <span> · </span>
                        <span class="essay_reading-time">${card.readingDuration} min read</span>
                        <span> · </span>
                        <a href="#"><span class="essay_topic">${card.topic}</span></a>
                        <img src="../assets/imgs/svg/star.svg" alt="star icon">
                    </div>
                    <img src="../assets/imgs/svg/bookmark.svg" alt="bookmark icon">
            </div>
        </div>
        <div class="essay-card-photo_container">
            <img src="${card.essayImageSrcAttribute}" alt="essay image">
        </div>`;
  }
};

// GLOBAL VARIABLES FOR DISCOVER BUTTONS AND DISCOVER LINKS
var discoverButtonsContainer = document.getElementById(
  "discover-buttons_container"
);
var discoverLinksContainer = document.getElementById(
  "discover-links_container"
);

var createDiscoverButtons = function () {};
