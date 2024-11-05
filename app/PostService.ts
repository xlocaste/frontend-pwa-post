// services/PostService.ts
// services/PostService.ts
export interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
  }
  
  export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('http://127.0.0.1:8000/api/post');
    if (!response.ok) throw new Error('Failed to fetch posts');
  
    const result = await response.json();
    return result.data;
  }
  
  
  export async function addPost(title: string, content: string): Promise<Post> {
    const response = await fetch('http://127.0.0.1:8000/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) throw new Error('Failed to add post');
    return response.json();
  }
  