"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  title?: string;
  content: string;
  rating: number;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  content,
  rating,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        "premium-card rounded-lg bg-card p-6 h-full",
        className
      )}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating
                ? "fill-gemstone-gold text-gemstone-gold"
                : "text-gemstone-medium-gray"
            )}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-gemstone-white/90 italic mb-6 text-sm leading-relaxed">
        "{content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {imageUrl && (
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gemstone-gold">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gemstone-white text-sm">
            {name}
          </div>
          {title && (
            <div className="text-gemstone-gold text-xs">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };