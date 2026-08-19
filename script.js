const miracles = [
    {
        id: 1,
        badge: "Eternal Miracle",
        title: "The Ultimate Living Miracle: The Holy Quran",
        tagline: "An eternal, unalterable light guiding humanity across the ages.",
        p1: "While physical miracles occurred during the blessed lifetime of the Prophet (pbuh) and concluded with his passing, the Holy Quran stands as his greatest, everlasting, and living miracle. Challenging the literary masters of Arabia to produce even a single chapter like it, it remains entirely unmatched in its profound eloquence, structural perfection, and spiritual depth.",
        p2: "It continues to transform millions of hearts worldwide, offering timeless guidance, healing, and absolute clarity. Protected directly by the Creator without a single letter altered since its revelation, it is a miracle witnessed and experienced by every generation.",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
        verseText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّ لَهُ لَحَافِظُونَ",
        verseEnglish: "Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.",
        reference: "Surah Al-Hijr 15:9"
    },
    {
        id: 2,
        badge: "Cosmic Sign",
        title: "The Splitting of the Celestial Moon",
        tagline: "A breathtaking cosmic sign witnessed in the skies of Mecca.",
        p1: "When the disbelievers of Quraysh demanded an unmistakable, tangible sign to verify his prophetic mission, the Prophet Muhammad (pbuh) raised his index finger toward the night sky. By the absolute power and command of Allah, the moon split perfectly into two distinct, visible halves, hovering over the mountains of Mecca.",
        p2: "Travelers coming from distant trade routes outside the city later confirmed seeing the exact same split in the heavens, making it a globally witnessed public miracle that left skeptics stunned yet stubbornly resistant.",
        verseText: "اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ",
        verseEnglish: "The Hour has drawn near, and the moon has split [in two].",
        reference: "Surah Al-Qamar 54:1"
    },
    {
        id: 3,
        badge: "Divine Journey",
        title: "The Night Journey & Ascension (Isra and Mi'raj)",
        tagline: "Crossing bounds from Al-Aqsa to the highest heavens.",
        p1: "In one miraculous, transcendent night, the Prophet (pbuh) was transported across space from the Sacred Mosque in Mecca to the Al-Aqsa Mosque in Jerusalem riding the heavenly mount Buraq, accompanied by Angel Jibreel, where he led all previous prophets in prayer.",
        p2: "From Jerusalem, he ascended through the seven majestic heavens, witnessing profound spiritual realms, meeting past prophets, and reaching Sidrat al-Muntaha—the furthest lotus tree—where the obligation of the five daily prayers was gifted directly to the Ummah.",
        verseText: "سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلاً",
        verseEnglish: "Exalted is He who took His Servant by night from the Sacred Mosque to the farthest mosque...",
        reference: "Surah Al-Isra 17:1"
    },
    {
        id: 4,
        badge: "Abundant Blessing",
        title: "Water Flowing from His Blessed Fingers",
        tagline: "Quenching an entire army from a small vessel.",
        p1: "During the tense expedition of Hudaybiyyah, the companions ran desperately low on water in the scorching desert heat, having only a tiny vessel left for the Prophet's minor ablution (Wudhu) with no other source in sight.",
        p2: "The Prophet (pbuh) placed his blessed hand directly inside the vessel. Instantly, crystal-clear water began gushing forth like bubbling springs from between his fingers, allowing over 1,500 companions to drink deeply, perform Wudhu, and fill every water skin they carried.",
        verseText: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        verseEnglish: "A mercy from your Lord, providing sustenance and divine comfort when all worldly means fail.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 5,
        badge: "Living Love",
        title: "The Weeping Palm Tree (Jadh'u al-Hannanah)",
        tagline: "Inanimate creation crying out in deep love and longing.",
        p1: "For years, the Prophet (pbuh) delivered Friday sermons while leaning against the rough trunk of a date palm tree in his simple mosque. When a proper wooden pulpit (Minbar) was finally built for him, he stepped onto it and left the old trunk behind.",
        p2: "During that very first sermon on the new pulpit, a sound like a grieving mother camel echoed through the entire mosque—the dry trunk itself was weeping out of physical longing and sorrow for missing his close presence. The Prophet stepped down, walked over, and embraced it until its crying quieted.",
        verseText: "وَإِن مِّن شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ",
        verseEnglish: "And there is not a thing except that it exalts [Allah] by His praise, but you do not understand their glorifying.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 6,
        badge: "Invisible Shield",
        title: "The Divine Shield in Cave Thawr",
        tagline: "Invisible armies and delicate webs stopping a massive manhunt.",
        p1: "Hunted by fierce trackers during the perilous migration of Hijrah, the Prophet (pbuh) and Abu Bakr (RA) took refuge inside the dark chambers of Cave Thawr. The relentless Quraysh search party arrived directly at the mouth of the cave, standing just feet away.",
        p2: "Allah commanded a spider to swiftly spin an unbroken web across the narrow entrance and a wild pigeon to nest peacefully with delicate eggs. Seeing these undisturbed natural signs, the trackers concluded no human could have entered recently, keeping them safe effortlessly.",
        verseText: "إِلَّا تَنْصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ",
        verseEnglish: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out.",
        reference: "Surah At-Tawbah 9:40"
    },
    {
        id: 7,
        badge: "Miraculous Provision",
        title: "Multiplication of Little Food",
        tagline: "Feeding crowds from a single household meal.",
        p1: "On multiple historical occasions—such as during the grueling Battle of the Trench and Jabir's humble house feast—scarce rations of food that could barely sustain a single person were brought before the Prophet (pbuh).",
        p2: "With his blessing and prayer, hundreds of hungry companions ate to their absolute fullness, yet the pots and bowls looked completely untouched and full, showcasing an extraordinary display of divine barakah.",
        verseText: "وَاللَّهُ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ",
        verseEnglish: "And Allah provides for whom He wills without account.",
        reference: "Sahih Muslim"
    },
    {
        id: 8,
        badge: "Divine Healing",
        title: "Healing of Ali's Eyes at Khaybar",
        tagline: "Restoring acute vision through prophetic touch and saliva.",
        p1: "During the critical campaign of Khaybar, Ali ibn Abi Talib (RA) was suffering from an agonizing and severe eye infection, leaving his eyes swollen shut and rendering him unable to join the frontline defense.",
        p2: "The Prophet (pbuh) called for him, gently applied his blessed saliva to Ali's eyes, and invoked a prayer for his recovery. Ali was healed instantly, stepping forward with full vision as though he had never experienced a moment of pain.",
        verseText: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ",
        verseEnglish: "And We send down of the Qur'an that which is healing and mercy for the believers.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 9,
        badge: "Created Empathy",
        title: "The Complaining Camel",
        tagline: "Creation recognizing injustice and seeking justice from the Messenger.",
        p1: "While passing through an orchard, a working camel caught sight of the Prophet (pbuh), broke into a run across the field, and knelt down submissively before him while groaning softly with tears flowing from its eyes.",
        p2: "When questioned, the owners admitted the animal had worked exhaustively to the point of collapse and they intended to slaughter it. The Prophet reprimanded them gently, reminding humanity that animals hold sacred rights and emotional depth.",
        verseText: "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
        verseEnglish: "And there is no creature on earth except that its provision is due upon Allah.",
        reference: "Musnad Ahmad"
    },
    {
        id: 10,
        badge: "Wildlife Testimony",
        title: "The Submission of the Wolf",
        tagline: "Wild nature testifying to the truth of final prophethood.",
        p1: "A wild wolf snatched a sheep from a terrified shepherd, who immediately chased it down across the pasture to rescue his flock. To the absolute shock of the shepherd, the wolf sat back on its haunches and spoke in clear, eloquent human language.",
        p2: "The wolf told the astonished shepherd about the arrival of the final Prophet in Medina, telling him that humanity was ignoring monumental signs, serving as an extraordinary encounter from the wilds of nature.",
        verseText: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ",
        verseEnglish: "We will show them Our signs in the horizons and within themselves until it becomes clear.",
        reference: "Sunan an-Nasa'i"
    },
    {
        id: 11,
        badge: "Sublime Praise",
        title: "Stones Glorifying Allah in His Hand",
        tagline: "Inanimate pebbles praising the Creator audibly.",
        p1: "Companion Abu Dharr (RA) reported that once when he sat in quiet companionship with the Prophet (pbuh), a handful of ordinary pebbles placed directly in his open palm began to audibly buzz and glorify Allah.",
        p2: "The sound was clear, resembling the collective humming of a swarm of bees. The pebbles were then passed to the hands of Abu Bakr and Umar, where they continued their praise, offering a glimpse into the spiritual aura surrounding him.",
        verseText: "تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ",
        verseEnglish: "The seven heavens and the earth and whatever is in them exalt Him.",
        reference: "Al-Mu'jam al-Awsat"
    },
    {
        id: 12,
        badge: "Miraculous Recovery",
        title: "The Healing of Qatadah's Eye",
        tagline: "An injured eye restored better and sharper than before.",
        p1: "During the intense chaos of the Battle of Uhud, Companion Qatadah suffered a horrific wound when a flying arrow struck him directly in the face, causing his eyeball to pop completely out of its socket onto his cheek.",
        p2: "The Prophet calmly took the eye in his hand, pressed it back gently into its proper place, and prayed over it. It healed so completely and perfectly that Qatadah could see clearer and sharper with it than his healthy eye for the rest of his life.",
        verseText: "وَهُوَ الَّذِي يُنْزِلُ الْغَيْثَ مِنْ بَعْدِ مَا قَنَطُوا",
        verseEnglish: "And it is He who sends down the rain after they had despaired and scatters His mercy.",
        reference: "Al-Bayhaqi"
    },
    {
        id: 13,
        badge: "Divine Trap",
        title: "The Miracle of Suraqa's Horse",
        tagline: "Hooves sinking deep into solid stone as divine protection.",
        p1: "When the bounty hunter Suraqa bin Malik chased the fleeing Prophet (pbuh) across the desert during the Hijrah, he drew dangerously close, high on the promise of a massive reward offered by the Quraysh.",
        p2: "Sensing danger, the Prophet uttered a brief, calm prayer. Instantly, Suraqa's charging horse sank its hooves deep into solid, unyielding rock as though it were soft mud, trapping him immovably until he begged for safety and was granted amnesty.",
        verseText: "فَأَنْزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ",
        verseEnglish: "And Allah sent down his tranquility upon him and supported him with angels you did not see.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 14,
        badge: "Food Warning",
        title: "The Mutton That Spoke a Warning",
        tagline: "Poisoned meat revealing its deadly secret before ingestion.",
        p1: "Following the victory at Khaybar, a hostile local woman presented the Prophet (pbuh) with a roasted sheep as a gift, secretly lacing his favorite cuts with a lethal, fast-acting poison.",
        p2: "As the Prophet took a small bite into the meat, the piece of mutton miraculously spoke out loud, warning him: 'Do not eat me, for I am poisoned!' protecting his life from hidden treachery through divine intervention.",
        verseText: "وَاللَّهُ يَعْصِمُكَ مِنَ النَّاسِ",
        verseEnglish: "And Allah will protect you from the people.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 15,
        badge: "Nature's Bow",
        title: "The Prostration of the Trees",
        tagline: "Nature bowing in unison to testify to his message.",
        p1: "In authentic accounts narrated by trusted companions, trees on multiple occasions uprooted themselves from the earth, traveled across the landscape, and bowed down in front of the Prophet (pbuh) out of deep reverence.",
        p2: "After testifying to his message, they returned to their places. These majestic occurrences served as unmistakable proofs to onlookers that all creations recognize their true Creator and His chosen Messenger.",
        verseText: "أَلَمْ تَرَ أَنَّ اللَّهَ يَسْجُدُ لَهُ مَنْ فِي السَّمَاوَاتِ",
        verseEnglish: "Do you not see that to Allah prostrates whoever is in the heavens and earth and sun and moon...",
        reference: "Sunan al-Darimi"
    },
    {
        id: 16,
        badge: "Desert Sustenance",
        title: "The Valley Flowing with Milk and Honey",
        tagline: "Miraculous provisions during times of extreme hardship.",
        p1: "During arduous military expeditions when worldly supplies ran completely dry and hunger weighed heavy on the believers' shoulders, streams of pure milk and sweet honey materialized by divine decree right where they camped.",
        p2: "These temporary, extraordinary manifestations of sustenance heartened the exhausted travelers and proved beyond doubt that true provision lies entirely in the hands of the Provider.",
        verseText: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
        verseEnglish: "And whoever fears Allah - He will make for him a way out and provide for him from where he does not expect.",
        reference: "Dala'il al-Nubuwwah"
    },
    {
        id: 17,
        badge: "Celestial Canopy",
        title: "The Shade of the Moving Cloud",
        tagline: "A personal canopy shielding him across desert travels.",
        p1: "During his youth while traveling on a merchant trade caravan toward Syria, the Christian monk Bahira observed a miraculous, low-hanging cloud hovering exclusively over young Muhammad amidst the open desert.",
        p2: "The cloud moved precisely when he moved and stayed completely stationary when he rested, shielding him perfectly from the blistering desert sun and offering an early sign of his blessed status.",
        verseText: "وَأَظَلَلْنَا عَلَيْكُمُ الْغَمَامَ",
        verseEnglish: "And We shaded you with clouds and sent down upon you manna and quails.",
        reference: "Al-Tirmidhi"
    },
    {
        id: 18,
        badge: "Exposed Treachery",
        title: "The Speaking Arm Bone",
        tagline: "A cooked animal limb revealing hidden treachery.",
        p1: "Similar to the speaking mutton at Khaybar, a cooked sheep shoulder served to the Prophet (pbuh) at another gathering warned him directly of hidden toxins mixed into the dish.",
        p2: "The roasted bone spoke with crisp, unmistakable clarity, verifying that foul play was afoot and showcasing how Allah guarded His messenger from every covert plot.",
        verseText: "عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَى غَيْبِهِ أَحَدًا",
        verseEnglish: "[He is] Knower of the unseen, and He does not reveal His unseen to anyone.",
        reference: "Musnad Ahmad"
    },
    {
        id: 19,
        badge: "Visions Realized",
        title: "Accurate Description of Jerusalem",
        tagline: "Detailed architectural testimony without prior travel.",
        p1: "When the Prophet narrated his miraculous night journey to Jerusalem to the disbelievers of Mecca, they attempted to mock and cross-examine him by quizzing him on every single pillar, gate, and corner of the remote sanctuary.",
        p2: "Allah brought the vision of Jerusalem vividly before his physical eyes in real-time, allowing him to answer every tricky architectural detail with absolute precision and leave the interrogators speechless.",
        verseText: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ",
        verseEnglish: "So exalted is He in whose hand is the realm of all things, and to Him you will be returned.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 20,
        badge: "Endless Barakah",
        title: "The Multiplying Dates of Abu Hurairah",
        tagline: "A single bag feeding a household for years.",
        p1: "Companion Abu Hurairah once brought a small, meager pouch of dates to the Prophet, who blessed the pouch and instructed him to always reach inside to take what he needed without ever emptying or shaking it out.",
        p2: "Abu Hurairah ate from that exact bag and generously fed others throughout multiple historical eras—surviving through political upheavals and consuming sacks worth of dates from a single small pouch.",
        verseText: "وَكَأَيِّنْ مِنْ دَابَّةٍ لَا تَحْمِلُ رِزْقَهَا",
        verseEnglish: "And how many a creature carries not its provision? Allah provides for it and for you.",
        reference: "Jami' at-Tirmidhi"
    },
    {
        id: 21,
        badge: "Prophetic Foresight",
        title: "The Prophecy of Rome's Defeat",
        tagline: "Accurate geopolitics foretold during intense persecution.",
        p1: "When the Byzantine Empire suffered devastating military losses against the Persians, local disbelievers mocked the Muslims, claiming idolatry was winning globally. Surah Ar-Rum then boldly prophesied that Byzantines would triumph back within a few years.",
        p2: "Exactly as foretold down to the predicted window, the tide turned dramatically on the geopolitical stage, confirming beyond doubt the divine origin of the Quran's predictive verses.",
        verseText: "غُلِبَتِ الرُّومُ فِي أَدْنَى الْأَرْضِ",
        verseEnglish: "The Byzantines have been defeated in the nearest land, but they will overcome after their defeat.",
        reference: "Surah Ar-Rum 30:1-3"
    },
    {
        id: 22,
        badge: "Surging Speed",
        title: "The Miracle of Jabir's Camel",
        tagline: "An exhausted animal transformed into an unstoppable runner.",
        p1: "During a long desert journey, Jabir's riding camel became so exhausted, starved, and weak that it lagged far behind the rest of the moving caravan, unable to keep pace.",
        p2: "The Prophet noticed, walked back, tapped the animal gently, and offered a prayer. Instantly, the camel surged forward with explosive, tireless speed, outpacing every other mount in the caravan for the remainder of the trip.",
        verseText: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        verseEnglish: "And He is over all things competent.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 23,
        badge: "Desert Abundance",
        title: "The Safe Haven of Umm Ma'bad's Ewe",
        tagline: "A dry, barren goat yielding floods of milk.",
        p1: "During the tense days of the Hijrah, the exhausted travelers stopped to rest at the remote tent of Umm Ma'bad. She owned an emaciated, elderly ewe that produced zero milk due to severe regional drought.",
        p2: "The Prophet gently wiped the ewe's dry udder and prayed. Immediately, milk poured forth in rich, heavy streams, satisfying every traveler present and leaving a generous surplus for the household.",
        verseText: "فَانْظُرْ إِلَى آثَارِ رَحْمَتِ اللَّهِ",
        verseEnglish: "Then look at the effects of the mercy of Allah - how He revives the earth after its death.",
        reference: "Al-Hakim"
    },
    {
        id: 24,
        badge: "Heavenly Guards",
        title: "The Night Watch of the Angels",
        tagline: "Heavenly guards securing his resting tent.",
        p1: "Before verses assuring his absolute safety and divine protection were officially revealed, the Prophet spent anxious nights awake guarding his camp against potential midnight assassinations.",
        p2: "Upon receiving heavenly reassurance, ranks of glorious angels descended from the skies to secure his perimeter so he could rest securely without human sentries.",
        verseText: "وَاللَّهُ يَعْصِمُكَ مِنَ النَّاسِ",
        verseEnglish: "And Allah will protect you from the people. Indeed, Allah does not guide the disbelievers.",
        reference: "Jami' at-Tirmidhi"
    },
    {
        id: 25,
        badge: "Tranquil Rest",
        title: "Peaceful Slumber Protection",
        tagline: "Guarded through deep sleep without human sentries.",
        p1: "Throughout his mission across hostile and unpredictable tribal environments, the Prophet rested soundly, knowing divine decree watched over his sleep.",
        p2: "His slumber was deeply tranquil, anchored in absolute trust in his Lord's promise of safety until his mission on earth was completely accomplished.",
        verseText: "إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِنْهُ",
        verseEnglish: "[Remember] when He overwhelmed you with drowsiness as security from Him.",
        reference: "Sahih Muslim"
    },
    {
        id: 26,
        badge: "Unseen Audience",
        title: "The Conversion of the Jinn",
        tagline: "Unseen beings listening attentively to Quran recitation.",
        p1: "While reciting verses of the Quran during quiet night prayers in the valley of Nakhla, a delegation of unseen Jinn listened intently, embraced Islam in their hearts, and rushed back to warn their communities.",
        p2: "This profound, otherworldly event was later revealed to humanity in Surah Al-Jinn, marking a universal message meant for both mankind and the unseen realms.",
        verseText: "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ",
        verseEnglish: "Say, 'It has been revealed to me that a group of the jinn listened and said, \"We have heard an amazing Qur'an.\" '",
        reference: "Surah Al-Jinn 72:1"
    },
    {
        id: 27,
        badge: "Water Spring",
        title: "The Wells of Hudaybiyyah Refilled",
        tagline: "Arrows restoring dried-up water sources.",
        p1: "At Hudaybiyyah, an old, abandoned dry well was quickly depleted to the last drop by thirsty companions under the hot sun. A simple arrow was placed inside the muddy basin by prophetic instruction.",
        p2: "Water immediately bubbled up with such overwhelming abundance that it quenched the entire camp of 1,500 people and provided secure water reserves for days.",
        verseText: "فَمَنْ يَأْتِيكُمْ بِمَاعٍ مَعِينٍ",
        verseEnglish: "Say, 'If your water was to become sunken, then who could bring you flowing water?'",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 28,
        badge: "Universal Mercy",
        title: "Universal Compassion and Mercy",
        tagline: "Children and nature finding peace in his presence.",
        p1: "Children felt immediate, natural peace, safety, and comfort in the gentle presence of the Prophet (pbuh), often stopping their crying instantly when he held or smiled at them.",
        p2: "His immense mercy extended to all living things, creating an aura of supreme serenity that both human hearts and nature instinctively recognized.",
        verseText: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
        verseEnglish: "And We have not sent you except as a mercy to the worlds.",
        reference: "Surah Al-Anbiya 21:107"
    },
    {
        id: 29,
        badge: "Divine Victory",
        title: "The Victory at Badr against Odds",
        tagline: "Angelic reinforcements securing a historic turning point.",
        p1: "At Badr, an outnumbered force of 313 ill-equipped Muslims faced over 1,000 elite, heavily armed Quraysh fighters. The Prophet spent the entire night before battle in deep, tearful earnest prayer.",
        p2: "Allah answered by sending down disciplined ranks of angels to reinforce the believers, resulting in a decisive, history-shifting victory against all worldly odds.",
        verseText: "أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ",
        verseEnglish: "Indeed, I will reinforce you with a thousand from the angels, rank on rank.",
        reference: "Surah Al-Anfal 8:9"
    },
    {
        id: 30,
        badge: "Swift Conquest",
        title: "The Unconquerable Khaybar Fortresses",
        tagline: "Swift triumphs granted through divine decree.",
        p1: "The massive fortresses of Khaybar were historically considered completely impenetrable, heavily protected by deep defensive trenches, massive stone walls, and elite garrisons.",
        p2: "Through steadfast faith and sudden divine assistance, these seemingly impossible obstacles were overcome in days, securing safety and stability for the growing Muslim community.",
        verseText: "وَعَدَكُمُ اللَّهُ مَغَانِمَ كَثِيرَةً",
        verseEnglish: "Allah has promised you much booty that you will acquire, and He has hastened for you this victory.",
        reference: "Surah Al-Fath 48:20"
    }
];

// Render Miracles
const container = document.getElementById('miracles-container');
if (container) {
    container.innerHTML = miracles.map(m => `
        <article class="miracle-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            ${m.image ? `
                <div class="h-48 sm:h-52 overflow-hidden relative">
                    <img src="${m.image}" alt="${m.title}" class="w-full h-full object-cover">
                </div>
            ` : ''}
            <div class="p-6 sm:p-8 space-y-4">
                <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span class="inline-block text-xs font-semibold px-2.5 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full mb-2">${m.badge}</span>
                    <h2 class="text-xl sm:text-2xl font-bold tracking-tight">${m.title}</h2>
                    <p class="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">${m.tagline}</p>
                </div>
                <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <p>${m.p1}</p>
                    <p>${m.p2}</p>
                </div>
                <div class="bg-amber-50/50 dark:bg-slate-800/50 border border-amber-100 dark:border-slate-700/80 rounded-xl p-4 sm:p-5 space-y-2">
                    <p class="amiri text-lg sm:text-xl text-center text-amber-900 dark:text-amber-200 font-bold">${m.verseText}</p>
                    <p class="text-xs text-center italic text-slate-500 dark:text-slate-400">"${m.verseEnglish}"</p>
                    <p class="text-right text-xs font-semibold text-amber-700 dark:text-amber-400 pt-1">— ${m.reference}</p>
                </div>
            </div>
        </article>
    `).join('');
}

// Dark Mode Toggle Listener
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

// Countdown Timer Logic
function updateCountdown() {
    const targetDate = new Date("August 25, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const dElem = document.getElementById('days');
        const hElem = document.getElementById('hours');
        const mElem = document.getElementById('minutes');
        const sElem = document.getElementById('seconds');

        if (dElem) dElem.innerText = String(days).padStart(2, '0');
        if (hElem) hElem.innerText = String(hours).padStart(2, '0');
        if (mElem) mElem.innerText = String(minutes).padStart(2, '0');
        if (sElem) sElem.innerText = String(seconds).padStart(2, '0');
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();