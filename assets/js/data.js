// Game Database System
// Pure English, Dynamic Data - Using REAL lagged.com images

(function() {
    // Game Data - 40 Games with REAL lagged.com thumbnails
    const gamesData = [
        // ========== SECTION 1: NEW GAMES (COMPLETELY NEW!) ==========
        {
            id: 1,
            title: "Suika Game",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/suika-game-watermelon-ft32.png",
            plays: 9200000,
            likes: 72000,
            featured: true,
            isNew: true,
            description: "Drop fruits and merge them! Combine matching fruits to create bigger ones and fill the container."
        },
        {
            id: 2,
            title: "FNAF",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/fnaf-original-game-ft.png",
            plays: 11800000,
            likes: 89000,
            featured: true,
            isNew: true,
            description: "Survive the night with deadly animatronics! Monitor cameras and keep the doors closed."
        },
        {
            id: 3,
            title: "Hello Neighbor",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/hello-neighbor-game.png",
            plays: 8600000,
            likes: 65000,
            featured: true,
            isNew: true,
            description: "Sneak into your neighbor's house! Solve puzzles and avoid detection in this stealth game."
        },
        {
            id: 4,
            title: "Baldi Basics",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/baldi-basics-classic-game-ft.png",
            plays: 7400000,
            likes: 55000,
            featured: true,
            isNew: true,
            description: "Answer math questions correctly! But be careful - the rules keep changing!"
        },
        {
            id: 5,
            title: "Scary Neighbor",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/scary-neightbor-online-ft.png",
            plays: 5800000,
            likes: 43000,
            featured: false,
            isNew: true,
            description: "Escape from the scary neighbor! Hide and run to survive this horror adventure."
        },
        {
            id: 6,
            title: "Evil Granny",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/evil-granny-new-gameft.png",
            plays: 9200000,
            likes: 68000,
            featured: false,
            isNew: true,
            description: "Escape from evil granny's house! Sneak around and avoid getting caught."
        },
        {
            id: 7,
            title: "Granny 3",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/granny-game-3-ft13.png",
            plays: 10500000,
            likes: 78000,
            featured: false,
            isNew: true,
            description: "Face multiple grannies in this horror challenge! Solve puzzles and escape alive."
        },
        {
            id: 8,
            title: "Roblox",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/roblox-game-ft.png",
            plays: 15600000,
            likes: 115000,
            featured: false,
            isNew: true,
            description: "Play thousands of games in Roblox! Run, build, and explore in this massive platform."
        },

        // ========== SECTION 2: Only on Lagged ==========
        {
            id: 9,
            title: "Blob Opera",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/blob-opera-game-ft2.png",
            plays: 9800000,
            likes: 72000,
            featured: true,
            isHot: true,
            description: "Create music with colorful blob characters! Touch and drag to produce different musical notes."
        },
        {
            id: 10,
            title: "Poppy Playtime",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/poppy-playtime-big.png",
            plays: 11500000,
            likes: 85000,
            featured: true,
            isHot: true,
            description: "Explore the mysterious toy factory! Solve puzzles and uncover secrets in this horror game."
        },
        {
            id: 11,
            title: "Magic Piano Tiles",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/magic-piano-tiles-ft17.png",
            plays: 9300000,
            likes: 71000,
            featured: true,
            isHot: true,
            description: "Play beautiful piano melodies! Tap the black tiles to create amazing music."
        },
        {
            id: 12,
            title: "Thief Puzzle",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/thief-puzzle-game-online-big.png",
            plays: 8200000,
            likes: 62000,
            featured: true,
            isHot: true,
            description: "Help the thief pass all obstacles! Think creatively to solve tricky puzzles."
        },
        {
            id: 13,
            title: "Cat Dentist",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/cat-dentist-game-ft.png",
            plays: 3900000,
            likes: 28000,
            featured: false,
            isHot: true,
            description: "Be a dentist for cute cats! Fix teeth and help your feline patients feel better."
        },
        {
            id: 14,
            title: "Draw to Save",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/draw-to-save-ft-game.png",
            plays: 4600000,
            likes: 34000,
            featured: false,
            isHot: true,
            description: "Draw to save characters! Use your creativity to solve physics puzzles."
        },
        {
            id: 15,
            title: "Draw This",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/draw-this-2-game-ft.png",
            plays: 5200000,
            likes: 38000,
            featured: false,
            isHot: true,
            description: "Draw items to solve challenges! Your drawing skills are the key to winning."
        },
        {
            id: 16,
            title: "Draw The Ways",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/draw-the-ways-game-ft.png",
            plays: 4400000,
            likes: 32000,
            featured: false,
            isHot: true,
            description: "Draw paths for characters! Create routes to help them reach their destination."
        },

        // ========== SECTION 3: Games with Achievements ==========
        {
            id: 17,
            title: "GTA Style Game",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/gta-5-game20.png",
            plays: 15200000,
            likes: 98000,
            featured: true,
            isTop: true,
            description: "Experience open world action! Complete missions and explore the city in this thrilling game."
        },
        {
            id: 18,
            title: "Minecraft Classic",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/minecraft-classic-game-ft.png",
            plays: 16800000,
            likes: 120000,
            featured: true,
            isTop: true,
            description: "Build and explore the blocky world! Create amazing structures in this classic game."
        },
        {
            id: 19,
            title: "Geometry Dash",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/geo-dash-game-online46.png",
            plays: 12000000,
            likes: 88000,
            featured: true,
            isTop: true,
            description: "Navigate through geometric obstacles! Time your jumps perfectly to the beat."
        },
        {
            id: 20,
            title: "Tiles Hop",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/tiles-hop-game-ft.png",
            plays: 9200000,
            likes: 68000,
            featured: true,
            isTop: true,
            description: "Hop on tiles and reach the finish! Collect coins and unlock new balls."
        },
        {
            id: 21,
            title: "Sprunki",
            category: "puzzle",
            categoryIcon: "🧩",
            thumbnail: "https://imgs2.dab3games.com/sprunki-3864526.png",
            plays: 6200000,
            likes: 48000,
            featured: false,
            isTop: true,
            description: "Mix and match musical characters! Create unique beats and melodies in this creative game."
        },
        {
            id: 22,
            title: "World Craft",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/world-craft-2-game-ft.png",
            plays: 6400000,
            likes: 47000,
            featured: true,
            isTop: true,
            description: "Craft your own world! Build structures and explore in this creative game."
        },
        {
            id: 23,
            title: "Helix Jump",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/helix-jump-game-ft.png",
            plays: 10200000,
            likes: 75000,
            featured: true,
            isTop: true,
            description: "Jump down through spiral platforms! Bounce through gaps and reach the bottom."
        },
        {
            id: 24,
            title: "Friday Night Funkin",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/friday-night-funkin-game36.png",
            plays: 8700000,
            likes: 63000,
            featured: true,
            isTop: true,
            description: "Battle through music! Win rap battles by hitting the right arrows to the beat."
        },

        // ========== SECTION 4: Popular Games ==========
        {
            id: 25,
            title: "Squid Games",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/squid-games-ft-3d.png",
            plays: 14200000,
            likes: 105000,
            featured: true,
            description: "Complete challenging mini-games! Survive the deadly competition in this intense game."
        },
        {
            id: 26,
            title: "Sonic Dash",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/sonic-dash-game-ft.png",
            plays: 9800000,
            likes: 72000,
            featured: true,
            description: "Run fast with Sonic! Dash through loops and defeat enemies in this exciting game."
        },
        {
            id: 27,
            title: "Spider Rope Hero",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/spider-rope-hero-ft43.png",
            plays: 8800000,
            likes: 64000,
            featured: true,
            description: "Swing through the city as a hero! Use your rope powers to save the day."
        },
        {
            id: 28,
            title: "Bus Subway Runner",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/bus-subway-runner-game.png",
            plays: 7600000,
            likes: 56000,
            featured: true,
            description: "Run and dodge buses and subways! Collect coins and survive as long as you can."
        },
        {
            id: 29,
            title: "Om Nom Run",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/om-nom-run-ft.png",
            plays: 7800000,
            likes: 55000,
            featured: true,
            description: "Run with Om Nom! Collect candies and escape the goblins in this fun adventure."
        },
        {
            id: 30,
            title: "Barry Prison Escape",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/barry-prison-parkour-escape-ft176.png",
            plays: 7200000,
            likes: 52000,
            featured: true,
            description: "Help Barry escape from prison! Master parkour moves and avoid guards in this exciting game."
        },
        {
            id: 31,
            title: "BloxD IO",
            category: "io",
            categoryIcon: "🔵",
            thumbnail: "https://imgs2.dab3games.com/bloxd-io-game-ft23.png",
            plays: 8900000,
            likes: 67000,
            featured: true,
            description: "Compete with other players in this blocky IO game! Build, fight, and survive in the arena."
        },
        {
            id: 32,
            title: "Kour IO",
            category: "io",
            categoryIcon: "🔵",
            thumbnail: "https://imgs2.dab3games.com/kour-io-game28.png",
            plays: 7300000,
            likes: 52000,
            featured: true,
            description: "Play IO games with friends! Shoot enemies and become the best player."
        },

        // ========== SECTION 5: You Might Like ==========
        {
            id: 33,
            title: "Tall Man Run",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/tallman-runner-ft.png",
            plays: 7500000,
            likes: 58000,
            featured: false,
            description: "Grow taller and become the tall man! Absorb obstacles to grow bigger and dominate."
        },
        {
            id: 34,
            title: "Stair Race 3D",
            category: "racing",
            categoryIcon: "🏎️",
            thumbnail: "https://imgs2.dab3games.com/stair-race-3d-game-ft.png",
            plays: 5600000,
            likes: 40000,
            featured: false,
            description: "Race up the stairs! Push opponents off and be the first to reach the top."
        },
        {
            id: 35,
            title: "Traffic Run",
            category: "racing",
            categoryIcon: "🏎️",
            thumbnail: "https://imgs2.dab3games.com/traffic-run-game.png",
            plays: 5100000,
            likes: 37000,
            featured: false,
            description: "Navigate through busy traffic! Dodge cars and reach your destination safely."
        },
        {
            id: 36,
            title: "Police Car Racing",
            category: "racing",
            categoryIcon: "🏎️",
            thumbnail: "https://imgs2.dab3games.com/police-car-racing-game-ft36.png",
            plays: 4300000,
            likes: 32000,
            featured: false,
            description: "Race with police cars! Chase criminals and win exciting races."
        },
        {
            id: 37,
            title: "Ragdoll Play",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/ragdoll-playground-ft1017.png",
            plays: 7600000,
            likes: 54000,
            featured: false,
            description: "Play with physics ragdolls! Throw, bounce, and experiment with silly ragdoll characters."
        },
        {
            id: 38,
            title: "Red Impostor",
            category: "action",
            categoryIcon: "🎮",
            thumbnail: "https://imgs2.dab3games.com/red-impostor-game-ft.png",
            plays: 6800000,
            likes: 49000,
            featured: false,
            description: "Act as the impostor and deceive others! Complete tasks without getting caught."
        },
        {
            id: 39,
            title: "Cube Frenzy",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/cube-frenzy-game-ft.png",
            plays: 4500000,
            likes: 33000,
            featured: false,
            description: "Navigate through cube obstacles! Time your moves perfectly to survive."
        },
        {
            id: 40,
            title: "Rail Slide",
            category: "arcade",
            categoryIcon: "🕹️",
            thumbnail: "https://imgs2.dab3games.com/rail-slide-game-ft.png",
            plays: 3400000,
            likes: 24000,
            featured: false,
            description: "Slide along rails and collect treasures! Master your timing and reflexes."
        }
    ];

    // Categories
    const categoriesData = [
        { id: "arcade", name: "Arcade Games", icon: "🕹️", count: 15 },
        { id: "puzzle", name: "Puzzle Games", icon: "🧩", count: 8 },
        { id: "action", name: "Action Games", icon: "🎮", count: 7 },
        { id: "racing", name: "Racing Games", icon: "🏎️", count: 4 },
        { id: "sports", name: "Sports Games", icon: "⚽", count: 2 },
        { id: "io", name: ".io Games", icon: "🔵", count: 2 },
        { id: "adventure", name: "Adventure Games", icon: "🗺️", count: 2 }
    ];

    // State
    let state = {
        games: JSON.parse(JSON.stringify(gamesData)),
        categories: [...categoriesData],
        currentCategory: 'all',
        searchQuery: '',
        likedGames: [],
        currentUser: null,
        users: [
            { username: 'admin', password: 'admin123' }
        ]
    };

    // Load from localStorage
    try {
        const saved = localStorage.getItem('lagged_game_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            // Use saved games if available (preserve admin changes)
            if (parsed.games && parsed.games.length > 0) {
                state.games = parsed.games;
            }
        }
    } catch (e) {}

    // Save to localStorage
    function saveState() {
        try {
            localStorage.setItem('lagged_game_state', JSON.stringify({
                games: state.games,
                likedGames: state.likedGames,
                currentUser: state.currentUser,
                users: state.users
            }));
        } catch (e) {}
    }

    // GameDB API
    window.GameDB = {
        getGames() {
            return state.games;
        },

        getGameById(id) {
            return state.games.find(g => g.id === id);
        },

        getCategories() {
            return state.categories;
        },

        getCurrentCategory() {
            return state.currentCategory;
        },

        setCategory(category) {
            state.currentCategory = category;
        },

        setSearch(query) {
            state.searchQuery = query.toLowerCase();
        },

        getFilteredGames() {
            let filtered = [...state.games];

            if (state.currentCategory !== 'all') {
                filtered = filtered.filter(g => g.category === state.currentCategory);
            }

            if (state.searchQuery) {
                filtered = filtered.filter(g =>
                    g.title.toLowerCase().includes(state.searchQuery) ||
                    g.description.toLowerCase().includes(state.searchQuery)
                );
            }

            return filtered;
        },

        isLiked(gameId) {
            return state.likedGames.includes(gameId);
        },

        toggleLike(gameId) {
            const idx = state.likedGames.indexOf(gameId);
            const game = this.getGameById(gameId);
            if (idx === -1) {
                state.likedGames.push(gameId);
                if (game) game.likes++;
            } else {
                state.likedGames.splice(idx, 1);
                if (game) game.likes--;
            }
            saveState();
        },

        incrementPlays(gameId) {
            const game = this.getGameById(gameId);
            if (game) {
                game.plays++;
                saveState();
            }
        },

        // Admin functions
        addGame(game) {
            game.id = Date.now();
            state.games.push(game);
            saveState();
            return game;
        },

        updateGame(id, updates) {
            const idx = state.games.findIndex(g => g.id === id);
            if (idx !== -1) {
                state.games[idx] = { ...state.games[idx], ...updates };
                saveState();
                return state.games[idx];
            }
            return null;
        },

        deleteGame(id) {
            state.games = state.games.filter(g => g.id !== id);
            saveState();
        },

        getCurrentUser() {
            return state.currentUser;
        },

        login(username, password) {
            const user = state.users.find(u => u.username === username && u.password === password);
            if (user) {
                state.currentUser = username;
                saveState();
                return true;
            }
            return false;
        },

        signup(username, password) {
            if (state.users.find(u => u.username === username)) {
                return false;
            }
            state.users.push({ username, password });
            state.currentUser = username;
            saveState();
            return true;
        },

        logout() {
            state.currentUser = null;
            saveState();
        }
    };
})();
