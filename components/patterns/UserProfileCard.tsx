import React from "react";
import { cn } from "../ui/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Mail, Phone, MapPin, Calendar, Building2, CreditCard } from "lucide-react";

export interface UserProfile {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  email: string;
  phone?: string;
  location?: string;
  joinDate?: string;
  company?: string;
  status: "active" | "inactive" | "pending";
  tags?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

interface UserProfileCardProps {
  user: UserProfile;
  className?: string;
  onEdit?: () => void;
  onMessage?: () => void;
}

export function UserProfileCard({ user, className, onEdit, onMessage }: UserProfileCardProps) {
  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-muted-foreground",
    pending: "bg-yellow-500",
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="h-24 bg-gradient-to-r from-primary/10 to-primary/5 relative">
         {/* Cover image placeholder */}
      </div>
      
      <CardHeader className="relative pt-0 pb-2">
        <div className="flex justify-between items-start">
          <div className="-mt-12 flex flex-col gap-3">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-xl">{user.initials}</AvatarFallback>
              </Avatar>
              <div 
                className={cn(
                  "absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-background",
                  statusColors[user.status]
                )} 
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2">
            {onMessage && (
              <Button variant="outline" size="sm" onClick={onMessage}>
                Mensaje
              </Button>
            )}
            {onEdit && (
              <Button size="sm" onClick={onEdit}>
                Editar
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{user.email}</span>
          </div>
          {user.phone && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{user.phone}</span>
            </div>
          )}
          {user.company && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{user.company}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
          )}
          {user.joinDate && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Miembro desde {user.joinDate}</span>
            </div>
          )}
        </div>

        {user.tags && user.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {user.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {user.stats && (
          <div className="grid grid-cols-3 gap-4 border-t pt-4">
            {user.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-bold text-lg">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}