/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { notificationQuery } from "@/lib/sanity/queries";
import { sanityClientSide } from "@/lib/sanity/client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { DotIcon } from "lucide-react";

const fetcher = sanityClientSide
  .fetch(notificationQuery)
  .then((data) => data)
  .catch((err) => err);

export const Notification = () => {
  const notification = use(fetcher);
  return <NotificationBanner notification={notification} />;
};

export const NotificationBanner = ({ notification }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const dismissed = localStorage.getItem(`notification_${notification._id}`);
    const isExpired = new Date(notification.expiryDate) < new Date();
    let isTargeted = false;

    if (
      !Boolean(notification?.targetUrls) ||
      notification?.targetUrls?.length == 0
    ) {
      isTargeted = true;
    } else {
      isTargeted = notification.targetUrls.includes(window.location.href);
    }

    if (notification.link === window.location.href) {
      isTargeted = false;
    }
    if (!dismissed && !isExpired && isTargeted) {
      setIsVisible(true);
    }
  }, [notification, pathname]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(`notification_${notification._id}`, "dismissed");
  };

  if (!isVisible) return null;

  const messageSlider = (
    <InfiniteSlider speedOnHover={50} className="w-full">
      {notification.message} <DotIcon />
    </InfiniteSlider>
  );

  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl m-auto px-4 py-2 flex justify-between items-center">
        {notification.link ? (
          <Link
            href={notification.link}
            className="flex-grow overflow-hidden mr-4"
          >
            {messageSlider}
          </Link>
        ) : (
          <p className="flex-grow overflow-hidden mr-4">{messageSlider}</p>
        )}
        <button
          onClick={handleDismiss}
          className="text-white font-bold"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
