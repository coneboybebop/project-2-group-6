async function newFormHandler(event) {
    event.preventDefault();
  
    const post_content = document.querySelector('input[name="post-title"]').value;
    const id = document.querySelector('input[name="zip-input]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post_content,
        id
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
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);