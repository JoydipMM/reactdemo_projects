import React from 'react';
import FeedCard from './FeedCard';
import CreatePost from './CreatePost';

const AllFeeds = () => {
  // Mock data for social media feeds
  const feeds = [
    {
      id: 1,
      user: { name: "Alice Johnson", handle: "@alicej", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
      time: "2h ago",
      content: "Just finished hiking the amazing trails! The view was absolutely breathtaking. 🏔️✨ #nature #hiking",
      images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop"],
      stats: { likes: 124, comments: 23, shares: 5 }
    },
    {
      id: 2,
      user: { name: "Bob Smith", handle: "@bobsmith99", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
      time: "5h ago",
      content: "Started learning React with Tailwind and DaisyUI. Building a social media app is so much fun! 🚀💻",
      images: [],
      stats: { likes: 56, comments: 12, shares: 2 }
    },
    {
      id: 3,
      user: { name: "Charlie Davis", handle: "@charlied", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
      time: "8h ago",
      content: "Here are some of the best moments from my recent trip to Japan. Food, culture, and amazing people! 🍣🗼",
      images: [
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522851440843-ea782167d71b?q=80&w=600&auto=format&fit=crop"
      ],
      stats: { likes: 302, comments: 45, shares: 12 }
    },
    {
      id: 4,
      user: { name: "Diana Prince", handle: "@diana", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana" },
      time: "1d ago",
      content: "A quick photoshoot from today's design event. What a fantastic crowd! ✨📸",
      images: [
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506869640319-ce1a1829eea6?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533174000276-2e86b03eb21c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop"
      ],
      stats: { likes: 512, comments: 89, shares: 34 }
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Create Post Input Area */}
      <CreatePost />

      {/* Feed Posts */}
      {feeds.map(post => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllFeeds;
