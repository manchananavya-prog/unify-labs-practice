const form = document.getElementById("internForm");
const internList = document.getElementById("internList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const joinedDate = document.getElementById("joinedDate").value;

    const response = await fetch("http://localhost:5000/addIntern", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, role, joinedDate })
    });

    const data = await response.json();
    alert(data.message);
    loadInterns();
});

async function loadInterns() {
    const response = await fetch("http://localhost:5000/getInterns");
    const interns = await response.json();

    internList.innerHTML = "";
    interns.forEach(intern => {
        internList.innerHTML += `
            <p><strong>${intern.name}</strong> - ${intern.role} - ${new Date(intern.joinedDate).toDateString()}</p>
        `;
    });
}

loadInterns();