// js/skills.js

function setProgress(id, percent, percentId) {
    const circle = document.getElementById(id);
    const text = document.getElementById(percentId);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // 👉 update text percent
    if (text) {
        text.innerText = percent + "%";
    }
}

// 👉 LETAK FUNCTION INI BAWAH DIA
function showSkill(title, text) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupText').innerText = text;
    document.getElementById('popup').style.display = 'flex';

  if (title === "Rugby") {
    setProgress("stat1", 90, "percent1");
    setProgress("stat2", 60, "percent2");
    setProgress("stat3", 80, "percent3");
}

  if (title === "Tennis") {
    setProgress("stat1", 40, "percent1");
    setProgress("stat2", 50, "percent2");
    setProgress("stat3", 90, "percent3");
}

  if (title === "Volleyball") {
    setProgress("stat1", 70, "percent1");
    setProgress("stat2", 60, "percent2");
    setProgress("stat3", 50, "percent3");
}

 if (title === "Web Dev") {
    setProgress("stat1", 10, "percent1");
    setProgress("stat2", 30, "percent2");
    setProgress("stat3", 40, "percent3");
}

   if (title === "UI Design") {
    setProgress("stat1", 50, "percent1");
    setProgress("stat2", 60, "percent2");
    setProgress("stat3", 90, "percent3");
}
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';

    setProgress("stat1", 0, "percent1");
    setProgress("stat2", 0, "percent2");
    setProgress("stat3", 0, "percent3");
}