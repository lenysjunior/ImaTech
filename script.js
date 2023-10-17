const infoForm = document.getElementById('infoForm');
const infoTable = document.querySelector('.infoTable');

infoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;

    const row = infoTable.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = nome;
    cell2.textContent = idade;
    cell3.textContent = curso;

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('curso').value = '';
});
