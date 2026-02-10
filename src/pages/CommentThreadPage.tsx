import { ComponentShowcase } from "../components/ui/component-showcase";
import { CommentThread } from "../components/patterns/CommentThread";

const commentCode = `import { CommentThread } from "@/components/patterns/CommentThread";

export function CommentThreadDemo() {
  return (
    <CommentThread 
      comments={[
        {
          id: "1",
          author: { name: "Juan Pérez", initials: "JP" },
          content: "¿Podemos revisar los términos de pago para este cliente?",
          timestamp: "Hace 2 horas",
          likes: 5,
          replies: [
             {
               id: "2",
               author: { name: "Laura Torres", initials: "LT" },
               content: "Claro, lo agendamos para la reunión de mañana.",
               timestamp: "Hace 1 hora",
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
      description="Hilo de comentarios con respuestas anidadas, likes y formulario para agregar nuevos comentarios."
      category="Business Pattern"
      preview={
        <CommentThread 
          comments={[
            {
              id: "1",
              author: { name: "Juan Pérez", initials: "JP" },
              content: "¿Podemos revisar los términos de pago para este cliente?",
              timestamp: "Hace 2 horas",
              likes: 5,
              replies: [
                 {
                   id: "2",
                   author: { name: "Laura Torres", initials: "LT" },
                   content: "Claro, lo agendamos para la reunión de mañana.",
                   timestamp: "Hace 1 hora",
                   likes: 2
                 }
              ]
            }
          ]}
        />
      }
      code={commentCode}
      props={[
        { name: "comments", type: "Comment[]", description: "Array de comentarios. Cada uno tiene: id, author (name, initials), content, timestamp, likes, replies (anidados).", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor raíz." },
        { name: "onAddComment", type: "(content: string) => void", description: "Callback al agregar un nuevo comentario." },
        { name: "onReply", type: "(commentId: string, content: string) => void", description: "Callback al responder a un comentario." },
        { name: "onLike", type: "(commentId: string) => void", description: "Callback al dar like a un comentario." },
      ]}
      examples={[
        {
          title: "Hilo con múltiples respuestas",
          description: "Conversación con varias respuestas anidadas.",
          preview: (
            <CommentThread
              comments={[
                {
                  id: "1",
                  author: { name: "Director Financiero", initials: "DF" },
                  content: "El cliente Logística Norte solicita ampliar el cupo de factoring a $500M. ¿Opiniones?",
                  timestamp: "Hace 3 horas",
                  likes: 3,
                  replies: [
                    { id: "2", author: { name: "Analista de Riesgo", initials: "AR" }, content: "El historial de pago es bueno. Score 85/100.", timestamp: "Hace 2 horas", likes: 1 },
                    { id: "3", author: { name: "Gerente Comercial", initials: "GC" }, content: "De acuerdo, podemos escalar con condiciones.", timestamp: "Hace 1 hora", likes: 0 },
                  ],
                },
              ]}
            />
          ),
          code: `<CommentThread
  comments={[
    {
      id: "1",
      author: { name: "Director Financiero", initials: "DF" },
      content: "El cliente solicita ampliar el cupo. ¿Opiniones?",
      timestamp: "Hace 3 horas",
      likes: 3,
      replies: [
        { id: "2", author: { name: "Analista", initials: "AR" }, content: "Historial bueno. Score 85.", timestamp: "Hace 2 horas", likes: 1 },
        { id: "3", author: { name: "Gerente", initials: "GC" }, content: "De acuerdo.", timestamp: "Hace 1 hora", likes: 0 },
      ],
    },
  ]}
  onAddComment={(content) => console.log("Nuevo:", content)}
  onReply={(id, content) => console.log("Reply:", id, content)}
/>`,
        },
      ]}
    />
  );
}