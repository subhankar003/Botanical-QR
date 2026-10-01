const plants = [
{slug:'tulasi',od:'ତୁଳସୀ',hi:'तुलसी',en:'Tulsi / Holy basil',botanical:'Ocimum tenuiflorum L.',family:'Lamiaceae',habit:'Herb / subshrub',parts:'Leaves, flowers',key:'Ocimum tenuiflorum',ayur:'Traditional Ayurveda: traditionally used in preparations associated with cough, cold, respiratory comfort and general wellness. These are traditional uses, not proven treatments.',distribution:'Kew accepts O. tenuiflorum; native range includes India and tropical/subtropical Asia.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A453130-1'},
{slug:'brahmi',od:'ବ୍ରାହ୍ମୀ',hi:'ब्राह्मी',en:'Brahmi / Water hyssop',botanical:'Bacopa monnieri (L.) Wettst.',family:'Plantaginaceae',habit:'Aquatic/perennial herb',parts:'Whole plant',key:'Bacopa monnieri',ayur:'Traditional Ayurveda: commonly described as a medhya rasayana and traditionally associated with memory, concentration and mental calmness.',distribution:'Kew lists the species as accepted and native across tropical/subtropical regions including India.',ref:'https://powo.science.kew.org/taxon/1072674-2'},
{slug:'shatavari',od:'ଶତାବରୀ',hi:'शतावरी',en:'Shatavari / Wild asparagus',botanical:'Asparagus racemosus Willd.',family:'Asparagaceae',habit:'Climbing shrub',parts:'Tuberous roots',key:'Asparagus racemosus',ayur:'Traditional Ayurveda: traditionally used as a rasayana and in women’s health preparations; traditionally described as nourishing and supportive.',distribution:'Kew lists A. racemosus as accepted and native to India and other parts of tropical Asia/Africa.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A531271-1'},
{slug:'patala-garuda',od:'ପାତାଳଗରୁଡ',hi:'पाताल गरुड़',en:'Indian kudzu',botanical:'Pueraria tuberosa (Roxb. ex Willd.) DC.',family:'Fabaceae',habit:'Climbing perennial / shrub',parts:'Tuberous root',key:'Pueraria tuberosa',ayur:'Traditional Ayurveda: tuber is traditionally valued as a nourishing and restorative ingredient in herbal preparations.',distribution:'Kew records the species as accepted and native to the Indian subcontinent.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A516731-1'},
{slug:'basanga',od:'ବାସଙ୍ଗ',hi:'वासंग',en:'Malabar nut / Adusa',botanical:'Justicia adhatoda L.',family:'Acanthaceae',habit:'Shrub',parts:'Leaves',key:'Justicia adhatoda',ayur:'Traditional Ayurveda: leaves are traditionally used in formulations for cough and respiratory complaints.',distribution:'Kew lists J. adhatoda as accepted; NCBS records its presence in Odisha and the synonym Adhatoda vasica.',ref:'https://powo.science.kew.org/taxon/50237-1'},
{slug:'bhrusanga',od:'ଭୃଷଙ୍ଗ',hi:'भृंगसंग / करी पत्ता',en:'Curry leaf',botanical:'Bergera koenigii L. (syn. Murraya koenigii)',family:'Rutaceae',habit:'Shrub / small tree',parts:'Leaves',key:'Bergera koenigii',ayur:'Traditional use: leaves are widely used as food and in traditional remedies; culinary use is especially common in South Asia.',distribution:'Kew currently accepts Bergera koenigii; Murraya koenigii is treated as a synonym.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A771522-1'},
{slug:'ghikuanri',od:'ଘିକୁଆଁରୀ',hi:'घृतकुमारी',en:'Aloe vera',botanical:'Aloe vera (L.) Burm.f.',family:'Asphodelaceae',habit:'Succulent perennial',parts:'Leaf gel / latex',key:'Aloe vera',ayur:'Traditional use: leaf preparations and gel have long-standing traditional uses for skin care and other purposes. Internal use requires caution.',distribution:'Kew accepts A. vera and records it as introduced in India; its native range is in northern Oman.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A530017-1'},
{slug:'bhuin-neem',od:'ଭୂଇଁନିମ',hi:'भुई नीम',en:'King of bitters / Kalmegh',botanical:'Andrographis paniculata (Burm.f.) Wall. ex Nees',family:'Acanthaceae',habit:'Annual herb',parts:'Whole aerial parts',key:'Andrographis paniculata',ayur:'Traditional Ayurveda: strongly bitter herb traditionally used in preparations for digestive and seasonal wellness.',distribution:'Kew lists the species as accepted and native to the Indian subcontinent.',ref:'https://powo.science.kew.org/taxon/45226-1'},
{slug:'gangashiuli',od:'ଗଙ୍ଗଶିଉଳି',hi:'हरसिंगार / पारिजात',en:'Night-flowering jasmine',botanical:'Nyctanthes arbor-tristis L.',family:'Oleaceae',habit:'Shrub / small tree',parts:'Leaves, flowers, bark, seeds',key:'Nyctanthes arbor-tristis',ayur:'Traditional use: different parts are used in traditional systems for fever, joint discomfort and other complaints; evidence and preparations vary.',distribution:'Kew lists N. arbor-tristis as accepted and native from the Himalaya to Indo-China and parts of Southeast Asia.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A610599-1'},
{slug:'hadjoda',od:'ହାଡଯୋଡ',hi:'हड़जोड़',en:'Veldt grape / Bone-setter',botanical:'Cissus quadrangularis L.',family:'Vitaceae',habit:'Climbing succulent',parts:'Stem',key:'Cissus quadrangularis',ayur:'Traditional Ayurveda: stem is traditionally used in preparations associated with bones, joints and musculoskeletal support.',distribution:'Kew lists C. quadrangularis as accepted and native across the Indian subcontinent and other tropical regions.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A67898-1'},
{slug:'pasaruni',od:'ପଶାରୁଣୀ',hi:'प्रसारिणी',en:'Skunk vine',botanical:'Paederia foetida L.',family:'Rubiaceae',habit:'Climbing perennial',parts:'Leaves, roots, stems',key:'Paederia foetida',ayur:'Traditional use: used in regional traditional medicine and food practices; plant parts have distinctive odour.',distribution:'Kew lists P. foetida as accepted and native from eastern Nepal through Japan and Malesia, including India.',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A758897-1'},
{slug:'olua',od:'ଓଲୁଅ',hi:'स्नुही / सेहुंड',en:'Indian spurge tree',botanical:'Euphorbia neriifolia L.',family:'Euphorbiaceae',habit:'Succulent shrub / small tree',parts:'Stem, latex (traditional use)',key:'Euphorbia neriifolia',ayur:'Traditional use: used in some Ayurvedic preparations, but its latex is irritating/toxic and should not be self-administered.',distribution:'Kew lists E. neriifolia as accepted and native from Iran to Myanmar, including India.',ref:'https://powo.science.kew.org/taxon/347489-1'}
];
const T = {
    od: {
        title: 'ଔଷଧୀୟ ଉଦ୍ଭିଦ ବିଶ୍ୱକୋଷ', search: 'ଉଦ୍ଭିଦ ଖୋଜନ୍ତୁ…', details: 'ମୁଖ୍ୟ ବିବରଣୀ', ayur: 'ଆୟୁର୍ବେଦିକ / ପାରମ୍ପରିକ ବ୍ୟବହାର', safety: 'ସତର୍କତା', ref: 'ଉତ୍ସ ଓ ସନ୍ଦର୍ଭ', qr: 'QR କୋଡ୍', bot: 'ବୈଜ୍ଞାନିକ ନାମ', family: 'ପରିବାର', habit: 'ପ୍ରକୃତି', parts: 'ବ୍ୟବହୃତ ଅଂଶ', dist: 'ବିସ୍ତାର', back: 'ସମସ୍ତ ଉଦ୍ଭିଦ', disclaimer: 'ଏହି ସାଇଟ୍ ଶିକ୍ଷାମୂଳକ ଓ ପାରମ୍ପରିକ ତଥ୍ୟ ପାଇଁ। ଏହା ଡାକ୍ତରୀ ପରାମର୍ଶ ନୁହେଁ।'
    },
    hi: {
        title: 'औषधीय पौधों का विश्वकोश', search: 'पौधा खोजें…', details: 'मुख्य विवरण', ayur: 'आयुर्वेदिक / पारंपरिक उपयोग', safety: 'सावधानी', ref: 'स्रोत और संदर्भ', qr: 'QR कोड', bot: 'वानस्पतिक नाम', family: 'कुल', habit: 'प्रकृति', parts: 'उपयोगी भाग', dist: 'वितरण', back: 'सभी पौधे', disclaimer: 'यह साइट शैक्षिक और पारंपरिक जानकारी के लिए है। यह चिकित्सकीय सलाह नहीं है।'
    },
    en: {
        title: 'Medicinal Plants Encyclopedia', search: 'Search plants…', details: 'Key details', ayur: 'Ayurvedic / Traditional use', safety: 'Safety', ref: 'Sources & references', qr: 'QR code', bot: 'Botanical name', family: 'Family', habit: 'Habit', parts: 'Parts used', dist: 'Distribution', back: 'All plants', disclaimer: 'This site is for educational and traditional reference only. It is not medical advice.'
    }
};

const HOME_T = {
    od: { siteTitle: '🌿 ଔଷଧୀୟ ଉଦ୍ଭିଦ ବିଶ୍ୱକୋଷ', kicker: 'ଉଦ୍ଭିଦ ଜ୍ଞାନକୋଷ', title: 'ଆମ ଔଷଧୀୟ ଉଦ୍ଭିଦ', description: 'ଓଡ଼ିଶାରେ ପାରମ୍ପରିକ ଭାବେ ପରିଚିତ ଔଷଧୀୟ ଉଦ୍ଭିଦଗୁଡ଼ିକ ବିଷୟରେ ଜାଣନ୍ତୁ।', plantsTitle: 'ଉଦ୍ଭିଦ ତାଲିକା', count: '୧୨ଟି ଉଦ୍ଭିଦ', noResults: 'କୌଣସି ଉଦ୍ଭିଦ ମିଳିଲା ନାହିଁ।', aboutTitle: 'ଏହି ବିଶ୍ୱକୋଷ ବିଷୟରେ', aboutText: 'ଏହି ୱେବସାଇଟ୍ ଔଷଧୀୟ ଏବଂ ପାରମ୍ପରିକ ଭାବେ ବ୍ୟବହୃତ ଉଦ୍ଭିଦଗୁଡ଼ିକ ବିଷୟରେ ସାଧାରଣ ଶିକ୍ଷାମୂଳକ ତଥ୍ୟ ପ୍ରଦାନ କରେ।' },
    hi: { siteTitle: '🌿 औषधीय पौधों का विश्वकोश', kicker: 'पौधों का ज्ञानकोश', title: 'हमारे औषधीय पौधे', description: 'ओडिशा में पारंपरिक रूप से पहचाने जाने वाले औषधीय पौधों के बारे में जानें।', plantsTitle: 'पौधों की सूची', count: '12 पौधे', noResults: 'कोई पौधा नहीं मिला।', aboutTitle: 'इस विश्वकोश के बारे में', aboutText: 'यह वेबसाइट औषधीय और पारंपरिक रूप से उपयोग किए जाने वाले पौधों के बारे में सामान्य शैक्षिक जानकारी देती है।' },
    en: { siteTitle: '🌿 Medicinal Plants Encyclopedia', kicker: 'Plant Knowledge Base', title: 'Our Medicinal Plants', description: 'Explore medicinal plants traditionally known and used in Odisha.', plantsTitle: 'Plant Directory', count: '12 plants', noResults: 'No plants found.', aboutTitle: 'About this encyclopedia', aboutText: 'This website provides general educational information about medicinal and traditionally used plants.' }
};

let lang = localStorage.getItem('bqr-lang') || 'od';
if (!T[lang]) lang = 'od';

function imgUrl(plant) {
    return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(plant.key)}`;
}

async function getImage(plant, element) {
    try {
        const response = await fetch(imgUrl(plant));
        const image = await response.json();
        if (image.originalimage?.source) {
            element.src = image.originalimage.source;
            return;
        }
    } catch (error) {
        // The Commons file path below is the existing detail-page fallback.
    }
    element.src = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(`${plant.key}.jpg`)}`;
}

