const resources = {
    memes: [
        {
            name: "Reddit - r/memes",
            description: "The internet's largest meme community with fresh content daily",
            url: "https://www.reddit.com/r/memes"
        },
        {
            name: "9GAG",
            description: "Fun off the internet - memes, funny pics, GIFs and videos",
            url: "https://9gag.com"
        },
        {
            name: "Imgur",
            description: "Discover and share the internet's best memes and images",
            url: "https://imgur.com"
        },
        {
            name: "Know Your Meme",
            description: "Database documenting Internet phenomena and meme origins",
            url: "https://knowyourmeme.com"
        },
        {
            name: "Memedroid",
            description: "Best memes and funny pics updated daily",
            url: "https://www.memedroid.com"
        },
        {
            name: "iFunny",
            description: "Popular meme app with fresh content and community features",
            url: "https://ifunny.co"
        },
        {
            name: "Imgflip Meme Generator",
            description: "Create your own memes with popular templates",
            url: "https://imgflip.com/memegenerator"
        },
        {
            name: "Reddit - r/dankmemes",
            description: "Dankest memes from across the internet",
            url: "https://www.reddit.com/r/dankmemes"
        }
    ],
    comedy: {
        "new-york": [
            {
                name: "Comedy Cellar",
                description: "Legendary Greenwich Village comedy club featuring top comedians",
                url: "https://www.comedycellar.com"
            },
            {
                name: "Caroline's on Broadway",
                description: "Times Square comedy club with A-list performers",
                url: "https://www.carolines.com"
            },
            {
                name: "Stand Up NY",
                description: "Upper West Side comedy club with nightly shows",
                url: "https://standupny.com"
            }
        ],
        "los-angeles": [
            {
                name: "The Comedy Store",
                description: "Historic Sunset Strip venue where legends perform",
                url: "https://www.thecomedystore.com"
            },
            {
                name: "The Laugh Factory",
                description: "Hollywood comedy institution since 1979",
                url: "https://www.laughfactory.com"
            },
            {
                name: "The Improv",
                description: "Legendary comedy club on Melrose Avenue",
                url: "https://improv.com/hollywood"
            }
        ],
        "chicago": [
            {
                name: "Second City",
                description: "World-renowned improv and sketch comedy theater",
                url: "https://www.secondcity.com"
            },
            {
                name: "Zanies Comedy Club",
                description: "Chicago's premier stand-up comedy venue",
                url: "https://www.chicago.zanies.com"
            },
            {
                name: "The Laugh Track",
                description: "Schaumburg's comedy destination",
                url: "https://www.thelaughtrack.com"
            }
        ],
        "san-francisco": [
            {
                name: "Cobb's Comedy Club",
                description: "San Francisco's premier comedy venue at Fisherman's Wharf",
                url: "https://www.cobbscomedy.com"
            },
            {
                name: "Punch Line San Francisco",
                description: "Historic comedy club in the Financial District",
                url: "https://punchlinecomedyclub.com"
            }
        ],
        "boston": [
            {
                name: "Nick's Comedy Stop",
                description: "Boston's original comedy club",
                url: "https://www.nickscomedystop.com"
            },
            {
                name: "Laugh Boston",
                description: "Seaport District's premier comedy venue",
                url: "https://www.laughboston.com"
            }
        ],
        "austin": [
            {
                name: "Cap City Comedy Club",
                description: "Austin's home for stand-up comedy",
                url: "https://www.capcitycomedy.com"
            },
            {
                name: "The Creek and The Cave",
                description: "Comedy venue with multiple shows nightly",
                url: "https://www.creekandcave.com/austin"
            }
        ],
        "seattle": [
            {
                name: "The Comedy Underground",
                description: "Pioneer Square's comedy destination",
                url: "https://www.comedyunderground.com"
            },
            {
                name: "Laughs Comedy Club",
                description: "Seattle's newest comedy hotspot",
                url: "https://www.laughsseattle.com"
            }
        ],
        "denver": [
            {
                name: "Comedy Works",
                description: "Denver's premier comedy club since 1981",
                url: "https://www.comedyworks.com"
            }
        ],
        "atlanta": [
            {
                name: "Punchline Atlanta",
                description: "Atlanta's comedy landmark in Sandy Springs",
                url: "https://punchline.com/atlanta"
            },
            {
                name: "Dad's Garage",
                description: "Improv comedy theater in Old Fourth Ward",
                url: "https://dadsgarage.com"
            }
        ],
        "portland": [
            {
                name: "Helium Comedy Club",
                description: "Portland's premier stand-up comedy venue",
                url: "https://portland.heliumcomedy.com"
            }
        ]
    },
    jokes: [
        {
            name: "JokeAPI",
            description: "Free REST API for jokes with multiple categories",
            url: "https://jokeapi.dev"
        },
        {
            name: "Dad Jokes API",
            description: "The internet's largest collection of dad jokes",
            url: "https://icanhazdadjoke.com"
        },
        {
            name: "Reddit - r/Jokes",
            description: "Community-driven joke sharing platform",
            url: "https://www.reddit.com/r/jokes"
        },
        {
            name: "Joke of the Day",
            description: "Daily clean jokes and humor",
            url: "https://www.jokeoftheday.com"
        },
        {
            name: "Reader's Digest Jokes",
            description: "Clean, family-friendly jokes and humor",
            url: "https://www.rd.com/jokes"
        },
        {
            name: "The Oatmeal",
            description: "Comics, quizzes, and stories with humor",
            url: "https://theoatmeal.com"
        }
    ],
    entertainment: [
        {
            name: "Fandango",
            description: "Movie tickets and showtimes for theaters nationwide",
            url: "https://www.fandango.com"
        },
        {
            name: "Ticketmaster",
            description: "Tickets for concerts, sports, theater, and more",
            url: "https://www.ticketmaster.com"
        },
        {
            name: "StubHub",
            description: "Buy and sell tickets for sports, concerts, and theater",
            url: "https://www.stubhub.com"
        },
        {
            name: "Eventbrite",
            description: "Discover local events and entertainment",
            url: "https://www.eventbrite.com"
        },
        {
            name: "Yelp Events",
            description: "Find local events, festivals, and entertainment",
            url: "https://www.yelp.com/events"
        },
        {
            name: "Meetup",
            description: "Join local groups and attend events",
            url: "https://www.meetup.com"
        },
        {
            name: "Bandsintown",
            description: "Concert dates and live music events",
            url: "https://www.bandsintown.com"
        },
        {
            name: "Broadway.com",
            description: "Broadway shows, tickets, and news",
            url: "https://www.broadway.com"
        }
    ]
};

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why can't a leopard play hide and seek? Because he's always spotted!",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
    "Why did the cookie go to the doctor? Because it felt crumbly!",
    "What do you call a bear in the rain? A drizzly bear!"
];

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.innerHTML = `
        <h3>${resource.name}</h3>
        <p>${resource.description}</p>
        <a href="#" class="resource-link" data-url="${resource.url}">
            Visit Site →
        </a>
    `;
    
    const link = card.querySelector('.resource-link');
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        await window.electronAPI.openExternal(resource.url);
    });
    
    return card;
}

