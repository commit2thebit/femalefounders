document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Hi Female Founders Fund!👋",
        "I'm Alexa. No, not that one... a real, live human who wants to work for you!",
        "A bit about me: I've worked as an account executive at a series A insurtech start-up and an account manager on the Lloyd's of London trading floor. I'm a quick study (I made this website with just an idea and ChatGPT...) and incredibly driven, especially by high-energy, in-person environments.",
        "I would love to serve as your Chief of Staff to promote investment in female-founded companies. I'm available at alexakmck@gmail.com or (850)450-8048 if you'd like to hear more. Thank you! 👩🏾👩🏼📈🌎"
    ];
    const messagesContainer = document.getElementById("messages");

    let currentMessage = 0;

    function displayMessage() {
        if (currentMessage < messages.length) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messages[currentMessage];
            messagesContainer.appendChild(messageElement);

            currentMessage++;
            // Increase delay to simulate typing and sending effect
            setTimeout(() => {
                scrollMessages();
                if (currentMessage < messages.length) {
                    displayMessage();
                }
            }, 2000); // Increase this value to extend the pause between messages
        }
    }

    function scrollMessages() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    displayMessage();

    document.getElementById("send-btn").addEventListener("click", function() {
        window.open(`mailto:alexakmck@gmail.com?subject=Alexa + Female Founders Fund Intro&body=Hi Alexa,`);
    });
});
