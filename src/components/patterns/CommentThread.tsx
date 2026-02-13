import React, { useState } from "react";
import { cn } from "../ui/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { MessageSquare, ThumbsUp, Reply, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface CommentThreadProps {
  comments: Comment[];
  className?: string;
  onAddComment?: (content: string) => void;
  onReply?: (commentId: string, content: string) => void;
  onLike?: (commentId: string) => void;
}

export function CommentThread({
  comments: initialComments,
  className,
  onAddComment,
  onReply,
  onLike,
}: CommentThreadProps) {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  const handleReplySubmit = (commentId: string) => {
    if (replyContent.trim() && onReply) {
      onReply(commentId, replyContent);
      setReplyingTo(null);
      setReplyContent("");
    }
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={cn("flex gap-3", isReply ? "mt-4 ml-12" : "mt-6")}>
      <Avatar className={cn(isReply ? "h-8 w-8" : "h-10 w-10")}>
        <AvatarImage src={comment.author.avatar} />
        <AvatarFallback>{comment.author.initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">{comment.author.name}</span>
            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <p className="text-sm text-foreground/90 leading-relaxed">
          {comment.content}
        </p>
        
        <div className="flex items-center gap-4 mt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-auto p-0 text-muted-foreground hover:text-foreground"
            onClick={() => onLike?.(comment.id)}
          >
            <ThumbsUp className="h-3.5 w-3.5 mr-1" />
            <span className="text-xs">{comment.likes}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-auto p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
          >
            <Reply className="h-3.5 w-3.5 mr-1" />
            <span className="text-xs">Reply</span>
          </Button>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-4 flex gap-3 animate-in fade-in-0 zoom-in-95">
             <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="min-h-[80px]"
                />
                <div className="flex justify-end gap-2">
                   <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>Cancel</Button>
                   <Button size="sm" onClick={() => handleReplySubmit(comment.id)}>Reply</Button>
                </div>
             </div>
          </div>
        )}

        {comment.replies?.map((reply) => (
          <CommentItem key={reply.id} comment={reply} isReply />
        ))}
      </div>
    </div>
  );

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">Comments ({initialComments.length})</h3>
      </div>

      <div className="mb-8 space-y-4">
        <Textarea
          placeholder="What's on your mind?"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] resize-none"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmit} disabled={!newComment.trim()}>
            Post Comment
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        {initialComments.map((comment) => (
          <div key={comment.id}>
             <CommentItem comment={comment} />
             <Separator className="mt-6" />
          </div>
        ))}
      </div>
    </div>
  );
}