//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value.trim();
    const delay = Number(document.getElementById("delay").value);

    if (!text || isNaN(delay) || delay < 0) {
        alert("Please enter valid text and a positive delay.");
        return;
    }

    function delayTextDisplay(text, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, delay);
        });
    }

    try {
        const result = await delayTextDisplay(text, delay);
        document.getElementById("output").innerText = result;
    } catch (error) {
        console.error("Error:", error);
    }
});
