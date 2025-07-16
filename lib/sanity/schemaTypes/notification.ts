import { defineField } from "sanity";

export const notification = {
  name: "notification",
  title: "Notification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "link", title: "Link URL", type: "url" }),
    defineField({
      name: "expiryDate",
      title: "Expiry Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetUrls",
      title: "Target URLs",
      type: "array",
      of: [{ type: "string" }],
      description:
        "URLs where the notification should appear (e.g., /, /about). Leave empty for all pages.",
    }),
  ],
};
