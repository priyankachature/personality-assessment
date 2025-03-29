class PersonalityAssessment {
  constructor() {
    this.dom = {
      progressCircle: document.querySelector(".progress-circle"),
      progressPercent: document.querySelector(".progress-percent"),
      questionCard: document.querySelector(".question-card"),
      optionsGrid: document.querySelector(".options-grid"),
      questionText: document.querySelector(".question-text"),
      screens: {
        welcome: document.querySelector(".welcome-screen"),
        test: document.querySelector(".test-screen"),
        results: document.querySelector(".results-screen"),
      },

      typeTitle: document.querySelector(".type-title"),
      chartContainer: document.querySelector(".chart-container"),
      typeDescription: document.querySelector(".type-description"),
    };

    this.questions = [
      {
        question: "How do you prefer to spend your free time?",
        options: [
          { text: "Reading alone 📖", trait: "introvert", emoji: "📖" },
          { text: "Social gatherings 🎉", trait: "extrovert", emoji: "🎉" },
          { text: "Creative projects 🎨", trait: "creative", emoji: "🎨" },
          { text: "Organizing things 📌", trait: "structured", emoji: "📌" },
        ],
        category: "Social",
      },
      {
        question: "When making decisions, you:",
        options: [
          { text: "Analyze all data 📊", trait: "analytical", emoji: "📊" },
          { text: "Go with your gut 💡", trait: "intuitive", emoji: "💡" },
          { text: "Ask for advice 👥", trait: "social", emoji: "👥" },
          { text: "Consider pros/cons ⚖️", trait: "balanced", emoji: "⚖️" },
        ],
        category: "Decision Making",
      },
      {
        question: "How do you handle deadlines?",
        options: [
          { text: "Plan ahead 🗓️", trait: "planner", emoji: "🗓️" },
          { text: "Work under pressure ⏳", trait: "spontaneous", emoji: "⏳" },
          { text: "Break into steps 📝", trait: "structured", emoji: "📝" },
          { text: "Adapt as needed 🌱", trait: "flexible", emoji: "🌱" },
        ],
        category: "Work Style",
      },
      {
        question: "When facing criticism, you:",
        options: [
          { text: "Take it personally 😢", trait: "sensitive", emoji: "😢" },
          { text: "Analyze objectively 🧠", trait: "resilient", emoji: "🧠" },
          { text: "Seek clarification ❓", trait: "curious", emoji: "❓" },
          { text: "Defend your position 🛡️", trait: "confident", emoji: "🛡️" },
        ],
        category: "Emotional Response",
      },
      {
        question: "Your ideal weekend involves:",
        options: [
          { text: "Adventure sports 🪂", trait: "adventurous", emoji: "🪂" },
          { text: "Home relaxation 🛋️", trait: "introvert", emoji: "🛋️" },
          { text: "Social events 🥂", trait: "extrovert", emoji: "🥂" },
          { text: "Hobby projects 🔨", trait: "creative", emoji: "🔨" },
        ],
        category: "Lifestyle",
      },
      {
        question: "When learning something new, you prefer to:",
        options: [
          { text: "Follow instructions 📋", trait: "structured", emoji: "📋" },
          { text: "Experiment hands-on 🔬", trait: "spontaneous", emoji: "🔬" },
          { text: "Discuss with others 💬", trait: "social", emoji: "💬" },
          { text: "Research deeply 📚", trait: "analytical", emoji: "📚" },
        ],
        category: "Learning Style",
      },
      {
        question: "Your approach to problem-solving is:",
        options: [
          { text: "Logical analysis 🧮", trait: "analytical", emoji: "🧮" },
          { text: "Creative brainstorming 💡", trait: "creative", emoji: "💡" },
          { text: "Team collaboration 👥", trait: "social", emoji: "👥" },
          { text: "Step-by-step plan 📈", trait: "structured", emoji: "📈" },
        ],
        category: "Problem Solving",
      },
      {
        question: "How do you handle unexpected changes?",
        options: [
          { text: "Adapt quickly 🔄", trait: "flexible", emoji: "🔄" },
          { text: "Feel stressed 😰", trait: "sensitive", emoji: "😰" },
          { text: "Make a new plan 📝", trait: "structured", emoji: "📝" },
          { text: "See opportunities 🌟", trait: "adventurous", emoji: "🌟" },
        ],
        category: "Adaptability",
      },
      {
        question: "In team projects, you typically:",
        options: [
          { text: "Take leadership 👑", trait: "confident", emoji: "👑" },
          { text: "Support others 🤝", trait: "social", emoji: "🤝" },
          { text: "Focus on tasks 📌", trait: "analytical", emoji: "📌" },
          { text: "Suggest ideas 💡", trait: "creative", emoji: "💡" },
        ],
        category: "Teamwork",
      },
      {
        question: "Your ideal vacation is:",
        options: [
          { text: "Backpacking trip 🎒", trait: "adventurous", emoji: "🎒" },
          { text: "Resort relaxation 🏖️", trait: "balanced", emoji: "🏖️" },
          { text: "Cultural exploration 🏛️", trait: "curious", emoji: "🏛️" },
          { text: "Staycation at home 🛋️", trait: "introvert", emoji: "🛋️" },
        ],
        category: "Vacation Preferences",
      },
      {
        question: "When meeting new people, you:",
        options: [
          { text: "Initiate conversation 🗣️", trait: "extrovert", emoji: "🗣️" },
          { text: "Observe first 👀", trait: "introvert", emoji: "👀" },
          { text: "Look for common ground 🤲", trait: "social", emoji: "🤲" },
          { text: "Stay professional 🤵", trait: "resilient", emoji: "🤵" },
        ],
        category: "Social Interaction",
      },
      {
        question: "How do you make important decisions?",
        options: [
          { text: "Research thoroughly 🔍", trait: "analytical", emoji: "🔍" },
          { text: "Follow intuition 🌌", trait: "intuitive", emoji: "🌌" },
          { text: "Consult friends/family 👪", trait: "social", emoji: "👪" },
          { text: "Weigh pros/cons ⚖️", trait: "structured", emoji: "⚖️" },
        ],
        category: "Decision Process",
      },
      {
        question: "Your workspace is typically:",
        options: [
          { text: "Highly organized 🗄️", trait: "structured", emoji: "🗄️" },
          { text: "Creative chaos 🎨", trait: "creative", emoji: "🎨" },
          { text: "Minimalist design 🪑", trait: "balanced", emoji: "🪑" },
          { text: "Constantly changing 🌈", trait: "flexible", emoji: "🌈" },
        ],
        category: "Work Environment",
      },
      {
        question: "When facing conflict, you:",
        options: [
          { text: "Address it directly ⚔️", trait: "confident", emoji: "⚔️" },
          { text: "Seek compromise 🤝", trait: "balanced", emoji: "🤝" },
          { text: "Analyze the cause 🧩", trait: "analytical", emoji: "🧩" },
          { text: "Avoid confrontation 🕊️", trait: "sensitive", emoji: "🕊️" },
        ],
        category: "Conflict Resolution",
      },
      {
        question: "Your energy peaks when:",
        options: [
          { text: "Morning time 🌅", trait: "planner", emoji: "🌅" },
          { text: "Late night 🌙", trait: "spontaneous", emoji: "🌙" },
          { text: "Social events 🎉", trait: "extrovert", emoji: "🎉" },
          { text: "Quiet moments 🤫", trait: "introvert", emoji: "🤫" },
        ],
        category: "Energy Patterns",
      },
      {
        question: "When learning new skills, you:",
        options: [
          { text: "Follow tutorials 📺", trait: "structured", emoji: "📺" },
          { text: "Experiment freely 🔬", trait: "creative", emoji: "🔬" },
          { text: "Join a class 🎓", trait: "social", emoji: "🎓" },
          { text: "Research deeply 📚", trait: "analytical", emoji: "📚" },
        ],
        category: "Skill Acquisition",
      },
      {
        question: "Your approach to time management:",
        options: [
          { text: "Strict schedule 🕒", trait: "planner", emoji: "🕒" },
          { text: "Flexible routine 🕰️", trait: "flexible", emoji: "🕰️" },
          { text: "Deadline-driven ⏳", trait: "spontaneous", emoji: "⏳" },
          { text: "Prioritize tasks 📋", trait: "structured", emoji: "📋" },
        ],
        category: "Time Management",
      },
      {
        question: "When receiving feedback:",
        options: [
          { text: "Welcome criticism 📈", trait: "resilient", emoji: "📈" },
          { text: "Take it personally 😔", trait: "sensitive", emoji: "😔" },
          { text: "Analyze logically 🧠", trait: "analytical", emoji: "🧠" },
          { text: "Seek clarification ❓", trait: "curious", emoji: "❓" },
        ],
        category: "Feedback Handling",
      },
      {
        question: "Your creative process is:",
        options: [
          { text: "Methodical 📐", trait: "structured", emoji: "📐" },
          { text: "Spontaneous 💥", trait: "spontaneous", emoji: "💥" },
          { text: "Collaborative 👥", trait: "social", emoji: "👥" },
          { text: "Experimental 🧪", trait: "creative", emoji: "🧪" },
        ],
        category: "Creativity Style",
      },
      {
        question: "In social settings, you usually:",
        options: [
          { text: "Know everyone 👋", trait: "extrovert", emoji: "👋" },
          { text: "Stick to known 🤗", trait: "introvert", emoji: "🤗" },
          { text: "Observe dynamics 👀", trait: "analytical", emoji: "👀" },
          { text: "Initiate activities 🎤", trait: "confident", emoji: "🎤" },
        ],
        category: "Social Dynamics",
      },
      {
        question: "How do you handle stress?",
        options: [
          { text: "Exercise 🏋️", trait: "resilient", emoji: "🏋️" },
          { text: "Talk it out 💬", trait: "social", emoji: "💬" },
          { text: "Meditate 🧘", trait: "introvert", emoji: "🧘" },
          { text: "Plan solutions 📝", trait: "structured", emoji: "📝" },
        ],
        category: "Stress Response",
      },
    ];

    this.traitWeights = {
      extrovert: 0,
      introvert: 0,
      analytical: 0,
      creative: 0,
      structured: 0,
      flexible: 0,
      sensitive: 0,
      resilient: 0,
      spontaneous: 0,
      planner: 0,
      intuitive: 0,
      social: 0,
      balanced: 0,
      adventurous: 0,
      confident: 0,
      curious: 0,
    };

    this.traitFrequencies = this.calculateTraitFrequencies();
    this.currentQuestion = 0;
    this.initializeProgressCircle();
    this.init();
  }

  initializeProgressCircle() {
    const circumference = 2 * Math.PI * 36;
    this.dom.progressCircle.style.strokeDasharray = circumference;
    this.dom.progressCircle.style.strokeDashoffset = circumference;
  }

  calculateTraitFrequencies() {
    return this.questions.reduce((acc, q) => {
      q.options.forEach((opt) => {
        acc[opt.trait] = (acc[opt.trait] || 0) + 1;
      });
      return acc;
    }, {});
  }

  init() {
    this.bindEvents();
    this.renderQuestion();
  }

  bindEvents() {
    document
      .querySelector(".start-btn")
      .addEventListener("click", () => this.startTest());
    document
      .querySelector(".retake-btn")
      .addEventListener("click", () => this.resetTest());
  }

  startTest() {
    gsap.to(".welcome-screen", {
      opacity: 1,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        this.dom.screens.welcome.classList.remove("active");
        this.dom.screens.test.classList.add("active");
        gsap.from(".question-card", { y: 50, opacity: 1, duration: 0.6 });
      },
    });
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestion];
    this.dom.optionsGrid.innerHTML = question.options
      .map(
        (opt) => `
      <button class="option-btn" data-trait="${opt.trait}">
        <span class="emoji">${opt.emoji}</span>${opt.text}
      </button>
    `
      )
      .join("");

    this.dom.questionText.textContent = question.question;
    this.addOptionListeners();
    this.updateProgress();
  }

  addOptionListeners() {
    this.dom.optionsGrid.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.handleAnswer(btn.dataset.trait));
    });
  }

  handleAnswer(trait) {
    this.traitWeights[trait] += 5;
    this.currentQuestion++;

    if (this.currentQuestion < this.questions.length) {
      gsap.to(this.dom.questionCard, {
        y: 50,
        opacity: 1,
        duration: 0.4,
        onComplete: () => {
          this.renderQuestion();
          gsap.from(this.dom.questionCard, {
            y: -50,
            opacity: 1,
            duration: 0.4,
          });
        },
      });
    } else {
      this.showResults();
    }
    this.animateProgress();
  }

  updateProgress() {
    const percent = Math.min(
      100,
      (this.currentQuestion / this.questions.length) * 100
    );
    this.dom.progressPercent.textContent = `${Math.round(percent)}%`;
    this.updateProgressCircle(percent);
  }

  updateProgressCircle(percent) {
    const circumference = 2 * Math.PI * 36;
    const offset = circumference - (percent / 100) * circumference;
    this.dom.progressCircle.style.strokeDashoffset = offset;
  }

  animateProgress() {
    const rawPercent = (this.currentQuestion / this.questions.length) * 100;
    const percent = Math.min(100, rawPercent);
    const circumference = 2 * Math.PI * 36;
    const targetOffset = circumference - (percent / 100) * circumference;

    gsap.to(this.dom.progressCircle, {
      strokeDashoffset: targetOffset,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  showResults() {
    gsap.to(this.dom.screens.test, {
      opacity: 1,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        this.dom.screens.test.classList.remove("active");
        this.dom.screens.results.classList.add("active");
        this.setPersonalityType();
        this.triggerConfetti();
      },
    });
  }

  getTraitColor(trait) {
    const colors = {
      Extrovert: "#FF6B6B",
      Introvert: "#4ECDC4",
      Analytical: "#6C63FF",
      Creative: "#FFA62E",
      Structured: "#00C9A7",
      Flexible: "#FF9F1C",
      Sensitive: "#FF6392",
      Resilient: "#2EC4B6",
      Spontaneous: "#E71D36",
      Planner: "#2A9D8F",
      Intuitive: "#F15BB5",
      Social: "#F94144",
      Balanced: "#F8961E",
      Adventurous: "#3A86FF",
      Confident: "#8338EC",
      Curious: "#FF006E",
    };
    return colors[trait] || "#6C63FF";
  }

  calculateResults() {
    return Object.entries(this.traitWeights)
      .map(([trait, value]) => ({
        trait: this.formatTraitName(trait),
        value: Math.min(
          100,
          Math.round((value / (this.traitFrequencies[trait] * 5)) * 100)
        ),
      }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value);
  }

  formatTraitName(trait) {
    return trait.charAt(0).toUpperCase() + trait.slice(1);
  }

  setPersonalityType() {
    const results = this.calculateResults();
    const primaryTrait = results[0].trait;
    const typeMap = {
      Extrovert: {
        title: "The Social Catalyst",
        desc: "You thrive in group settings and energize others with your natural charisma. Your enthusiasm is contagious, making you the life of any gathering.",
        emoji: "😃",
      },
      Introvert: {
        title: "The Strategic Thinker",
        desc: "You prefer deep connections over small talk, and your observant nature helps you understand complex situations intuitively.",
        emoji: "🤔",
      },
      Analytical: {
        title: "The Logic Architect",
        desc: "Your methodical approach and love for data make you excellent at solving complex problems systematically.",
        emoji: "🧐",
      },
      Creative: {
        title: "The Visionary Creator",
        desc: "Your imagination knows no bounds, and you see possibilities others miss. You transform abstract ideas into tangible innovations.",
        emoji: "🎨",
      },
      Structured: {
        title: "The Master Organizer",
        desc: "Your love for order and planning ensures nothing falls through the cracks. You excel at creating efficient systems.",
        emoji: "📅",
      },
      Flexible: {
        title: "The Adaptive Innovator",
        desc: "You thrive in dynamic environments and pivot effortlessly when faced with changing circumstances.",
        emoji: "🤹",
      },
      Sensitive: {
        title: "The Empathetic Soul",
        desc: "Your deep emotional awareness allows you to connect with others on a profound level and nurture meaningful relationships.",
        emoji: "🥰",
      },
      Resilient: {
        title: "The Steadfast Anchor",
        desc: "You maintain composure under pressure and serve as a stabilizing force during challenging times.",
        emoji: "💪",
      },
      Spontaneous: {
        title: "The Free Spirit",
        desc: "Your ability to live in the moment and embrace uncertainty leads to exciting opportunities and adventures.",
        emoji: "😜",
      },
      Planner: {
        title: "The Detail Architect",
        desc: "Your meticulous preparation and foresight ensure smooth execution of complex projects and goals.",
        emoji: "📌",
      },
      Intuitive: {
        title: "The Instinctive Navigator",
        desc: "You trust your gut feelings and have an uncanny ability to read between the lines in any situation.",
        emoji: "🔮",
      },
      Social: {
        title: "The Community Builder",
        desc: "You naturally foster connections between people and create strong support networks wherever you go.",
        emoji: "👥",
      },
      Balanced: {
        title: "The Harmonious Mediator",
        desc: "You excel at finding middle ground and maintaining equilibrium in both personal and professional relationships.",
        emoji: "⚖️",
      },
      Adventurous: {
        title: "The Boundary Pusher",
        desc: "Your thirst for new experiences drives you to constantly explore beyond conventional limits.",
        emoji: "🌍",
      },
      Confident: {
        title: "The Bold Leader",
        desc: "Your self-assured nature inspires others to follow your vision and embrace challenges with courage.",
        emoji: "😎",
      },
      Curious: {
        title: "The Eternal Learner",
        desc: "Your insatiable curiosity drives continuous exploration and understanding of the world around you.",
        emoji: "🤩",
      },
    };

    const personality = typeMap[primaryTrait] || {
      title: "The Balanced Dynamo",
      desc: "You maintain harmony between different aspects of your personality, adapting beautifully to any situation.",
      emoji: "🌟",
    };

    this.dom.typeTitle.textContent = personality.title;
    this.dom.typeDescription.textContent = personality.desc;
    // this.updateColorScheme(primaryTrait);

    const emojiElement = document.getElementById("emoji-avatar");
    emojiElement.textContent = personality.emoji;

    gsap.fromTo(
      emojiElement,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );

    gsap.to(emojiElement, {
      rotate: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "sine.inOut",
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(emojiElement, { scale: 1.2, duration: 0.5, ease: "power1.inOut" })
      .to(emojiElement, { scale: 1, duration: 0.5, ease: "power1.inOut" })
      .to(emojiElement, { rotate: 10, duration: 0.3 })
      .to(emojiElement, { rotate: -10, duration: 0.3 });
  }

  // updateColorScheme(trait) {
  //   const hueMap = {
  //     Extrovert: 4,
  //     Introvert: 168,
  //     Analytical: 250,
  //     Creative: 32,
  //     Structured: 164,
  //     Flexible: 200,
  //     Sensitive: 330,
  //     Resilient: 180,
  //     Spontaneous: 0,
  //     Planner: 150,
  //     Intuitive: 300,
  //     Social: 10,
  //     Balanced: 40,
  //     Adventurous: 210,
  //     Confident: 270,
  //     Curious: 320
  //   };

  //   gsap.to(":root", {
  //     "--primary-hue": hueMap[trait] || 250,
  //     duration: 1.5,
  //     ease: "power2.out"
  //   });
  // }

  triggerConfetti() {
    const fire = (ratio, opts) =>
      confetti({
        ...opts,
        particleCount: Math.floor(200 * ratio),
        origin: { y: 0.7 },
        colors: ["#FF6B6B", "#6C63FF", "#4ECDC4", "#FFA62E"],
      });

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  }

  resetTest() {
    gsap.to(this.dom.screens.results, {
      opacity: 1,
      y: 50,
      duration: 0.5,
      onComplete: () => {
        this.currentQuestion = 0;
        Object.keys(this.traitWeights).forEach(
          (k) => (this.traitWeights[k] = 0)
        );
        this.initializeProgressCircle();
        this.dom.progressPercent.textContent = "0%";
        this.dom.screens.results.classList.remove("active");
        this.dom.screens.welcome.classList.add("active");
        this.renderQuestion();
        gsap.set(this.dom.questionCard, { y: 0, opacity: 1 });
      },
    });
  }
}

window.addEventListener("load", () => {
  const app = new PersonalityAssessment();
  app.dom.avatar = document.getElementById("avatar");
});
