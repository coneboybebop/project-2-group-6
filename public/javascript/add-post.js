async function newFormHandler(event) {
    event.preventDefault();

    const post_content = document.querySelector('textarea[name="post-content"]').value;
    const category = document.querySelector('select[name="category"]').value;
    const zip_id = document.querySelector('input[name="zip-id"]').value;
    console.log(post_content, category, zip_id);

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            post_content,
            category,
            zip_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
