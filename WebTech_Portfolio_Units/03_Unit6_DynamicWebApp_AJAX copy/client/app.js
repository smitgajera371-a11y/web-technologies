document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const response = await fetch('../server/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, priority })
    });

    const result = await response.json();

    if (result.status === 'ok') {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = `${title} - ${description} (${priority})`;
        itemList.appendChild(listItem);
    } else {
        alert('Error: ' + result.message);
    }
});