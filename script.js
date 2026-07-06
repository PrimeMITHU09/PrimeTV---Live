const PROXY = 'https://primetvlive.primetvlive.workers.dev/?url=';

const channelsData = {
    sports: [
        { name: "T Sports HD (Server 1)", type: "Sports", url: "https://tvsen7.aynaott.com/tsports-hd/tracks-v1a1/mono.ts.m3u8" },
        { name: "T Sports Live (Server 2)", type: "Sports", url: "http://198.195.239.50:8095/Tsports/tracks-v1a1/mono.m3u8" },
        { name: "FIFA World Cup (Server 1)", type: "Sports", url: "https://next.badinan.xyz/nexttv/FHD/playlist.m3u8" },
        { name: "FIFA World Cup (Server 2)", type: "Sports", url: "https://kazimmt.ami.bd/playlist/TF/TF-1.m3u8" },
        { name: "FIFA World Cup (Server 3)", type: "Sports", url: "http://66.102.126.10:8000/play/a018/index.m3u8" },
        { name: "FIFA World Cup (Server 4)", type: "Sports", url: "https://xclive.yarncdn.live/live/xctv_blv_tholan/playlist.m3u8" },
        { name: "FIFA World Cup (Server 5)", type: "Sports", url: "https://andro.226503.xyz/checklist/androstreamlivebs1.m3u8" },
        { name: "FIFA World Cup (Server 6)", type: "Sports", url: "https://live05.koepgd.app/live/24561735.m3u8" },
        { name: "T Sports App Link 1", type: "Sports", url: "https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8" },
        { name: "T Sports App Link 2", type: "Sports", url: "https://live.tsports.com/mobile_hls/tsports_live_3/playlist.m3u8" }
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

                let finalStreamUrl = streamUrl;
                if (streamUrl.startsWith('http://')) {
                    finalStreamUrl = PROXY + encodeURIComponent(streamUrl);
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
                        <video id="hls-video" controls autoplay style="width: 100%; height: 100%; border-radius: 12px; object-fit: contain; background: #000;"></video>
                        <div id="player-error" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #111; border-radius: 12px; align-items:center; justify-content:center; flex-direction:column; color:#ef4444; z-index: 20;">
                            <i class="fa-solid fa-triangle-exclamation" style="font-size: 4rem; margin-bottom: 15px;"></i>
                            <h2>Server Offline</h2>
                            <p style="color: var(--text-muted); margin-top: 10px;">Connection to server failed.</p>
                        </div>
                    </div>
                `;
                
                const video = document.getElementById('hls-video');
                const errorUI = document.getElementById('player-error');
                
                // Initialize Plyr for a premium, normal floating UI experience
                const player = new Plyr(video, {
                    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'fullscreen']
                });
                
                if (Hls.isSupported()) {
                    const hls = new Hls({
                        lowLatencyMode: true, // Enable aggressive low latency
                        liveSyncDurationCount: 1, // Stay extremely close to the live edge (reduces delay)
                        liveMaxLatencyDurationCount: 3, // Auto-seek if it falls 3 segments behind
                        maxBufferLength: 10, // Buffer less into the future to force real-time
                        maxMaxBufferLength: 30,
                        enableWorker: true
                    });
                    hls.loadSource(finalStreamUrl);
                    hls.attachMedia(video);
                    
                    hls.on(Hls.Events.MANIFEST_PARSED, function() {
                        // Force highest quality (HD) by finding the level with the highest bitrate
                        if (hls.levels && hls.levels.length > 0) {
                            let maxIndex = 0;
                            let maxBitrate = 0;
                            hls.levels.forEach((level, index) => {
                                if (level.bitrate > maxBitrate) {
                                    maxBitrate = level.bitrate;
                                    maxIndex = index;
                                }
                            });
                            hls.currentLevel = maxIndex; // Set to highest quality instead of Auto
                        }
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
                    video.src = finalStreamUrl;
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

// Initial render for Sports category
renderChannels('sports');
