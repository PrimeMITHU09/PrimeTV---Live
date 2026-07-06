const PROXY = 'https://primetvlive.primetvlive.workers.dev/?url=';

const channelsData = {
    music: [
        { name: "ATN Music", type: "MUSIC", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8" },
        { name: "9xM", type: "MUSIC", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/a731c680-6a62-4174-bc98-186fe654724a/0.m3u8" },
        { name: "B>U Music", type: "MUSIC", url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/0.m3u8" },
        { name: "MU | 9X Jalwa", type: "MUSIC", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/47bdb49d-f6f3-4927-a9ea-12c4c5afc732/0.m3u8" },
        { name: "MU | 9XM", type: "MUSIC", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/9f1a3d57-4134-4f4c-95ea-2cb142ac63f8/0.m3u8" },
    ],
    entertainment: [
        { name: "Deshi TV", type: "ENTERTAINMENT", url: "https://deshitv.deshitv24.net/live/myStream/playlist.m3u8" },
        { name: "B4U Movies", type: "ENTERTAINMENT", url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/cd1f59d6-9b5d-43f0-bfb2-6ca9edc99f27/0.m3u8" },
        { name: "MU | 8XM", type: "ENTERTAINMENT", url: "https://vodzong.mjunoon.tv:8087/streamtest/8XM-131/playlist.m3u8" },
        { name: "DW NEWS", type: "ENTERTAINMENT", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8" },
        { name: "CNN NEWS", type: "ENTERTAINMENT", url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8" },
        { name: "NDTV NEWS", type: "ENTERTAINMENT", url: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678-b/ndtv24x7/master.m3u8" },
        { name: "BBC News", type: "ENTERTAINMENT", url: "https://ythls.armelin.one/channel/UCelk6aHijZq-GJBBB9YpReA.m3u8?v=1" },
        { name: "DW English", type: "ENTERTAINMENT", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8?v=1" },
        { name: "RT News (EN) \u00f0\u009f\u009b\u009c", type: "ENTERTAINMENT", url: "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8" },
        { name: "RTNEWS GLOBAL", type: "ENTERTAINMENT", url: "https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8?v=1" },
        { name: "Aljazeera  Backup \u00f0\u009f\u009b\u009cv", type: "ENTERTAINMENT", url: "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8" },
        { name: "Breaking News", type: "ENTERTAINMENT", url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg02703-leadstory-leadstory-samsungau/playlist.m3u8" },
        { name: "CNA News", type: "ENTERTAINMENT", url: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8" },
        { name: "NDTV English", type: "ENTERTAINMENT", url: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8" },
        { name: "NDTV Hindi", type: "ENTERTAINMENT", url: "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8" },
        { name: "News Max 2", type: "ENTERTAINMENT", url: "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8" },
        { name: "EWTN TV", type: "ENTERTAINMENT", url: "https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/qrpsvkxl/720/chunklist.m3u8" },
        { name: "God TV", type: "ENTERTAINMENT", url: "https://hlsb-us.god.tv/GODTV/USA-480.m3u8" },
        { name: "Arihant TV", type: "ENTERTAINMENT", url: "https://aasthaott.akamaized.net/110923/smil:arihant.smil/chunklist_b1928000.m3u8" },
        { name: "Sony TV", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a01i/index.m3u8" },
        { name: "Sony TV", type: "ENTERTAINMENT", url: "http://198.195.239.50:8095/SonyTv/tracks-v1a1/mono.m3u8" },
        { name: "Sony Kal", type: "ENTERTAINMENT", url: "https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8" },
        { name: "Sony Sab", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a03r/index.m3u8" },
        { name: "Sony Sab", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a03r" },
        { name: "Star Plus", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a09z/index.m3u8" },
        { name: "Star Plus", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a03z" },
        { name: "Star Bharat", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a02n" },
        { name: "Ustsav Plus", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/9/9_0.m3u8" },
        { name: "Colors", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a077/index.m3u8" },
        { name: "Colors", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a041" },
        { name: "Colors", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a0a1/index.m3u8" },
        { name: "Colors Rishtey", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/12/12_0.m3u8" },
        { name: "Zee TV", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a01j/index.m3u8" },
        { name: "Zee TV", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a04r" },
        { name: "Zee TV", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a0cs/index.m3u8" },
        { name: "Zee Anmol TV", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/256/256_0.m3u8" },
        { name: "And TV", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a03v" },
        { name: "And TV", type: "ENTERTAINMENT", url: "http://103.229.254.25:7001/play/a034/index.m3u8" },
        { name: "DD National", type: "ENTERTAINMENT", url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Ddnational/default/index.m3u8" },
        { name: "Big Magic", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/13/13_0.m3u8" },
        { name: "Hinde Movies 1", type: "ENTERTAINMENT", url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8" },
        { name: "Hinde Movies 2", type: "ENTERTAINMENT", url: "https://cloudfrontnet.vercel.app/tplay/playout/209622/master.m3u8" },
        { name: "Hinde Movies 3", type: "ENTERTAINMENT", url: "https://vods2.aynaott.com/hindimovies/index.m3u8" },
        { name: "Hinde Dabbing Movies", type: "ENTERTAINMENT", url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8" },
        { name: "The Movie Club", type: "ENTERTAINMENT", url: "https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8" },
        { name: "South Station", type: "ENTERTAINMENT", url: "https://cc-tke03xaj1wszc.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-tke03xaj1wszc/South_Station_IN/playlist.m3u8" },
        { name: "South Station 2", type: "ENTERTAINMENT", url: "http://xtv.ooo:8080/danyear12/am8091danyear98" },
        { name: "South Station 3", type: "ENTERTAINMENT", url: "http://xtv.ooo:8080/danyear12/am809100/263386" },
        { name: "Sony Max", type: "ENTERTAINMENT", url: "http://103.99.249.139/sonymax/index.m3u8" },
        { name: "Sony Max", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a04f" },
        { name: "Sony Max", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a01k/index.m3u8" },
        { name: "Sony Max 2", type: "ENTERTAINMENT", url: "http://103.182.170.32:8888/play/a02l" },
        { name: "Sony Max 2", type: "ENTERTAINMENT", url: "https://edge2.roarzone.info:8447/roarzone/edge3/sony-max-2/index.m3u8" },
        { name: "Zee Cinema", type: "ENTERTAINMENT", url: "http://103.99.249.139/zeecinema/index.m3u8" },
        { name: "Zee Action", type: "ENTERTAINMENT", url: "http://103.175.73.12:8080/live/270/270_0.m3u8" },
        { name: "Zee Action", type: "ENTERTAINMENT", url: "http://103.161.153.165:8000/play/a03s/index.m3u8" },
    ],
    news: [
        { name: "Somoy TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
        { name: "Independent TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
        { name: "Jamuna TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
        { name: "ATN News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
        { name: "Jamuna Tv", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/1701-audio_113312_eng=113200-video=1692000.m3u8" },
        { name: "Somoy TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/1702.m3u8" },
        { name: "Independent TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/1704.m3u8" },
        { name: "Ekattor TV", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/1705.m3u8" },
        { name: "ATN News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/1706.m3u8" },
        { name: "Channel 1 News 4K", type: "NEWS", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel1bd.stream/tracks-v1a1/mono.m3u8" },
        { name: "Star News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/1701.m3u8" },
        { name: "Channel 24", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/1703.m3u8" },
        { name: "News 24", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8" },
        { name: "DBC News", type: "NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/1728.m3u8" },
        { name: "TBN 24 USA", type: "NEWS", url: "https://dog.dg21bd.com/TBN24WEBUSA/index.m3u8" },
    ],
    islamic: [
        { name: "Saudi Quran", type: "ISLAMIC", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8" },
        { name: "Madina Live", type: "ISLAMIC", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8" },
        { name: "Peace TV Bangla", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v2a1/mono.m3u8" },
        { name: "Peace TV English", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvEnglish/index.m3u8" },
        { name: "Peace TV Urdu", type: "ISLAMIC", url: "https://dzkyvlfyge.erbvr.com/PeaceTvUrdu/index.m3u8" },
        { name: "ATN Islamic", type: "ISLAMIC", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8" },
        { name: "Islamic TV", type: "ISLAMIC", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/1724.m3u8" },
        { name: "Islam bangla", type: "ISLAMIC", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8" },
        { name: "Madani TV", type: "ISLAMIC", url: "https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8" },
        { name: "Makkah TV", type: "ISLAMIC", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8" },
        { name: "AL Sunnah TV", type: "ISLAMIC", url: "http://m.live.net.sa:1935/live/sunnah/playlist.m3u8" },
    ],
    documentary: [
        { name: "Love Nature", type: "DOCUMENTARY", url: "https://cdn1.logichost.in/ajmantv/live/playlist.m3u8" },
        { name: "Animal Planet", type: "DOCUMENTARY", url: "https://tiger-hub.vercel.app@vodzong.mjunoon.tv:8087/streamtest/Animal-Planet-158-3/playlist.m3u8" },
        { name: "Wild Life", type: "DOCUMENTARY", url: "https://wildearth-plex.amagi.tv/master.m3u8" },
        { name: "ACCU WEATHER", type: "DOCUMENTARY", url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8?v=1" },
    ],
    kolkata: [
        { name: "Enter10 Bangla", type: "KOLKATA", url: "https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8" },
        { name: "News18 Bangla", type: "KOLKATA", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8" },
        { name: "Enter 10 Bangla", type: "KOLKATA", url: "https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8" },
        { name: "DD Bangla", type: "KOLKATA", url: "https://d3eyhgoylams0m.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/ed7bd2c7-8d10-4051-b397-2f6b90f99acb/2e9e32a4-c4f7-49c3-96d6-c4e3660c7e3f/2.m3u8" },
        { name: "ABP Ananda", type: "KOLKATA", url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8" },
        { name: "Star Jalsha", type: "KOLKATA", url: "https://dhoomtv.xyz/live/P4B9TB9xR8/humongous2tonight/23218.ts" },
        { name: "ABP Ananda", type: "KOLKATA", url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-ananda/1e4516fa-023a-4807-8e3d-479b346b4a62/2.m3u8" },
        { name: "Bangla Jago", type: "KOLKATA", url: "http://banglajagotv.livebox.co.in/banglajagohls/24x7.m3u8" },
        { name: "DD Bangla", type: "KOLKATA", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index_3.m3u8" },
        { name: "R Plus News", type: "KOLKATA", url: "https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8" },
        { name: "TV9 Bangla", type: "KOLKATA", url: "https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9banaen8yq/liveabr/playlist.m3u8" },
        { name: "Zee 24 Ghanta", type: "KOLKATA", url: "https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8" },
        { name: "Gopal Bhar", type: "KOLKATA", url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8" },
        { name: "Sony Aath", type: "KOLKATA", url: "http://198.195.239.50:8095/SonyAath/tracks-v1a1/mono.m3u8" },
        { name: "Star Jalsha", type: "KOLKATA", url: "http://198.195.239.50:8095/bdixbd.net_StarJalshaHD/video.m3u8" },
        { name: "Star Jalsha", type: "KOLKATA", url: "https://ultra02jibon02by1.jibon02premium.workers.dev/GIFT-BY-JIBON-ULTRA-FAST-STAR-JALSHA-FHD/index.m3u8" },
        { name: "Zee Bangla", type: "KOLKATA", url: "http://103.182.170.32:8888/play/a048" },
        { name: "Zee Bangla", type: "KOLKATA", url: "http://103.161.153.165:8000/play/zeebnhd/index.m3u8" },
        { name: "Colors Bangla", type: "KOLKATA", url: "http://103.229.254.25:7001/play/a076/index.m3u8" },
        { name: "Colors Bangla", type: "KOLKATA", url: "https://ultra02jibon02by1.jibon02premium.workers.dev/JIBON-COLORS-BNAGLA-CINEMA/index.m3u8" },
        { name: "Sun Bangla", type: "KOLKATA", url: "http://27.124.71.27/Sun_Bangla/index.m3u8" },
        { name: "Sun Bangla", type: "KOLKATA", url: "http://103.161.153.165:8000/play/a03k/index.m3u8" },
        { name: "Ruposhi Bangla", type: "KOLKATA", url: "https://cdn-4.pishow.tv/live/1039/master.m3u8" },
        { name: "R Plus Gold", type: "KOLKATA", url: "https://cdn-4.pishow.tv/live/1231/1231_1.m3u8" },
        { name: "AAKASH AATH", type: "KOLKATA", url: "https://cdn-4.pishow.tv/live/969/master.m3u8" },
        { name: "Bangla Movies", type: "KOLKATA", url: "https://cloudfrontnet.vercel.app/tplay/playout/209627/master.m3u8" },
        { name: "Bangla Movies", type: "KOLKATA", url: "https://live-stream.utkalbongo.com/hls/livebanglatvstream.m3u8" },
        { name: "Jalsha Movies", type: "KOLKATA", url: "http://198.195.239.50:8095/JalshaMovies/tracks-v1a1/mono.m3u8" },
        { name: "Jalsha Movies", type: "KOLKATA", url: "http://103.161.153.165:8000/play/a01e/index.m3u8" },
        { name: "Zee Bangla Cinema", type: "KOLKATA", url: "http://103.182.170.32:8888/play/a044" },
        { name: "Zee Bangla Cinema", type: "KOLKATA", url: "http://103.161.153.165:8000/play/a01a/index.m3u8" },
        { name: "ZB Cinema", type: "KOLKATA", url: "https://server.zillarbarta.com/ZBCINEMA/tracks-v1a1/mono.ts.m3u8" },
        { name: "Colors Bangla Cinema", type: "KOLKATA", url: "http://198.195.239.50:8095/ColorsBanglaChinema/tracks-v1a1/mono.m3u8" },
        { name: "Colors Bangla Cinema", type: "KOLKATA", url: "http://103.229.254.25:7001/play/a078/index.m3u8" },
        { name: "Tara Bangla Cinema", type: "KOLKATA", url: "http://103.145.48.150:90/laosat24/taratv/index.m3u8" },
        { name: "Khushboo Bangla", type: "KOLKATA", url: "https://cdn3.pishow.tv/live/283/master.m3u8" },
        { name: "Sangeet Bangla", type: "KOLKATA", url: "https://cdn-4.pishow.tv/live/1143/master.m3u8" },
        { name: "Dhoom Music", type: "KOLKATA", url: "http://103.175.73.12:8080/live/378/378_0.m3u8" },
        { name: "R Plus News", type: "KOLKATA", url: "https://thelegitpro.in/pntv/rplusnews24x7/tracks-v1a1/mono.m3u8" },
        { name: "Calcutta News", type: "KOLKATA", url: "https://akdnetwork.co.in/live/cnnew/index.m3u8" },
        { name: "Kolkata TV", type: "KOLKATA", url: "https://cdn.ottlive.co.in/kolkatatv/index.m3u8" },
        { name: "TV9 Bangla", type: "KOLKATA", url: "https://amg01448-samsungin-tv9bangla-samsungin-9lgnh.amagi.tv/playlist/amg01448-samsungin-tv9bangla-samsungin/playlist.m3u8" },
        { name: "Samay Kolkata", type: "KOLKATA", url: "https://server.playontv.in/SAMAYKOLKATA/index.m3u8" },
        { name: "R Bangla", type: "KOLKATA", url: "https://tvsen5.aynaott.com/R_Bangla/tracks-v1a1/mono.ts.m3u8" },
        { name: "NK", type: "KOLKATA", url: "https://amg01218-republictvfast-amg01218c1-samsung-in-1918.playouts.now.amagi.tv/playlist/amg01218-republictvfast-rbangla-samsungin/playlist.m3u8" },
        { name: "NK TV Bangla", type: "KOLKATA", url: "https://nktv.smartstream.video/smartstream-us/nkbangla/nkbangla/playlist.m3u8" },
    ],
    kids: [
        { name: "Kids Creation", type: "KIDS", url: "http://foxkids-online.ru/hls/test_240p264kbs/index.m3u8" },
        { name: "ZB Cartoon", type: "KIDS", url: "https://server.zillarbarta.com/zbcatun/video.m3u8" },
        { name: "Duck TV", type: "KIDS", url: "https://d2lmgfyblo9rak.cloudfront.net/playlist.m3u8" },
        { name: "Jungle Book", type: "KIDS", url: "https://cc-4bhi5osabejc9.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4bhi5osabejc9/junglebook.m3u8" },
        { name: "PBS Kids", type: "KIDS", url: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8" },
        { name: "Rongeen TV", type: "KIDS", url: "https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8" },
        { name: "Gopal Bhar TV", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8" },
        { name: "Motu Patlu", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8" },
        { name: "Tom & Jerry TV", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-208314/tracks-v1a1/mono.ts.m3u8" },
        { name: "Bantul The Great", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-209869/tracks-v1a1/mono.ts.m3u8" },
        { name: "Doraemon TV", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8" },
        { name: "Oggy and the Cockroaches", type: "KIDS", url: "https://live20.bozztv.com/giatvplayout7/giatv-210728/tracks-v1a1/mono.ts.m3u8" },
        { name: "Mr Bean Animated", type: "KIDS", url: "https://amg00627-amg00627c29-rakuten-it-3989.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanitcc-rakutenit/playlist.m3u8" },
    ],
    sports: [
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://172.31.235.10:8080/hls/1-btv/0_1/index.m3u8?tkn=55672317" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://172.17.50.112:84/ant1004/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://198.195.239.50:8095/tsports/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 202", type: "SPORTS", url: "http://172.17.50.112:84/ant1002/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "https://aponn.vercel.app/iptv.m3u" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/130714.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "https://live.thebosstv.com:30443/dwlive/Somoy-TV/playlist.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://103.151.60.188:1111/Somoy-TV-SD-700kb/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://114.130.57.224:8080/Somoy-TV-3Mb/tracks-v1a1/mono.m3u8?token=SkQuhAXZxgBan1" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://172.17.50.112:84/ant1003/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://198.195.239.50:8095/ptv/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://172.17.50.112:84/ant1001/tracks-v1a1/mono.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "https://himelhimuishere.pages.dev/fwc2k26.m3u8" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/745149.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/741566.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://starhub.pro/live/farhat-3379/67897-913379/742610.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://starhub.pro/live/farhat-3379/67897-913379/744523.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://starhub.pro/live/farhat-3379/67897-913379/744524.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://starhub.pro/live/farhat-3379/67897-913379/744527.ts" },
        { name: "Football World Cup 2026", type: "SPORTS", url: "http://starhub.pro/live/farhat-3379/67897-913379/745269.ts" },
        { name: "Live Sports", type: "SPORTS", url: "https://tvsen7.aynaott.com/sspts1/tracks-v1a1/mono.ts.m3u8" },
        { name: "Live Sports", type: "SPORTS", url: "http://198.195.239.50:8095/Eurosport/index.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "http://198.195.239.50:8095/Tsports/tracks-v1a1/mono.m3u8" },
        { name: "Willow", type: "SPORTS", url: "http://198.195.239.50:8095/WiLLow/index.m3u8" },
        { name: "PTV Sports", type: "SPORTS", url: "http://198.195.239.50:8095/PTV-kutta/video.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "https://tvsen7.aynaott.com/tsports-hd/tracks-v1a1/mono.ts.m3u8" },
        { name: "Nagorik TV", type: "SPORTS", url: "http://198.195.239.50:8095/nagorik/tracks-v1a1/mono.m3u8" },
        { name: "Live Sports", type: "SPORTS", url: "http://103.161.153.165:8000/play/a02f/index.m3u8" },
        { name: "Premier League", type: "SPORTS", url: "https://premierleagpl23.akamaized.net/hls/live/2107108/tapmad47832/level_3.m3u8" },
        { name: "Live Sports", type: "SPORTS", url: "http://103.229.254.25:7001/play/a087/index.m3u8" },
        { name: "Willow", type: "SPORTS", url: "http://27.124.71.27/Willow_Extra/index.m3u8" },
        { name: "Live Sports", type: "SPORTS", url: "http://tvn1.chowdhury-shaheb.com/starsport1/index.m3u8" },
        { name: "Live Sports", type: "SPORTS", url: "http://tvn1.chowdhury-shaheb.com/starsport2/index.m3u8" },
        { name: "Sharq Game TV", type: "SPORTS", url: "https://stream.snexus.co/live/SHARQ_GAME_TV/main_stream.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "https://live.tsports.com/mobile_hls/tsports_live_3/playlist.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "https://live.tsports.com/mobile_hls/tsports_live_2/playlist.m3u8" },
        { name: "T Sports", type: "SPORTS", url: "http://sm-monirul.top/RoarZone/play.php?id=ZWRnZTIvdHNwb3J0cw==&e=.m3u8" },
    ],
    bangla: [
        { name: "BTV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" },
        { name: "Ekattor TV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
        { name: "Channel 24", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
        { name: "ATN Bangla", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
        { name: "NTV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
        { name: "BanglaVision", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
        { name: "Ekushey TV", type: "BANGLA", url: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
        { name: "Channel I", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" },
        { name: "Deepto TV", type: "BANGLA", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8" },
        { name: "Duronto TV", type: "BANGLA", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8" },
        { name: "Atn Bangla", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/1722-audio_113522_eng=113200-video=1692000.m3u8" },
        { name: "Ekushey TV", type: "BANGLA", url: "https://ekusheyserver.com/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
        { name: "Ntv", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/1716-audio_113462_eng=113200-video=1692000.m3u8" },
        { name: "Deepto Tv Backup", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8" },
        { name: "Deshi Tv", type: "BANGLA", url: "http://208.86.19.13:81/514.stream/index.m3u8" },
        { name: "ATN BANGLA UK", type: "BANGLA", url: "https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8" },
        { name: "ATN Bangla UK", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnbanglauk-off.stream/playlist.m3u8" },
        { name: "Deepto TV", type: "BANGLA", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8" },
        { name: "ATN Music", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8" },
        { name: "BTV Sangsad", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8" },
        { name: "BTV News", type: "BANGLA", url: "https://streams.btvlive.gov.bd/live/37f2df30-3edf-42f3-a2ee-6185002c841c/BD/d96eb7f4-83c2-4472-9597-3568390a8ebf/index.m3u8" },
        { name: "Gazi TV", type: "BANGLA", url: "http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8" },
        { name: "Gazi TV", type: "BANGLA", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8" },
        { name: "ATN Bangla", type: "BANGLA", url: "http://sm-monirul.top/AyNa/play.php?id=9046949b-9847-4b5d-96c1-e82b0734444b&e=.m3u8" },
        { name: "Channel I", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8" },
        { name: "Maasranga TV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/1722.m3u8" },
        { name: "NTV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/1716.m3u8" },
        { name: "NTV UK", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ntvuk00332211.stream/playlist.m3u8" },
        { name: "RTV", type: "BANGLA", url: "https://tvsen6.aynaott.com/rtv/tracks-v1a1/mono.ts.m3u8" },
        { name: "SATV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/1720.m3u8" },
        { name: "Deepto TV", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/1711.m3u8" },
        { name: "Mohona TV", type: "BANGLA", url: "http://103.229.254.25:7001/play/a05t/index.m3u8" },
        { name: "Desh TV", type: "BANGLA", url: "https://bozztv.com/rongo/rongo-DeshTV/tracks-v1a1/mono.m3u8" },
        { name: "Asian TV", type: "BANGLA", url: "https://mtlivestream.com/hls/asian/ytlive/index.m3u8" },
        { name: "Bangla TV", type: "BANGLA", url: "https://tvsen6.aynaott.com/banglatv/index.m3u8?e=1779283758&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=f3e9e2737e35147900c0f4add619ead6" },
        { name: "Bangla TV Europe", type: "BANGLA", url: "https://byphdgllyk.gpcdn.net/hls/banglatveurope/index.m3u8" },
        { name: "Banglavision", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/banglav000.stream/playlist.m3u8" },
        { name: "Channel 9", type: "BANGLA", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/1729.m3u8" },
        { name: "Green TV", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8" },
        { name: "Channel S UK", type: "BANGLA", url: "http://103.161.153.165:8000/play/a02k/index.m3u8" },
        { name: "Srk Tv", type: "BANGLA", url: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/playlist.m3u8" },
        { name: "Channel S", type: "BANGLA", url: "http://103.229.254.25:7001/play/a060/index.m3u8" },
        { name: "Channel S UK", type: "BANGLA", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/chsukoff.stream/tracks-v1a1/mono.m3u8" },
        { name: "Duronto TV", type: "BANGLA", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/duronto.stream/tracks-v1a1/mono.m3u8o" },
        { name: "Music Bangla", type: "BANGLA", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/musicbangla2025.stream/tracks-v1a1/mono.m3u8" },
        { name: "Music Bangla", type: "BANGLA", url: "http://vmi3039524.contaboserver.net:5050/music/index.m3u8" },
        { name: "Bengla Beats", type: "BANGLA", url: "https://tplay.live/originals/bengali-beats/index.m3u8" },
        { name: "Channel-16", type: "BANGLA", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel16bd.stream/tracks-v1a1/mono.m3u8" },
        { name: "Bengla", type: "BANGLA", url: "https://poweredbyjibon.myziboplay.xyz/zibo/index.m3u8" },
        { name: "RTV Islam", type: "BANGLA", url: "https://tvsen6.aynascope.net/rtvislam/index.m3u8?e=1762417832&u=5448cf91-5746-4e78-a357-d45dca5c1ab9&token=9aeaf35d6650b5eab457a136bd251921" },
        { name: "Movie Bangla", type: "BANGLA", url: "https://cdn.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/moviebanglalink2.stream/playlist.m3u8" },
        { name: "G-Serise", type: "BANGLA", url: "https://vods2.aynaott.com/gseriesDrama/tracks-v1a1/mono.ts.m3u8" },
        { name: "Amar Bangla", type: "BANGLA", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8" },
        { name: "Amar Digital", type: "BANGLA", url: "https://live-stream.utkalbongo.com/utkalbongo/stream2/hls/amarbanglatwolivestream.m3u8" },
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
