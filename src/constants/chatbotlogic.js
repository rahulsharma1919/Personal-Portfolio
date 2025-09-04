import chatbotData from "./chatbotdata";

function getBotReply(message) {
  const msg = message.toLowerCase();

  // Introduce Rahul / bot
  if (msg.includes("about rahul")) {
    return `Hi! I'm Rahul Sharma 👋
I’m a B.Tech graduate in Computer Science Engineering (2024).
I’ve worked at GeeksforGeeks as a Technical Analyst Intern,
done freelancing projects (like DCS Landing Page & Portfolio Website),
and built apps with React, Tailwind, C++, Python, and more. 🚀`;
  }

  // Conversational replies
  if (msg.includes("how are you")) {
    const replies = [
      "I’m doing great, thanks for asking! How about you? 😄",
      "All systems running smoothly 🤖✨ What about you?",
      "Feeling awesome and ready to chat 🚀",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (msg.includes("thank you") || msg.includes("thanks")) {
    const replies = [
      "You’re most welcome! 💙",
      "Anytime! Glad I could help 🙌",
      "No problem, that’s what I’m here for 😎",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (
    msg.includes("good bot") ||
    msg.includes("awesome") ||
    msg.includes("great") ||
    msg.includes("nice") ||
    msg.includes("well done") ||
    msg.includes("fantastic") ||
    msg.includes("amazing") ||
    msg.includes("love you") ||
    msg.includes("perfect")
  ) {
    const replies = [
      "Aww, thanks! You’re awesome too 😍",
      "That made my circuits happy 💡⚡",
      "Yay! Glad you liked it 🤩",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // Info queries
  if (msg.includes("name")) return `My creator is ${chatbotData.name}`;
  if (msg.includes("email"))
    return `You can reach Rahul at 📧 ${chatbotData.email}`;
  if (msg.includes("phone") || msg.includes("contact"))
    return `Rahul's contact number is 📱 ${chatbotData.phone}`;
  if (msg.includes("location") || msg.includes("from"))
    return `Rahul is based in 🌍 ${chatbotData.location}`;
  if (msg.includes("education") || msg.includes("study"))
    return `🎓 Education: ${chatbotData.education.join(", ")}`;
  if (msg.includes("experience") || msg.includes("work"))
    return `💼 Experience: ${chatbotData.experience.join(" | ")}`;
  if (msg.includes("skills") || msg.includes("tech"))
    return `⚡ Skills: ${chatbotData.skills.join(", ")}`;
  if (msg.includes("projects") || msg.includes("portfolio"))
    return `🚀 Projects: ${chatbotData.projects.join(" | ")}`;

  // Jokes / fun replies
  if (msg.includes("joke") || msg.includes("funny") || msg.includes("bored")) {
    return chatbotData.jokes[
      Math.floor(Math.random() * chatbotData.jokes.length)
    ];
  }

  // Default fallback
  return "Oh hey! I’m Zeppy 🤖 Ask me about Rahul’s skills, projects, or just chat with me 😎";
}

export default getBotReply;
