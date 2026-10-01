const plants = [
{slug:'tulasi',od:'ତୁଳସୀ',hi:'तुलसी',en:'Tulsi / Holy basil',botanical:'Ocimum tenuiflorum L.',family:'Lamiaceae',habit:{od:'ଭେଷଜ / ଉପ-ଗୁଳ୍ମ',hi:'शाकीय पौधा / उपझाड़ी',en:'Herb / subshrub'},parts:{od:'ପତ୍ର, ଫୁଲ',hi:'पत्तियां, फूल',en:'Leaves, flowers'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ କାଶ, ସର୍ଦ୍ଦି, ଶ୍ୱାସକ୍ରିୟାର ସୁବିଧା ଏବଂ ସାଧାରଣ ସୁସ୍ଥତା ସହ ସମ୍ବନ୍ଧିତ ପ୍ରସ୍ତୁତିରେ ଏହା ବ୍ୟବହୃତ ହୁଏ। ଏଗୁଡ଼ିକ ପାରମ୍ପରିକ ବ୍ୟବହାର, ପ୍ରମାଣିତ ଚିକିତ୍ସା ନୁହେଁ।',hi:'पारंपरिक आयुर्वेद में इसका उपयोग खांसी, सर्दी, श्वसन आराम और सामान्य स्वास्थ्य से जुड़ी तैयारियों में किया जाता है। ये पारंपरिक उपयोग हैं, सिद्ध उपचार नहीं।',en:'Traditional Ayurveda: traditionally used in preparations associated with cough, cold, respiratory comfort and general wellness. These are traditional uses, not proven treatments.'},distribution:{od:'Kew ଅନୁସାରେ O. tenuiflorum ଗ୍ରହଣୀୟ ପ୍ରଜାତି; ଏହାର ସ୍ୱଦେଶୀ ପ୍ରସାର ଭାରତ ଓ ଉଷ୍ଣ/ଉପଉଷ୍ଣ ଏସିଆରେ ଅଛି।',hi:'Kew के अनुसार O. tenuiflorum स्वीकृत प्रजाति है; इसका मूल विस्तार भारत तथा उष्ण/उपोष्ण एशिया में है।',en:'Kew accepts O. tenuiflorum; native range includes India and tropical/subtropical Asia.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Ocimum tenuiflorum',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A453130-1'},
{slug:'brahmi',od:'ବ୍ରାହ୍ମୀ',hi:'ब्राह्मी',en:'Brahmi / Water hyssop',botanical:'Bacopa monnieri (L.) Wettst.',family:'Plantaginaceae',habit:{od:'ଜଳଜ / ବହୁବର୍ଷୀୟ ଭେଷଜ',hi:'जलीय / बहुवर्षीय शाक',en:'Aquatic/perennial herb'},parts:{od:'ସମଗ୍ର ଉଦ୍ଭିଦ',hi:'संपूर्ण पौधा',en:'Whole plant'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ ଏହାକୁ ମେଧ୍ୟ ରସାୟନ ଭାବରେ ବର୍ଣ୍ଣନା କରାଯାଏ ଏବଂ ସ୍ମୃତି, ଏକାଗ୍ରତା ଓ ମାନସିକ ଶାନ୍ତି ସହ ଯୋଡ଼ାଯାଏ।',hi:'पारंपरिक आयुर्वेद में इसे मेध्य रसायन कहा जाता है और इसे स्मृति, एकाग्रता तथा मानसिक शांति से जोड़ा जाता है।',en:'Traditional Ayurveda: commonly described as a medhya rasayana and traditionally associated with memory, concentration and mental calmness.'},distribution:{od:'Kew ଏହି ପ୍ରଜାତିକୁ ଗ୍ରହଣୀୟ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ ଏବଂ ଭାରତ ସମେତ ଉଷ୍ଣ/ଉପଉଷ୍ଣ ଅଞ୍ଚଳରେ ଏହା ସ୍ୱଦେଶୀ।',hi:'Kew इस प्रजाति को स्वीकृत बताता है और भारत सहित उष्ण/उपोष्ण क्षेत्रों में इसे स्वदेशी मानता है।',en:'Kew lists the species as accepted and native across tropical/subtropical regions including India.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Bacopa monnieri',ref:'https://powo.science.kew.org/taxon/1072674-2'},
{slug:'shatavari',od:'ଶତାବରୀ',hi:'शतावरी',en:'Shatavari / Wild asparagus',botanical:'Asparagus racemosus Willd.',family:'Asparagaceae',habit:{od:'ଆରୋହୀ ଗୁଳ୍ମ',hi:'चढ़ने वाली झाड़ी',en:'Climbing shrub'},parts:{od:'କନ୍ଦମୂଳ',hi:'कंदमूल',en:'Tuberous roots'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ ଏହାକୁ ରସାୟନ ଏବଂ ନାରୀ ସ୍ୱାସ୍ଥ୍ୟ ସମ୍ବନ୍ଧୀୟ ପ୍ରସ୍ତୁତିରେ ବ୍ୟବହାର କରାଯାଏ; ଏହାକୁ ପୋଷକ ଓ ସହାୟକ ଭାବରେ ବର୍ଣ୍ଣନା କରାଯାଏ।',hi:'पारंपरिक आयुर्वेद में इसका उपयोग रसायन तथा महिलाओं के स्वास्थ्य से जुड़ी तैयारियों में किया जाता है; इसे पोषक और सहायक बताया जाता है।',en:'Traditional Ayurveda: traditionally used as a rasayana and in women’s health preparations; traditionally described as nourishing and supportive.'},distribution:{od:'Kew ଅନୁସାରେ A. racemosus ଗ୍ରହଣୀୟ ପ୍ରଜାତି ଏବଂ ଭାରତ ସହ ଉଷ୍ଣ ଏସିଆ ଓ ଆଫ୍ରିକାର ଅନ୍ୟାନ୍ୟ ଅଞ୍ଚଳରେ ସ୍ୱଦେଶୀ।',hi:'Kew के अनुसार A. racemosus स्वीकृत प्रजाति है और भारत तथा उष्ण एशिया व अफ्रीका के अन्य भागों की मूल प्रजाति है।',en:'Kew lists A. racemosus as accepted and native to India and other parts of tropical Asia/Africa.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Asparagus racemosus',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A531271-1'},
{slug:'patala-garuda',od:'ପାତାଳଗରୁଡ',hi:'पाताल गरुड़',en:'Indian kudzu',botanical:'Pueraria tuberosa (Roxb. ex Willd.) DC.',family:'Fabaceae',habit:{od:'ଆରୋହୀ ବହୁବର୍ଷୀୟ / ଗୁଳ୍ମ',hi:'चढ़ने वाला बहुवर्षीय पौधा / झाड़ी',en:'Climbing perennial / shrub'},parts:{od:'କନ୍ଦମୂଳ',hi:'कंदमूल',en:'Tuberous root'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ ଏହାର କନ୍ଦମୂଳକୁ ଔଷଧୀୟ ପ୍ରସ୍ତୁତିରେ ପୋଷକ ଏବଂ ପୁନର୍ସ୍ଥାପନକାରୀ ଉପାଦାନ ଭାବେ ମୂଲ୍ୟ ଦିଆଯାଏ।',hi:'पारंपरिक आयुर्वेद में इसके कंद को औषधीय तैयारियों में पोषक और पुनर्स्थापना करने वाले घटक के रूप में महत्व दिया जाता है।',en:'Traditional Ayurveda: tuber is traditionally valued as a nourishing and restorative ingredient in herbal preparations.'},distribution:{od:'Kew ଏହି ପ୍ରଜାତିକୁ ଗ୍ରହଣୀୟ ଏବଂ ଭାରତୀୟ ଉପମହାଦେଶର ସ୍ୱଦେଶୀ ଭାବେ ଲିପିବଦ୍ଧ କରେ।',hi:'Kew इस प्रजाति को स्वीकृत तथा भारतीय उपमहाद्वीप की मूल प्रजाति के रूप में दर्ज करता है।',en:'Kew records the species as accepted and native to the Indian subcontinent.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Pueraria tuberosa',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A516731-1'},
{slug:'basanga',od:'ବାସଙ୍ଗ',hi:'वासंग',en:'Malabar nut / Adusa',botanical:'Justicia adhatoda L.',family:'Acanthaceae',habit:{od:'ଗୁଳ୍ମ',hi:'झाड़ी',en:'Shrub'},parts:{od:'ପତ୍ର',hi:'पत्तियां',en:'Leaves'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ ପତ୍ରଗୁଡ଼ିକ କାଶ ଏବଂ ଶ୍ୱାସକ୍ରିୟା ସମସ୍ୟା ସମ୍ବନ୍ଧୀୟ ପ୍ରସ୍ତୁତିରେ ବ୍ୟବହୃତ ହୁଏ।',hi:'पारंपरिक आयुर्वेद में पत्तियों का उपयोग खांसी और श्वसन संबंधी शिकायतों की तैयारियों में किया जाता है।',en:'Traditional Ayurveda: leaves are traditionally used in formulations for cough and respiratory complaints.'},distribution:{od:'Kew ଅନୁସାରେ J. adhatoda ଗ୍ରହଣୀୟ; NCBS ଓଡ଼ିଶାରେ ଏହାର ଉପସ୍ଥିତି ଏବଂ Adhatoda vasica ସମନାମକୁ ଲିପିବଦ୍ଧ କରେ।',hi:'Kew के अनुसार J. adhatoda स्वीकृत है; NCBS ओडिशा में इसकी उपस्थिति और Adhatoda vasica पर्याय को दर्ज करता है।',en:'Kew lists J. adhatoda as accepted; NCBS records its presence in Odisha and the synonym Adhatoda vasica.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Justicia adhatoda',ref:'https://powo.science.kew.org/taxon/50237-1'},
{slug:'bhrusanga',od:'ଭୃଷଙ୍ଗ',hi:'भृंगसंग / करी पत्ता',en:'Curry leaf',botanical:'Bergera koenigii L. (syn. Murraya koenigii)',family:'Rutaceae',habit:{od:'ଗୁଳ୍ମ / କ୍ଷୁଦ୍ର ବୃକ୍ଷ',hi:'झाड़ी / छोटा वृक्ष',en:'Shrub / small tree'},parts:{od:'ପତ୍ର',hi:'पत्तियां',en:'Leaves'},ayur:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାରରେ ପତ୍ରଗୁଡ଼ିକ ଖାଦ୍ୟ ଏବଂ ଲୋକଚିକିତ୍ସାରେ ବହୁଳ ଭାବରେ ବ୍ୟବହୃତ ହୁଏ; ଦକ୍ଷିଣ ଏସିଆରେ ରନ୍ଧନ ବ୍ୟବହାର ବିଶେଷ ସାଧାରଣ।',hi:'पारंपरिक उपयोग में पत्तियों का भोजन और लोक उपचारों में व्यापक उपयोग होता है; दक्षिण एशिया में इसका पाक उपयोग विशेष रूप से आम है।',en:'Traditional use: leaves are widely used as food and in traditional remedies; culinary use is especially common in South Asia.'},distribution:{od:'Kew ବର୍ତ୍ତମାନ Bergera koenigii କୁ ଗ୍ରହଣ କରେ; Murraya koenigii କୁ ସମନାମ ଭାବେ ବିବେଚନା କରାଯାଏ।',hi:'Kew वर्तमान में Bergera koenigii को स्वीकृत मानता है; Murraya koenigii को पर्याय माना जाता है।',en:'Kew currently accepts Bergera koenigii; Murraya koenigii is treated as a synonym.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Bergera koenigii',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A771522-1'},
{slug:'ghikuanri',od:'ଘିକୁଆଁରୀ',hi:'घृतकुमारी',en:'Aloe vera',botanical:'Aloe vera (L.) Burm.f.',family:'Asphodelaceae',habit:{od:'ରସାଳୁ ବହୁବର୍ଷୀୟ ଉଦ୍ଭିଦ',hi:'रसीला बहुवर्षीय पौधा',en:'Succulent perennial'},parts:{od:'ପତ୍ର ଜେଲ୍ / କ୍ଷୀର',hi:'पत्ती का जेल / लेटेक्स',en:'Leaf gel / latex'},ayur:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାରରେ ପତ୍ର ପ୍ରସ୍ତୁତି ଓ ଜେଲ୍‌ର ତ୍ୱଚା ଯତ୍ନ ଏବଂ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟରେ ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ରହିଛି। ଭିତରେ ବ୍ୟବହାର କଲେ ସତର୍କତା ଆବଶ୍ୟକ।',hi:'पारंपरिक उपयोग में पत्ती की तैयारियों और जेल का त्वचा देखभाल तथा अन्य उद्देश्यों के लिए लंबे समय से उपयोग होता आया है। आंतरिक उपयोग में सावधानी आवश्यक है।',en:'Traditional use: leaf preparations and gel have long-standing traditional uses for skin care and other purposes. Internal use requires caution.'},distribution:{od:'Kew A. vera କୁ ଗ୍ରହଣ କରେ ଏବଂ ଭାରତରେ ପ୍ରବର୍ତ୍ତିତ ଭାବେ ଲିପିବଦ୍ଧ କରେ; ଏହାର ସ୍ୱଦେଶୀ ପ୍ରସାର ଉତ୍ତର ଓମାନରେ।',hi:'Kew A. vera को स्वीकार करता है और भारत में इसे परिचयित बताता है; इसका मूल विस्तार उत्तरी ओमान में है।',en:'Kew accepts A. vera and records it as introduced in India; its native range is in northern Oman.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Aloe vera',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A530017-1'},
{slug:'bhuin-neem',od:'ଭୂଇଁନିମ',hi:'भुई नीम',en:'King of bitters / Kalmegh',botanical:'Andrographis paniculata (Burm.f.) Wall. ex Nees',family:'Acanthaceae',habit:{od:'ବାର୍ଷିକ ଭେଷଜ',hi:'वार्षिक शाक',en:'Annual herb'},parts:{od:'ସମଗ୍ର ଭୂଉପରିସ୍ଥ ଅଂଶ',hi:'समस्त भूमि-ऊपरी भाग',en:'Whole aerial parts'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ ଏହି ତୀବ୍ର ତିକ୍ତ ଉଦ୍ଭିଦକୁ ପାଚନ ଏବଂ ଋତୁକାଳୀନ ସୁସ୍ଥତା ସମ୍ବନ୍ଧୀୟ ପ୍ରସ୍ତୁତିରେ ବ୍ୟବହାର କରାଯାଏ।',hi:'पारंपरिक आयुर्वेद में इस अत्यंत कड़वी जड़ी-बूटी का उपयोग पाचन और मौसमी स्वास्थ्य से जुड़ी तैयारियों में किया जाता है।',en:'Traditional Ayurveda: strongly bitter herb traditionally used in preparations for digestive and seasonal wellness.'},distribution:{od:'Kew ଏହି ପ୍ରଜାତିକୁ ଗ୍ରହଣୀୟ ଏବଂ ଭାରତୀୟ ଉପମହାଦେଶର ସ୍ୱଦେଶୀ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ।',hi:'Kew इस प्रजाति को स्वीकृत और भारतीय उपमहाद्वीप की मूल प्रजाति बताता है।',en:'Kew lists the species as accepted and native to the Indian subcontinent.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Andrographis paniculata',ref:'https://powo.science.kew.org/taxon/45226-1'},
{slug:'gangashiuli',od:'ଗଙ୍ଗଶିଉଳି',hi:'हरसिंगार / पारिजात',en:'Night-flowering jasmine',botanical:'Nyctanthes arbor-tristis L.',family:'Oleaceae',habit:{od:'ଗୁଳ୍ମ / କ୍ଷୁଦ୍ର ବୃକ୍ଷ',hi:'झाड़ी / छोटा वृक्ष',en:'Shrub / small tree'},parts:{od:'ପତ୍ର, ଫୁଲ, ଛାଲ, ବୀଜ',hi:'पत्तियां, फूल, छाल, बीज',en:'Leaves, flowers, bark, seeds'},ayur:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାରରେ ଜ୍ୱର, ସନ୍ଧି ଅସୁବିଧା ଓ ଅନ୍ୟାନ୍ୟ ଅଭିଯୋଗ ପାଇଁ ବିଭିନ୍ନ ଅଂଶ ବ୍ୟବହୃତ ହୁଏ; ପ୍ରମାଣ ଏବଂ ପ୍ରସ୍ତୁତି ଭିନ୍ନ ହୋଇଥାଏ।',hi:'पारंपरिक प्रणालियों में इसके विभिन्न भागों का उपयोग बुखार, जोड़ों की असुविधा और अन्य शिकायतों के लिए किया जाता है; प्रमाण और तैयारियां अलग-अलग हैं।',en:'Traditional use: different parts are used in traditional systems for fever, joint discomfort and other complaints; evidence and preparations vary.'},distribution:{od:'Kew N. arbor-tristis କୁ ଗ୍ରହଣୀୟ ଏବଂ ହିମାଳୟରୁ ଭାରତ-ଚୀନ ଓ ଦକ୍ଷିଣ-ପୂର୍ବ ଏସିଆର କିଛି ଅଞ୍ଚଳ ପର୍ଯ୍ୟନ୍ତ ସ୍ୱଦେଶୀ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ।',hi:'Kew N. arbor-tristis को स्वीकृत तथा हिमालय से हिंद-चीन और दक्षिण-पूर्व एशिया के कुछ भागों तक की मूल प्रजाति बताता है।',en:'Kew lists N. arbor-tristis as accepted and native from the Himalaya to Indo-China and parts of Southeast Asia.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Nyctanthes arbor-tristis',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A610599-1'},
{slug:'hadjoda',od:'ହାଡଯୋଡ',hi:'हड़जोड़',en:'Veldt grape / Bone-setter',botanical:'Cissus quadrangularis L.',family:'Vitaceae',habit:{od:'ଆରୋହୀ ରସାଳୁ ଉଦ୍ଭିଦ',hi:'चढ़ने वाला रसीला पौधा',en:'Climbing succulent'},parts:{od:'କାଣ୍ଡ',hi:'तना',en:'Stem'},ayur:{od:'ପାରମ୍ପରିକ ଆୟୁର୍ବେଦରେ କାଣ୍ଡକୁ ହାଡ଼, ସନ୍ଧି ଏବଂ ପେଶୀ-ହାଡ଼ ସମର୍ଥନ ସହ ସମ୍ବନ୍ଧିତ ପ୍ରସ୍ତୁତିରେ ବ୍ୟବହାର କରାଯାଏ।',hi:'पारंपरिक आयुर्वेद में तने का उपयोग हड्डियों, जोड़ों और मांसपेशी-हड्डी सहारे से जुड़ी तैयारियों में किया जाता है।',en:'Traditional Ayurveda: stem is traditionally used in preparations associated with bones, joints and musculoskeletal support.'},distribution:{od:'Kew C. quadrangularis କୁ ଗ୍ରହଣୀୟ ଏବଂ ଭାରତୀୟ ଉପମହାଦେଶ ସହ ଅନ୍ୟାନ୍ୟ ଉଷ୍ଣ ଅଞ୍ଚଳରେ ସ୍ୱଦେଶୀ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ।',hi:'Kew C. quadrangularis को स्वीकृत तथा भारतीय उपमहाद्वीप और अन्य उष्ण क्षेत्रों की मूल प्रजाति बताता है।',en:'Kew lists C. quadrangularis as accepted and native across the Indian subcontinent and other tropical regions.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Cissus quadrangularis',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A67898-1'},
{slug:'pasaruni',od:'ପଶାରୁଣୀ',hi:'प्रसारिणी',en:'Skunk vine',botanical:'Paederia foetida L.',family:'Rubiaceae',habit:{od:'ଆରୋହୀ ବହୁବର୍ଷୀୟ ଉଦ୍ଭିଦ',hi:'चढ़ने वाला बहुवर्षीय पौधा',en:'Climbing perennial'},parts:{od:'ପତ୍ର, ମୂଳ, କାଣ୍ଡ',hi:'पत्तियां, जड़ें, तने',en:'Leaves, roots, stems'},ayur:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାରରେ ଏହା ଅଞ୍ଚଳୀୟ ଲୋକଚିକିତ୍ସା ଓ ଖାଦ୍ୟ ପ୍ରଥାରେ ବ୍ୟବହୃତ ହୁଏ; ଉଦ୍ଭିଦ ଅଂଶଗୁଡ଼ିକର ଏକ ବିଶିଷ୍ଟ ଗନ୍ଧ ରହିଥାଏ।',hi:'पारंपरिक उपयोग में इसका क्षेत्रीय लोक चिकित्सा और खाद्य प्रथाओं में उपयोग होता है; पौधे के भागों में विशिष्ट गंध होती है।',en:'Traditional use: used in regional traditional medicine and food practices; plant parts have distinctive odour.'},distribution:{od:'Kew P. foetida କୁ ଗ୍ରହଣୀୟ ଏବଂ ପୂର୍ବ ନେପାଳରୁ ଜାପାନ ଓ ମାଲେସିଆ ପର୍ଯ୍ୟନ୍ତ, ଭାରତ ସମେତ, ସ୍ୱଦେଶୀ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ।',hi:'Kew P. foetida को स्वीकृत तथा पूर्वी नेपाल से जापान और मलेशिया तक, भारत सहित, की मूल प्रजाति बताता है।',en:'Kew lists P. foetida as accepted and native from eastern Nepal through Japan and Malesia, including India.'},safety:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାର କୌଣସି ଚିକିତ୍ସା ଅବସ୍ଥା ପାଇଁ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ସୁରକ୍ଷା ସ୍ଥାପିତ କରେ ନାହିଁ। ଗର୍ଭବତୀ ବ୍ୟକ୍ତି, ଶିଶୁ ଏବଂ ଔଷଧ ନେଉଥିବା ଲୋକମାନେ ଔଷଧୀୟ ବ୍ୟବହାର ପୂର୍ବରୁ ଯୋଗ୍ୟ ପରାମର୍ଶ ନିଅନ୍ତୁ।',hi:'पारंपरिक उपयोग किसी चिकित्सीय स्थिति के लिए प्रभावशीलता या सुरक्षा सिद्ध नहीं करता। गर्भवती लोगों, बच्चों और दवाएं लेने वाले लोगों को औषधीय उपयोग से पहले योग्य सलाह लेनी चाहिए।',en:'Traditional use does not establish effectiveness or safety for a medical condition. Pregnant people, children and people taking medicines should seek qualified advice before medicinal use.'},key:'Paederia foetida',ref:'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A758897-1'},
{slug:'olua',od:'ଓଲୁଅ',hi:'स्नुही / सेहुंड',en:'Indian spurge tree',botanical:'Euphorbia neriifolia L.',family:'Euphorbiaceae',habit:{od:'ରସାଳୁ ଗୁଳ୍ମ / କ୍ଷୁଦ୍ର ବୃକ୍ଷ',hi:'रसीली झाड़ी / छोटा वृक्ष',en:'Succulent shrub / small tree'},parts:{od:'କାଣ୍ଡ, କ୍ଷୀର (ପାରମ୍ପରିକ ବ୍ୟବହାର)',hi:'तना, दूधिया रस (पारंपरिक उपयोग)',en:'Stem, latex (traditional use)'},ayur:{od:'ପାରମ୍ପରିକ ବ୍ୟବହାରରେ ଏହା କିଛି ଆୟୁର୍ବେଦିକ ପ୍ରସ୍ତୁତିରେ ବ୍ୟବହୃତ ହୁଏ, କିନ୍ତୁ ଏହାର କ୍ଷୀର ଉତ୍ତେଜକ/ବିଷାକ୍ତ ହୋଇପାରେ ଏବଂ ନିଜେ ନିଜେ ବ୍ୟବହାର କରିବା ଉଚିତ୍ ନୁହେଁ।',hi:'पारंपरिक उपयोग में इसका कुछ आयुर्वेदिक तैयारियों में उपयोग होता है, लेकिन इसका दूधिया रस उत्तेजक/विषाक्त हो सकता है और इसका स्वयं उपयोग नहीं करना चाहिए।',en:'Traditional use: used in some Ayurvedic preparations, but its latex is irritating/toxic and should not be self-administered.'},distribution:{od:'Kew E. neriifolia କୁ ଗ୍ରହଣୀୟ ଏବଂ ଇରାନରୁ ମ୍ୟାନମାର ପର୍ଯ୍ୟନ୍ତ, ଭାରତ ସମେତ, ସ୍ୱଦେଶୀ ଭାବେ ତାଲିକାଭୁକ୍ତ କରେ।',hi:'Kew E. neriifolia को स्वीकृत तथा ईरान से म्यांमार तक, भारत सहित, की मूल प्रजाति बताता है।',en:'Kew lists E. neriifolia as accepted and native from Iran to Myanmar, including India.'},safety:{od:'ଦୁଧିଆ କ୍ଷୀର ତ୍ୱଚା ଓ ଆଖିରେ ଜ୍ୱଳନ ସୃଷ୍ଟି କରିପାରେ ଏବଂ ଗିଳିଲେ ବିଷାକ୍ତ ହୋଇପାରେ। ଯୋଗ୍ୟ ବିଶେଷଜ୍ଞଙ୍କ ପରାମର୍ଶ ବିନା କଞ୍ଚା କ୍ଷୀର ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।',hi:'दूधिया रस त्वचा और आंखों में जलन कर सकता है तथा निगलने पर विषाक्त हो सकता है। योग्य विशेषज्ञ की सलाह के बिना कच्चे रस का उपयोग न करें।',en:'The milky latex can irritate skin and eyes and may be toxic if swallowed. Do not use raw latex without qualified professional guidance.'},key:'Euphorbia neriifolia',ref:'https://powo.science.kew.org/taxon/347489-1'}
];

const T = {
    od: {
        title: 'ଔଷଧୀୟ ଉଦ୍ଭିଦ ବିଶ୍ୱକୋଷ', search: 'ଉଦ୍ଭିଦ ଖୋଜନ୍ତୁ…', details: 'ମୁଖ୍ୟ ବିବରଣୀ', ayur: 'ଆୟୁର୍ବେଦିକ / ପାରମ୍ପରିକ ବ୍ୟବହାର', safety: 'ସତର୍କତା', ref: 'ଉତ୍ସ ଓ ସନ୍ଦର୍ଭ', qr: 'QR କୋଡ୍', kew: 'Plants of the World Online — Royal Botanic Gardens, Kew', wikipedia: 'ଉଇକିପିଡ଼ିଆ', scan: 'ଏହି ଉଦ୍ଭିଦ ପୃଷ୍ଠା ଖୋଲିବାକୁ ସ୍କାନ କରନ୍ତୁ।', bot: 'ବୈଜ୍ଞାନିକ ନାମ', family: 'ପରିବାର', habit: 'ପ୍ରକୃତି', parts: 'ବ୍ୟବହୃତ ଅଂଶ', dist: 'ବିସ୍ତାର', back: 'ସମସ୍ତ ଉଦ୍ଭିଦ', disclaimer: 'ଏହି ସାଇଟ୍ ଶିକ୍ଷାମୂଳକ ଓ ପାରମ୍ପରିକ ତଥ୍ୟ ପାଇଁ। ଏହା ଡାକ୍ତରୀ ପରାମର୍ଶ ନୁହେଁ।'
    },
    hi: {
        title: 'औषधीय पौधों का विश्वकोश', search: 'पौधा खोजें…', details: 'मुख्य विवरण', ayur: 'आयुर्वेदिक / पारंपरिक उपयोग', safety: 'सावधानी', ref: 'स्रोत और संदर्भ', qr: 'QR कोड', kew: 'Plants of the World Online — Royal Botanic Gardens, Kew', wikipedia: 'विकिपीडिया', scan: 'इस पौधे का पृष्ठ खोलने के लिए स्कैन करें।', bot: 'वानस्पतिक नाम', family: 'कुल', habit: 'प्रकृति', parts: 'उपयोगी भाग', dist: 'वितरण', back: 'सभी पौधे', disclaimer: 'यह साइट शैक्षिक और पारंपरिक जानकारी के लिए है। यह चिकित्सकीय सलाह नहीं है।'
    },
    en: {
        title: 'Medicinal Plants Encyclopedia', search: 'Search plants…', details: 'Key details', ayur: 'Ayurvedic / Traditional use', safety: 'Safety', ref: 'Sources & references', qr: 'QR code', kew: 'Plants of the World Online — Royal Botanic Gardens, Kew', wikipedia: 'Wikipedia', scan: 'Scan to open this plant page.', bot: 'Botanical name', family: 'Family', habit: 'Habit', parts: 'Parts used', dist: 'Distribution', back: 'All plants', disclaimer: 'This site is for educational and traditional reference only. It is not medical advice.'
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
    const p = plants.find((entry) => location.pathname.includes(`/plant/${entry.slug}`));
    if (!p) return;

    document.querySelector('.brand').textContent = `🌿 ${t.title}`;
    document.title = t.title;
    document.getElementById('disclaimer').textContent = t.disclaimer;
    app.innerHTML = `<section class="hero plantHero"><a class="back" href="../../">← ${t.back}</a><div class="plantGrid"><div><div class="bigimg"><span>🌿</span><img id="heroimg" alt="${p[lang]}"></div></div><div><span class="badge">${p.family}</span><h1>${p.od}</h1><p class="native">${p.hi}</p><p class="english">${p.en}</p><p class="scientific"><i>${p.botanical}</i></p><div class="actions"><button id="print">🖨️</button><button id="makeqr">${t.qr}</button></div></div></div></section><section class="contentGrid"><article><h2>${t.details}</h2><div class="facts"><div><b>${t.bot}</b><span><i>${p.botanical}</i></span></div><div><b>${t.family}</b><span>${p.family}</span></div><div><b>${t.habit}</b><span>${p.habit[lang]}</span></div><div><b>${t.parts}</b><span>${p.parts[lang]}</span></div><div><b>${t.dist}</b><span>${p.distribution[lang]}</span></div></div><h2>${t.ayur}</h2><p>${p.ayur[lang]}</p><div class="warning"><b>${t.safety}</b><p>${p.safety[lang]}</p></div><h2>${t.ref}</h2><p><a href="${p.ref}" target="_blank" rel="noopener">${t.kew}</a></p><p><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(p.en.split(' / ')[0])}" target="_blank" rel="noopener">${t.wikipedia}</a></p></article><aside><div class="qrbox"><h3>${t.qr}</h3><div id="qrcode"></div><small>${t.scan}</small></div></aside></section>`;
    getImage(p, document.getElementById('heroimg'));
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
