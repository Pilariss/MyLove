function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const message = document.getElementById("love-message");

    envelope.classList.remove("closed");
    envelope.classList.add("open");
    message.classList.remove("hidden");
    
}