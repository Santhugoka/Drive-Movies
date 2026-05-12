// ===================== DATA =====================
const videoData = [
  {
    category: "Andhera (2025)",
    type: "series",
    poster: "https://m.media-amazon.com/images/M/MV5BNWNiZTNkOWMtNTg1Yy00YTE4LWFlMDgtZWEzYWE5YWVhM2ZkXkEyXkFqcGc@._V1_.jpg",
    banner: "https://m.media-amazon.com/images/S/pv-target-images/72141143d460b74d7adf8c8b2e97b53b0e0fb16c72fe8121a48b6d398d190e4d.jpg",
    videos: [
      ["Andhera S01 E01","19ac1xh_UoD5Dz0CE4OBk-Mw1UMjSbmUh"],
      ["Andhera S01 E02","1DmqEtO8CGLf8Y9Ri5G7wz4J_eFOQ-ygi"],
      ["Andhera S01 E03","1bReaSayZFvy88m2Uni-8JqsKgdVIYEJy"],
      ["Andhera S01 E04","1iefOF-9Tv93P6-pJaq3VOfVAyxmPXMMv"],
      ["Andhera S01 E05","1ytW7zRhOMCwgIC5BCcI_LlQbXJ8n8XdM"],
      ["Andhera S01 E06","12Qf3A5CGcyoIOW-6eyS-g-EpeL0jdb5q"],
      ["Andhera S01 E07","14Cyp7KOX4XgMOaVj5_a9q5OiciDw5_ta"],
      ["Andhera S01 E08","1Rh1Ew9ixoM2exSQnmbetw_5HcYNTyjxv"]
    ]
  },
  {
    category: "Chiraiya (2026)",
    type: "series",
    poster: "https://pbs.twimg.com/media/HG4gBkJaAAAt7Gs.jpg",
    banner: "https://i.ytimg.com/vi/xa2v0noUq9E/maxresdefault.jpg",
    videos: [
      ["Chiraiya EP 01","1Eflg_KntZ78M3MF85KFMnUBE--rHQrum"],
      ["Chiraiya EP 02","17K5oRlzXWzcnm_j0gsRbd0_AwXXLdOLQ"],
      ["Chiraiya EP 03","1c_W994e3svo95qXolt6aBzAhcBa67HtN"],
      ["Chiraiya EP 04","1OI3jaMtv4WR6xzGYCXb9l0yqTMiGHLF_"],
      ["Chiraiya EP 05","1K-XK4WCwIa9Urutfo63-vMygmVIryzHr"],
      ["Chiraiya EP 06","1VHF5VtUzRUFxAleWSdxxzPsVE_viHeg-"]
    ]
  },
  {
    category: "Glory (2026)",
    type: "series",
    poster: "https://m.media-amazon.com/images/M/MV5BNWFhM2E5M2EtZTNlYS00YmFlLWJkOTgtMmE4ZDE4ODJhZGE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://images.moneycontrol.com/static-mcnews/2026/05/20260501133519_glory.jpg?impolicy=website&width=1600&height=900",
    videos: [
      ["Glory S01 EP 01","1VMTwPhGDiUcqsdKA76pwXzIxur0qxUc5"],
      ["Glory S01 EP 02","1XjqtcWdOX8V-e09JeE06KhswwpGIqRja"],
      ["Glory S01 EP 03","1Vcq4bOqEY3EyeraXtbR6StSKspRO--jG"],
      ["Glory S01 EP 04","1O-dUd58b5b-oIr8wC85yP8WvWU4zgTBG"],
      ["Glory S01 EP 05","1rrigIicWFFR1zUVufdReHYYpaLVzNkQX"],
      ["Glory S01 EP 06","1aShNWTBypPwVJGsy8aofXG5gkS6Z5gdw"],
      ["Glory S01 EP 07","1StSCsGW_rbhMiw7VyNESEAE1LgrkhTiv"]
    ]
  },
  {
    category: "Kurukshetra (2025) S01",
    type: "series",
    poster: "https://media.themoviedb.org/t/p/w500/amNFukSD0hpj5omLkikfaNw42sp.jpg",
    banner: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2025/09/fileimage-2025-09-10t150829-1757497130.webp",
    videos: [
      ["Kurukshetra S01 E01","1ZYXHb-t04P9c44mNaiVt1oj3Mf9YUcXJ"],
      ["Kurukshetra S01 E02","16DPaPxWVJCYgScuui7Upr2sdo8D4ZXQU"],
      ["Kurukshetra S01 E03","1hbzIyPz_95CaHtInDYEGrhQpveXq-F8C"],
      ["Kurukshetra S01 E04","1xoCLR_GMThbkfJPjFfXczOA1CpCTOirO"],
      ["Kurukshetra S01 E05","1KpaYjv4s2dvADHf41cpM4TJ8u4Sr9yt5"],
      ["Kurukshetra S01 E06","1tT766pqZklc5VnB9UlQJtqJX97hqUWtL"],
      ["Kurukshetra S01 E07","1whb7a5D-YaJqeJYrZ8xL0niMD2i2MQ7r"],
      ["Kurukshetra S01 E08","1oTx6w6aq5uO6zI-hdA_fdxCTjzbP3C_H"],
      ["Kurukshetra S01 E09","1ZgCOQAcYKIZ4_vfIXir9kRV7E4yU3NSA"],
      ["Kurukshetra S01 E10","1AfN9mJ1Rz2QgNsYIA_AEU5RYjoZOhG9P"],
      ["Kurukshetra S01 E11","1wrRoz2CXvGyMv7b32M9lDDM-s49lixrG"],
      ["Kurukshetra S01 E12","11oHFaRp-nzzSlCXDgkDKnGoU_MbGN0BZ"],
      ["Kurukshetra S01 E13","1x0hw8zkHZCSm1VxN6eyPK8eIyhBm6ng5"],
      ["Kurukshetra S01 E14","1CkmqPYMqTUwceEFqOVz4TIUxZnpavE2d"],
      ["Kurukshetra S01 E15","1Lx1AIKGCgHe4HEq9DQg-_kHm7A6q8v4I"],
      ["Kurukshetra S01 E16","10IB9S7xzjUtVCi-fH0b-4wTEMm29ONBc"],
      ["Kurukshetra S01 E17","1tmqh-66hPozc_CxT_U9vBw1dHZ-u9Q3Q"],
      ["Kurukshetra S01 E18","1bqQ9m5TyIhLc_Wkc9jlOhm1AGf4v4wc6"]
    ]
  },
  {
    category: "Matka King (2026)",
    type: "series",
    poster: "https://dwnjscqilqpcr.cloudfront.net/assets/uploads/posts_large/2026/5/1778193256_Matka%20King.jpeg",
    banner: "https://m.media-amazon.com/images/S/pv-target-images/3aef233f177c571a7e33e8c6af62700c8af7ca54980ea89f719dd7a35f99d05f.jpg",
    videos: [
      ["Matka King EP 01","1ExS8rx1mRDAV4mLeKxIygiagLQsfSC2a"],
      ["Matka King EP 02","1Ws8EGKNJQblizzaPx9Jx16anxksfEtMo"],
      ["Matka King EP 03","1Q9X_rTC1tsFYLkktejiB8l9GSp6p_b-u"],
      ["Matka King EP 04","1rgFP3KmKR_RQQCgudcthomMMttMYXl4O"],
      ["Matka King EP 05","1ox99L8XRe2BecUVsBzPasPloBaKXUlca"],
      ["Matka King EP 06","1iV2Ws8P0cw7XjJrdy_LZDwRJrfFt1pUp"],
      ["Matka King EP 07","1Sy0QFEZ-Z-Pgf015VHy-Fk4eh8BRFTgU"],
      ["Matka King EP 08","18IzqnFUxiBkpYHrdq__Hi1VBMorMct8e"]
    ]
  },
  {
    category: "Latest Movies",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    videos: [
      {title:"Dhurandhar The Revenge (2026)",id:"1iTPiTAA1XI2HosxoM1rmOweSh8P7jhqO",poster:"https://m.media-amazon.com/images/M/MV5BY2ZiODdiMzMtYzU2Yy00ZWNlLWIyNGQtZjc0ZmFhZGRkNjZhXkEyXkFqcGc@._V1_.jpg",banner:"https://i.ytimg.com/vi/CN0lNff-zm0/maxresdefault.jpg"},
      {title:"Band Melam (2026)",id:"1n31ZMDEx6eaVXRLbN7vZSp86Kk2KHHJu",poster:"https://c.saavncdn.com/353/Band-Melam-Title-OST-From-Band-Melam-Telugu-2026-20260218141803-500x500.jpg",banner:"https://cdn.district.in/movies-assets/images/cinema/Band-Melam_Horizontal_Poster2-18867bb0-1adc-11f1-9b97-9fe8ccbc983f.jpg?im=Resize,width=720"},
      {title:"Bhartha Mahasayulaku Wignyapthi (2026)",id:"1UQb0rBoMRLDZJCiJV5XL29xNWy1XsEHg",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhartha-mahasayulaku-wignyapthi-et00472594-1768195821.jpg",banner:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/bhartha-mahasayulaku-wignyapthi-et00472594-1768195821.jpg"},
      {title:"Biker (2026)",id:"17Nmkx-CYjrjBRnBJW4E8YZi4G32owoRH",poster:"https://m.media-amazon.com/images/M/MV5BMDRjOGQ1MGQtZjAzNS00NzliLWIxZGUtY2U1ODgzYTQ3MmU0XkEyXkFqcGc@._V1_.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00469257-wrlrlmxbjd-landscape.jpg"},
      {title:"Couple Friendly (2026)",id:"1z8ssJ0UVbx1KwsK8pAegSSgy5XGmqCA0",poster:"https://a.ltrbxd.com/resized/film-poster/1/3/1/8/2/4/3/1318243-couple-friendly-0-230-0-345-crop.jpg?v=6d3d08f8d1",banner:"https://cdn.district.in/movies-assets/images/cinema/Couple-Friendly_Horizontal_Poster2-34922f70-7839-11f0-8df3-db01d1baa444.jpg?im=Resize,width=720"},
      {title:"Dacoit A Love Story (2026)",id:"1OoDWoPYTG2ny6DtkVqNkjtsoPemVoonQ",poster:"https://m.media-amazon.com/images/M/MV5BYTY4MGVmOGYtMDdlZC00ODM0LWIyMWMtMTkxNWMzMTczOGUwXkEyXkFqcGc@._V1_.jpg",banner:"https://static.toiimg.com/photo/130060676.jpeg"},
      {title:"Dhurandhar (2025)",id:"1aHw6mFV3uM2tyDVbsv6wo8QxV_v-3A5y",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2NzEMBZbaPjaYx84gdiXju6x5nU3hjmAlA&s",banner:"https://images.ottplay.com/images/dhurandhar-2025-poster-detail-1764949115.jpg?impolicy=ottplay-202501_high&width=1200&height=675"},
      {title:"Falaknuma Das (2019)",id:"1W8elvOqy15T8BCyXSpWz7qLJMZ3CRF1f",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/falaknuma-das-et00101008-17-04-2019-03-03-47.jpg",banner:"https://survi.in/wp-content/uploads/2019/05/Survi-Review-Falaknuma-Das-Rating-1024x512.jpg"},
      {title:"Happy Raj (2026)",id:"1knIodimrtV_zDJMaZe5wbAiMp28b8u1d",poster:"https://cdn.district.in/movies-assets/images/cinema/Happy-Raj-75a815c0-ddbe-11f0-a360-f384e99feb0b.jpg",banner:"https://lk-aps.bmscdn.com/events/mobile/happy-raj-et00006023-13-03-2026-03-23-05.jpg"},
      {title:"Lee Cronin's The Mummy (2026)",id:"1lsAEJO8kXe_RbWg93Omj3hEGUKojvLQj",poster:"https://m.media-amazon.com/images/M/MV5BNDhlNTAyYTgtOGRmZS00ZmE0LTk4ZTUtMjk3ZjZhMWE4YWY0XkEyXkFqcGc@._V1_.jpg",banner:"https://cdn.district.in/movies-assets/images/cinema/_Horizontal_Lee-Cronin_s-The-Mummy-13129fa0-395f-11f1-840e-63804c65ce25.jpg?im=Resize,width=720"},
      {title:"Lockdown (2026)",id:"1xICiYs_h6IiPR-u0_HKOHaxFP78fcIBU",poster:"https://m.media-amazon.com/images/M/MV5BNjgyZjQ4ZjItZmJlYy00MWQ1LWFhNzYtZjUzZDM0ZjA0NTJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNR_RHTO3EdWkJvqaMrX6_j3UWJpx-BFIig&s"},
      {title:"Love Insurance Kompany (2026)",id:"1gTpMGJZM6w5PyLbYfl3WYdmJCFHjJs3C",poster:"https://cdn.district.in/movies-assets/images/cinema/LIK-new-1f40ad00-3318-11f1-a005-63882a91c638.jpg",banner:"https://filmy-charcha.s3.ap-south-1.amazonaws.com/filmy-charcha/Movies/Love%20Insurance%20Kompany%202026%20Movie%20Release%20Date,%20Cast,%20Director,%20Story,%20Budget%20%20More_1768819861969.webp"},
      {title:"Made in Korea (2026)",id:"1455GUHtIoOaHc4VqYOF0gQOcOwX5bNzV",poster:"https://m.media-amazon.com/images/M/MV5BNWFhNjliYTctNTgyOS00YWM5LTg5OTctNTgwNDM3YTJkMjFkXkEyXkFqcGc@._V1_.jpg",banner:"https://i.ytimg.com/vi/RmLegZv1TZk/hq720.jpg"},
      {title:"Papam Prathap (2026)",id:"1FkP1mzXBzIA1dEgeqMN5IjHQjc2qUqaY",poster:"https://cdn.district.in/movies-assets/images/cinema/Papam-Prathap-1c620c00-37d7-11f1-840e-63804c65ce25.jpeg",banner:"https://cdn.district.in/movies-assets/images/cinema/Papam-Prathap-cover-6e61aca0-37d6-11f1-840e-63804c65ce25.jpg"},
      {title:"Project Hail Mary (2026)",id:"1QZRFGUjtFwqR6Y7OT2BvomVuIroiG6EO",poster:"https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",banner:"https://litfind.bookscape.com/wp-content/uploads/2025/07/project-hail-mary-book-to-movie.jpg"},
      {title:"Raakaasa (2026)",id:"1eVI0TlGRNjlO9I84DHvDKJId2fFXFE_W",poster:"https://cdn.district.in/movies-assets/images/cinema/Rakasa-802b25c0-2759-11f1-9893-43b149c11632.jpg",banner:"https://i.ytimg.com/vi/TJ5dpuZ1cAk/hq720.jpg"},
      {title:"S.Saraswathi (2026)",id:"1v9VaYx4Pxw92ks6-Qex-i2YgYlTdE5Vb",poster:"https://cdn.district.in/movies-assets/images/cinema/S.Saraswathi_Poster-5d5515e0-17b6-11f1-9ea8-c7ed2a8658b9.jpg?im=Resize,width=400",banner:"https://static.10tv.in/wp-content/uploads/2026/03/saraswathi-review.jpg"},
      {title:"Sabdham (2025)",id:"1XtlhGJNvL-cm8-w6kyFr5h7pm6JiYl2F",poster:"https://m.media-amazon.com/images/M/MV5BYTBhYjc3NmMtMWNjZi00MWQ0LWExN2ItYjI1MzE2ZjFkZDIwXkEyXkFqcGc@._V1_.jpg",banner:"https://i.ytimg.com/vi/Cp0d6oAT1qc/maxresdefault.jpg"},
      {title:"Sambavam Adhyayam Onnu (2026)",id:"1o1gz94VGXjHN9KJcSxmULV7co2Gwxxyy",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sambhavam-adhyayam-onnu-et00489555-1772252741.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00489555-bhvwkhbwrv-landscape.jpg"},
      {title:"Suyodhana (2026)",id:"1UKllrYgXBBsJAUCGlLVZYHqITYODq__C",poster:"https://m.media-amazon.com/images/S/pv-target-images/35c08d10cf64df356f2eb2f5e1bc56f744db4030faa463c5513979dae8393909.jpg",banner:"https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/MOVIE/69e008a7b37d253ec55a5234/images/LANDSCAPE_169/1776350812482-h"},
      {title:"Swapped (2026)",id:"1tGRTPNGVRaDkRanUBxOceLYF1GG33KKN",poster:"https://m.media-amazon.com/images/M/MV5BMDFmZjliMTAtYzQxMC00YmQwLTg2NjUtZjAyMDVhMTY3ZjIzXkEyXkFqcGc@._V1_.jpg",banner:"https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc73oj9KEfFjYhaxEXJy0pefgWBmi5fAXQNEwC4qWjQfW_x1ev3z8Rdapl7U7U1T231BK-z11rT4m-WuU6L49Ezszz7U4oC31muE.jpg"},
      {title:"Thaai Kizhavi (2026)",id:"18fB518XgMxLEO4LzDa1aAGk4sczfP41S",poster:"https://m.media-amazon.com/images/M/MV5BN2RkNjliNTYtZWYwYy00YTZlLWEzMDQtZGVlNTgxYzJhYzRkXkEyXkFqcGc@._V1_.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00488859-qfwunqhpxt-landscape.jpg"},
      {title:"The Kerala Story 2 (2026)",id:"1E2qBJq7_P380ud4A99KUNeWQ5_5LLe7s",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-kerala-story-2-goes-beyond-et00484171-1770209319.jpg",banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL2dB4EGtc8U1cd68G0lyUFg7lDprnK7J2Q&s"},
      {title:"Tu.Yaa.Main (2026)",id:"1AJ9uQnIe3Y86yTDSSz_aQ4HI03JpKHmR",poster:"https://m.media-amazon.com/images/M/MV5BMjdiMjk1ZTYtMGE3MC00YjIxLWFkNTEtZDJhOTY0M2JjODVlXkEyXkFqcGc@._V1_.jpg",banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOapzkSZcRCqPh8tsXfQrwm9BzIQExnlQdQ&s"},
      {title:"Ustaad Bhagat Singh (2026)",id:"1X4WqI7pBrwqlTm7dDu0_IHgZj266RWkH",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-bhagat-singh-et00339939-1771925113.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00339939-qqrfuewbrd-landscape.jpg"},
      {title:"Vaazha II (2026)",id:"1ZEKe35bVw25_dHiHekgwGHZ3O8OYnO9s",poster:"https://m.media-amazon.com/images/M/MV5BNzQ5MmNhMWEtMTkzZi00ZDE3LWFhMTItNzZlYmE5Yjc5MTE5XkEyXkFqcGc@._V1_.jpg",banner:"https://i.ytimg.com/vi/5l3fNqsYmlc/hq720.jpg"},
      {title:"Vishnu Vinyasam (2026)",id:"1oK_nwLRjS1jEosF7D7f7IOMeBtNeAxM4",poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vishnu-vinyasam-et00487219-1772008232.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00487219-gyhpqfccbn-landscape.jpg"},
      {title:"With Love (2026)",id:"1nGah3JkvT2mo_-5ad0dzYpA-MIKpkwUW",poster:"https://m.media-amazon.com/images/M/MV5BNDBkNzliYTMtYzEwOC00ZmVlLWFlYTgtNmQ2Zjg3N2EyMmE1XkEyXkFqcGc@._V1_.jpg",banner:"https://assets-in.bmscdn.com/discovery-catalog/events/et00484567-amgcpzfmfe-landscape.jpg"},
      {title:"Youth (2026)",id:"1PKwz5XkKmHwJEWBkKD6MTuD3T53Yxsqu",poster:"https://m.media-amazon.com/images/M/MV5BN2Q4MDRlMjItNWY5ZC00MGIxLTg3MGQtYTdlOTE5MTY1N2M1XkEyXkFqcGc@._V1_.jpg",banner:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/youth-et00485590-1770616504.jpg"}
    ]
  }
];

// ===================== STATE =====================
let myList = JSON.parse(localStorage.getItem('movies_mylist')) || [];
let currentHeroIdx = 0;
let heroInterval;
let prevScreen = 's-home';
let currentPlayingData = null;

// ===================== UTILS =====================
function gdUrl(id){ return `https://drive.google.com/file/d/${id}/preview`; }

function makeImg(src, alt){
  const img = document.createElement('img');
  img.src = src; img.alt = alt||''; img.loading='lazy';
  img.onerror = ()=>{ img.style.display='none'; };
  return img;
}

// ===================== HERO =====================
const heroItems = [
  ...videoData.find(d=>d.type==='movie').videos.map(m=>({
    title: m.title, banner: m.banner, poster: m.poster,
    type:'movie', data: m
  }))
];

function setHero(idx){
  currentHeroIdx = idx;
  const item = heroItems[idx];
  const imgEl = document.getElementById('hero-img');
  if(imgEl) imgEl.src = item.banner || item.poster;
  const t = item.title;
  const titleEl = document.getElementById('hero-title');
  if(titleEl) titleEl.innerHTML = t;
  const metaEl = document.getElementById('hero-meta');
  if(metaEl) metaEl.textContent = item.type==='series'
    ? `Series · ${item.data.videos ? item.data.videos.length : 0} Episodes`
    : 'Movie · 2026';
  const tagsEl = document.getElementById('hero-tags');
  if(tagsEl) tagsEl.innerHTML = `
    <span class="htag">${item.type==='series'?'SERIES':'MOVIE'}</span>
    <div class="hsep"></div>
    <span class="htag">2025-2026</span>
    <div class="hsep"></div>
    <span class="htag">HD</span>`;
  const descEl = document.getElementById('hero-desc');
  if(descEl) descEl.textContent =
    item.type==='series'
      ? `Watch all episodes of ${t} in full HD on Movies.`
      : `Watch ${t} now exclusively on Movies.`;
  const watchBtn = document.getElementById('hero-watch-btn');
  if(watchBtn) watchBtn.onclick = ()=>openItem(item.data, item.type);

  document.querySelectorAll('.th').forEach((el,i)=>{
    el.classList.toggle('on', i===idx);
  });
}

function buildThumbStrip(){
  const strip = document.getElementById('thumb-strip');
  if(!strip) return;
  strip.innerHTML='';
  heroItems.forEach((item,i)=>{
    const div = document.createElement('div');
    div.className='th'+(i===0?' on':'');
    div.onclick = ()=>{ clearInterval(heroInterval); setHero(i); startHeroAuto(); };
    div.appendChild(makeImg(item.poster||item.banner,''));
    strip.appendChild(div);
  });
}

function startHeroAuto(){
  heroInterval = setInterval(()=>{
    const next = (currentHeroIdx+1) % heroItems.length;
    setHero(next);
  }, 5000);
}

// ===================== HOME SECTIONS =====================
function buildHomeSections(){
  const cont = document.getElementById('home-sections');
  if(!cont) return;
  cont.innerHTML='';

  const movieCat = videoData.find(d=>d.type==='movie');
  cont.appendChild(buildPosterSection('🎥 Latest Movies', movieCat.videos.slice(0,10).map(m=>({
    label:'MOVIE', name:m.title, poster:m.poster,
    onclick:()=>openItem(m,'movie')
  }))));

  const seriesData = videoData.filter(d=>d.type==='series');
  if(seriesData.length > 0){
    cont.appendChild(buildPosterSection('📺 Popular Web Series', seriesData.map(s=>({
      label:'SERIES', name:s.category, poster:s.poster,
      onclick:()=>openItem(s,'series')
    }))));
  }


}

function buildPosterSection(title, items){
  const wrap = document.createElement('div');
  wrap.style.cssText='padding-top:16px';
  const hd = document.createElement('div');
  hd.className='sh';
  const type = title.toLowerCase().includes('movie') ? 'Movies' : 'Series';
  hd.innerHTML=`<span class="st">${title}</span><span class="sm" onclick="navTo('s-browse'); filterBrowse('${type}')">More ›</span>`;
  wrap.appendChild(hd);
  const row = document.createElement('div');
  row.className='pr';
  items.forEach(item=>{
    const card = document.createElement('div');
    card.className='pc';
    card.onclick = item.onclick;
    const pi = document.createElement('div'); pi.className='pi';
    pi.appendChild(makeImg(item.poster,''));
    const lbl = document.createElement('div'); lbl.className='pl'; lbl.textContent=item.label;
    const pg = document.createElement('div'); pg.className='pg';
    const pn = document.createElement('div'); pn.className='pn'; pn.textContent=item.name;
    pi.appendChild(lbl); pi.appendChild(pg); pi.appendChild(pn);
    card.appendChild(pi);
    row.appendChild(card);
  });
  wrap.appendChild(row);
  return wrap;
}

function buildGridSection(title, items){
  const wrap = document.createElement('div');
  wrap.style.cssText='padding-top:16px';
  const hd = document.createElement('div');
  hd.className='sh';
  hd.innerHTML=`<span class="st">${title}</span>`;
  wrap.appendChild(hd);
  const grid = document.createElement('div');
  grid.className='grid';
  items.forEach(item=>{
    const card = document.createElement('div');
    card.className='pc';
    card.onclick = item.onclick;
    const pi = document.createElement('div'); pi.className='pi';
    pi.appendChild(makeImg(item.poster,''));
    const lbl = document.createElement('div'); lbl.className='pl'; lbl.textContent=item.label;
    const pg = document.createElement('div'); pg.className='pg';
    const pn = document.createElement('div'); pn.className='pn'; pn.textContent=item.name;
    pi.appendChild(lbl); pi.appendChild(pg); pi.appendChild(pn);
    card.appendChild(pi);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  return wrap;
}

// ===================== BROWSE SCREEN =====================
function buildBrowse(){
  filterBrowse('Movies');
}

function filterBrowse(cat){
  const cont = document.getElementById('browse-content');
  if(!cont) return;
  cont.innerHTML='';
  
  if(cat === 'Series'){
    const series = videoData.filter(d=>d.type==='series');
    cont.appendChild(buildGridSection('All Web Series', series.map(s=>({
      label:'SERIES', name:s.category, poster:s.poster, onclick:()=>openItem(s,'series')
    }))));
    return;
  }

  const movieCat = videoData.find(d=>d.type==='movie');
  let movies = [...movieCat.videos];
  
  if(cat === 'Movies'){
    cont.appendChild(buildGridSection('All Movies', movies.map(m=>({
      label:'MOVIE', name:m.title, poster:m.poster, onclick:()=>openItem(m,'movie')
    }))));
    return;
  }

  // 'All' or default
  cont.appendChild(buildGridSection('All Movies', movies.map(m=>({
    label:'MOVIE', name:m.title, poster:m.poster, onclick:()=>openItem(m,'movie')
  }))));
  
  const series = videoData.filter(d=>d.type==='series');
  cont.appendChild(buildGridSection('All Web Series', series.map(s=>({
    label:'SERIES', name:s.category, poster:s.poster, onclick:()=>openItem(s,'series')
  }))));
}

// ===================== SERIES SCREEN (DISABLED) =====================
function buildSeriesScreen(){}

// ===================== OPEN ITEM (modal) =====================
function openItem(data, type){
  const modal = document.getElementById('modal');
  const bannerImg = document.getElementById('modal-banner-img');
  const titleEl = document.getElementById('modal-title');
  const metaEl = document.getElementById('modal-meta');
  const watchBtn = document.getElementById('modal-watch-btn');
  const addBtn = document.getElementById('modal-add-btn');
  const epsSec = document.getElementById('modal-eps-section');

  if(type==='series'){
    bannerImg.src = data.banner || data.poster;
    titleEl.textContent = data.category;
    metaEl.textContent = `Series · ${data.videos.length} Episodes · 2025–2026`;
    watchBtn.onclick = ()=>{
      closeModal();
      const ep = data.videos[0];
      playVideo(Array.isArray(ep)?ep[1]:ep.id, Array.isArray(ep)?ep[0]:ep.title, data.category, data, 'series', 0);
    };
    addBtn.onclick = ()=>{ addToMyList(data,type); closeModal(); };
    epsSec.innerHTML=`<div class="modal-ep-title">All Episodes</div>`;
    data.videos.forEach((ep,i)=>{
      const el=document.createElement('div');
      el.className='modal-ep-item';
      const title = Array.isArray(ep)?ep[0]:ep.title;
      const id = Array.isArray(ep)?ep[1]:ep.id;
      el.innerHTML=`
        <div class="modal-ep-num">${i+1}</div>
        <div class="modal-ep-thumb"><img src="${data.poster}" alt=""></div>
        <div class="modal-ep-info">
          <div class="modal-ep-name">${title}</div>
          <div class="modal-ep-dur">Episode ${i+1}</div>
        </div>
        <i class="ti ti-player-play" style="color:var(--orange);font-size:16px;flex-shrink:0"></i>
      `;
      el.onclick=()=>{
        closeModal();
        playVideo(id, title, data.category, data, 'series', i);
      };
      epsSec.appendChild(el);
    });
  } else {
    bannerImg.src = data.banner || data.poster;
    titleEl.textContent = data.title;
    metaEl.textContent = `Movie · 2025–2026 · HD`;
    watchBtn.onclick = ()=>{
      closeModal();
      playVideo(data.id, data.title, 'Movie', data, 'movie', 0);
    };
    addBtn.onclick = ()=>{ addToMyList(data,type); closeModal(); };
    epsSec.innerHTML='';
  }
  modal.style.display='flex';
}

function closeModal(e){
  if(e && e.target!==document.getElementById('modal')) return;
  document.getElementById('modal').style.display='none';
}

// ===================== PLAY VIDEO =====================
function playVideo(fileId, title, seriesName, itemData, type, epIdx){
  const activeScreen = document.querySelector('.screen.active');
  if(activeScreen) prevScreen = activeScreen.id;

  const ftit = document.getElementById('player-film-title');
  if(ftit) ftit.textContent = title;
  const fsub = document.getElementById('player-film-sub');
  if(fsub) fsub.textContent = type==='series' ? `${seriesName} · Episode ${epIdx+1}` : 'Movie · HD';
  const btit = document.getElementById('pbody-title');
  if(btit) btit.textContent = title;
  const bmeta = document.getElementById('pbody-meta');
  if(bmeta) bmeta.textContent = type==='series' ? `${seriesName} · Episode ${epIdx+1} · ${(epIdx+1)} of ${itemData.videos.length}` : `Movie · 2025–2026 · HD`;

  const iframe = document.getElementById('player-iframe');
  if(iframe) iframe.src = gdUrl(fileId);
  currentPlayingData = {itemData, type, epIdx};

  const epListEl = document.getElementById('player-ep-list');
  if(type==='series' && itemData.videos){
    epListEl.innerHTML=`<div class="eplist-sec"><div class="eplist-hd">Episodes</div></div>`;
    const sec = epListEl.querySelector('.eplist-sec');
    itemData.videos.forEach((ep,i)=>{
      const epTitle = Array.isArray(ep)?ep[0]:ep.title;
      const epId = Array.isArray(ep)?ep[1]:ep.id;
      const el=document.createElement('div');
      el.className='eplist-item';
      el.innerHTML=`
        <div class="eplist-thumb">
          <img src="${itemData.poster}" alt="">
          <div class="eplist-num">E${String(i+1).padStart(2,'0')}</div>
          ${i===epIdx?'<div class="eplist-active-mark"><i class="ti ti-player-play" style="color:var(--orange);font-size:16px"></i></div>':''}
        </div>
        <div class="eplist-info">
          <div class="eplist-title">${epTitle}</div>
          <div class="eplist-sub">Episode ${i+1}${i===epIdx?' · Playing now':''}</div>
        </div>
        ${i===epIdx?'<i class="ti ti-radio" style="color:var(--orange);font-size:16px;flex-shrink:0"></i>':'<i class="ti ti-player-play" style="color:var(--gray);font-size:14px;flex-shrink:0"></i>'}
      `;
      el.onclick=()=>{ playVideo(epId, epTitle, seriesName, itemData, 'series', i); };
      sec.appendChild(el);
    });
  } else if(epListEl){
    epListEl.innerHTML='';
  }

  buildRelated(itemData, type);
  showScreen('s-player');
  const pMain = document.getElementById('p-title-main');
  const pSub = document.getElementById('p-title-sub');
  if(pMain) pMain.textContent = title;
  
  // Fix undefined year
  let yearStr = itemData.year || '';
  if(!yearStr && itemData.id) {
     const parent = videoData.find(v => v.id === itemData.id);
     if(parent) yearStr = parent.year;
  }
  if(pSub) pSub.textContent = (yearStr ? yearStr + ' • ' : '') + (itemData.quality||'HD');
}

function buildRelated(currentData, type){
  const row = document.getElementById('player-related-row');
  if(!row) return;
  row.innerHTML='';
  if(type==='series'){
    const others = videoData.filter(d=>d.type==='series'&&d.category!==currentData.category);
    others.forEach(d=>{
      const el=document.createElement('div');
      el.className='mlcard';
      el.appendChild(makeImg(d.poster,''));
      const grad=document.createElement('div'); grad.className='mlcard-grad'; el.appendChild(grad);
      const nm=document.createElement('div'); nm.className='mlcard-name'; nm.textContent=d.category; el.appendChild(nm);
      el.onclick=()=>{ const f=document.getElementById('player-iframe'); if(f) f.src=''; openItem(d,'series'); };
      row.appendChild(el);
    });
  } else {
    const movieCat = videoData.find(d=>d.type==='movie');
    const others = movieCat.videos.filter(m=>m.id!==currentData.id).slice(0,6);
    others.forEach(m=>{
      const el=document.createElement('div');
      el.className='mlcard';
      el.appendChild(makeImg(m.poster,''));
      const grad=document.createElement('div'); grad.className='mlcard-grad'; el.appendChild(grad);
      const nm=document.createElement('div'); nm.className='mlcard-name'; nm.textContent=m.title; el.appendChild(nm);
      el.onclick=()=>{ const f=document.getElementById('player-iframe'); if(f) f.src=''; openItem(m,'movie'); };
      row.appendChild(el);
    });
  }
}

// ===================== MY LIST =====================
function addToMyList(data, type){
  const key = type==='series' ? data.category : data.title;
  if(!myList.find(x=>(x.type==='series'?x.data.category:x.data.title)===key)){
    myList.push({data, type});
    localStorage.setItem('movies_mylist', JSON.stringify(myList));
    buildMyList();
    toast('Added to My List');
  } else {
    toast('Already in My List');
  }
}

function addMyList(){
  const item = heroItems[currentHeroIdx];
  addToMyList(item.data, item.type);
}

function buildMyList(){
  const cont = document.getElementById('cw-content');
  if(!cont) return;
  const empty = document.getElementById('mylist-empty');
  const countEl = document.getElementById('mylist-count');
  if(countEl) countEl.textContent = `${myList.length} title${myList.length!==1?'s':''} saved`;
  if(myList.length===0){ if(empty) empty.style.display='block'; return; }
  if(empty) empty.style.display='none';
  cont.innerHTML='';
  if(empty) cont.appendChild(empty);
  myList.forEach(({data,type})=>{
    const banner = data.banner||data.poster;
    const title = type==='series'?data.category:data.title;
    const card = document.createElement('div');
    card.className='cwcard';
    card.innerHTML=`
      <div class="cwban">
        <img src="${banner}" alt="">
        <div class="cwbi"><div class="cwbtag">${type==='series'?'SERIES':'MOVIE'}</div><div class="cwbt">${title}</div></div>
        <div class="cwdur">${type==='series'?data.videos.length+' Eps':'Movie'}</div>
        <div class="cwfade"></div>
      </div>
      <div class="cwpbar"><div class="cwpfill" style="width:0%"></div></div>
      <div class="cwbot">
        <div><div class="cwit">${title}</div><div class="cwep">${type==='series'?'Season 1 · Ep 1':'Full Movie'}</div></div>
        <div class="cwbadge">${type==='series'?data.videos.length+' eps':'HD'}</div>
      </div>
      <button class="resbtn"><div class="restri"></div> Watch Now</button>
    `;
    card.onclick = ()=>{ openItem(data,type); };
    cont.appendChild(card);
  });
}

function toast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2500);
}

// ===================== NAVIGATION =====================
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id);
  if(el) el.classList.add('active');
}

function toggleTheme(){
  const p = document.getElementById('phone');
  const icons = document.querySelectorAll('.theme-toggle');
  p.classList.toggle('light-mode');
  const isLight = p.classList.contains('light-mode');
  icons.forEach(icon => {
    icon.className = isLight ? 'ti ti-moon theme-toggle' : 'ti ti-sun theme-toggle';
  });
  toast(isLight ? 'Light Mode On' : 'Dark Mode On');
}

function navTo(id, el){
  if(currentPlayingData && id !== 's-player'){
    const f=document.getElementById('player-iframe');
    if(f) f.src='';
  }
  showScreen(id);
  
  // Update bottom navigation active state
  document.querySelectorAll('.ni').forEach(nav => nav.classList.remove('on'));
  document.querySelectorAll('.ndot').forEach(dot => dot.remove());
  
  // Get the identifying onclick string (e.g. "navTo('s-browse',this); filterBrowse('Series')")
  let targetAction = el ? el.getAttribute('onclick') : null;
  
  if(!targetAction){
    // If no el (programmatic), find the first nav item for this screen
    const firstMatch = document.querySelector(`.ni[onclick*="navTo('${id}'"]`);
    if(firstMatch) targetAction = firstMatch.getAttribute('onclick');
  }

  if(targetAction){
    // Mark ALL nav items with this same action as active across all screens
    document.querySelectorAll(`.ni[onclick="${targetAction}"]`).forEach(nav => {
      nav.classList.add('on');
      if(!nav.querySelector('.ndot')){
        const dot = document.createElement('div');
        dot.className = 'ndot';
        nav.appendChild(dot);
      }
    });
  }

  if(id==='s-search'){
    const inp = document.getElementById('search-input');
    if(inp) setTimeout(()=>inp.focus(), 300);
  }
}

function showMyListOptions(){
  document.getElementById('options-overlay').style.display = 'flex';
}
function closeOptions(e){
  if(e && e.target !== document.getElementById('options-overlay')) return;
  document.getElementById('options-overlay').style.display = 'none';
}
function clearMyList(){
  myList = [];
  localStorage.removeItem('movies_mylist');
  buildMyList();
  closeOptions();
  toast('My List Cleared');
}

function shareVideo(){
  if(navigator.share){
    navigator.share({ title: 'Movies', text: 'Check out this movie!', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    toast('Link copied to clipboard!');
  }
}

function doSearch(q){
  const res = document.getElementById('search-results');
  if(!res) return;
  res.innerHTML = '';
  if(!q.trim()) return;
  const terms = q.toLowerCase();
  
  const allItems = [];
  videoData.forEach(cat=>{
    if(cat.type==='movie'){
      cat.videos.forEach(v=>{
        allItems.push({title: v.title, data: v, type: 'movie', poster: v.poster});
      });
    }
  });

  const matches = allItems.filter(i=>i.title.toLowerCase().includes(terms));
  if(matches.length===0){
    res.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray);font-size:13px">No results found</div>';
    return;
  }

  matches.forEach(m=>{
    const div = document.createElement('div');
    div.className = 'tri';
    div.style.margin = '0 0 10px 0';
    div.innerHTML = `
      <div class="trt"><img src="${m.poster}" alt=""></div>
      <div class="trf">
        <div class="trname">${m.title}</div>
        <div class="trsub">${m.type==='series'?'Web Series':'Movie'} · 2026</div>
      </div>
      <i class="ti ti-chevron-right" style="color:var(--gray)"></i>
    `;
    div.onclick = ()=>openItem(m.data, m.type);
    res.appendChild(div);
  });
}

function goBack(){
  const f=document.getElementById('player-iframe');
  if(f) f.src='';
  navTo(prevScreen||'s-home');
}

function togglePlayerUI(){
  const ov = document.querySelector('.p-immersive-overlay');
  if(ov) {
    if(ov.style.opacity === '0') {
      ov.style.opacity = '1';
      ov.style.pointerEvents = 'auto';
    } else {
      ov.style.opacity = '0';
      ov.style.pointerEvents = 'none';
    }
  }
}

function toggleFullscreen(){
  const el = document.getElementById('s-player');
  if(!document.fullscreenElement && !document.webkitFullscreenElement){
    if(el.requestFullscreen) el.requestFullscreen();
    else if(el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  } else {
    if(document.exitFullscreen) document.exitFullscreen();
    else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
}

function playerControl(action){
  switch(action){
    case 'subtitles': toast('Subtitles settings opened'); break;
    case 'skip': toast('Intro skipped'); break;
    case 'speed': toast('Playback speed adjusted'); break;
    case 'download': toast('Starting download...'); break;
  }
}

// ===================== CLOCK =====================
function updateClock(){
  const el = document.getElementById('clock');
  if(!el) return;
  const now=new Date();
  const h=now.getHours().toString().padStart(2,'0');
  const m=now.getMinutes().toString().padStart(2,'0');
  el.textContent=`${h}:${m}`;
}
setInterval(updateClock,30000); updateClock();

// ===================== INIT =====================
window.onload = ()=>{
  buildThumbStrip();
  setHero(0);
  startHeroAuto();
  buildHomeSections();
  buildBrowse();
  buildSeriesScreen();
  buildMyList();
};
