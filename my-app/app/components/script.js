// script.js
document.addEventListener('DOMContentLoaded', async () => {
  const userList = document.getElementById('userList');

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'p-4 border rounded bg-gray-50';

      userCard.innerHTML = `
        <h2 class="text-lg font-semibold text-blue-600">${user.name}</h2>
        <p class="text-gray-700"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-700"><strong>City:</strong> ${user.address.city}</p>
      `;

      userList.appendChild(userCard);
    });
  } catch (err) {
    userList.innerHTML = `<p class="text-red-500">Failed to load users.</p>`;
    console.error('Fetch error:', err);
  }
});
