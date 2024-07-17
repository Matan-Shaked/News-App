const btn = document.querySelector(".btn-open");
const factList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "tourism", color: "#8b5cf6" },
];

factList.innerHTML = "";

function createFactsList(dataArr) {
  const htmlArr = dataArr.map(
    (fact) => `<li class="fact">
            <p >${fact.text} 
            <a class="source" href=${fact.source} target="_blank">(Source)</a> 
            </p>
            <span class="tag" style="background-color: ${
              CATEGORIES.find((category) => category.name === fact.category)
                .color
            };">${fact.category}</span>
            </li>`
  );
  const html = htmlArr.join("");

  factList.insertAdjacentHTML("afterbegin", html);
}

async function loadFacts() {
  const res = await fetch(
    "https://czatcqfihrnwfzsnjlvo.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YXRjcWZpaHJud2Z6c25qbHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3OTc5OTMsImV4cCI6MjAzNjM3Mzk5M30.Zztpba-tSFZlUsh_ZAJoQ-I2nGz65oURcjdUaNiUWLY",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YXRjcWZpaHJud2Z6c25qbHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3OTc5OTMsImV4cCI6MjAzNjM3Mzk5M30.Zztpba-tSFZlUsh_ZAJoQ-I2nGz65oURcjdUaNiUWLY",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  createFactsList(data);
}

loadFacts();

btn.addEventListener("click", () => {
  document.querySelector(".fact-form").classList.toggle("hidden");
  btn.textContent =
    btn.textContent === "Share what you learned with the world"
      ? "Close"
      : "Share what you learned with the world";
});
