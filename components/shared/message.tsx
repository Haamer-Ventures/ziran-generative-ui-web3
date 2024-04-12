"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import easy from "@/public/easy.json";
import carrot from "@/public/carrot.json";
import dragon from "@/public/dragon.json";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Different types of message bubbles.
export function UserMessage({ children }: { children: React.ReactNode }) {

  const content = typeof children === "string" ? children : "";

  return (
    <div className="group relative flex items-start md:ml-12">
      <Card className="mb-4 py-2 ring-1 ring-orange-950 ring-offset-2 bg-green-200 dark:bg-green-900">
        <CardContent>
          <div className="flex-1 space-y-2 overflow-hidden px-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="ring-1 ring-amber-950 ring-offset-2">
            <AvatarImage
              src="https://github.com/krishaamer.png"
              alt="@krishaamer"
            />
            <AvatarFallback>我</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>我自己</TooltipContent>
      </Tooltip>
    </div>
  );
}

export function BotMessage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const content = typeof children === "string" ? children : "";

  return (
    <>
      <Lottie animationData={easy} loop={true} className="tinySvg" role="img" />
      <div
        className={cn("group relative flex items-start md:-ml-12", className)}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar className="ring-1 ring-offset-2 ring-amber-950">
              <AvatarImage src="/images/avatar-2.jpg" alt="助手" />
              <AvatarFallback>助手</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>綠濾助手</TooltipContent>
        </Tooltip>
        <Card className="py-2 ring-1 ring-offset-2 ring-orange-950 bg-amber-200 dark:bg-amber-950">
          <CardContent>
            <div className="flex-1 space-y-2 overflow-hidden px-1">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <>
      <Lottie animationData={easy} loop={true} className="tinySvg" role="img" />
      <div className="group relative flex items-start md:-ml-12">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border bg-primary text-primary-foreground",
            !showAvatar && "invisible"
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="ring-1 ring-offset-2 ring-amber-950">
                <AvatarImage src="/images/avatar-2.jpg" alt="助手" />
                <AvatarFallback>助手</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>綠濾助手</TooltipContent>
          </Tooltip>
        </div>
        <Card className="py-2 ring-1 ring-offset-2 ring-orange-950 bg-amber-200	">
          <CardContent>
            <div className="flex-1 px-1">{children}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "mt-2 flex items-center justify-center gap-2 text-xs text-gray-500"
      }
    >
      <div className={"max-w-[600px] flex-initial px-2 py-2"}>{children}</div>
    </div>
  );
}
