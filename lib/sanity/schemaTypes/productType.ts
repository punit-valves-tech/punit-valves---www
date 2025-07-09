import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "class",
      type: "reference",
      validation: (rule) => rule.required(),
      to: { type: "class" },
    }),
    defineField({
      name: "desc",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: "specs",
      type: "array",
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: "label",
              type: "string"
            }),
            defineField({
              name: "value",
              type: "string"
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          }
        },
      ]
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
