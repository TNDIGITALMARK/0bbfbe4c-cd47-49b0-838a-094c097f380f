"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  price?: string;
  location?: string;
  className?: string;
  isBeforeAfter?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  beforeImageUrl,
  afterImageUrl,
  price,
  location,
  className,
  isBeforeAfter = false,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "premium-card rounded-lg overflow-hidden bg-card p-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {isBeforeAfter && beforeImageUrl && afterImageUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={beforeImageUrl}
              alt={`${title} - Before`}
              fill
              className="object-cover transition-all duration-500"
              style={{
                clipPath: isHovered
                  ? "polygon(0 0, 30% 0, 30% 100%, 0% 100%)"
                  : "polygon(0 0, 50% 0, 50% 100%, 0% 100%)",
              }}
            />
            <Image
              src={afterImageUrl}
              alt={`${title} - After`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-between p-4">
              <span className="bg-black/60 text-white px-2 py-1 rounded text-sm">
                BEFORE
              </span>
              <span className="bg-gemstone-gold/90 text-gemstone-charcoal px-2 py-1 rounded text-sm font-semibold">
                AFTER
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-300",
              isHovered && "scale-105"
            )}
          />
        )}

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-70"
          )}
        />

        {/* Price Badge */}
        {price && (
          <div className="absolute top-4 right-4 bg-gemstone-gold text-gemstone-charcoal px-3 py-1 rounded-full text-sm font-semibold">
            {price}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-gemstone-white mb-2">
          {title}
        </h3>
        {location && (
          <p className="text-gemstone-gold text-sm font-medium mb-2">
            {location}
          </p>
        )}
        <p className="text-gemstone-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };