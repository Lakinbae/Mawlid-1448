const miracles = [
    {
        id: 1,
        title: "The Splitting of the Celestial Moon",
        tagline: "A breathtaking cosmic sign witnessed in the skies of Mecca.",
        p1: "When the disbelievers of Quraysh demanded an unmistakable sign to verify his mission, the Prophet Muhammad (pbuh) raised his index finger toward the night sky. By the absolute power of Allah, the moon split perfectly into two visible halves.",
        p2: "Travelers coming from distant trade routes confirmed seeing the exact same split, making it a globally witnessed public miracle that left skeptics silenced yet stubborn.",
        verseText: "اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ",
        verseEnglish: "The Hour has drawn near, and the moon has split [in two].",
        reference: "Surah Al-Qamar 54:1"
    },
    {
        id: 2,
        title: "The Night Journey & Ascension (Isra and Mi'raj)",
        tagline: "Crossing bounds from Al-Aqsa to the highest heavens.",
        p1: "In one miraculous night, the Prophet (pbuh) was transported from the Sacred Mosque in Mecca to the Al-Aqsa Mosque in Jerusalem on Buraq, accompanied by Angel Jibreel.",
        p2: "From there, he ascended through the seven heavens, meeting previous prophets and reaching Sidrat al-Muntaha, where the obligation of the five daily prayers was gifted directly to the Ummah.",
        verseText: "سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلاً",
        verseEnglish: "Exalted is He who took His Servant by night from the Sacred Mosque to the farthest mosque...",
        reference: "Surah Al-Isra 17:1"
    },
    {
        id: 3,
        title: "Water Flowing from His Blessed Fingers",
        tagline: "Quenching an entire army from a small vessel.",
        p1: "During the expedition of Hudaybiyyah, the companions ran out of water and grew desperately thirsty, having only a small vessel left for the Prophet's minor ablution (Wudhu).",
        p2: "The Prophet (pbuh) placed his blessed hand inside the vessel. Instantly, crystal clear water began gushing like springs from between his fingers, allowing over 1,500 companions to drink, perform Wudhu, and fill every container they had.",
        verseText: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        verseEnglish: "A mercy from your Lord, providing sustenance and divine comfort when all worldly means fail.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 4,
        title: "The Weeping Palm Tree (Jadh'u al-Hannanah)",
        tagline: "Inanimate creation crying out in deep love and longing.",
        p1: "For years, the Prophet (pbuh) delivered Friday sermons while leaning against the trunk of a date palm tree in his mosque. When a proper wooden pulpit (Minbar) was built for him, he left the old trunk behind.",
        p2: "During the very first sermon on the new pulpit, a sound like a grieving camel echoed through the mosque—the trunk itself was weeping out of physical longing and sorrow for missing his presence. The Prophet stepped down and embraced it until its crying subsided.",
        verseText: "وَإِن مِّن شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ",
        verseEnglish: "And there is not a thing except that it exalts [Allah] by His praise, but you do not understand their glorifying.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 5,
        title: "The Divine Shield in Cave Thawr",
        tagline: "Invisible armies and delicate webs stopping a massive manhunt.",
        p1: "Hunted by trackers during the Hijrah, the Prophet (pbuh) and Abu Bakr (RA) took refuge inside Cave Thawr. The Quraysh search party arrived directly at the mouth of the cave, standing just feet away.",
        p2: "Allah commanded a spider to quickly spin an unbroken web across the entrance and a wild pigeon to nest peacefully with eggs. Seeing these undisturbed signs, the trackers concluded no one could have entered recently, saving them effortlessly.",
        verseText: "إِلَّا تَنْصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ",
        verseEnglish: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out.",
        reference: "Surah At-Tawbah 9:40"
    },
    {
        id: 6,
        title: "Multiplication of Little Food",
        tagline: "Feeding crowds from a single household meal.",
        p1: "On multiple historical occasions—such as the Battle of the Trench and Jabir's humble house feast—scarce rations of food that could barely feed one or two people were blessed by the Prophet's touch.",
        p2: "Hundreds of hungry companions ate to their absolute fullness, yet the food remaining in the pots looked completely untouched, showcasing abundant divine barakah.",
        verseText: "وَاللَّهُ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ",
        verseEnglish: "And Allah provides for whom He wills without account.",
        reference: "Sahih Muslim"
    },
    {
        id: 7,
        title: "Healing of Ali's Eyes at Khaybar",
        tagline: "Restoring acute vision through prophetic touch and saliva.",
        p1: "During the campaign of Khaybar, Ali ibn Abi Talib (RA) was suffering from a severe eye infection and could barely open them, making him unable to join the frontline.",
        p2: "The Prophet (pbuh) called for him, applied his blessed saliva gently to Ali's eyes, and prayed for him. Ali was healed instantly, recovering full vision as though he had never experienced any pain at all.",
        verseText: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ",
        verseEnglish: "And We send down of the Qur'an that which is healing and mercy for the believers.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 8,
        title: "The Complaining Camel",
        tagline: "Creation recognizing injustice and seeking justice from the Messenger.",
        p1: "While passing through an orchard, a camel caught sight of the Prophet (pbuh), broke into a run, and knelt down before him while groaning with tears flowing from its eyes.",
        p2: "The owners explained that the animal had worked exhaustively and they intended to slaughter it. The Prophet reprimanded the owners for mistreating the beast, reminding them that animals hold rights.",
        verseText: "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
        verseEnglish: "And there is no creature on earth except that its provision is due upon Allah.",
        reference: "Musnad Ahmad"
    },
    {
        id: 9,
        title: "The Submission of the Wolf",
        tagline: "Wild nature testifying to the truth of final prophethood.",
        p1: "A wolf snatched a sheep from a shepherd, who chased it down to recover his animal. The wolf sat back on its haunches and shockingly spoke in clear human language.",
        p2: "The wolf told the astonished shepherd about the coming of the final Prophet in Medina, serving as a strange and profound sign of prophethood.",
        verseText: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ",
        verseEnglish: "We will show them Our signs in the horizons and within themselves until it becomes clear.",
        reference: "Sunan an-Nasa'i"
    },
    {
        id: 10,
        title: "Stones Glorifying Allah in His Hand",
        tagline: "Inanimate pebbles praising the Creator audibly.",
        p1: "Companion Abu Dharr (RA) reported that once when he sat with the Prophet (pbuh), a handful of pebbles placed in his palm began to audibly buzz and glorify Allah like a swarm of bees.",
        p2: "The pebbles were then passed to Abu Bakr and Umar's hands, where they continued to praise Allah, offering a glimpse into the spiritual atmosphere around him.",
        verseText: "تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ",
        verseEnglish: "The seven heavens and the earth and whatever is in them exalt Him.",
        reference: "Al-Mu'jam al-Awsat"
    },
    {
        id: 11,
        title: "The Healing of Qatadah's Eye",
        tagline: "An injured eye restored better and sharper than before.",
        p1: "During the Battle of Uhud, Companion Qatadah suffered a severe wound where his eyeball popped completely out of its socket onto his cheek.",
        p2: "The Prophet gently pressed the eye back into its place with his hand. It healed so completely that Qatadah could see better with it than his healthy eye.",
        verseText: "وَهُوَ الَّذِي يُنْزِلُ الْغَيْثَ مِنْ بَعْدِ مَا قَنَطُوا",
        verseEnglish: "And it is He who sends down the rain after they had despaired and scatters His mercy.",
        reference: "Al-Bayhaqi"
    },
    {
        id: 12,
        title: "The Miracle of Suraqa's Horse",
        tagline: "Hooves sinking deep into solid stone as divine protection.",
        p1: "When Suraqa bin Malik chased the fleeing Prophet (pbuh) during the Hijrah, he drew dangerously close to capturing them.",
        p2: "The Prophet uttered a brief prayer. Instantly, Suraqa's horse sank its hooves deep into solid rock as though it were soft mud, trapping him until he sought amnesty.",
        verseText: "فَأَنْزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ",
        verseEnglish: "And Allah sent down his tranquility upon him and supported him with angels you did not see.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 13,
        title: "The Mutton That Spoke a Warning",
        tagline: "Poisoned meat revealing its deadly secret before ingestion.",
        p1: "Following Khaybar, a hostile woman presented the Prophet (pbuh) with a roasted sheep laced with lethal poison targeting his favorite cut.",
        p2: "As the Prophet took a bite, the piece of mutton spoke out loud to warn him: 'Do not eat me, for I am poisoned!' protecting him from harm.",
        verseText: "وَاللَّهُ يَعْصِمُكَ مِنَ النَّاسِ",
        verseEnglish: "And Allah will protect you from the people.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 14,
        title: "The Prostration of the Trees",
        tagline: "Nature bowing in unison to testify to his message.",
        p1: "In accounts narrated by companions, trees uprooted themselves, traveled across the earth, bowed down in front of the Prophet (pbuh) in respect, and returned.",
        p2: "These majestic occurrences served as direct proofs to onlookers that all creations recognize their true Lord and His chosen Messenger.",
        verseText: "أَلَمْ تَرَ أَنَّ اللَّهَ يَسْجُدُ لَهُ مَنْ فِي السَّمَاوَاتِ",
        verseEnglish: "Do you not see that to Allah prostrates whoever is in the heavens and earth and sun and moon...",
        reference: "Sunan al-Darimi"
    },
    {
        id: 15,
        title: "The Valley Flowing with Milk and Honey",
        tagline: "Miraculous provisions during times of extreme hardship.",
        p1: "During expeditions when supplies ran completely dry and hunger weighed heavy, streams of milk and sweet honey materialized by divine decree.",
        p2: "These temporary manifestations of sustenance heartened the exhausted travelers and proved that provision lies entirely with the Creator.",
        verseText: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
        verseEnglish: "And whoever fears Allah - He will make for him a way out and provide for him from where he does not expect.",
        reference: "Dala'il al-Nubuwwah"
    },
    {
        id: 16,
        title: "The Shade of the Moving Cloud",
        tagline: "A personal canopy shielding him across desert travels.",
        p1: "During his youth while traveling on a trade caravan toward Syria, monk Bahira observed a miraculous low-hanging cloud hovering over young Muhammad.",
        p2: "The cloud moved when he moved and stayed stationary when he rested, completely shielding him from the blistering sun.",
        verseText: "وَأَظَلَلْنَا عَلَيْكُمُ الْغَمَامَ",
        verseEnglish: "And We shaded you with clouds and sent down upon you manna and quails.",
        reference: "Al-Tirmidhi"
    },
    {
        id: 17,
        title: "The Speaking Arm Bone",
        tagline: "A cooked animal limb revealing hidden treachery.",
        p1: "Similar to the speaking mutton, a cooked sheep shoulder served to the Prophet (pbuh) warned him directly of hidden toxins in the food.",
        p2: "The bone spoke with crisp clarity, verifying that foul play was afoot through divine protection.",
        verseText: "عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَى غَيْبِهِ أَحَدًا",
        verseEnglish: "[He is] Knower of the unseen, and He does not reveal His unseen to anyone.",
        reference: "Musnad Ahmad"
    },
    {
        id: 18,
        title: "Accurate Description of Jerusalem",
        tagline: "Detailed architectural testimony without prior travel.",
        p1: "When the Prophet narrated his night journey to Jerusalem, the disbelievers tested him by quizzing him on every single pillar and gate.",
        p2: "Allah brought the vision of Jerusalem before his eyes in real-time, allowing him to answer every tricky architectural detail with absolute precision.",
        verseText: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ",
        verseEnglish: "So exalted is He in whose hand is the realm of all things, and to Him you will be returned.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 19,
        title: "The Multiplying Dates of Abu Hurairah",
        tagline: "A single bag feeding a household for years.",
        p1: "Companion Abu Hurairah brought a small pouch of dates, which the Prophet blessed and instructed him to reach inside without emptying the bag.",
        p2: "Abu Hurairah ate from that bag and fed others throughout multiple lifetimes, consuming sacks worth of dates from a single small pouch.",
        verseText: "وَكَأَيِّنْ مِنْ دَابَّةٍ لَا تَحْمِلُ رِزْقَهَا",
        verseEnglish: "And how many a creature carries not its provision? Allah provides for it and for you.",
        reference: "Jami' at-Tirmidhi"
    },
    {
        id: 20,
        title: "The Prophecy of Rome's Defeat",
        tagline: "Accurate geopolitics foretold during intense persecution.",
        p1: "When Byzantium suffered losses against Persia, disbelievers mocked Muslims. Surah Ar-Rum prophesied that Byzantines would triumph within a few years.",
        p2: "Exactly as foretold, the tide turned precisely within the predicted window, confirming the divine origin of the Quran.",
        verseText: "غُلِبَتِ الرُّومُ فِي أَدْنَى الْأَرْضِ",
        verseEnglish: "The Byzantines have been defeated in the nearest land, but they will overcome after their defeat.",
        reference: "Surah Ar-Rum 30:1-3"
    },
    {
        id: 21,
        title: "The Miracle of Jabir's Camel",
        tagline: "An exhausted animal transformed into an unstoppable runner.",
        p1: "During a journey, Jabir's camel became so exhausted that it lagged far behind the caravan.",
        p2: "The Prophet tapped the animal and prayed. Instantly, the camel surged forward with explosive speed, outpacing every other mount.",
        verseText: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        verseEnglish: "And He is over all things competent.",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 22,
        title: "The Safe Haven of Umm Ma'bad's Ewe",
        tagline: "A dry, barren goat yielding floods of milk.",
        p1: "During the Hijrah, they stopped at Umm Ma'bad's tent. She had an emaciated ewe that produced zero milk due to drought.",
        p2: "The Prophet wiped the ewe's udder and prayed. It poured forth rich milk, satisfying everyone and leaving surplus.",
        verseText: "فَانْظُرْ إِلَى آثَارِ رَحْمَتِ اللَّهِ",
        verseEnglish: "Then look at the effects of the mercy of Allah - how He revives the earth after its death.",
        reference: "Al-Hakim"
    },
    {
        id: 23,
        title: "The Night Watch of the Angels",
        tagline: "Heavenly guards securing his resting tent.",
        p1: "Before verses assuring his safety were revealed, the Prophet spent anxious nights awake guarding his camp.",
        p2: "Upon receiving divine reassurance, ranks of angels descended to secure his perimeter so he could rest securely.",
        verseText: "وَاللَّهُ يَعْصِمُكَ مِنَ النَّاسِ",
        verseEnglish: "And Allah will protect you from the people. Indeed, Allah does not guide the disbelievers.",
        reference: "Jami' at-Tirmidhi"
    },
    {
        id: 24,
        title: "Peaceful Slumber Protection",
        tagline: "Guarded through deep sleep without human sentries.",
        p1: "Throughout his mission in hostile environments, the Prophet rested soundly knowing divine decree watched over his sleep.",
        p2: "His slumber was tranquil, anchored in absolute trust in his Lord's promise of safety until his mission was complete.",
        verseText: "إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِنْهُ",
        verseEnglish: "[Remember] when He overwhelmed you with drowsiness as security from Him.",
        reference: "Sahih Muslim"
    },
    {
        id: 25,
        title: "The Conversion of the Jinn",
        tagline: "Unseen beings listening attentively to Quran recitation.",
        p1: "While reciting the Quran during night prayers in Nakhla, a delegation of unseen Jinn listened intently, embraced Islam, and warned their communities.",
        p2: "This profound event was later revealed in Surah Al-Jinn, marking a universal message for both mankind and the unseen.",
        verseText: "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ",
        verseEnglish: "Say, 'It has been revealed to me that a group of the jinn listened and said, \"We have heard an amazing Qur'an.\" '",
        reference: "Surah Al-Jinn 72:1"
    },
    {
        id: 26,
        title: "The Wells of Hudaybiyyah Refilled",
        tagline: "Arrows restoring dried-up water sources.",
        p1: "At Hudaybiyyah, an old dry well was quickly depleted by thirsty companions. An arrow was placed inside the basin by prophetic instruction.",
        p2: "Water immediately bubbled up with such abundance that it quenched the entire camp and provided reserves for days.",
        verseText: "فَمَنْ يَأْتِيكُمْ بِمَاعٍ مَعِينٍ",
        verseEnglish: "Say, 'If your water was to become sunken, then who could bring you flowing water?'",
        reference: "Sahih al-Bukhari"
    },
    {
        id: 27,
        title: "Universal Compassion and Mercy",
        tagline: "Children and nature finding peace in his presence.",
        p1: "Children felt immediate peace and comfort in the presence of the Prophet (pbuh), often stopping their crying instantly when he held them.",
        p2: "His gentle nature extended to all living things, creating an aura of serenity that nature naturally recognized.",
        verseText: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
        verseEnglish: "And We have not sent you except as a mercy to the worlds.",
        reference: "Surah Al-Anbiya 21:107"
    },
    {
        id: 28,
        title: "The Victory at Badr against Odds",
        tagline: "Angelic reinforcements securing a historic turning point.",
        p1: "At Badr, 313 Muslims faced over 1,000 elite Quraysh fighters. The Prophet spent the night in deep earnest prayer.",
        p2: "Allah sent down ranks of angels to reinforce the believers, resulting in a decisive victory that changed history.",
        verseText: "أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ",
        verseEnglish: "Indeed, I will reinforce you with a thousand from the angels, rank on rank.",
        reference: "Surah Al-Anfal 8:9"
    },
    {
        id: 29,
        title: "The Unconquerable Khaybar Fortresses",
        tagline: "Swift triumphs granted through divine decree.",
        p1: "The formidable fortresses of Khaybar were considered impenetrable, protected by deep trenches and elite garrisons.",
        p2: "Through steadfast faith and divine assistance, obstacles were overcome in days, securing the community.",
        verseText: "وَعَدَكُمُ اللَّهُ مَغَانِمَ كَثِيرَةً",
        verseEnglish: "Allah has promised you much booty that you will acquire, and He has hastened for you this victory.",
        reference: "Surah Al-Fath 48:20"
    },
    {
        id: 30,
        title: "The Ultimate Living Miracle: The Holy Quran",
        tagline: "An eternal, unalterable light guiding humanity.",
        p1: "While physical miracles occurred during his lifetime, the greatest eternal miracle given to Prophet Muhammad (pbuh) is the Holy Quran.",
        p2: "Unmatched in linguistic eloquence and spiritual depth, it continues to guide millions of hearts worldwide, preserved word for word.",
        verseText: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّ لَهُ لَحَافِظُونَ",
        verseEnglish: "Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.",
        reference: "Surah Al-Hijr 15:9"
    }
];

// Render Miracles (Without Images)
const container = document.getElementById('miracles-container');
if (container) {
    container.innerHTML = miracles.map(m => `
        <article class="miracle-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span class="text-xs font-semibold px-2.5 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full">Miracle #${m.id}</span>
                <h2 class="text-xl sm:text-2xl font-bold tracking-tight mt-2">${m.title}</h2>
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