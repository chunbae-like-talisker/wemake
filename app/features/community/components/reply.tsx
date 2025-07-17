import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  topLevel: boolean;
}

export default function Reply({
  username,
  avatarUrl,
  content,
  timestamp,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-2 items-center">
            <Link to={`/users/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/chunbae-like-talisker.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-5 items-end w-full">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button type="submit">Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="nico"
            avatarUrl="https://github.com/serranoarevalo.png"
            content="I've tried a lot of tools, but I'm not sure which one is the best."
            timestamp="12 hours ago"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
