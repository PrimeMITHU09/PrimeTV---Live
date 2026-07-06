const PROXY = 'https://primetvlive.primetvlive.workers.dev/?url=';

const channelsData = {
    music: [
        { name: "ATN Music", type: "MUSIC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/ATN_Music_logo.svg/200px-ATN_Music_logo.svg.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8" },
        { name: "9xM", type: "MUSIC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/9XM_logo.svg/200px-9XM_logo.svg.png", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/a731c680-6a62-4174-bc98-186fe654724a/0.m3u8" },
        { name: "B>U Music", type: "MUSIC", url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/0.m3u8" },
        { name: "9X Jalwa", type: "MUSIC", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/47bdb49d-f6f3-4927-a9ea-12c4c5afc732/0.m3u8" },
        { name: "9XM HD", type: "MUSIC", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/9f1a3d57-4134-4f4c-95ea-2cb142ac63f8/0.m3u8" },
    ],
    entertainment: [
        { name: "Deshi TV", type: "ENTERTAINMENT", url: "https://deshitv.deshitv24.net/live/myStream/playlist.m3u8" },
        { name: "B4U Movies", type: "ENTERTAINMENT", url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/cd1f59d6-9b5d-43f0-bfb2-6ca9edc99f27/0.m3u8" },
        { name: "DW NEWS", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/DW_News.svg/200px-DW_News.svg.png", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8" },
        { name: "CNN NEWS", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/200px-CNN.svg.png", url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8" },
        { name: "NDTV NEWS", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NDTV_logo.svg/200px-NDTV_logo.svg.png", url: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678-b/ndtv24x7/master.m3u8" },
        { name: "BBC News", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/200px-BBC_News_2019.svg.png", url: "https://ythls.armelin.one/channel/UCelk6aHijZq-GJBBB9YpReA.m3u8?v=1" },
        { name: "Al Jazeera", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/200px-Aljazeera_eng.svg.png", url: "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8" },
        { name: "Sony TV", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Sony_Entertainment_Television_logo.svg/200px-Sony_Entertainment_Television_logo.svg.png", url: "http://103.161.153.165:8000/play/a01i/index.m3u8" },
        { name: "Sony TV S2", type: "ENTERTAINMENT", url: "http://198.195.239.50:8095/SonyTv/tracks-v1a1/mono.m3u8" },
        { name: "Sony Kal", type: "ENTERTAINMENT", url: "https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8" },
        { name: "Sony Sab", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a03r/index.m3u8" },
        { name: "Sony Sab S2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a03r" },
        { name: "Star Plus", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Star_Plus_logo.svg/200px-Star_Plus_logo.svg.png", url: "http://103.229.254.25:7001/play/a09z/index.m3u8" },
        { name: "Star Plus S2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a03z" },
        { name: "Star Bharat", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a02n" },
        { name: "Colors", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Colors_TV.svg/200px-Colors_TV.svg.png", url: "http://103.229.254.25:7001/play/a077/index.m3u8" },
        { name: "Colors S2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a041" },
        { name: "Colors S3", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a0a1/index.m3u8" },
        { name: "Colors Rishtey", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/12/12_0.m3u8" },
        { name: "Zee TV", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Zee_TV.svg/200px-Zee_TV.svg.png", url: "http://103.161.153.165:8000/play/a01j/index.m3u8" },
        { name: "Zee TV S2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a04r" },
        { name: "Zee TV S3", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a0cs/index.m3u8" },
        { name: "DD National", type: "ENTERTAINMENT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/DD_National_2012.svg/200px-DD_National_2012.svg.png", url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Ddnational/default/index.m3u8" },
        { name: "Sony Max", type: "ENTERTAINMENT", url: "http://103.99.249.139/sonymax/index.m3u8" },
        { name: "Sony Max S2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a04f" },
        { name: "Sony Max 2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a02l" },
        { name: "Zee Cinema", type: "ENTERTAINMENT", url: "http://103.99.249.139/zeecinema/index.m3u8" },
        { name: "Hindi Movies 1", type: "ENTERTAINMENT", url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8" },
        { name: "Hindi Movies 2", type: "ENTERTAINMENT", url: "https://cloudfrontnet.vercel.app/tplay/playout/209622/master.m3u8" },
        { name: "Hindi Movies 3", type: "ENTERTAINMENT", url: "https://vods2.aynaott.com/hindimovies/index.m3u8" },
        { name: "The Movie Club", type: "ENTERTAINMENT", url: "https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8" },
        { name: "South Station", type: "ENTERTAINMENT", url: "https://cc-tke03xaj1wszc.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-tke03xaj1wszc/South_Station_IN/playlist.m3u8" },
    ],
    news: [
        { name: "Somoy TV", type: "NEWS", logo: "https://dl.dropbox.com/s/leielj83em5kg7h/somoy_news.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
        { name: "Independent TV", type: "NEWS", logo: "https://dl.dropbox.com/s/7xwwb8hetz3w8rp/independent_tv.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
        { name: "Jamuna TV", type: "NEWS", logo: "https://dl.dropbox.com/s/k7z1dsec1jfjbkn/jamuna_tv_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
        { name: "ATN News", type: "NEWS", logo: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
        { name: "Somoy TV S2", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/1702.m3u8" },
        { name: "Ekattor TV", type: "NEWS", logo: "https://s4.gifyu.com/images/imagea02f4314e761661d.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/1705.m3u8" },
        { name: "Channel 24", type: "NEWS", logo: "https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/1703.m3u8" },
        { name: "News 24", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8" },
        { name: "DBC News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/1728.m3u8" },
        { name: "TBN 24 USA", type: "NEWS", url: "https://dog.dg21bd.com/TBN24WEBUSA/index.m3u8" },
        { name: "Star News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/1701.m3u8" },
    ],
    islamic: [
        { name: "Saudi Quran", type: "ISLAMIC", logo: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8" },
        { name: "Madina Live", type: "ISLAMIC", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8" },
        { name: "Peace TV Bangla", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v2a1/mono.m3u8" },
        { name: "Peace TV English", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvEnglish/index.m3u8" },
        { name: "Peace TV Urdu", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvUrdu/index.m3u8" },
        { name: "ATN Islamic", type: "ISLAMIC", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8" },
        { name: "Islamic TV", type: "ISLAMIC", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/1724.m3u8" },
        { name: "Madani TV", type: "ISLAMIC", url: "https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8" },
        { name: "Makkah TV", type: "ISLAMIC", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8" },
        { name: "AL Sunnah TV", type: "ISLAMIC", url: "http://m.live.net.sa:1935/live/sunnah/playlist.m3u8" },
    ],
    documentary: [
        { name: "Love Nature", type: "DOCUMENTARY", url: "https://cdn1.logichost.in/ajmantv/live/playlist.m3u8" },
        { name: "Wild Life", type: "DOCUMENTARY", url: "https://wildearth-plex.amagi.tv/master.m3u8" },
        { name: "AccuWeather", type: "DOCUMENTARY", url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8?v=1" },
    ],
    kolkata: [
        { name: "Enter10 Bangla", type: "KOLKATA", url: "https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8" },
        { name: "News18 Bangla", type: "KOLKATA", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8" },
        { name: "DD Bangla", type: "KOLKATA", url: "https://d3eyhgoylams0m.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/ed7bd2c7-8d10-4051-b397-2f6b90f99acb/2e9e32a4-c4f7-49c3-96d6-c4e3660c7e3f/2.m3u8" },
        { name: "ABP Ananda", type: "KOLKATA", url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8" },
        { name: "Star Jalsha", type: "KOLKATA", url: "https://ultra02jibon02by1.jibon02premium.workers.dev/GIFT-BY-JIBON-ULTRA-FAST-STAR-JALSHA-FHD/index.m3u8" },
        { name: "Star Jalsha S2", type: "KOLKATA", url: "http://198.195.239.50:8095/bdixbd.net_StarJalshaHD/video.m3u8" },
        { name: "Zee Bangla", type: "KOLKATA", url: "http://103.161.153.165:8000/play/zeebnhd/index.m3u8" },
        { name: "Zee Bangla S2", type: "KOLKATA", url: "http://103.182.170.32:8888/play/a048" },
        { name: "Colors Bangla", type: "KOLKATA", url: "http://103.229.254.25:7001/play/a076/index.m3u8" },
        { name: "Sun Bangla", type: "KOLKATA", url: "http://27.124.71.27/Sun_Bangla/index.m3u8" },
        { name: "Sun Bangla S2", type: "KOLKATA", url: "http://103.161.153.165:8000/play/a03k/index.m3u8" },
        { name: "Sony Aath", type: "KOLKATA", url: "http://198.195.239.50:8095/SonyAath/tracks-v1a1/mono.m3u8" },
        { name: "TV9 Bangla", type: "KOLKATA", url: "https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9banaen8yq/liveabr/playlist.m3u8" },
        { name: "Zee 24 Ghanta", type: "KOLKATA", url: "https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8" },
        { name: "R Plus News", type: "KOLKATA", url: "https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8" },
        { name: "Jalsha Movies", type: "KOLKATA", url: "http://198.195.239.50:8095/JalshaMovies/tracks-v1a1/mono.m3u8" },
        { name: "Zee Bangla Cinema", type: "KOLKATA", url: "http://103.161.153.165:8000/play/a01a/index.m3u8" },
        { name: "Colors Bangla Cinema", type: "KOLKATA", url: "http://198.195.239.50:8095/ColorsBanglaChinema/tracks-v1a1/mono.m3u8" },
        { name: "Bangla Movies", type: "KOLKATA", url: "https://cloudfrontnet.vercel.app/tplay/playout/209627/master.m3u8" },
        { name: "Kolkata TV", type: "KOLKATA", url: "https://cdn.ottlive.co.in/kolkatatv/index.m3u8" },
        { name: "R Bangla", type: "KOLKATA", url: "https://tvsen5.aynaott.com/R_Bangla/tracks-v1a1/mono.ts.m3u8" },
        { name: "NK TV Bangla", type: "KOLKATA", url: "https://nktv.smartstream.video/smartstream-us/nkbangla/nkbangla/playlist.m3u8" },
    ],
    kids: [
        { name: "Gopal Bhar TV", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8" },
        { name: "Gopal Bhar TV S2", type: "KIDS", url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8" }
    ],
    sports: [
        { name: "Bein Sports 1 HD", type: "SPORTS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bein_sport_logo.svg/200px-Bein_sport_logo.svg.png", url: "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8" },
        { name: "Caze TV Brazil 🇧🇷", type: "SPORTS", logo: "https://assets.football-logos.cc/logos/tournaments/1500x1500/fifa-world-cup-2026--white.10e0b37b.png", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8" }
    ],
    bangla: [
        { name: "BTV", type: "BANGLA", logo: "https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" },
        { name: "Ekattor TV", type: "BANGLA", logo: "https://s4.gifyu.com/images/imagea02f4314e761661d.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
        { name: "Channel 24", type: "BANGLA", logo: "https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
        { name: "ATN Bangla", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
        { name: "NTV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
        { name: "BanglaVision", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
        { name: "Ekushey TV", type: "BANGLA", url: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
        { name: "Channel I", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" },
        { name: "Deepto TV", type: "BANGLA", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8" },
        { name: "Duronto TV", type: "BANGLA", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8" },
        { name: "Deepto TV S2", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8" },
        { name: "ATN Music", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8" },
        { name: "BTV Sangsad", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8" },
        { name: "BTV News", type: "BANGLA", url: "https://streams.btvlive.gov.bd/live/37f2df30-3edf-42f3-a2ee-6185002c841c/BD/d96eb7f4-83c2-4472-9597-3568390a8ebf/index.m3u8" },
        { name: "Gazi TV", type: "BANGLA", url: "http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8" },
        { name: "Maasranga TV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/1722.m3u8" },
        { name: "NTV S2", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/1716.m3u8" },
        { name: "RTV", type: "BANGLA", url: "https://tvsen6.aynaott.com/rtv/tracks-v1a1/mono.ts.m3u8" },
        { name: "SATV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/1720.m3u8" },
        { name: "Desh TV", type: "BANGLA", url: "https://bozztv.com/rongo/rongo-DeshTV/tracks-v1a1/mono.m3u8" },
        { name: "Asian TV", type: "BANGLA", url: "https://mtlivestream.com/hls/asian/ytlive/index.m3u8" },
        { name: "Bangla TV", type: "BANGLA", url: "https://tvsen6.aynaott.com/banglatv/index.m3u8?e=1779283758&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=f3e9e2737e35147900c0f4add619ead6" },
        { name: "Banglavision", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/banglav000.stream/playlist.m3u8" },
        { name: "Channel 9", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/1729.m3u8" },
        { name: "Green TV", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8" },
        { name: "Srk Tv", type: "BANGLA", url: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/playlist.m3u8" },
        { name: "Music Bangla", type: "BANGLA", url: "http://vmi3039524.contaboserver.net:5050/music/index.m3u8" },
        { name: "Movie Bangla", type: "BANGLA", url: "https://cdn.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/moviebanglalink2.stream/playlist.m3u8" },
        { name: "Amar Bangla", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8" },
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
        
        const initials = channel.name.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
        card.innerHTML = `
            <div class="live-badge">LIVE</div>
            <div class="channel-icon">
                ${channel.logo
                    ? `<img src="${channel.logo}" alt="${channel.name}" style="width:60px;height:60px;object-fit:contain;border-radius:8px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                       <span style="display:none;font-size:1.4rem;font-weight:700;color:#f87171;">${initials}</span>`
                    : `<span style="font-size:1.4rem;font-weight:700;color:#f87171;">${initials}</span>`
                }
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
