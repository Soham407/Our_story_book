import { Book, StoryConfig } from '../types';

/**
 * Supabase Service Skeleton
 * Handles database operations for Users, Books, and Orders.
 */

export const saveProject = async (data: StoryConfig): Promise<string> => {
  console.log("Saving project to Supabase:", data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "project-id-12345";
};

export const fetchUserBooks = async (userId: string): Promise<Book[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Mock return data
  return [
    {
      id: '1',
      title: "Oliver's Space Adventure",
      coverImage: "https://picsum.photos/400/500?random=1",
      status: 'draft',
      lastEdited: new Date()
    },
    {
      id: '2',
      title: "Sophie and the Magic Dragon",
      coverImage: "https://picsum.photos/400/500?random=2",
      status: 'shipped',
      lastEdited: new Date(Date.now() - 86400000 * 5)
    }
  ];
};

export const createOrder = async (bookId: string, shippingDetails: any): Promise<{ orderId: string }> => {
  console.log("Creating order for:", bookId, shippingDetails);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { orderId: "ORD-998877" };
};