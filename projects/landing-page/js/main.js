// DOM elements
const time = document.getElementById('time'),
    date = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    quote = document.getElementById('quote');

let quotes = [
    "If you are nothing without the suit, then you don't deserve it.   -Tony Stark",
    'Small minds discuss people. Average minds discuss events. Great minds discuss ideas.   -Eleanor Roosevelt',
    'Think about what happened. Think about what could have happened. Think about what still can happen.   -Negan (The Walking Dead)',
    'Beneath this mask there is more than flesh, beneath this mask there is an idea, Mr.Creedy, and ideas are bulletproof.   -V for Vendetta',
    'I eat to live, I do not live to eat.   -Yisreal Kristal',
    'Sometimes we reach our destiny on the very road we took to avoid it.   -Oogway (Kung Fu Panda)',
    'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.   -Oogway (Kung Fu Panda)',
    'Your mind is like water. Once agitated it becomes hard to see, but if you let it settle, the answer becomes clear.   -Oogway (Kung Fu Panda)',
    'Everything in moderation, including moderation.   -Oscar Wilde',
    "You can lead a horse to water, but you can't make it drink.   -John Heywood",
    'Enthusiasm is common. Endurance is rare.   -Kevin Jubbal',
    'An investment in knowledge always pays the best interest.   -Benjamin Franklin',
    "One's best success comes after their greatest disappointments.   -Henry Ward Beecher",
    'Not all who wander are lost.   -J.R.R. Tolkien',
    "It's those who start with why who have the ability to inspire those around them, or find others who inspire them.   -Simon Sinek",
    'Leaders eat last.   -Simon Sinek',
    'Leadership is not a rank. Leadership is not a position. Leadership is a decision. Leadership is a choice.   -Simon Sinek',
    'Generosity is doing something for someone else and expecting nothing in return.   -Simon Sinek',
    "Don't think you are, know you are.   -Morpheus (The Matrix)",
    'There is a last time for everything.   -John Pfeiffer',
    "I think everybody should get rich and famous and get everything they dreamed so they can see that's not the answer.   -Jim Carrey",
    "You can fail at what you don't want, so you might as well take a chance on what you love.   -Jim Carrey",
    'Nothing is worth more than this day.   -Kathryn & Ross Petras',
    'Every quarterback can throw a ball; every running back can run; every receiver is fast; but that mental toughness translates into competitiveness.   -Tom Brady',
    'Concentration and mental toughness are the margins of victory.   -Bill Russell',
    'Wherever you go, take yourself with you.   -Neil Gaiman',
    'A high tide raises all boats.   -John Beilein',
    "Others may hate you, but those who hate you don't win unless you hate them. And then you destroy yourself.   -Richard Nixon",
    'The easiest job in the kitchen is to stir the pot.   -Shannon Sharpe',
    'The greatest love of all is to love yourself.   -Whitney Housten',
    "Don't box yourself in from others, your desires, or yourself. Hamna Hassan",
    'The difference between a little money and no money at all is enormous, and the difference between a little money and an enormous amount of money is very slight.   -Thornton Wilder',
    'Slow down, and everything you are chasing will come around and catch you.   -John De Paola',
    "Meaning lies in us. When we attach value to things that aren't love   - the money, the car, the house, the prestige   - we are loving things that can't love us back.   -Marianne Williamson",
    'When we are grateful for the good we already have, we attract more good into our life.   -Margaret Stortz',
    'All suffering is caused by our desires.   -Buddah',
    'Wanting a positive experience is a negative experience. Accepting a negative experience is a positive experience.   -Alan Watts',
    'The meaning of life is living on the border between chaos and order.   -Jordan Peterson',
    "Tell the truth and let whatever happens happen. It's an adventure!   -Jordan Peterson",
    'The more responsibility you take on, the more meaning your life has.   -Jordan Peterson',
    'I would rather be getting better than be better.   -Jordan Peterson',
    'Facing the unknown and frightening is attractive.   -Jordan Peterson',
    'You see what you aim at.   -Jordan Peterson',
    'Pay attention to others and your weaknesses.   -Jordan Peterson',
    'What remarkably stupid things are you doing on a regular basis to screw up your life?   -Jordan Peterson',
    'Good friends listen to bad news and help celebrate good news.   -Jordan Peterson',
    'Life is brutal and tragic, but there is something you can do today to make your self better tomorrow. Imagine if everyone did that every day.   -Jordan Peterson',
    'Malevolence is knowing the right thing to do and the wrong thing to do and actively choosing the wrong thing to do.   -Jordan Peterson',
    'Never argue with stupid people. They will drag you down to their level and beat you with experience.   -Mark Twain',
    "We don't do the things we want to do because we care more about what other people think of us than what we think of ourselves.   -Charlie Houpert",
    'Never forget that when we are silent, we are one. And when we speak, we are two.   -Indira Gandhi',
    'It is more difficult to rule yourself than to rule a city.   -New Testament',
    'My favorite day is today.   -Whinny the Pooh',
    'You are only interesting to the extent you are interested.   -Sandy Meisner',
    "All of humanity's problems stem from man's inability to sit quietly in a room alone.   -Blaise Pascal",
    'When there is no enemy within, the enemy outside can do us no harm.   -African Proverb',
    'Just keep playing.   -John Fish',
    'The purpose of the scientific method is to make sure you do not think something is true that is not, and you do not think something that is not true is.   -Neil Degrass Tyson',
    'To debate something implies that whoever is most convincing is correct. There is too much charisma involved.   -Neil Degrass Tyson',
    "The odds of being alive are so small. There's nothing you'll ever accomplish thats more remarkable than the fact that you have a chance to accomplish something.   -Gary Vaynerchuk",
    'The intent of content is the variable of success. -Gary Vaynerchuk',
    'Success is earned and re-earned every single day. -Joshua Fluke',
    "There isn't time, so brief is life, for bickerings, apologies, heartburnings, callings to account. There is only time for loving, and but an instant, so to speak, for that. -Mark Twain",
    'Roadblocks are self imposed based on judgement from other people. -Gary V',
    'Sometimes its the people no one can imagine anything of who do the things no one can imagine. -Alan Turing',
    'Rather than love, than money, thane fame, give me truth. -Henry David Thoreau',
    'We live who we believe we are. -Tony Robbins',
    'Raise your standard. -Tony Robbins',
    'Discipline weighs ounces. Regret weighs tons. -Tony Robbins',
    "Whenever you find yourself on the side of the majority, it's time to pause and reflect. -Mark Twain",
    "If it doesn't challenge you, it doesn't change you. -Fred DeVito",
    "Day by day, what you choose, what you think and what you do is who you become. -Heraclitus",
    "Gratitude can transform common days into thanksgivings, turn routine job into joy, and change ordinary opportunities into blessings. -William Arthur Ward",
    "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. -Oprah Winfrey",
    "The measure of success is happiness and peace of mind. -Bobby Davro",
    "Surround yourself with people that inspire you and you will not only grow - you will soar. -Mimi Ikonn",
    "You can rise up from anything. You can completely recreate yourself. All that matters is that you decide today and never look back. -Idil Ahmed",
    "Happiness is an inside job. Don't assign anyone else that much power over your life. -Mandy Hale",
    "Being positive in a negative situation is not naive. It is leadership. -Ralph Marston",
    "Life is an echo. What you send out comes back. What you sow you reap. What you give you get. What you see in others exists in you. -Zig Ziglar",
    "Happiness is when what you think, what you say, and what you do are in harmony. -Mahatma Gandhi",
    "If you see something beautiful in someone, speak it. -Ruthie Lindsey",
    "We all have two lives. The second one starts when we realize we only have one. -Tom Hiddleston",
    "Attention is the most basic form of love. By paying attention we let ourselves be touched by life, and our hearts naturally become more open and engaged. -Tara Brach",
    "Put your heart, mind and soul into your smallest acts. This is the secret of success. -Swami Sivananda",
    "What we do every day matters more than what we do once in a while. -Gretchen Rubin",
    "If I am not good to myself, how can I expect anyone else to be good to me? -Maya Angelou",
    "The beauty of you is how you wear who you are. -Timothy Egart",
    "Beauty is about being comfortable in your own skin. It's about knowing and accepting who you are. -Ellen Degeneres",
    "When you are grateful, fear disappears and abundance appears. -Tony Robbins",
    "Wherever you are -- be all there. -Jim Elliot",
    "Be kind, whenever possible. It is always possible. -Dalai Lama",
    "To be a star, you must shine your own light. -Napoleon Hill",
    "Today is your opportunity to build the tomorrow you want. -Ken Poirot",
    "You have to believe in yourself. That's the secret. -Charlie Chaplin",
    "When we seek to discover the best in others, we somehow bring out the best in ourselves. -William Arthur Ward",
    "Never give up, for that is just the place and time that the tide will turn. -Harriet Beecher Stowe",
    "Far too many people are looking for the right person, instead of trying to be the right person. -Gloria Steinem",
    "I keep my ideals, because in spite of everything I still believe that people are really good at heart. -Anne Frank",
    "What a wonderful life I've had! I only wish I'd realized it sooner. -Sidonie-Gabrielle Colette (135)",
    "Instead of using reasoning to come to conclusions, we use conclusions to come to reasons. -Michael Stevens"
    ];