function setLang(nextLang) {
    if (!T[nextLang]) return;
    lang = nextLang;
    localStorage.setItem('bqr-lang', lang);
    document.documentElement.lang = lang === 'od' ? 'or' : lang;
    render();
}

function updateLanguageButtons() {
    document.querySelectorAll('[data-lang]').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

function fallbackHomeImage(image) {
    image.onerror = null;
    image.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"%3E%3Crect width="100%25" height="100%25" fill="%23f1f7f3"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="82"%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E';
}

function renderHome() {
    const t = HOME_T[lang];
    const detailT = T[lang];
    const setText = (id, value) => { document.getElementById(id).textContent = value; };

    setText('site-title', t.siteTitle);
    setText('hero-eyebrow', t.kicker);
    setText('hero-title', t.title);
    setText('hero-description', t.description);
    setText('plants-title', t.plantsTitle);
    setText('plant-count', t.count);
    setText('no-results', t.noResults);
    setText('about-title', t.aboutTitle);
    setText('about-text', t.aboutText);
    setText('disclaimer', detailT.disclaimer);
    document.title = t.siteTitle.slice(3);
    document.getElementById('plant-search').placeholder = detailT.search;

    document.querySelectorAll('[data-plant]').forEach((card) => {
        const plant = plants.find((entry) => entry.slug === card.dataset.plant);
        const localizedName = plant[lang];
        card.querySelector('h3').textContent = localizedName;
        card.querySelector('p').textContent = lang === 'en' ? plant.od : plant.en;
        card.querySelector('em').textContent = plant.botanical;
        card.querySelector('img').alt = localizedName;
    });

    const search = document.getElementById('plant-search');
    search.oninput = () => {
        const query = search.value.trim().toLocaleLowerCase();
        let matches = 0;
        document.querySelectorAll('[data-plant]').forEach((card) => {
            const plant = plants.find((entry) => entry.slug === card.dataset.plant);
            const searchable = `${card.dataset.search} ${plant.od} ${plant.hi} ${plant.en} ${plant.botanical}`.toLocaleLowerCase();
            const match = searchable.includes(query);
            card.hidden = !match;
            if (match) matches += 1;
        });
        document.getElementById('no-results').hidden = matches !== 0;
    };

    document.querySelectorAll('.plant-card-image img').forEach((image) => {
        image.onerror = () => fallbackHomeImage(image);
    });
}

function renderPlantDetail(app) {
    const t = T[lang];
    const plant = plants.find((entry) => location.pathname.includes(`/plant/${entry.slug}`));
    if (!plant) return;

    document.getElementById('disclaimer').textContent = t.disclaimer;
    app.innerHTML = `<section class="hero plantHero"><a class="back" href="../../">← ${t.back}</a><div class="plantGrid"><div><div class="bigimg"><span>🌿</span><img id="heroimg" alt="${plant.en}"></div></div><div><span class="badge">${plant.family}</span><h1>${plant.od}</h1><p class="native">${plant.hi}</p><p class="english">${plant.en}</p><p class="scientific"><i>${plant.botanical}</i></p><div class="actions"><button id="print">🖨️</button><button id="makeqr">${t.qr}</button></div></div></div></section><section class="contentGrid"><article><h2>${t.details}</h2><div class="facts"><div><b>${t.bot}</b><span><i>${plant.botanical}</i></span></div><div><b>${t.family}</b><span>${plant.family}</span></div><div><b>${t.habit}</b><span>${plant.habit}</span></div><div><b>${t.parts}</b><span>${plant.parts}</span></div><div><b>${t.dist}</b><span>${plant.distribution}</span></div></div><h2>${t.ayur}</h2><p>${plant.ayur}</p><div class="warning"><b>${t.safety}</b><p>${plant.slug === 'olua' ? 'The milky latex can irritate skin and eyes and may be toxic if swallowed. Do not use raw latex without qualified professional guidance.' : 'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'}</p></div><h2>${t.ref}</h2><p><a href="${plant.ref}" target="_blank" rel="noopener">Plants of the World Online — Royal Botanic Gardens, Kew</a></p><p><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(plant.en.split(' / ')[0])}" target="_blank" rel="noopener">Wikipedia</a></p></article><aside><div class="qrbox"><h3>${t.qr}</h3><div id="qrcode"></div><small>Scan to open this plant page.</small></div></aside></section>`;
    getImage(plant, document.getElementById('heroimg'));
    new QRCode(document.getElementById('qrcode'), { text: location.href, width: 190, height: 190 });
    document.getElementById('print').onclick = () => print();
    document.getElementById('makeqr').onclick = () => document.getElementById('qrcode').scrollIntoView({ behavior: 'smooth' });
}

function render() {
    updateLanguageButtons();
    const app = document.getElementById('app');
    if (document.getElementById('home-page')) {
        renderHome();
    } else if (app) {
        renderPlantDetail(app);
    }
}

document.querySelectorAll('[data-lang]').forEach((button) => {
    button.onclick = () => setLang(button.dataset.lang);
});
render();