function renderMemes() {
    const grid = document.getElementById('memesGrid');
    grid.innerHTML = '';
    resources.memes.forEach(resource => {
        grid.appendChild(createResourceCard(resource));
    });
}

function renderComedy(city) {
    const grid = document.getElementById('comedyGrid');
    grid.innerHTML = '';
    
    if (!city || !resources.comedy[city]) {
        grid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; width: 100%;">Please select a city to view comedy clubs</p>';
        return;
    }
    
    resources.comedy[city].forEach(resource => {
        grid.appendChild(createResourceCard(resource));
    });
}

function renderJokes() {
    const grid = document.getElementById('jokesGrid');
    grid.innerHTML = '';
    resources.jokes.forEach(resource => {
        grid.appendChild(createResourceCard(resource));
    });
}

function renderEntertainment() {
    const grid = document.getElementById('entertainmentGrid');
    grid.innerHTML = '';
    resources.entertainment.forEach(resource => {
        grid.appendChild(createResourceCard(resource));
    });
}

function getRandomJoke() {
    const jokeArea = document.getElementById('jokeArea');
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeArea.textContent = randomJoke;
    jokeArea.style.animation = 'none';
    setTimeout(() => {
        jokeArea.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

function searchResources(query) {
    if (!query) {
        renderCurrentTab();
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active').id;
    let filtered = [];
    
    switch(activeTab) {
        case 'memes':
            filtered = resources.memes.filter(r => 
                r.name.toLowerCase().includes(lowerQuery) || 
                r.description.toLowerCase().includes(lowerQuery)
            );
            const grid = document.getElementById('memesGrid');
            grid.innerHTML = '';
            filtered.forEach(resource => {
                grid.appendChild(createResourceCard(resource));
            });
            break;
        case 'jokes':
            filtered = resources.jokes.filter(r => 
                r.name.toLowerCase().includes(lowerQuery) || 
                r.description.toLowerCase().includes(lowerQuery)
            );
            const jokesGrid = document.getElementById('jokesGrid');
            jokesGrid.innerHTML = '';
            filtered.forEach(resource => {
                jokesGrid.appendChild(createResourceCard(resource));
            });
            break;
        case 'entertainment':
            filtered = resources.entertainment.filter(r => 
                r.name.toLowerCase().includes(lowerQuery) || 
                r.description.toLowerCase().includes(lowerQuery)
            );
            const entertainmentGrid = document.getElementById('entertainmentGrid');
            entertainmentGrid.innerHTML = '';
            filtered.forEach(resource => {
                entertainmentGrid.appendChild(createResourceCard(resource));
            });
            break;
    }
}

function renderCurrentTab() {
    const activeTab = document.querySelector('.tab-content.active').id;
    switch(activeTab) {
        case 'memes':
            renderMemes();
            break;
        case 'comedy':
            const selectedCity = document.getElementById('citySelect').value;
            renderComedy(selectedCity);
            break;
        case 'jokes':
            renderJokes();
            break;
        case 'entertainment':
            renderEntertainment();
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMemes();
    renderJokes();
    renderEntertainment();
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            renderCurrentTab();
        });
    });
    
    document.getElementById('citySelect').addEventListener('change', (e) => {
        renderComedy(e.target.value);
    });
    
    document.getElementById('getJokeBtn').addEventListener('click', getRandomJoke);
    
    document.getElementById('searchBtn').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        searchResources(query);
    });
    
    document.getElementById('searchInput').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchResources(e.target.value);
        }
    });
    
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        document.getElementById('themeToggle').textContent = isLight ? '☀️' : '🌙';
    });
    
    document.getElementById('findEntertainmentBtn').addEventListener('click', () => {
        const location = document.getElementById('locationInput').value;
        if (location) {
            const searchUrl = `https://www.google.com/search?q=entertainment+venues+near+${encodeURIComponent(location)}`;
            window.electronAPI.openExternal(searchUrl);
        }
    });
    
    getRandomJoke();
});