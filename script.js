var editButton = document.getElementById('edit-button');
let profileForm = document.getElementById('profile-form');

editButton.addEventListener('click', () => {
    let container = document.querySelector('.container');
    let containerEdit = document.querySelector('.container-edit');

    container.style.display = 'none';
    containerEdit.style.display = 'block';

    let name = document.getElementById('name').textContent;
    let email = document.getElementById('email').textContent;
    let interests = document.getElementById('interests').textContent;

    container.getElementById('input-name').value = name;
    document.getElementById('input-email').value = email;
    document.getElementById('input-interests').value = interests;
});

profileForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let interests = document.getElementById('input-interests').value;

    // Simulating server-side data update (replace with actual server-side logic)
    setTimeout(() => {
        document.getElementById('name').textContent = name;
        document.getElementById('email').textContent = email;
        document.getElementById('interests').textContent = interests;

        let container = document.querySelector('.container');
        let containerEdit = document.querySelector('.container-edit');

        container.style.display = 'block';
        containerEdit.style.display = 'none';
    }, 1000); // Simulate delay for demo purposes
});
