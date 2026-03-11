import React from "react";

const TributePage = () => {
  const quotes = [
    "They gave their today for our tomorrow, without asking for anything in return — not even remembrance.",
    "Wrapped in the tricolor, they returned home not to celebrate victory, but to remind us what love for the motherland truly means.",
    "Every heartbeat of this free nation echoes the bravery of those who bled silently, so we could live loudly.",
    "A soldier never dies — he becomes eternal in the soul of the soil he protected.",
    "They left behind families, dreams, and life itself... all for a land they called Bharat Mata.",
    "The wind whispers their names, the soil carries their legacy — a soldier may fall, but his sacrifice rises forever.",
    "They walked into fire with courage in their hearts, carrying the weight of the flag, and came back only as memories etched in stone.",
    "To the world, they were soldiers. To us, they are legends — carved into history with blood, honor, and love.",
    "In every flutter of the Tiranga, their soul lives on.",
    "Freedom is not free — they paid the price so we could live in peace.",
  ];

  const martyrs = [
    {
      name: "Captain Vikram Batra",
      title: "Param Vir Chakra",
      image: "https://imgk.timesnownews.com/story/1564222858-Kargil_War_veteran_Captain_Vikram_Batra.JPG?tr=w-1200,h-900",
      achievement:
        "Led a daring mission in the Kargil War, recaptured Point 4875, and sacrificed his life while rescuing a fellow soldier.",
      deathDate: "7 July 1999",
    },
    {
      name: "Major Sandeep Unnikrishnan",
      title: "Ashoka Chakra",
      image: "https://celebsbio.in/wp-content/uploads/2022/11/Sandeep-Unnikrishnan-wiki.jpg",
      achievement:
        "Displayed exceptional bravery during the 26/11 Mumbai attacks by rescuing hostages and confronting terrorists head-on.",
      deathDate: "28 November 2008",
    },
    {
      name: "Havaldar Abdul Hamid",
      title: "Param Vir Chakra",
      image: "https://wikibio.in/wp-content/uploads/2022/04/CQMH-Abdul-Hamid.jpg",
      achievement:
        "Destroyed multiple enemy tanks in the 1965 Indo-Pak war using a recoilless gun, playing a key role in the victory at Asal Uttar.",
      deathDate: "10 September 1965",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          className="w-24 mx-auto mb-6 animate-pulse drop-shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-400 drop-shadow-lg">
          🇮🇳 Tribute to the Fallen Heroes 🇮🇳
        </h1>
        <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">
          Honoring the brave souls who gave their all for our freedom.
        </p>
      </div>

      {/* Quotes Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 gap-6">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className="bg-[#1f2937] border-l-4 border-orange-500 p-5 rounded-xl hover:scale-[1.02] transition duration-300 shadow-xl"
          >
            <p className="italic text-gray-200 text-base sm:text-lg leading-relaxed">
              “{quote}”
            </p>
          </div>
        ))}
      </div>

      {/* Bravehearts Section */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-2 tracking-wide">
          Bravehearts We Remember
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-10">
          Legends whose courage carved freedom into history.
        </p>

        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 px-4">
          {martyrs.map((hero, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] rounded-xl text-center shadow-lg hover:shadow-orange-400/30 transition duration-300 border border-gray-700 p-6 hover:scale-105"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-500 shadow-lg mb-4">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{hero.name}</h3>
              <p className="text-sm text-orange-400 font-medium">{hero.title}</p>
              <p className="text-xs text-gray-400 mt-1">🕯 Died: {hero.deathDate}</p>
              <div className="mt-4 text-gray-300 text-sm leading-relaxed">
                {hero.achievement}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Tribute */}
      <div className="text-center py-8 bg-[#0f172a] border-t border-orange-500">
        <p className="text-lg font-semibold text-gray-200 flex items-center justify-center gap-2">
          🕯 Jai Hind | We Remember. We Respect. We Salute. 🇮🇳
        </p>
      </div>
    </div>
  );
};

export default TributePage;