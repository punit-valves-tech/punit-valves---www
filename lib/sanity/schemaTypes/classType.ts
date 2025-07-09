import { DashboardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const classType = defineType({
  name: "class",
  title: "Classification",
  type: "document",
  icon: DashboardIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
