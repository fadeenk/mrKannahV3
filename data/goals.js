const TYPES = {
  Family: "family",
  Work: "Work",
  Travel: "Travel",
  Possessions: "Possessions",
  Personal: "Personal",
  Charity: "Charity",
};
const goals = {};
class Goal {
  constructor(type, goal, description = "", completed = false) {
    this.goal = goal;
    this.description = description;
    this.completed = completed;
    if (!goals[type]) goals[type] = [];
    goals[type].push(this);
  }
}

new Goal(
  TYPES.Personal,
  "Become an engineer",
  "Childhood goal to become an engineer. Over time it got more specific and decided to become a computer engineer. Although, was working professionally as an engineer I wanted to make it official. As of May 2019, I am a SDSU alumnus computer engineer.",
  true
);

new Goal(
  TYPES.Personal,
  "Be in a newspaper",
  '<p>Part of me always wanted to have my face in a newspaper. That first became true when I was recognized as <a href="https://newscenter.sdsu.edu/sdsu_newscenter/news_story.aspx?sid=75337">a leader in STEM by SDSU</a>. Soon after my name and app were in <a href="http://thedailyaztec.com/47880/opinion/course-snatcher-app-is-an-unfair-advantage/">the school\'s paper</a>. After that my name and picture became associated with coursekey and can be found in bunch of papers, articles and even places I didn\'t expect.</p>',
  true
);

new Goal(
  TYPES.Work,
  "Publish technical content",
  '<p>Done a little bit on different places, <a href="https://medium.com/@fadeekannah">medium</a>, <a href="https://dev.to/fadeenk">dev.to</a> and mostly on my <a href="/blog">blog</a>.</p>',
  true
);

new Goal(
  TYPES.Personal,
  "Have a financial roadmap",
  "Have a better understanding of where I stand financially. Have a map to get out of dept. Have assets evaluated and documented. Have budget plan."
);

new Goal(
  TYPES.Personal,
  "Have a retirement plan",
  "Ensure easy/early retirement is possible"
);
new Goal(
  TYPES.Personal,
  "Become financially independent",
  "Won't have to worry about money"
);
new Goal(TYPES.Work, "Become a millionaire", "");
new Goal(
  TYPES.Work,
  "Run my own business",
  "Kannah software and consulting services.",
  true
);
new Goal(TYPES.Work, "Become venture backed business", "CourseKey", true);
new Goal(TYPES.Work, "Have multiple incomes");
new Goal(TYPES.Personal, "Create things", "Mostly different software", true);
new Goal(
  TYPES.Possessions,
  "Have a patent",
  '<a href="https://patents.google.com/patent/US10212542B2/">Facilitating a meeting or education session</a>',
  true
);
new Goal(TYPES.Possessions, "Have a second patent");
new Goal(TYPES.Possessions, "Buy a house", "Family house", true);
new Goal(
  TYPES.Possessions,
  "Buy a second house",
  "source of income or vacation place"
);
new Goal(TYPES.Travel, "Live in three countries", "Iraq, Turkey and USA", true);
new Goal(TYPES.Travel, "Visit Japan");
new Goal(TYPES.Travel, "Travel to three different countries", "Mexico");
new Goal(TYPES.Travel, "Travel to six of the continents");
new Goal(
  TYPES.Family,
  "Find a partner and get married",
  "Fall in love and find the partner that is ideal for me"
);
new Goal(TYPES.Family, "Have two children");
new Goal(TYPES.Family, "Take care of my parents and siblings");
new Goal(TYPES.Family, "Ensure parents retire comfortably");
new Goal(TYPES.Family, "Have property for parents to retire in");
new Goal(
  TYPES.Family,
  "Ensure family is financially set if anything happens to me"
);
new Goal(TYPES.Work, "Become an investor and help small businesses");
new Goal(TYPES.Possessions, "Buy a Predator Thronos");
new Goal(TYPES.Personal, "Solve big complex problems to make the world better");
new Goal(TYPES.Charity, "Help my extended family that is in need");
new Goal(TYPES.Personal, "Become a mentor");

export default goals;
