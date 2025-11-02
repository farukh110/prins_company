export interface Blogs {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    author: string;
    created_at: string;
    updated_at: string;
    is_published: string;
};

export interface BlogsResponse {
  status: boolean;
  message: string;
  data: Blogs[];
};

export interface BlogState {
  data: Blogs[];
  loading: boolean;
  error: string | null;
};