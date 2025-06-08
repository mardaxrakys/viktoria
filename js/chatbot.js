const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-message");

const chatbotResponses = {
  вступ: "Для вступу до ЕПФК ЗНУ вам необхідно подати заяву...",
  документи: "Для вступу потрібні: паспорт, ІПН...",
  терміни: "Основні етапи вступної кампанії...",
  спеціальності: "ЕПФК ЗНУ пропонує широкий спектр спеціальностей...",
  вартість: "Вартість навчання залежить від обраної спеціальності...",
  гуртожиток: "ЕПФК ЗНУ надає місця в гуртожитках...",
  стипендія: "Академічна стипендія призначається студентам-бюджетникам...",
  контакти: "Приймальна комісія: м. Запоріжжя, вул. Жуковського, 66...",
  бюджет: "Кількість бюджетних місць визначається щороку...",
  пільги: "Право на першочергове зарахування мають...",
};

function addMessage(message, isUser) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `chatbot-message ${
    isUser ? "user-message" : "bot-message"
  }`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
  message = message.toLowerCase();
  for (const keyword in chatbotResponses) {
    if (message.includes(keyword)) {
      return chatbotResponses[keyword];
    }
  }
  return "Вибачте, я не маю інформації з цього питання...";
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, true);
    chatInput.value = "";
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage(response, false);
    }, 500);
  }
}

sendButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
