import React, { useState } from 'react';

const CommentItem = ({ comment, isReply = false }) => (
  <div className={`flex gap-3 ${isReply ? 'mt-3 ml-12' : 'mt-4'}`}>
    <div className="avatar shrink-0">
      <div className={`${isReply ? 'w-8 h-8' : 'w-10 h-10'} rounded-full`}>
        <img src={comment.user.avatar} alt={comment.user.fullname} />
      </div>
    </div>
    <div className="flex flex-col gap-1 max-w-full overflow-hidden">
      <div className="bg-base-300 px-4 py-2 rounded-2xl shadow-sm inline-block">
        <h4 className="font-bold text-sm hover:underline cursor-pointer">{comment.user.fullname}</h4>
        <p className="text-sm leading-tight text-base-content/90 break-words">{comment.text}</p>
      </div>
      <div className="flex gap-4 ml-2 text-xs font-bold text-base-content/60">
        <button className="hover:underline">Like</button>
        <button className="hover:underline">Reply</button>
        <span>{comment.time}</span>
      </div>
      {comment.replies && comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  </div>
);

const CommentSection = ({ postId, initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments.length > 0 ? initialComments : [
    {
      id: 1,
      user: { name: "John Doe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
      text: "This looks absolutely amazing! 🏔️ I need to go there sometime.",
      time: "1h ago",
      replies: [
        {
          id: 101,
          user: { name: "Alice Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
          text: "You definitely should, John! The air is so fresh there.",
          time: "45m ago"
        }
      ]
    },
    {
      id: 2,
      user: { name: "Sarah Williams", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
      text: "Great post! Thanks for sharing.",
      time: "2h ago",
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ["❤️", "😂", "😮", "😢", "😡", "👍", "✨", "🔥"];

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      user: { name: "Me", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Me" },
      text: newComment,
      time: "Just now",
      replies: []
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="mt-4 pt-4 border-t border-base-200 animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Comment List */}
      <div className="max-h-[400px] overflow-y-auto space-y-1 pr-2 no-scrollbar">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Comment Input Area */}
      <div className="mt-6 flex gap-3 items-start relative">
        <div className="avatar shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full ring ring-primary/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me" alt="Me" />
          </div>
        </div>
        <div className="flex-1 relative group">
          <div className="relative">
            <textarea
              placeholder="Write a comment..."
              className="textarea textarea-bordered w-full pr-12 rounded-2xl resize-none bg-base-300 border-none focus:ring-1 focus:ring-primary h-11 py-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleAddComment();
                }
              }}
            />
            <div className="absolute right-2 top-2 flex items-center gap-1">
              <button 
                className={`btn btn-ghost btn-xs btn-circle ${showEmojiPicker ? 'text-primary' : 'text-base-content/40'}`}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Emoji Picker Popover */}
          {showEmojiPicker && (
            <div className="absolute bottom-full mb-3 right-0 bg-base-100 shadow-2xl p-3 rounded-2xl grid grid-cols-4 gap-2 border border-base-200 z-[100] animate-in zoom-in-95 duration-200 flex flex-wrap w-48">
              {emojis.map(emoji => (
                <button 
                  key={emoji} 
                  className="hover:scale-125 transition-transform text-xl p-1"
                  onClick={() => {
                    setNewComment(prev => prev + emoji);
                    setShowEmojiPicker(false);
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        <button 
          className={`btn btn-circle btn-sm mt-1 transition-all ${newComment.trim() ? 'btn-primary scale-100 shadow-lg' : 'btn-disabled scale-90 opacity-40'}`}
          onClick={handleAddComment}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
