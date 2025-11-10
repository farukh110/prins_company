export interface Testimonials {
  id: string;
  name: string;
  title: string;
  description: string;
  rating: string;
  image: string;
  created_at: string;
}

export interface TestimonialsResponse {
  status: boolean;
  message: string;
  data: Testimonials[];
}

export interface TestimonialState {
  data: Testimonials[];
  loading: boolean;
  error: string | null;
}