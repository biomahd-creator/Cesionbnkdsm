import { ComponentShowcase } from "../components/ui/component-showcase";
import { CommentThread } from "../components/patterns/CommentThread";

const commentCode = `import { CommentThread } from "@/components/patterns/CommentThread";

export function CommentThreadDemo() {
  return (
    <CommentThread 
      comments={[
        {
          id: "1",
          author: { name: "John Smith", initials: "JS" },
          content: "Can we review the payment terms for this client?",
          timestamp: "2 hours ago",
          likes: 5,
          replies: [
             {
               id: "2",
               author: { name: "Laura Torres", initials: "LT" },
               content: "Sure, let's schedule it for tomorrow's meeting.",
               timestamp: "1 hour ago",
               likes: 2
             }
          ]
        }
      ]}
    />
  );
}`;

export function CommentThreadPage() {
  return (
    <ComponentShowcase
      title="Comment Thread"
      description="Comment thread with nested replies, likes, and form to add new comments."
      category="Business Pattern"
      preview={
        <CommentThread 
          comments={[
            {
              id: "1",
              author: { name: "John Smith", initials: "JS" },
              content: "Can we review the payment terms for this client?",
              timestamp: "2 hours ago",
              likes: 5,
              replies: [
                 {
                   id: "2",
                   author: { name: "Laura Torres", initials: "LT" },
                   content: "Sure, let's schedule it for tomorrow's meeting.",
                   timestamp: "1 hour ago",
                   likes: 2
                 }
              ]
            }
          ]}
        />
      }
      code={commentCode}
      props={[
        { name: "comments", type: "Comment[]", description: "Array of comments. Each has: id, author (name, initials), content, timestamp, likes, replies (nested).", required: true },
        { name: "className", type: "string", description: "Additional classes for the root container." },
        { name: "onAddComment", type: "(content: string) => void", description: "Callback when adding a new comment." },
        { name: "onReply", type: "(commentId: string, content: string) => void", description: "Callback when replying to a comment." },
        { name: "onLike", type: "(commentId: string) => void", description: "Callback when liking a comment." },
      ]}
      examples={[
        {
          title: "Thread with multiple replies",
          description: "Conversation with several nested replies.",
          preview: (
            <CommentThread
              comments={[
                {
                  id: "1",
                  author: { name: "CFO", initials: "CF" },
                  content: "North Logistics client requests to increase factoring limit to $500M. Thoughts?",
                  timestamp: "3 hours ago",
                  likes: 3,
                  replies: [
                    { id: "2", author: { name: "Risk Analyst", initials: "RA" }, content: "Payment history is good. Score 85/100.", timestamp: "2 hours ago", likes: 1 },
                    { id: "3", author: { name: "Commercial Manager", initials: "CM" }, content: "Agreed, we can scale with conditions.", timestamp: "1 hour ago", likes: 0 },
                  ],
                },
              ]}
            />
          ),
          code: `<CommentThread
  comments={[
    {
      id: "1",
      author: { name: "CFO", initials: "CF" },
      content: "Client requests to increase limit. Thoughts?",
      timestamp: "3 hours ago",
      likes: 3,
      replies: [
        { id: "2", author: { name: "Analyst", initials: "RA" }, content: "Good history. Score 85.", timestamp: "2 hours ago", likes: 1 },
        { id: "3", author: { name: "Manager", initials: "CM" }, content: "Agreed.", timestamp: "1 hour ago", likes: 0 },
      ],
    },
  ]}
  onAddComment={(content) => console.log("New:", content)}
  onReply={(id, content) => console.log("Reply:", id, content)}
/>`,
        },
      ]}
    />
  );
}