// Show Time
function showTime() {
    let today = new Date(),
        getDate = today.toDateString(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM/PM
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    date.innerHTML = `${getDate}`;
    time.innerHTML = `${hour}<span>:</span>${addZero(
        min
    )}<span>:</span>${addZero(sec)} ${ampm}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function set() {
    let today = new Date(),
        hour = today.getHours();
    document.body.style.backgroundSize = 'cover';
    document.body.style.borderWidth = '10px';
    if (hour < 12) {
        greeting.textContent = 'Good Morning';

        if (hour < 8) {
            document.body.style.backgroundImage = "url('./img/night/one.jpg')";
            document.body.style.color = 'white';
        } else if (hour == 8) {
            document.body.style.backgroundImage =
                "url('./img/morning/lake.jpg')";
            document.body.style.color = 'white';
        } else if (hour == 9) {
            document.body.style.backgroundImage =
                "url('./img/morning/woods_1.jpg')";
            document.body.style.color = 'white';
        } else if (hour == 10) {
            document.body.style.backgroundImage =
                "url('./img/morning/woods_2.jpg')";
            document.body.style.color = 'orange';
        } else if (hour == 11) {
            document.body.style.backgroundImage =
                "url('./img/morning/woods_3.jpg')";
            document.body.style.color = 'red';
        }
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon';
        if (hour == 12) {
            document.body.style.backgroundImage =
                "url('./img/day/flowers.jpg')";
            document.body.style.color = 'blue';
        } else if (hour == 13) {
            document.body.style.backgroundImage =
                "url('./img/day/mountain.jpg')";
            document.body.style.color = 'yellow';
        } else if (hour == 14) {
            document.body.style.backgroundImage =
                "url('./img/day/pink_tree.jpg')";
            document.body.style.color = 'blue';
        } else if (hour == 15) {
            document.body.style.backgroundImage =
                "url('./img/day/desert_1.jpg')";
            document.body.style.color = 'yellow';
        } else if (hour == 16) {
            document.body.style.backgroundImage =
                "url('./img/day/desert_2.jpg')";
            document.body.style.color = 'blue';
        } else if (hour == 17) {
            document.body.style.backgroundImage = "url('./img/day/coast.jpg')";
            document.body.style.backgroundPositionY = '-275px';
            document.body.style.color = 'yellow';
        }
    } else {
        greeting.textContent = 'Good Evening';
        if (hour == 18) {
            document.body.style.backgroundImage = "url('./img/night/two.jpg')";
            document.body.style.color = 'white';
        } else if (hour == 19) {
            document.body.style.backgroundImage =
                "url('./img/night/three.jpg')";
            document.body.style.color = 'white';
        } else if (hour > 19) {
            document.body.style.backgroundImage = "url('./img/night/four.jpg')";
            document.body.style.color = 'white';
        }
    }
}

// Get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); // takes us out of the field, prevents another line of text
        }
    } else if (e.type === 'blur') {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); // takes us out of the field, prevents another line of text
        }
    } else if (e.type === 'blur') {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Set Quote
function setQuote() {
    // Some math to pick a quote based on the day using getTime()
    let dtNow = new Date();
    let offset = dtNow.getTimezoneOffset() * 60000; // automatically adjust for user timezone
    let now = dtNow.getTime() - offset;
    let day = Math.floor(now / 86400000); // The number of 'local' days since Jan 1, 1970
    quote.textContent = quotes[day % quotes.length];
}

// Run
showTime();
set();
getName();
getFocus();
setQuote();
