import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(date: string, withTime = false) {
  const temp = new Date(date);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = months[temp.getMonth()];
  const day = temp.getDate();
  const year = temp.getFullYear();

  if(withTime === false) {
    return `${month} ${day}, ${year}`;
  }

  let hours = temp.getHours();
  const minutes = temp.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

  return `${month} ${day}, ${year} — ${hours}:${minutes} ${ampm}`;
}
