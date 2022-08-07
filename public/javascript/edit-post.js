async function editFormHandler(event) {
    event.preventDefault();

    const post_content = document.querySelector('textarea[name="post-content"]').value;
    const category = document.querySelector('select[name="category"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_content,
            category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);