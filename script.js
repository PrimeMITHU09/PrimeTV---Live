const PROXY = 'https://primetv-proxy.primetvlive.workers.dev/?url=';

const channelsData = {
    bangla: [
        { name: "Sangshod TV", type: "National", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" },
        { name: "Channel-1", type: "News", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
        { name: "Channel 24", type: "News", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
        { name: "Independent TV", type: "News", url: "https://www.youtube.com/embed/wp2rwNZucNY?autoplay=1&mute=1" },
        { name: "Jamuna TV", type: "News", url: "https://www.youtube.com/embed/hOX0_kkHpmI?autoplay=1&mute=1" },
        { name: "ATN NEWS [BD]", type: "News", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/1706.m3u8" },
        { name: "Deepto TV", type: "Entertainment", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8" },
        { name: "Maasranga Tv", type: "Entertainment", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
        { name: "Channel 9", type: "Entertainment", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8" },
        { name: "SOMOY TV", type: "News", url: "https://www.youtube.com/embed/5pDFyZdtvKY?autoplay=1&mute=1" },
        { name: "Star News", type: "News", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/1710-audio_113402_eng=113200-video=3224800.m3u8" },
        { name: "Ekattor TV", type: "News", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/1705.m3u8" }
    ],
    news: [
        { name: "Al Jazeera", type: "News", url: "https://live-hls-web-aje-fa.getaj.net/AJE/index.m3u8" },
        { name: "BBC News", type: "News", url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pservices:simulcast:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8" }
    ],
    sports: [
        { name: "T-Sports 1 (Server 1)", type: "Sports", url: PROXY + encodeURIComponent("http://198.195.239.50:8095/tsports/tracks-v1a1/mono.m3u8") },
        { name: "T-Sports 2 (Server 2)", type: "Sports", url: PROXY + encodeURIComponent("http://114.130.57.233:8080/T-Sports/tracks-v1a1/mono.m3u8?token=SkQuhAXZxgBan1") },
        { name: "T-Sports 3 (Server 3)", type: "Sports", url: PROXY + encodeURIComponent("http://ubuntu.moonplex.net:8080/TSports_HD/index.m3u8") },
        { name: "T-Sports 4 (Server 4)", type: "Sports", url: "https://tvsen7.aynaott.com/tsports-hd/index.m3u8" },
        { name: "Star Sports 1", type: "Sports", url: PROXY + encodeURIComponent("http://tvn1.chowdhury-shaheb.com/starsport1/index.m3u8") },
        { name: "Star Sports 2", type: "Sports", url: PROXY + encodeURIComponent("http://tvn1.chowdhury-shaheb.com/starsport2/index.m3u8") },
        { name: "Sony Sports 1 HD", type: "Sports", url: "https://tvsen7.aynaott.com/tsports-hd/index.m3u8" },
        { name: "PTV Sports", type: "Sports", url: PROXY + encodeURIComponent("http://198.195.239.50:8095/PTV-kutta/video.m3u8") }
    ],
    hindi: [
        { name: "Star Jalsha HD", type: "Entertainment", url: "https://yupptvcatchupire.yuppcdn.net/preview/starjalsha/1800.m3u8" },
        { name: "Colors Bangla", type: "Entertainment", url: PROXY + encodeURIComponent("http://198.195.239.50:8095/ColorsBanglaChinema/tracks-v1a1/mono.m3u8") },
        { name: "Sony Aath", type: "Entertainment", url: "https://stream.ottplus.bd/live/sony_aath_abr/live/sony_aath_720/chunks.m3u8" },
        { name: "&PICTURES HD", type: "Movies", url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/ColorsHD/default/ColorsHD.m3u8" },
        { name: "Star Gold HD", type: "Movies", url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/ColorsHD/default/ColorsHD.m3u8" },
        { name: "Zee Bangla HD", type: "Entertainment", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" }
    ]
};


const navItems = document.querySelectorAll('.nav-links li');
const grid = document.getElementById('channels-grid');
const categoryTitle = document.getElementById('current-category-title');

function renderChannels(category) {
    grid.innerHTML = '';
    const channels = channelsData[category] || [];
    
    // Capitalize category name for title
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Channels';
    
    channels.forEach((channel, index) => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.style.animation = `fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${index * 0.05}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <div class="live-badge">LIVE</div>
            <div class="channel-icon">
                <i class="fa-solid ${channel.icon || 'fa-tv'}"></i>
            </div>
            <h3>${channel.name}</h3>
            <p>${channel.type}</p>
        `;
        
        card.addEventListener('click', () => {
            const playerArea = document.querySelector('.player-placeholder');
            
            // Show loading state
            playerArea.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin pulse-icon" style="animation: none;"></i>
                <h2>Loading ${channel.name}...</h2>
                <p>Connecting to secure stream...</p>
            `;
            
            // Scroll to top to see player smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Simulate connection delay then show player UI
            setTimeout(() => {
                const streamUrl = channel.url || '';
                
                if (!streamUrl) {
                    playerArea.innerHTML = `
                        <div style="width: 100%; height: 100%; background: #111; border-radius: 12px; display: flex; align-items:center; justify-content:center; flex-direction:column; color:#ef4444; position: relative;">
                            <i class="fa-solid fa-triangle-exclamation" style="font-size: 4rem; margin-bottom: 15px;"></i>
                            <h2>Server Offline</h2>
                            <p style="color: var(--text-muted); margin-top: 10px;">This channel stream is currently unavailable.</p>
                        </div>
                    `;
                    return;
                }

                // Support for iframe-based players (like YouTube or redforce.live)
                if (streamUrl.includes('player.php') || streamUrl.includes('iframe') || streamUrl.includes('youtube.com') || streamUrl.includes('youtu.be')) {
                    playerArea.innerHTML = `
                        <div style="position: relative; width: 100%; height: 100%;">
                            <div class="live-badge" style="top: 15px; left: 15px; right: auto; z-index: 10;">LIVE</div>
                            <iframe src="${streamUrl}" style="width: 100%; height: 100%; border-radius: 12px; border: none; background: #000;" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
                        </div>
                    `;
                    return;
                }

                playerArea.innerHTML = `
                    <div style="position: relative; width: 100%; height: 100%;">
                        <div class="live-badge" style="top: 15px; left: 15px; right: auto; z-index: 10;">LIVE</div>
                        <video id="hls-video" controls autoplay muted style="width: 100%; height: 100%; border-radius: 12px; object-fit: cover; background: #000;"></video>
                        <div id="player-error" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #111; border-radius: 12px; align-items:center; justify-content:center; flex-direction:column; color:#ef4444; z-index: 20;">
                            <i class="fa-solid fa-triangle-exclamation" style="font-size: 4rem; margin-bottom: 15px;"></i>
                            <h2>Server Offline</h2>
                            <p style="color: var(--text-muted); margin-top: 10px;">Connection to server failed.</p>
                        </div>
                    </div>
                `;
                
                const video = document.getElementById('hls-video');
                const errorUI = document.getElementById('player-error');
                
                if (Hls.isSupported()) {
                    const hls = new Hls({
                        maxBufferLength: 60,
                        maxMaxBufferLength: 120,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 10,
                        enableWorker: true
                    });
                    hls.loadSource(streamUrl);
                    hls.attachMedia(video);
                    
                    hls.on(Hls.Events.MANIFEST_PARSED, function() {
                        video.play().catch(e => console.log("Autoplay prevented:", e));
                    });
                    
                    hls.on(Hls.Events.ERROR, function (event, data) {
                        if (data.fatal) {
                            switch (data.type) {
                                case Hls.ErrorTypes.NETWORK_ERROR:
                                case Hls.ErrorTypes.MEDIA_ERROR:
                                    hls.destroy();
                                    video.style.display = 'none';
                                    errorUI.style.display = 'flex';
                                    break;
                                default:
                                    hls.destroy();
                                    break;
                            }
                        }
                    });
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    // For Safari
                    video.src = streamUrl;
                    video.addEventListener('loadedmetadata', function() {
                        video.play().catch(e => console.log("Autoplay prevented:", e));
                    });
                    video.addEventListener('error', function() {
                        video.style.display = 'none';
                        errorUI.style.display = 'flex';
                    });
                }
            }, 800);
        });
        
        grid.appendChild(card);
    });
}

// Add keyframes for fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Add event listeners to navigation items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked
        item.classList.add('active');
        
        const category = item.getAttribute('data-category');
        renderChannels(category);
    });
});

// Initial render for Bangla category
renderChannels('bangla');

// Dynamic Active User Count (Random Simulation)
const userCountEl = document.getElementById('active-user-count');
if (userCountEl) {
    let currentUsers = 1245; // Start value
    
    setInterval(() => {
        // Random fluctuation between -15 and +25
        const fluctuation = Math.floor(Math.random() * 41) - 15;
        currentUsers += fluctuation;
        
        // Keep it realistic between 400 and 1500 (per your request)
        if (currentUsers < 400) currentUsers = 400 + Math.floor(Math.random() * 50);
        if (currentUsers > 1500) currentUsers = 1500 - Math.floor(Math.random() * 50);
        
        userCountEl.textContent = currentUsers.toLocaleString();
    }, 4500); // update every 4.5 seconds
}

// Real Visit Counter using CounterAPI (free, no signup needed)
const realCountEl = document.getElementById('real-user-count');
if (realCountEl) {
    // Each page load increments the count by 1
    fetch('https://api.counterapi.dev/v1/primetvlive/totalvisits/up', { mode: 'cors' })
        .then(res => res.json())
        .then(data => {
            if (data && data.count !== undefined) {
                realCountEl.textContent = data.count.toLocaleString();
            }
        })
        .catch(() => {
            // Fallback: just fetch without incrementing
            fetch('https://api.counterapi.dev/v1/primetvlive/totalvisits', { mode: 'cors' })
                .then(res => res.json())
                .then(data => {
                    if (data && data.count !== undefined) {
                        realCountEl.textContent = data.count.toLocaleString();
                    }
                })
                .catch(() => {
                    realCountEl.textContent = '--';
                });
        });
}
