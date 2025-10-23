import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * A wrapper component for links that automatically tracks clicks
 * Use this for important CTAs and external links to track engagement
 */
export const TrackedLink = ({
  href,
  children,
  label,
  className,
  target,
  rel,
}: TrackedLinkProps) => {
  const handleClick = () => {
    const linkLabel = label || href;
    const isExternal = href.startsWith("http") || href.startsWith("//");

    // Track the click
    analytics.trackClick(linkLabel, href);

    // Track as external link if applicable
    if (isExternal) {
      analytics.trackEvent({
        category: "navigation",
        action: "external_link_click",
        label: linkLabel,
      });
    } else {
      analytics.trackEvent({
        category: "navigation",
        action: "internal_link_click",
        label: linkLabel,
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default TrackedLink;

