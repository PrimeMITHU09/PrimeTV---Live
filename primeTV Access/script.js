const PROXY = 'https://primetvlive.primetvlive.workers.dev/?url=';

const channelsData = {
    sports: [
        // World Cup BD
        { name: "Football World Cup (BTV)", type: "Sports", url: "http://114.130.57.233:8080/BTV/video.m3u8?token=SkQuhAXZxgBan1" },
        { name: "Football World Cup (Somoy)", type: "Sports", url: "http://198.195.239.50:8095/somoyTv/index.m3u8" },
        { name: "Football World Cup (PTV)", type: "Sports", url: "http://198.195.239.50:8095/ptv/index.m3u8" },
        { name: "Football World Cup (Fifa-2026)", type: "Sports", url: "http://180.94.28.28:8097/Fifa-2026/index.m3u8" },
        
        // Toffee World Cup
        { name: "Toffee 1", type: "Sports", url: "https://cdn-tt.pages.dev/ch3.m3u8" },
        { name: "Toffee 2", type: "Sports", url: "https://cdn-tt.pages.dev/ch1.m3u8" },
        { name: "Toffee 3", type: "Sports", url: "https://cdn-tt.pages.dev/ch2.m3u8" },
        { name: "Toffee 4", type: "Sports", url: "https://cdn-tt.pages.dev/ch4.m3u8" },

        // Bioscope World Cup
        { name: "Bioscope", type: "Sports", url: "https://bioscope-ultra.sm-monirulislam-exp.workers.dev/bioscope.m3u8" },
        { name: "I SCREEN HD", type: "Sports", url: "https://tc-sg.rockstreamer.com/v1/019ed91616121ea540a8171c8e801f/019ed92ac80315fc600b1796d4ad8b/main.m3u8", referer: "https://iscreen.com.bd/" },

        // World Cup Global
        { name: "Unite8", type: "Sports", url: "http://198.195.239.50:8095/unt-s/video.m3u8" },
        { name: "Caze TV Brazil 🇧🇷", type: "Sports", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8" },

        // TSN
        { name: "TSN 1", type: "Sports", url: "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/748388.ts" },
        { name: "TSN 2", type: "Sports", url: "http://starhub.pro/live/farhat-3379/67897-913379/748388.ts" },

        // Previous Sport Channels
        { name: "T Sports HD", type: "Sports", url: "https://trs1.aynaott.com/tsports/index.m3u8" },
        { name: "Bein Sports 1 HD", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8" },
        { name: "beIN SPORTS 1 UHD", type: "Sports", url: "http://proxpanel.cc/h1wqD6CY/byxHYgX/707929" },
        { name: "ESPN S1", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/97/index.m3u8" },
        { name: "ESPN S2", type: "Sports", url: "http://186.33.40.97:8789/play/20" },
        { name: "FOX Sports", type: "Sports", url: "http://84.17.50.102/fox/index.m3u8" },
        { name: "FS1", type: "Sports", url: "http://fastshare1.com:8080/live/931461266/374152877/751354.ts?RKDYIPTV&token=rkdyiptv" },
        { name: "Telemundo", type: "Sports", url: "https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8" },
        { name: "TVRI Sport", type: "Sports", url: "http://103.148.44.38:8000/play/a05u/index.m3u8" },
        { name: "TNS 1", type: "Sports", url: "http://s.rocketdns.info:8080/live/monstercable/Dq6jjknxCr/3146.ts" },
        { name: "TNS 2", type: "Sports", url: "http://s.rocketdns.info:8080/live/monstercable/Dq6jjknxCr/3145.ts" },
        { name: "Unite 8 Sports 1 HD", type: "Sports", url: "http://starhub.pro/live/farhat-3379/67897-913379/741567.ts" },
        { name: "Unite 8 Sports 2 HD", type: "Sports", url: "http://212.102.34.8:9080/AndFlixHD/video.m3u8" },
        { name: "TVP Sports", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/89/index.m3u8" },
        { name: "M6", type: "Sports", url: "https://tv.beyondtaxconsultants.com/api/robi/lps/http://151.80.18.177:86/M6_HD/index.m3u8" },
        { name: "WIN Sports", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8" },
        { name: "S Football", type: "Sports", url: "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/745149.ts" },
        { name: "PTV 4K", type: "Sports", url: "http://starhub.pro/live/farhat-3379/67897-913379/89.ts" },
        { name: "DAZN 1", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/94/index.m3u8" },
        { name: "D Sports", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/106/index.m3u8" },
        { name: "Tudn Sports", type: "Sports", url: "https://1nyaler.streamhostingcdn.top/stream/52/index.m3u8" }
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
                if (streamUrl.startsWith('http://') || channel.referer) {
                    let proxyUrl = PROXY + encodeURIComponent(streamUrl);
                    if (channel.referer) {
                        proxyUrl += '&referer=' + encodeURIComponent(channel.referer);
                    }
                    finalStreamUrl = proxyUrl;
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
