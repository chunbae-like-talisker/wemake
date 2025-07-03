import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface TeamCardProps {
  id: string;
  username: string;
  userAvatar: string;
  projectDescription: string;
  requiredRoles: string[];
}

export function TeamCard({
  id,
  username,
  userAvatar,
  projectDescription,
  requiredRoles,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex shadow-sm items-center text-base"
            >
              <span>@{username}</span>
              <Avatar className="size-5">
                <AvatarImage src={userAvatar} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {requiredRoles.map((role, index) => (
              <Badge key={index} className="text-base">
                {role}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
