import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
      description:
        'The name of the event (e.g., "Punit Valves Annual Trade 2025").',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "Unique URL-friendly identifier for the event page.",
    }),
    defineField({
      name: "link",
      title: "LUMA Link",
      description: "",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "A small description of the event, highlighting key details like agenda or purpose.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
        },
      ],
      description:
        "A vibrant cover image for the event page (e.g., valve product showcase or trade show booth).",
    }),
    defineField({
      name: "dateTime",
      title: "Date and Time",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
      validation: (Rule) => Rule.required(),
      description: "The start date and time of the event.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Specify if the event is physical or virtual and provide relevant details.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "dateTime",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: date
          ? `Event on ${new Date(date).toLocaleDateString()}`
          : "No date set",
        media,
      };
    },
  },
});